(() => {
  'use strict';
  if (!LIVE_APP_MODE) return;
  const live = {
    capabilities: null, catalog: [], mode: 'gemini', running: false,
    events: [], evidence: new Map(), report: null, error: '', controller: null,
    generation: 0, requestVersion: 0, selectedEvidence: null,
    session: null, plot: 'waveform', manualEvidence: new Map(), computing: false,
    question: '',
  };

  function text(node, value) { element(node).textContent = value; }

  async function getJson(path, signal) {
    const response = await fetch(path, { signal, cache: 'no-store' });
    const payload = await response.json();
    if (!response.ok) throw new Error(typeof payload.detail === 'string' ? payload.detail : 'Request failed');
    return payload;
  }

  async function postJson(path, payload) {
    const response = await fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-FaultScope-CSRF': live.session?.csrf || '' }, body: JSON.stringify(payload) });
    const result = await response.json();
    if (!response.ok) throw new Error(typeof result.detail === 'string' ? result.detail : 'Request failed');
    return result;
  }

  function iconButton(id, icon, label) {
    const button = document.createElement('button'); button.id = id; button.className = 'icon-button';
    button.title = label; button.setAttribute('aria-label', label); button.innerHTML = `<i data-lucide="${icon}"></i>`;
    return button;
  }

  function addDialog(id, title, content) {
    const dialog = document.createElement('dialog'); dialog.id = id; dialog.setAttribute('aria-labelledby', `${id}-title`);
    dialog.innerHTML = `<div class="dialog-head"><h2 id="${id}-title">${title}</h2><button class="icon-button" aria-label="Close" title="Close"><i data-lucide="x"></i></button></div><div class="dialog-body">${content}</div>`;
    dialog.querySelector('button').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => { if (event.target === dialog) { const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close(); } });
    document.body.append(dialog); return dialog;
  }

  function story() {
    if (live.error) return { headline: 'The investigation did not complete.', detail: live.error, status: 'UNAVAILABLE' };
    if (!state.liveRecord) return { headline: 'Loading verified public recordings.', detail: 'No synthetic result will be substituted if the service is unavailable.', status: 'LOADING' };
    if (live.running) {
      const latest = live.events.at(-1);
      return {
        headline: live.mode === 'gemini' ? 'Investigating the measured evidence.' : 'Calculating measured evidence.',
        detail: latest?.message || (live.mode === 'gemini' ? 'Gemini is choosing bounded analysis tools.' : 'A fixed numerical review is running locally. No AI call is made.'),
        status: live.mode === 'gemini' ? 'GEMINI LIVE' : 'TOOLS RUNNING',
      };
    }
    if (live.report) return { headline: live.report.finding.title, detail: live.report.finding.summary, status: live.report.mode === 'gemini' ? 'AI REVIEW READY' : 'NUMERICAL PREVIEW' };
    return live.mode === 'gemini'
      ? { headline: 'Your recording is ready for AI investigation.', detail: 'Start one bounded Gemini run to inspect measured evidence. Each observation will cite computed data; an engineer makes the final call.', status: 'GEMINI READY' }
      : { headline: 'Your recording is ready for review.', detail: 'Run a numerical summary without a model call, or select Gemini for an evidence-linked investigation.', status: 'READY' };
  }

  function selectSensor(identifier) {
    const sensor = state.liveRecord?.channels.find(channel => channel.id === identifier);
    if (!sensor) return;
    state.liveSensor = identifier;
    live.plot = 'waveform';
    state.evidenceWindow = null;
    element('native-channel').value = identifier;
    const family = identifier.startsWith('PS') ? 'pressure' : identifier.startsWith('FS') ? 'flow' : identifier.startsWith('TS') ? 'temperature' : '';
    document.querySelectorAll('[data-channel]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.channel === family)));
    text('focus-title', `${identifier} / ${sensor.quantity}`);
    text('focus-subtitle', `${sensor.rate_hz} Hz / PHYSICAL PLACEMENT NOT VERIFIED`);
    if (state.liveRecord.profile === 'bearing') text('focus-subtitle', `${sensor.rate_hz.toLocaleString()} Hz / RECORDED UNITS / REFERENCE ASSEMBLY`);
    document.querySelectorAll('[data-plot]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.plot === live.plot)));
    drawSignal();
  }

  function nearestPreviewPoint(points, seconds) {
    let lower = 0;
    let upper = points.length - 1;
    while (lower < upper) {
      const middle = Math.floor((lower + upper) / 2);
      if (points[middle][0] < seconds) lower = middle + 1;
      else upper = middle;
    }
    if (lower > 0 && Math.abs(points[lower - 1][0] - seconds) <= Math.abs(points[lower][0] - seconds)) lower--;
    return points[lower];
  }

  function updateReplayReadings() {
    const panel = element('recorded-replay');
    if (!panel) return;
    const recording = state.liveRecord;
    panel.hidden = !recording;
    if (!recording) return;
    const bearing = recording.profile === 'bearing';
    const identifiers = bearing ? ['VIB_RAW', 'ENC_RAW'] : ['PS1', 'FS1', 'TS1'];
    const signature = `${recording.id}:${identifiers.join(',')}`;
    const readouts = element('replay-readings');
    if (readouts.dataset.signature !== signature) {
      readouts.replaceChildren();
      for (const identifier of identifiers) {
        const channel = recording.channels.find(item => item.id === identifier);
        if (!channel) continue;
        const button = document.createElement('button');
        button.type = 'button'; button.className = 'replay-reading'; button.dataset.sensor = identifier;
        button.setAttribute('aria-pressed', String(state.liveSensor === identifier));
        const label = document.createElement('span'); label.className = 'reading-channel'; label.textContent = `${identifier} / ${channel.quantity}`;
        const value = document.createElement('span'); value.className = 'reading-value';
        button.append(label, value);
        button.addEventListener('click', () => selectSensor(identifier));
        readouts.append(button);
      }
      readouts.dataset.signature = signature;
    }
    text('replay-clock', `00:${state.seconds.toFixed(2).padStart(5, '0')} / ${recording.duration_s.toFixed(1)} s`);
    for (const button of readouts.querySelectorAll('[data-sensor]')) {
      const channel = recording.channels.find(item => item.id === button.dataset.sensor);
      const [sampleTime, value] = nearestPreviewPoint(channel.points, state.seconds);
      button.setAttribute('aria-pressed', String(state.liveSensor === channel.id));
      button.querySelector('.reading-value').textContent = value === null
        ? `MISSING / ${sampleTime.toFixed(2)} s`
        : `${channel.unit === 'recorded units' ? value.toPrecision(4) : value.toFixed(channel.unit === 'L/min' ? 2 : 1)} ${channel.unit} / ${sampleTime.toFixed(2)} s`;
    }
    const flow = recording.channels.find(channel => channel.id === 'FS1');
    if (flow) {
      const [, value] = nearestPreviewPoint(flow.points, state.seconds);
      const range = flow.statistics.max - flow.statistics.min;
      state.recordedFlowRatio = value === null || range <= 0 ? 0 : Math.max(0, Math.min(1, (value - flow.statistics.min) / range));
      text('replay-note', 'Tracer speed follows FS1 relative to this recording’s flow range. Illustrative only; not a calibrated fluid simulation.');
    } else if (bearing) {
      const vibration = recording.channels.find(channel => channel.id === 'VIB_RAW');
      const [, value] = nearestPreviewPoint(vibration.points, state.seconds);
      const peak = Math.max(Math.abs(vibration.statistics.min), Math.abs(vibration.statistics.max));
      state.recordedVibrationRatio = value === null || peak <= 0 ? 0 : Math.min(1, Math.abs(value) / peak);
      text('replay-note', 'VIB_RAW is recorded units only; the shaft animation is illustrative and the encoder is not calibrated RPM.');
    }
  }

  function focusEvidence(evidence) {
    selectSensor(evidence.source.channel);
    state.evidenceWindow = { channel: evidence.source.channel, start: evidence.source.window_s[0], end: evidence.source.window_s[1] };
    element('native-channel').value = state.liveSensor;
    text('focus-title', `${state.liveSensor} / ${evidence.tool.replaceAll('_', ' ')}`);
    text('focus-subtitle', `${evidence.source.window_s.join(' - ')} SECONDS / ${evidence.id}`);
    if (state.liveRecord.profile === 'bearing') state.focus = evidence.source.channel === 'ENC_RAW' ? 'encoder' : 'bearing';
    if (evidence.tool === 'spectral_summary') live.plot = 'spectrum';
    document.querySelectorAll('[data-plot]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.plot === live.plot)));
    drawSignal();
  }

  function render() {
    const current = story();
    text('agent-headline', current.headline);
    text('agent-description', current.detail);
    text('agent-state', current.status);
    text('event-number', `${live.evidence.size} EVIDENCE ITEMS`);
    const identifier = live.report?.id || live.events[0]?.investigation_id;
    document.querySelector('.agent-event').firstChild.textContent = identifier ? 'INVESTIGATION ' + identifier.slice(0, 8).toUpperCase() : 'NEW INVESTIGATION';
    const label = element('about-open');
    label.textContent = 'How it works';
    label.setAttribute('aria-label', 'How this workspace works');
    label.title = 'Explain recording profiles, evidence and live investigation';
    element('analysis-progress').style.width = live.running ? '45%' : live.report ? '100%' : '0%';
    const list = element('task-list');
    list.replaceChildren();
    const entries = [...live.evidence.values()];
    entries.forEach(evidence => {
      const item = document.createElement('li');
      item.className = 'done';
      const button = document.createElement('button');
      button.className = 'live-task';
      button.textContent = `${evidence.source.channel} / ${evidence.tool.replaceAll('_', ' ')}${live.manualEvidence.has(evidence.id) ? ' / reviewer' : ''}`;
      button.title = `${evidence.source.window_s.join('-')} seconds. Open computed evidence.`;
      button.addEventListener('click', () => { live.selectedEvidence = evidence.id; showEvidence(); openDialog('evidence-dialog'); focusEvidence(evidence); });
      item.append(button); list.append(item);
    });
    if (!entries.length) {
      const item = document.createElement('li');
      item.textContent = live.running ? 'Waiting for computed evidence...' : 'No analysis results yet.';
      list.append(item);
    }
    text('finding-label', 'Evidence & interpretation');
    text('hypothesis-one', 'Source-linked results');
    text('result-one', String(live.evidence.size));
    text('hypothesis-two', 'Component diagnosis');
    text('result-two', 'NOT ESTABLISHED');
    element('result-two').classList.add('caution');
    element('challenge').disabled = live.running || !live.report || live.report.mode !== 'gemini';
    element('challenge').querySelector('span').textContent = live.report?.mode === 'gemini' ? 'Challenge finding' : 'AI challenge unavailable';
    element('agent-run').disabled = live.running || !state.liveRecord || (live.mode === 'gemini' && !live.capabilities.gemini.enabled) || (live.mode === 'gemini' && live.capabilities.gemini.runs_used >= live.capabilities.gemini.lifetime_run_limit);
    element('agent-run').setAttribute('aria-label', live.mode === 'gemini' ? 'Start Gemini investigation' : 'Run numerical review');
    element('agent-run').querySelector('span').textContent = live.mode === 'gemini' ? 'Start AI investigation' : 'Run numerical review';
    const remainingRuns = Math.max(0, live.capabilities.gemini.lifetime_run_limit - live.capabilities.gemini.runs_used);
    text('live-guidance', live.mode === 'gemini'
      ? `${remainingRuns} shared AI run${remainingRuns === 1 ? '' : 's'} remain. Credit coverage is unconfirmed; the INR 100 gross-usage alert is not a hard cap.`
      : 'Numerical review uses measured data only and makes no model call.');
    element('agent-stop').disabled = !live.running;
    element('analysis-mode').disabled = live.running;
    element('report-open').disabled = !live.report;
    text('mode-footer', live.mode === 'gemini' ? 'GEMINI 2.5 FLASH / EVIDENCE-LINKED / ENGINEER REVIEW REQUIRED' : 'PUBLIC RECORDING / MEASURED EVIDENCE / NO AI CALLS');
    document.querySelector('.agent').setAttribute('aria-busy', String(live.running));
    element('question-box').hidden = live.mode !== 'gemini';
    const focusWindow = state.evidenceWindow || { start: Number(element('window-start')?.value || 0), end: Number(element('window-end')?.value || state.liveRecord?.duration_s || 0) };
    text('question-context', `${state.liveRecord?.profile === 'bearing' ? 'Bearing test rig' : 'Hydraulic test rig'} / ${state.liveSensor || 'no channel'} / ${focusWindow.start.toFixed(1)}-${focusWindow.end.toFixed(1)} s / ${state.focus || 'no component focus'} / archived recording`);
    element('ask-investigation').disabled = live.running || !state.liveRecord || live.capabilities.gemini.runs_used >= live.capabilities.gemini.lifetime_run_limit;
    element('ask-investigation').querySelector('span').textContent = `Investigate (${Math.max(0, live.capabilities.gemini.lifetime_run_limit - live.capabilities.gemini.runs_used)} runs left)`;
  }

  function showEvidence() {
    text('evidence-context', 'Computed from original native-rate samples. These measurements do not establish a causal diagnosis.');
    const list = element('evidence-lines'); list.replaceChildren();
    for (const evidence of live.evidence.values()) {
      const item = document.createElement('li');
      const heading = document.createElement('strong');
      heading.textContent = `${evidence.source.channel} / ${evidence.tool.replaceAll('_', ' ')}`;
      const metadata = document.createElement('p');
      metadata.textContent = `${evidence.id} | ${evidence.source.window_s.join('-')} s | ${evidence.source.rate_hz} Hz`;
      const details = document.createElement('pre'); details.className = 'evidence-value';
      const { spectrum, ...summary } = evidence.result;
      details.textContent = JSON.stringify(summary, null, 2);
      const button = document.createElement('button'); button.className = 'text-button'; button.textContent = 'Locate measured window';
      button.addEventListener('click', () => { focusEvidence(evidence); element('evidence-dialog').close(); });
      item.append(heading, metadata, details, button); list.append(item);
      if (evidence.id === live.selectedEvidence) item.style.background = '#e6eee6';
    }
    if (!live.evidence.size) list.textContent = 'No computed evidence is available yet.';
  }

  function exportData() {
    if (!live.report) throw new Error('No completed investigation is available');
    return { ...live.report, manual_evidence: [...live.manualEvidence.values()], reviewer_note: element('review-note').value, reviewed: element('reviewed').checked };
  }

  function showReport() {
    if (!live.report) { notify('Finish an investigation before exporting a brief.'); return; }
    const report = live.report;
    text('report-status', report.finding.disposition.toUpperCase().replaceAll('_', ' '));
    text('report-title', report.finding.title);
    text('report-source', report.recording_id);
    text('report-mode', report.mode === 'gemini' ? 'Live Gemini / review required' : 'Numerical tools / no AI');
    element('report-body').replaceChildren(document.createTextNode(report.finding.summary));
    if (report.question) {
      const question = document.createElement('span'); question.className = 'live-observation';
      question.textContent = `Engineer question: ${report.question}`;
      element('report-body').append(question);
    }
    if (report.view_context?.window_s) {
      const context = document.createElement('span'); context.className = 'live-observation';
      context.textContent = `Selected view: ${report.view_context.component || 'no component'} / ${report.view_context.channel || 'no channel'} / ${report.view_context.window_s.join('-')} s. Archived recording; not a live equipment connection.`;
      element('report-body').append(context);
    }
    report.finding.observations.forEach(observation => {
      const line = document.createElement('span'); line.className = 'live-observation';
      line.textContent = `${observation.text} [${observation.evidence_ids.join(', ')}]`;
      element('report-body').append(line);
    });
    const limits = document.createElement('span'); limits.className = 'live-observation';
    limits.textContent = 'Unresolved: ' + report.finding.uncertainties.join('; ');
    element('report-body').append(limits);
    text('export-status', '');
    element('review-note').value = report.review?.notes || '';
    element('reviewed').checked = report.review?.decision === 'reviewed';
    element('reviewer-name').value = report.review?.reviewer || '';
    element('review-decision').value = report.review?.decision || 'needs_follow_up';
    openDialog('report-dialog');
  }

  function handleEvent(event) {
    live.events.push(event);
    if (event.type === 'tool_requested') {
      event.message = `${event.tool.replaceAll('_', ' ')} requested for ${event.arguments.channel || 'the recording'}.`;
    }
    if (event.type === 'evidence') {
      live.evidence.set(event.evidence.id, event.evidence);
      focusEvidence(event.evidence);
    }
    if (event.type === 'completed') { live.report = event.report; live.running = false; }
    if (event.type === 'error') { live.error = `${event.message} (${event.code})`; live.running = false; live.report = null; }
    render();
  }

  async function investigate(challenge = false, question = '') {
    if (!state.liveRecord || live.running) return;
    const parent = challenge ? live.report?.id : null;
    if (challenge && (!parent || live.mode !== 'gemini')) return;
    live.controller?.abort();
    const controller = new AbortController(); live.controller = controller;
    const generation = live.generation;
    const requestVersion = ++live.requestVersion;
    live.running = true; live.error = ''; live.report = null; live.events = []; live.evidence.clear(); live.manualEvidence.clear(); live.selectedEvidence = null;
    element('review-note').value = ''; element('reviewed').checked = false;
    render();
    const timer = setTimeout(() => controller.abort(), 150000);
    try {
      const response = await fetch('/api/investigations', {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'X-FaultScope-CSRF': live.session?.csrf || '' }, signal: controller.signal,
        body: JSON.stringify({
          recording_id: state.liveRecord.id,
          mode: live.mode,
          challenge_of: parent,
          question: question || undefined,
          focus_component: state.focus || undefined,
          focus_channel: state.liveSensor || undefined,
          window_start_s: Number(element('window-start').value),
          window_end_s: Number(element('window-end').value),
        }),
      });
      if (!response.ok) { const error = await response.json(); throw new Error(error.detail || 'Investigation request failed'); }
      if (!response.body) throw new Error('Streaming is unavailable in this browser');
      const reader = response.body.getReader(); const decoder = new TextDecoder(); let pending = '';
      while (true) {
        const chunk = await reader.read();
        if (generation !== live.generation || requestVersion !== live.requestVersion) { await reader.cancel(); return; }
        pending += decoder.decode(chunk.value || new Uint8Array(), { stream: !chunk.done });
        let boundary;
        while ((boundary = pending.indexOf('\n\n')) !== -1) {
          const frame = pending.slice(0, boundary); pending = pending.slice(boundary + 2);
          const data = frame.split('\n').filter(line => line.startsWith('data: ')).map(line => line.slice(6)).join('\n');
          if (data) handleEvent(JSON.parse(data));
        }
        if (chunk.done) break;
      }
      if (!live.report && !live.error) throw new Error('The stream ended before a completed report');
    } catch (error) {
      if (generation !== live.generation || requestVersion !== live.requestVersion) return;
      live.error = error.name === 'AbortError' ? 'Investigation cancelled or timed out. No complete finding is available.' : error.message;
      live.report = null;
    } finally {
      clearTimeout(timer);
      if (generation === live.generation && requestVersion === live.requestVersion) { live.running = false; render(); }
    }
  }

  async function openRecording(identifier, autoReview = true) {
    live.controller?.abort(); live.requestVersion++;
    const generation = ++live.generation;
    live.running = false; live.report = null; live.error = ''; live.events = []; live.evidence.clear(); live.manualEvidence.clear(); live.plot = 'waveform';
    state.liveRecord = null; state.record = null; state.playing = false;
    render();
    try {
      const recording = await getJson('/api/recordings/' + encodeURIComponent(identifier));
      if (generation !== live.generation) return;
      state.liveRecord = recording; state.liveSensor = recording.channels[0].id; state.seconds = 0; state.focus = null; state.evidenceWindow = null;
      state.imported = true; state.challenged = false; state.challenging = false;
      state.flowPhase = 0;
      element('engineer-question').value = '';
      element('question-box').open = false;
      text('source-name', recording.name);
      const bearing = recording.profile === 'bearing';
      text('source-meta', `${bearing ? 'Ottawa bearing rig' : 'UCI hydraulic rig'} / ${recording.channels.length} channels / ${recording.duration_s} s / CC BY 4.0`);
      element('equipment-profile').value = recording.profile;
      document.querySelector('.stage-heading h1').textContent = bearing ? 'Bearing test rig' : 'Hydraulic system';
      document.querySelector('.stage-heading .eyebrow').textContent = bearing ? 'REFERENCE ASSEMBLY / ROT-01' : 'REFERENCE ASSEMBLY / HYD-01';
      document.querySelector('.stage-heading p').textContent = bearing ? 'Source-informed geometry / illustrative rotation, not RPM.' : 'Reference geometry / physical sensor placement unverified.';
      document.querySelector('.coordinate').textContent = bearing ? '2 NATIVE CHANNELS / 200 kHz' : '14 NATIVE CHANNELS / 1-100 Hz';
      document.querySelector('.channel-controls').hidden = bearing;
      const sourceLink = document.querySelector('.statusbar a'); sourceLink.href = 'https://doi.org/' + recording.source.doi;
      sourceLink.textContent = bearing ? 'Ottawa bearing dataset / CC BY 4.0' : 'UCI hydraulic dataset / CC BY 4.0';
      element('window-start').value = 0; element('window-end').value = recording.duration_s;
      element('window-start').max = recording.duration_s; element('window-end').max = recording.duration_s;
      const other = element('other-channel'); other.replaceChildren();
      recording.channels.forEach(channel => other.append(new Option(channel.id, channel.id)));
      other.selectedIndex = Math.min(1, other.options.length - 1);
      element('scrubber').max = recording.duration_s;
      const selector = element('native-channel'); selector.replaceChildren();
      recording.channels.forEach(channel => { const option = document.createElement('option'); option.value = channel.id; option.textContent = `${channel.id} / ${channel.quantity}`; selector.append(option); });
      document.querySelectorAll('[data-component]').forEach(button => { button.setAttribute('aria-pressed', 'false'); button.classList.remove('attention'); });
      text('focus-title', 'Native sensor evidence'); text('focus-subtitle', 'PHYSICAL SENSOR PLACEMENT NOT VERIFIED');
      selectSensor(recording.channels[0].id); setPlaying(true); render(); sceneView?.resize();
      if (autoReview) {
        const selectedMode = live.mode;
        if (selectedMode === 'gemini') { live.mode = 'tools'; element('analysis-mode').value = 'tools'; }
        await investigate();
        live.mode = selectedMode;
        element('analysis-mode').value = selectedMode;
        render();
      }
    } catch (error) {
      if (generation !== live.generation) return;
      live.error = error.message; render();
    }
  }

  function buildControls() {
    document.body.classList.add('real-workspace');
    document.querySelector('.workspace-name').textContent = 'TorqueShift / investigation lab';
    document.querySelector('.agent-brand').lastChild.textContent = 'FaultScope analysis';
    element('import-open').hidden = true;
    element('casebook-open').querySelector('span').textContent = 'Recordings';
    element('casebook-open').setAttribute('aria-label', 'Choose public recording');
    element('casebook-open').title = 'Choose public recording';
    text('casebook-title', 'Verified public recordings');
    const body = document.querySelector('#casebook-dialog .dialog-body'); body.replaceChildren();
    const provenance = document.createElement('p'); provenance.textContent = 'Public experimental recordings / checksum-verified / development examples, not a diagnostic benchmark.'; body.append(provenance);
    const search = document.createElement('input'); search.type = 'search'; search.className = 'recording-search'; search.placeholder = 'Search recordings'; search.setAttribute('aria-label', 'Search recordings'); body.append(search);
    let previousProfile = '';
    live.catalog.forEach(recording => {
      if (previousProfile !== recording.profile) { const heading = document.createElement('h3'); heading.className = 'library-group'; heading.textContent = recording.profile === 'bearing' ? 'ROTATING EQUIPMENT / OTTAWA' : 'HYDRAULIC SYSTEM / UCI'; body.append(heading); previousProfile = recording.profile; }
      const button = document.createElement('button'); button.className = 'case-row'; button.dataset.recording = recording.id;
      const icon = document.createElement('span'); icon.className = 'case-art'; icon.innerHTML = '<i data-lucide="file-chart-column"></i>';
      const details = document.createElement('span'); const title = document.createElement('strong'); title.textContent = recording.name;
      const description = document.createElement('small'); description.textContent = `${recording.channels} channels / ${recording.duration_s} s / ${recording.id}`;
      details.append(title, description); button.append(icon, details);
      button.addEventListener('click', () => { element('casebook-dialog').close(); openRecording(recording.id); }); body.append(button);
    });
    search.addEventListener('input', () => body.querySelectorAll('[data-recording]').forEach(button => { button.hidden = !button.textContent.toLowerCase().includes(search.value.toLowerCase()); }));
    const controls = document.createElement('div'); controls.className = 'live-controls';
    const selector = document.createElement('select'); selector.id = 'analysis-mode'; selector.setAttribute('aria-label', 'Investigation mode');
    selector.append(new Option(live.capabilities.gemini.enabled ? 'Gemini live agent' : 'Gemini not configured', 'gemini'), new Option('Numerical review / no AI', 'tools'));
    selector.value = live.capabilities.gemini.enabled ? 'gemini' : 'tools';
    live.mode = selector.value;
    selector.options[0].disabled = !live.capabilities.gemini.enabled;
    selector.title = live.capabilities.gemini.reason;
    const run = document.createElement('button'); run.id = 'agent-run'; run.className = 'button primary live-run'; run.title = 'Start one bounded evidence-linked investigation'; run.setAttribute('aria-label', 'Start Gemini investigation'); run.innerHTML = '<i data-lucide="play"></i><span>Start AI investigation</span>';
    const stop = document.createElement('button'); stop.id = 'agent-stop'; stop.className = 'icon-button'; stop.title = 'Cancel investigation'; stop.setAttribute('aria-label', 'Cancel investigation'); stop.innerHTML = '<i data-lucide="square"></i>';
    selector.addEventListener('change', () => { live.mode = selector.value; live.report = null; live.error = ''; live.evidence.clear(); live.events = []; render(); });
    run.addEventListener('click', () => investigate()); stop.addEventListener('click', () => live.controller?.abort());
    controls.append(selector, run, stop); document.querySelector('.agent-top').after(controls);
    const questionBox = element('question-box');
    questionBox.hidden = !live.capabilities.gemini.enabled;
    questionBox.addEventListener('toggle', () => { if (questionBox.open) element('engineer-question').focus(); });
    questionBox.querySelectorAll('.question-prompt').forEach(button => button.addEventListener('click', () => { element('engineer-question').value = button.textContent === 'Explain this signal change' ? `Explain the measured ${state.liveSensor} pattern in this selected window. Compare it with the other recorded channels; do not infer a component cause without evidence.` : button.textContent === 'What contradicts this pattern?' ? `Check whether other measured channels in this window support or contradict the ${state.liveSensor} pattern.` : `What is not measured here, and what component-level conclusions should be withheld?`; element('engineer-question').focus(); }));
    element('engineer-question-form').addEventListener('submit', event => {
      event.preventDefault(); live.question = element('engineer-question').value.trim();
      if (!live.question) { element('engineer-question').focus(); return; }
      live.mode = 'gemini'; element('analysis-mode').value = 'gemini';
      render(); investigate(false, live.question);
    });
    element('engineer-question-form').addEventListener('submit', event => { event.preventDefault(); live.question = element('engineer-question').value.trim(); if (!live.question) { element('engineer-question').focus(); return; } investigate(false, live.question); });
    icons();
    const guidance = document.createElement('p'); guidance.id = 'live-guidance'; guidance.className = 'live-guidance'; controls.after(guidance);
    const sensor = document.createElement('select'); sensor.id = 'native-channel'; sensor.className = 'sensor-select'; sensor.setAttribute('aria-label', 'Native sensor channel');
    sensor.addEventListener('change', () => selectSensor(sensor.value));
    document.querySelector('.chart-meta').append(sensor);
    element('challenge').addEventListener('click', () => investigate(true));
    element('replay').title = 'Replay recording without rerunning analysis';
    element('replay').setAttribute('aria-label', 'Replay recording');
    document.querySelector('.stage-heading p').textContent = 'Reference assembly / sensor placement not verified.';
    buildWorkspaceTools();
    document.querySelector('#about-dialog .dialog-body').replaceChildren();
    for (const [heading, description] of [
      ['1 / Choose equipment', 'Select a hydraulic or bearing profile and public recording. Choose any channel to see its measured trace.'],
      ['2 / Start an investigation', 'Gemini is selected by default. Start AI investigation requests a bounded evidence review; numerical review is the no-model alternative.'],
      ['3 / Inspect evidence', 'Open an evidence item to see the source channel and time window. Findings cite measured results; component diagnosis is not established.'],
      ['4 / Review the brief', 'Save an engineer decision and export JSON or print. No equipment command is sent.'],
      ['Data and costs', 'Public experimental development recordings; illustrative assemblies. Ten shared lifetime AI runs. Credit eligibility is unconfirmed and the INR 100 gross-spend budget is an alert, not a cap.'],
    ]) { const node = document.createElement('p'); const title = document.createElement('strong'); title.textContent = heading; const body = document.createElement('span'); body.textContent = description; node.append(title, document.createElement('br'), body); document.querySelector('#about-dialog .dialog-body').append(node); }
    icons();
  }

  function buildWorkspaceTools() {
    const profile = document.createElement('select'); profile.id = 'equipment-profile'; profile.setAttribute('aria-label', 'Equipment profile');
    for (const type of [...new Set(live.catalog.map(record => record.profile))]) profile.append(new Option(type === 'bearing' ? 'Bearing test rig' : 'Hydraulic system', type));
    profile.addEventListener('change', () => openRecording(live.catalog.find(record => record.profile === profile.value).id));
    document.querySelector('.sourcebar .run-status').before(profile);

    const historyButton = iconButton('history-open', 'history', 'Investigation history');
    element('report-open').before(historyButton);
    addDialog('history-dialog', 'Investigation history', '<div id="history-list"></div>');
    historyButton.addEventListener('click', showHistory);

    const plots = document.createElement('div'); plots.className = 'plot-controls';
    for (const [view, icon, label] of [['waveform', 'activity', 'Time waveform'], ['spectrum', 'chart-no-axes-column-increasing', 'Power spectrum']]) {
      const button = iconButton('plot-' + view, icon, label); button.dataset.plot = view; button.setAttribute('aria-pressed', String(view === 'waveform'));
      button.addEventListener('click', async () => { if (view === 'spectrum' && !spectralEvidence()) await manualAnalysis('spectral_summary'); live.plot = view; document.querySelectorAll('[data-plot]').forEach(item => item.setAttribute('aria-pressed', String(item.dataset.plot === view))); drawSignal(); }); plots.append(button);
    }
    document.querySelector('.telemetry-top').append(plots);
    const windows = document.createElement('div'); windows.className = 'window-tools';
    windows.innerHTML = '<label>From <input id="window-start" type="number" min="0" value="0" step="0.01" aria-label="Analysis window start in seconds"></label><label>To <input id="window-end" type="number" min="0.01" value="60" step="0.01" aria-label="Analysis window end in seconds"></label><select id="manual-tool" class="sensor-select" aria-label="Evidence tool"><option value="summarize_signal">Window statistics</option><option value="compare_windows">Compare halves</option><option value="compare_channels">Cross-channel</option><option value="spectral_summary">Power spectrum</option><option value="transient_summary">Transient statistics</option></select><select id="other-channel" class="sensor-select" aria-label="Comparison channel" hidden></select>';
    const calculate = iconButton('calculate-evidence', 'calculator', 'Calculate selected evidence'); calculate.addEventListener('click', () => manualAnalysis()); windows.append(calculate);
    document.querySelector('.playback').after(windows);
    element('manual-tool').addEventListener('change', () => { element('other-channel').hidden = element('manual-tool').value !== 'compare_channels'; });

    const review = document.createElement('div'); review.className = 'review-toolbar';
    review.innerHTML = '<input id="reviewer-name" class="reviewer-input" maxlength="80" placeholder="Reviewer name (optional)" aria-label="Reviewer name"><select id="review-decision" class="review-decision" aria-label="Review decision"><option value="needs_follow_up">Needs follow-up</option><option value="reviewed">Evidence reviewed</option><option value="rejected">Interpretation rejected</option></select>';
    const save = iconButton('save-review', 'save', 'Save review decision'); save.addEventListener('click', saveReview); review.append(save);
    element('review-note').before(review);
    document.querySelector('.review-check').lastChild.textContent = 'Evidence reviewed. No equipment operation or repair is authorized.';
    const print = iconButton('print-report', 'printer', 'Print or save PDF');
    print.addEventListener('click', () => { let note = element('print-review'); if (!note) { note = document.createElement('p'); note.id = 'print-review'; element('report-body').after(note); } note.textContent = 'Reviewer: ' + (element('reviewer-name').value || 'Not specified') + '. ' + element('review-decision').selectedOptions[0].textContent + '. ' + element('review-note').value; window.print(); });
    element('download-report').before(print);
    const csv = iconButton('export-preview', 'file-spreadsheet', 'Export displayed waveform CSV');
    csv.addEventListener('click', () => { const channel = state.liveRecord?.channels.find(item => item.id === state.liveSensor); if (!channel) return; const rows = ['time_s,displayed_value,unit,native_rate_hz', ...channel.points.map(point => `${point[0]},${point[1]},${channel.unit},${channel.rate_hz}`)]; download(`${state.liveRecord.id}-${channel.id}-minmax-preview.csv`, rows.join('\n'), 'text/csv'); });
    plots.append(csv); element('view-pressure').hidden = true;
  }

  async function saveReview() {
    if (!live.report) return;
    element('save-review').disabled = true;
    try { const result = await postJson('/api/investigations/' + live.report.id + '/review', { decision: element('review-decision').value, reviewer: element('reviewer-name').value, notes: element('review-note').value }); live.report.review = result.review; element('reviewed').checked = result.review.decision === 'reviewed'; text('export-status', 'Review saved with this investigation.'); }
    catch (error) { text('export-status', error.message); } finally { element('save-review').disabled = false; }
  }

  async function showHistory() {
    openDialog('history-dialog'); const list = element('history-list'); list.textContent = 'Loading investigations...';
    try {
      const result = await getJson('/api/investigations'); list.replaceChildren();
      if (!result.investigations.length) { list.textContent = 'No investigations in this browser session.'; return; }
      for (const item of result.investigations) {
        const button = document.createElement('button'); button.className = 'case-row'; button.disabled = item.status !== 'completed';
        const details = document.createElement('span'); const title = document.createElement('strong'); title.textContent = item.title;
        const metadata = document.createElement('small'); metadata.textContent = `${new Date(item.created * 1000).toLocaleString()} / ${item.mode} / ${item.status} / ${item.review?.decision || 'not reviewed'}`;
        details.append(title, metadata); button.append(details); list.append(button);
        button.addEventListener('click', async () => { button.disabled = true; try { const report = await getJson('/api/investigations/' + item.id); element('history-dialog').close(); await openRecording(report.recording_id, false); live.report = report; live.mode = report.mode; element('analysis-mode').value = report.mode; live.evidence = new Map(report.evidence.map(evidence => [evidence.id, evidence])); render(); showReport(); } catch (error) { notify(error.message); } finally { button.disabled = false; } });
      }
    } catch (error) { list.textContent = error.message; }
  }

  async function manualAnalysis(tool = element('manual-tool').value) {
    if (!state.liveRecord || live.computing) return;
    const generation = live.generation; const recording = state.liveRecord; const channel = state.liveSensor;
    const arguments_ = { channel, start_s: Number(element('window-start').value), end_s: Number(element('window-end').value) };
    if (tool === 'compare_channels') arguments_.other_channel = element('other-channel').value;
    if (tool === 'compare_windows') { arguments_.reference_start_s = arguments_.start_s; arguments_.reference_end_s = (arguments_.start_s + arguments_.end_s) / 2; arguments_.start_s = arguments_.reference_end_s; }
    live.computing = true; element('calculate-evidence').disabled = true;
    try {
      const result = await postJson('/api/evidence', { recording_id: recording.id, tool, arguments: arguments_ });
      if (generation !== live.generation) return;
      live.manualEvidence.set(result.evidence.id, result.evidence); live.evidence.set(result.evidence.id, result.evidence); focusEvidence(result.evidence); render();
      notify('Measured evidence added: ' + tool.replaceAll('_', ' '));
    } catch (error) { if (generation === live.generation) notify(error.message); }
    finally { live.computing = false; element('calculate-evidence').disabled = false; }
  }

  function spectralEvidence() { return [...live.evidence.values()].reverse().find(evidence => evidence.tool === 'spectral_summary' && evidence.source.channel === state.liveSensor); }

  function drawSpectrum() {
    if (live.plot !== 'spectrum' || !state.liveRecord) return false;
    const canvas = element('signal-canvas'); const width = canvas.clientWidth, height = canvas.clientHeight;
    if (!width || !height) return true;
    const ratio = Math.min(devicePixelRatio || 1, 2); canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
    const context = canvas.getContext('2d'); context.setTransform(ratio, 0, 0, ratio, 0, 0); context.clearRect(0, 0, width, height);
    const evidence = spectralEvidence();
    text('play-time', formatTime(state.seconds)); element('scrubber').value = state.seconds;
    if (!evidence) { context.fillStyle = '#c1d4c5'; context.font = '11px monospace'; context.fillText('No spectral evidence for this channel.', 8, height / 2); text('chart-reading', '--'); text('chart-range', 'SPECTRUM UNAVAILABLE'); return true; }
    const points = evidence.result.spectrum; const peak = Math.max(...points.map(point => point[1]), 1e-24); const maximumFrequency = points.at(-1)[0];
    context.strokeStyle = '#405447'; context.lineWidth = .7;
    for (let grid = 1; grid < 4; grid++) { context.beginPath(); context.moveTo(0, grid * height / 4); context.lineTo(width, grid * height / 4); context.stroke(); }
    context.beginPath(); context.strokeStyle = '#92dce2'; context.lineWidth = 1.6;
    points.forEach((point, index) => { const horizontal = point[0] / maximumFrequency * width; const relative = Math.max(-80, 10 * Math.log10(Math.max(point[1] / peak, 1e-8))); const vertical = -relative / 80 * (height - 6) + 3; if (index === 0) context.moveTo(horizontal, vertical); else context.lineTo(horizontal, vertical); }); context.stroke();
    const frequency = evidence.result.peaks[0]?.frequency_hz;
    element('chart-reading').textContent = frequency === undefined ? 'No isolated peak' : `${frequency.toLocaleString(undefined, { maximumFractionDigits: 2 })} Hz`;
    text('chart-range', `${state.liveSensor} / WELCH PSD / RELATIVE dB`); text('chart-window', maximumFrequency >= 1000 ? `0 - ${(maximumFrequency / 1000).toLocaleString()} kHz` : `0 - ${maximumFrequency} Hz`);
    text('chart-summary', 'Welch spectrum from native-rate measurements. Dominant spectral peak is not a defect classification.');
    return true;
  }

  window.faultscopeLive = { story, render, evidence: showEvidence, report: showReport, exportData, selectSensor, drawSpectrum, updateReplayReadings };
  async function start() {
    text('source-name', 'Loading verified recordings...');
    text('source-meta', 'Connecting to the local recording service');
    text('agent-headline', 'Connecting the evidence.');
    text('agent-description', 'Loading real public measurements. No synthetic fallback.');
    text('chart-reading', '--'); text('chart-range', 'AWAITING RECORDING');
    text('chart-summary', 'No measured recording loaded yet.');
    element('challenge').disabled = true; element('report-open').disabled = true;
    try {
      const [capabilities, catalog, session] = await Promise.all([getJson('/api/capabilities'), getJson('/api/recordings'), getJson('/api/session')]);
      live.capabilities = capabilities; live.catalog = catalog.recordings; live.session = session;
      if (!live.catalog.length) throw new Error('No prepared recordings are available.');
      buildControls(); await openRecording(live.catalog[0].id);
    } catch (error) {
      text('agent-headline', 'The recording service is unavailable.');
      text('agent-description', error.message);
      text('agent-state', 'UNAVAILABLE'); text('mode-footer', 'SERVICE ERROR / NO AI OR SYNTHETIC FALLBACK');
    }
  }
  start();
})();