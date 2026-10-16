import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Activity, AlertTriangle, ArrowDownToLine, ArrowRight, Box, Check, ChevronDown, CircleHelp, Clock3, Cloud, Compass, Database, Menu, Pause, Play, RotateCcw, Search, Send, ShieldCheck, Sparkles, Upload, Workflow, X } from 'lucide-react';
import EquipmentScene from './EquipmentScene.jsx';

const API = '/api';
const API_LIMIT_BYTES = 8_000_000;
const ABOUT_TABS = [
  { id: 'overview', label: 'Welcome' },
  { id: 'demo', label: 'Demo guide' },
  { id: 'services', label: 'Google Cloud stack' },
];

const DEMO_GUIDES = {
  hydraulic: {
    title: 'What changed in this test cycle?',
    scenario: 'An engineer is reviewing a completed hydraulic test before a maintenance discussion. Compare the start and end, cross-check the change, and prepare an evidence-backed handover.',
    recommended: 'Public recording 01',
    steps: [
      { title: 'Compare the start and end', prompt: 'Compare PS1 pressure in 0-10 s versus 50-60 s. What changed? Give the measured values and cite the evidence. Do not diagnose a fault.', expect: 'A pressure-window comparison, native units and clickable evidence citations.' },
      { title: 'Challenge the explanation', prompt: 'Does FS1 flow support that interpretation over the same 0-10 s and 50-60 s windows? Explain any disagreement and what cannot be concluded.', expect: 'A flow cross-check that supports or challenges the earlier observation, without claiming causality.' },
      { title: 'Prepare the engineering handover', prompt: 'Summarize our findings so far in plain language for an engineer. Separate measured observations, uncertainties and missing evidence. Do not recommend repairs or declare the machine safe.', expect: 'A concise recap grounded in the conversation, with explicit limits on the conclusions.' },
    ],
  },
  bearing: {
    title: 'What stands out in this vibration?',
    scenario: 'An engineer is reviewing a recorded bearing test. Describe the vibration, examine its spectrum and transients, then identify what still needs speed or calibration data.',
    recommended: 'Bearing recording 01',
    steps: [
      { title: 'Describe the recorded vibration', prompt: 'Summarize VIB_RAW over 0-10 s, including RMS and variability. Cite the measured evidence and keep amplitudes in recorded units.', expect: 'A vibration summary with measured values and source citations, not a fault label.' },
      { title: 'Inspect spectrum and transients', prompt: 'For VIB_RAW over the same 0-10 s interval, inspect the spectrum and transients. Which patterns are measured, and which conclusions need speed or calibration data?', expect: 'Spectral or transient evidence, without inventing RPM or bearing defect frequencies.' },
      { title: 'Explain what is still unknown', prompt: 'Explain our findings so far in plain language for an engineer. Separate observations from unknowns. Do not infer RPM, defect frequencies, or a repair.', expect: 'A contextual summary that explains the missing evidence and avoids a confident diagnosis.' },
    ],
  },
};

const GOOGLE_SERVICES = [
  { name: 'Gemini', icon: Sparkles, kind: 'MODEL', detail: 'Understands the question and recent conversation, selects measurement tools, and writes the response.' },
  { name: 'Vertex AI', icon: Cloud, kind: 'AI PLATFORM', detail: 'Provides the Google Cloud endpoint and authenticated access used for Gemini inference.' },
  { name: 'Cloud Run', icon: Cloud, kind: 'CLOUD DEPLOYMENT', detail: 'Hosts the deployed application and its streaming investigation API in a container.' },
  { name: 'Firestore', icon: Database, kind: 'CLOUD DEPLOYMENT', detail: 'Stores cloud sessions, saved responses and shared request limits. Raw uploaded samples are not retained.' },
  { name: 'Cloud Build', icon: Workflow, kind: 'DELIVERY', detail: 'Builds the application container for a cloud release.' },
  { name: 'Artifact Registry', icon: Box, kind: 'DELIVERY', detail: 'Stores versioned container images deployed to Cloud Run.' },
];

async function request(path, options = {}) {
  const response = await fetch(path, { cache: 'no-store', ...options });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.detail || `Request failed (${response.status})`);
  return payload;
}

function HydraulicScene({ flowRatio, playing, profile }) {
  const hostRef = useRef(null);
  const ratioRef = useRef(flowRatio);
  const playingRef = useRef(playing);
  useEffect(() => { ratioRef.current = flowRatio; }, [flowRatio]);
  useEffect(() => { playingRef.current = playing; }, [playing]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#e8ede8');
    scene.fog = new THREE.Fog('#e8ede8', 13, 28);
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(7.5, 6.8, 10.8);
    camera.lookAt(0, 1.2, 0);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight('#f7fbf5', '#8d9a91', 2.2));
    const key = new THREE.DirectionalLight('#fff3d4', 3.2);
    key.position.set(4, 10, 6); key.castShadow = true; scene.add(key);
    const fill = new THREE.DirectionalLight('#81aeb0', 1.2); fill.position.set(-5, 4, -3); scene.add(fill);
    const mat = (color, roughness = 0.58, metalness = 0.08) => new THREE.MeshStandardMaterial({ color, roughness, metalness });
    const green = mat('#3d7254'); const dark = mat('#263932'); const steel = mat('#b6c0ba', 0.32, 0.62);
    const amber = mat('#e1a83f', 0.42, 0.25); const pipe = mat('#7b9c86', 0.38, 0.34);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), mat('#d8dfd8'));
    floor.rotation.x = -Math.PI / 2; floor.position.y = -0.04; floor.receiveShadow = true; scene.add(floor);
    const grid = new THREE.GridHelper(22, 22, '#abb8ae', '#cbd3cc'); grid.position.y = -0.025; scene.add(grid);

    const box = (width, height, depth, material, position, parent = scene) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
      mesh.position.set(...position); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh;
    };
    const cylinder = (radiusTop, radiusBottom, height, material, position, rotation = [0, 0, 0]) => {
      const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height, 28), material);
      mesh.position.set(...position); mesh.rotation.set(...rotation); mesh.castShadow = true; mesh.receiveShadow = true; scene.add(mesh); return mesh;
    };
    box(7.4, 0.16, 4.1, dark, [0, 0.13, 0]);
    for (const x of [-3.1, -1.1, 1.1, 3.1]) box(0.22, 0.9, 0.22, steel, [x, 0.65, 0]);
    box(1.05, 1.55, 1.1, green, [-2.5, 1.45, 0.25]);
    box(1.18, 1.16, 1.24, mat('#6b9272'), [-2.5, 1.24, 0.25]);
    box(1.45, 0.12, 1.45, steel, [-2.5, 2.08, 0.25]);
    cylinder(0.42, 0.52, 0.68, amber, [-0.65, 1.02, 0.25], [0, 0, Math.PI / 2]);
    cylinder(0.28, 0.3, 0.34, steel, [-0.17, 1.02, 0.25], [0, 0, Math.PI / 2]);
    box(0.78, 1.55, 0.72, steel, [1.45, 1.15, 0.1]);
    box(0.48, 0.98, 0.52, mat('#d6ded8', 0.3, 0.5), [1.45, 2.36, 0.1]);
    cylinder(0.12, 0.12, 0.22, amber, [1.45, 2.98, 0.1]);
    box(0.68, 0.76, 0.64, mat('#d3ddd4'), [2.74, 0.76, 0.2]);
    for (let index = 0; index < 5; index += 1) box(0.08, 0.62, 0.8, steel, [2.48 + index * 0.13, 0.76, 0.2]);

    const pipePoints = [
      [[-2.0, 1.2, -0.25], [-1.45, 1.2, -0.25], [-1.45, 1.0, -0.25], [-1.02, 1.0, -0.25]],
      [[-0.28, 1.0, -0.25], [0.25, 1.0, -0.25], [0.25, 2.0, -0.25], [0.98, 2.0, -0.25]],
      [[1.82, 1.3, -0.25], [2.05, 1.3, -0.25], [2.05, 0.75, -0.25], [2.42, 0.75, -0.25]],
      [[2.95, 0.75, -0.25], [3.25, 0.75, -0.25], [3.25, 1.0, -0.25], [3.4, 1.0, -0.25]],
    ];
    const tracks = pipePoints.map(points => {
      const curve = new THREE.CatmullRomCurve3(points.map(point => new THREE.Vector3(...point)));
      const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 36, 0.075, 9, false), pipe);
      mesh.castShadow = true; scene.add(mesh); return curve;
    });
    const particles = [];
    const particleMaterial = new THREE.MeshStandardMaterial({ color: '#f1b64b', emissive: '#a6651c', emissiveIntensity: 0.55, roughness: 0.3 });
    tracks.slice(0, 3).forEach((curve, trackIndex) => {
      for (let index = 0; index < 7; index += 1) {
        const particle = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 10), particleMaterial);
        particle.userData = { curve, phase: index / 7, trackIndex };
        scene.add(particle); particles.push(particle);
      }
    });
    const title = profile === 'bearing' ? 'BEARING DATA / NO RPM INFERENCE' : 'HYDRAULIC DATA / REFERENCE ASSEMBLY';
    const canvas = document.createElement('canvas'); canvas.width = 512; canvas.height = 64;
    const context = canvas.getContext('2d'); context.font = '500 22px DM Mono, monospace'; context.fillStyle = '#46584d'; context.fillText(title, 4, 38);
    const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas), transparent: true, depthTest: false }));
    label.scale.set(4.2, 0.52, 1); label.position.set(-1.45, 3.35, 0); scene.add(label);
    const resize = () => { const width = host.clientWidth; const height = host.clientHeight; if (!width || !height) return; camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height, false); };
    const observer = new ResizeObserver(resize); observer.observe(host); resize();
    const timer = new THREE.Clock(); let phase = 0; let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const delta = Math.min(timer.getDelta(), 0.04);
      if (playingRef.current && profile !== 'bearing') phase += delta * (0.16 + ratioRef.current * 0.95);
      particles.forEach(particle => {
        const { curve, trackIndex } = particle.userData;
        particle.visible = profile !== 'bearing';
        const speedFactor = 0.45 + ratioRef.current * 1.4;
        const t = (particle.userData.phase + phase * speedFactor + trackIndex * 0.29) % 1;
        particle.position.copy(curve.getPointAt(t));
      });
      renderer.render(scene, camera);
    };
    animate();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); scene.traverse(item => { item.geometry?.dispose(); if (Array.isArray(item.material)) item.material.forEach(material => material.dispose()); else item.material?.dispose(); }); renderer.dispose(); renderer.domElement.remove(); };
  }, [profile]);

  return <div className="scene-host" ref={hostRef} aria-label="Illustrative equipment reference assembly" role="img"><span className="scene-disclaimer">Source-informed visual / not calibrated CAD</span></div>;
}

function SignalPlot({ channel, seconds, duration, onSeek }) {
  if (!channel?.points?.length) return <div className="chart-empty">Select a measured channel to inspect its recording.</div>;
  const points = channel.points;
  const values = points.map(point => point[1]).filter(Number.isFinite);
  const minimum = Math.min(...values); const maximum = Math.max(...values);
  const spread = maximum - minimum || 1;
  const polyline = points.map(([time, value], index) => `${(time / duration) * 1000},${170 - ((value - minimum) / spread) * 145}`).join(' ');
  const cursorX = (seconds / duration) * 1000;
  return <svg className="signal-chart" viewBox="0 0 1000 190" preserveAspectRatio="none" role="img" aria-label={`${channel.id} recorded signal, ${channel.rate_hz} hertz`} onClick={event => { const bounds = event.currentTarget.getBoundingClientRect(); onSeek(Math.max(0, Math.min(duration, ((event.clientX - bounds.left) / bounds.width) * duration))); }}>
    {[35, 80, 125, 170].map(y => <line key={y} x1="0" x2="1000" y1={y} y2={y} className="chart-grid" />)}
    <polyline points={polyline} className="chart-line" />
    <line x1={cursorX} x2={cursorX} y1="12" y2="178" className="chart-cursor" />
    <circle cx={cursorX} cy={170 - (((points.reduce((nearest, point) => Math.abs(point[0] - seconds) < Math.abs(nearest[0] - seconds) ? point : nearest))[1] - minimum) / spread) * 145} r="5" className="chart-marker" />
    <text x="6" y="15" className="chart-label">{maximum.toPrecision(4)} {channel.unit}</text><text x="6" y="186" className="chart-label">{minimum.toPrecision(4)} {channel.unit}</text>
  </svg>;
}

function EvidenceCitations({ identifiers, evidence }) {
  return <div className="chat-citations">{identifiers.map(identifier => {
    const item = evidence.find(entry => entry.id === identifier);
    return <details key={identifier}><summary>{item?.source?.channel || 'Evidence'} · {item?.source?.window_s?.join('–')} s</summary><pre>{JSON.stringify(item, null, 2)}</pre></details>;
  })}</div>;
}

function App() {
  const [capabilities, setCapabilities] = useState(null);
  const [catalog, setCatalog] = useState([]);
  const [recording, setRecording] = useState(null);
  const [channelId, setChannelId] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [flowRatio, setFlowRatio] = useState(0.5);
  const [session, setSession] = useState(null);
  const [report, setReport] = useState(null);
  const [status, setStatus] = useState('Loading public recordings');
  const [busy, setBusy] = useState(false);
  const [question, setQuestion] = useState('');
  const [error, setError] = useState('');
  const [events, setEvents] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(() => {
    try { return localStorage.getItem('faultscope.welcome.v2') !== 'seen'; }
    catch { return true; }
  });
  const [aboutTab, setAboutTab] = useState('overview');
  const [recordingLoading, setRecordingLoading] = useState(true);
  const [sceneReady, setSceneReady] = useState(false);
  const [sceneVersion, setSceneVersion] = useState(0);
  const [upload, setUpload] = useState(null);
  const [uploadName, setUploadName] = useState('');
  const [consent, setConsent] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [messages, setMessages] = useState([]);
  const fileRef = useRef(null);
  const abortRef = useRef(null);
  const conversationRef = useRef(null);
  const welcomeRef = useRef(null);
  const sourceVersionRef = useRef(0);
  const duration = recording?.duration_s || 60;

  function closeWelcome() {
    try { localStorage.setItem('faultscope.welcome.v2', 'seen'); } catch {}
    setTourOpen(false);
  }

  function prepareQuestion(prompt) {
    setQuestion(prompt);
    closeWelcome();
    requestAnimationFrame(() => document.getElementById('question-input')?.focus());
  }

  useEffect(() => {
    if (tourOpen && welcomeRef.current && !welcomeRef.current.open) welcomeRef.current.showModal();
  }, [tourOpen]);
  const channel = recording?.channels?.find(item => item.id === channelId) || recording?.channels?.[0];
  const isGeminiEnabled = Boolean(capabilities?.gemini?.enabled);
  const modelLabel = capabilities?.gemini?.model === 'gemini-2.5-flash' ? 'Gemini 2.5 Flash' : 'Gemini';

  useEffect(() => {
    let active = true;
    Promise.all([request(`${API}/capabilities`), request(`${API}/recordings`), request(`${API}/session`)]).then(async ([caps, list, browserSession]) => {
      if (!active) return;
      setCapabilities(caps); setCatalog(list.recordings); setSession(browserSession);
      setStatus('Recorded public data');
      if (list.recordings.length) await loadRecording(list.recordings[0].id, active);
    }).catch(reason => { if (active) { setError(reason.message); setStatus('Service unavailable'); setRecordingLoading(false); } });
    return () => { active = false; abortRef.current?.abort(); };
  }, []);

  async function loadRecording(identifier, active = true) {
    const version = ++sourceVersionRef.current;
    abortRef.current?.abort();
    setBusy(false); setRecordingLoading(true); setSceneReady(false);
    setMessages([]); setQuestion('');
    setPlaying(false); setReport(null); setError(''); setEvents([]); setStatus('Loading recording');
    try {
      const result = await request(`${API}/recordings/${encodeURIComponent(identifier)}`);
      if (!active || version !== sourceVersionRef.current) return;
      setSceneVersion(version);
      setRecording(result); setChannelId(result.channels[0]?.id || ''); setSeconds(0); setFlowRatio(0.5);
      setSelectedComponent(null);
      setStatus('Recorded data / paused');
    } catch (reason) {
      if (active && version === sourceVersionRef.current) { setRecording(null); setError(reason.message); setStatus('Recording unavailable'); }
    } finally {
      if (active && version === sourceVersionRef.current) setRecordingLoading(false);
    }
  }

  useEffect(() => {
    if (!playing || !recording) return undefined;
    let previous = performance.now(); let frame;
    const tick = now => {
      const delta = (now - previous) / 1000; previous = now;
      setSeconds(current => {
        if (current + delta >= duration) { setPlaying(false); setStatus('Recorded data / end'); return duration; }
        return current + delta;
      });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, recording, duration]);

  useEffect(() => {
    if (!recording) return;
    const flow = recording.channels.find(item => item.id === 'FS1');
    if (!flow?.points?.length) return;
    let lower = 0; let upper = flow.points.length - 1;
    while (lower < upper) { const middle = (lower + upper) >> 1; if (flow.points[middle][0] < seconds) lower = middle + 1; else upper = middle; }
    if (lower > 0 && Math.abs(flow.points[lower - 1][0] - seconds) <= Math.abs(flow.points[lower][0] - seconds)) lower -= 1;
    const value = flow.points[lower][1]; const range = flow.statistics.max - flow.statistics.min;
    setFlowRatio(range > 0 ? Math.max(0, Math.min(1, (value - flow.statistics.min) / range)) : 0);
  }, [seconds, recording]);

  async function startInvestigation(engineerQuestion = question) {
    if (!recording || busy || recordingLoading) return;
    const version = sourceVersionRef.current;
    if (!isGeminiEnabled) { setError('Gemini is not connected to this local service. No substitute analysis will be shown.'); return; }
    if (capabilities.gemini.runs_used >= capabilities.gemini.lifetime_run_limit) { setError('The shared Gemini investigation allowance is exhausted.'); return; }
    if (upload && !consent) { setError('Confirm the upload processing notice before sending this file.'); return; }
    const message = engineerQuestion.trim() || 'Investigate this recording and explain what the evidence supports.';
    const userMessage = { id: crypto.randomUUID(), role: 'user', text: message,
      context: `${selectedComponent || 'Whole assembly'} · ${channelId} · ${seconds.toFixed(1)} s` };
    const previousTurn = [...messages].reverse().find(item => item.role === 'assistant')?.report.id;
    setMessages(current => [...current, userMessage]); setQuestion('');
    setError(''); setBusy(true); setReport(null); setEvents([]); setStatus('Gemini is responding');
    const controller = new AbortController(); abortRef.current = controller;
    try {
      const body = {
        mode: 'gemini',
        previous_turn_id: previousTurn,
        ...(upload ? { uploaded_record: upload } : { recording_id: recording.id }),
        ...{
          question: message, focus_channel: channelId,
          focus_component: selectedComponent || undefined,
          window_start_s: Math.max(0, Math.min(seconds - 5, duration - Math.min(10, duration))),
          window_end_s: Math.min(duration, Math.max(10, seconds + 5)),
        },
      };
      const response = await fetch(`${API}/investigations`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-FaultScope-CSRF': session?.csrf || '' }, body: JSON.stringify(body), signal: controller.signal });
      if (!response.ok) { const payload = await response.json(); throw new Error(payload.detail || 'Investigation failed'); }
      const reader = response.body.getReader(); const decoder = new TextDecoder(); let pending = ''; let completed = null;
      while (true) {
        const result = await reader.read(); pending += decoder.decode(result.value || new Uint8Array(), { stream: !result.done });
        let boundary;
        while ((boundary = pending.indexOf('\n\n')) !== -1) {
          const frame = pending.slice(0, boundary); pending = pending.slice(boundary + 2);
          const data = frame.split('\n').find(line => line.startsWith('data: '))?.slice(6);
          if (!data) continue;
          if (version !== sourceVersionRef.current) return;
          const event = JSON.parse(data); setEvents(current => [...current, event]);
          if (event.type === 'error') throw new Error(event.message);
          if (event.type === 'completed') completed = event.report;
        }
        if (result.done) break;
      }
      if (version !== sourceVersionRef.current) return;
      if (!completed) throw new Error('The analysis stream ended before a complete report arrived.');
      if (completed.mode !== 'gemini') throw new Error('A non-Gemini response was returned. It will not be presented as AI analysis.');
      setReport(completed); setStatus(completed.finding.response_kind === 'conversation' ? 'Gemini replied' : 'Gemini evidence review ready');
      setMessages(current => [...current, { id: completed.id, role: 'assistant', report: completed }]);
      request(`${API}/investigations`, { headers: { 'X-FaultScope-CSRF': session?.csrf || '' } }).then(data => setHistory(data.investigations || [])).catch(() => {});
    } catch (reason) {
      if (version !== sourceVersionRef.current) return;
      const detail = reason.name === 'AbortError' ? 'Investigation cancelled.' : reason.message;
      setMessages(current => [...current, { id: crypto.randomUUID(), role: 'error', text: detail }]);
      setStatus('Investigation not completed');
    } finally {
      if (version === sourceVersionRef.current) setBusy(false);
      request(`${API}/capabilities`).then(setCapabilities).catch(() => {});
    }
  }

  async function loadHistory() {
    try { const result = await request(`${API}/investigations`); setHistory((result.investigations || []).filter(item => item.mode === 'gemini')); setHistoryOpen(true); }
    catch (reason) { setError(reason.message); }
  }

  async function openSavedConversation(identifier) {
    if (busy) return;
    try {
      const saved = await request(`${API}/investigations/${identifier}`);
      if (saved.mode !== 'gemini') throw new Error('This report is not a Gemini investigation.');
      const turns = [saved];
      let previousId = saved.previous_turn_id;
      while (previousId && turns.length < 7) {
        const prior = await request(`${API}/investigations/${encodeURIComponent(previousId)}`).catch(() => null);
        if (!prior || prior.mode !== 'gemini' || prior.recording_id !== saved.recording_id) break;
        turns.unshift(prior);
        previousId = prior.previous_turn_id;
      }
      setHistoryOpen(false);
      const known = catalog.find(item => item.id === saved.recording_id);
      if (known) {
        setUpload(null); setUploadName(''); setConsent(false);
        await loadRecording(known.id);
      } else {
        setRecording(null); setUpload(null); setUploadName(''); setConsent(false); setPlaying(false);
      }
      setReport(saved);
      setMessages(turns.flatMap(turn => [
        { id: `${turn.id}-question`, role: 'user', text: turn.question || 'Investigate this recording.', context: `Saved conversation · ${turn.recording_id}` },
        { id: turn.id, role: 'assistant', report: turn },
      ]));
      setStatus('Saved Gemini conversation');
    } catch (reason) { setError(reason.message); }
  }

  async function readUpload(file) {
    const version = ++sourceVersionRef.current;
    abortRef.current?.abort(); setBusy(false); setPlaying(false); setSelectedComponent(null);
    setMessages([]); setReport(null); setQuestion('');
    setError(''); setUpload(null); setUploadName(''); setConsent(false);
    if (!file || file.size > API_LIMIT_BYTES) { setError('Choose a JSON file under 8 MB. The recording limits are checked before analysis.'); return; }
    try {
      const parsed = JSON.parse(await file.text());
      if (version !== sourceVersionRef.current) return;
      setSceneReady(false);
      setSceneVersion(version);
      if (!parsed || !['hydraulic', 'bearing'].includes(parsed.profile) || typeof parsed.channels !== 'object' || !parsed.channels) throw new Error('Expected a hydraulic or bearing JSON payload with duration_s and channel arrays.');
      const valueCount = Object.values(parsed.channels).reduce((count, values) => count + (Array.isArray(values) ? values.length : 0), 0);
      setUpload(parsed); setUploadName(file.name); setRecording({ id: 'user-upload-preview', name: parsed.name || file.name, profile: parsed.profile, duration_s: parsed.duration_s, channels: Object.entries(parsed.channels).map(([id, values]) => ({ id, quantity: id, unit: 'uploaded units', rate_hz: parsed.duration_s ? values.length / parsed.duration_s : 0, sample_count: values.length, points: values.map((value, index) => [index * parsed.duration_s / values.length, value]).filter((_, index) => index % Math.max(1, Math.ceil(values.length / 600)) === 0), statistics: { min: Math.min(...values), max: Math.max(...values) } })) });
      setChannelId(Object.keys(parsed.channels)[0]); setSeconds(0); setStatus(`Local preview / ${valueCount.toLocaleString()} samples`);
    } catch (reason) { setError(reason.message || 'The JSON file could not be parsed.'); }
  }

  function seek(value) { const next = Math.max(0, Math.min(duration, value)); setSeconds(next); setStatus(`Recorded data / ${next.toFixed(2)} s`); }

  const completedEvent = events.filter(event => event.type === 'evidence').length;
  const spentRuns = capabilities?.gemini?.runs_used ?? 0;
  const runLimit = capabilities?.gemini?.lifetime_run_limit ?? 0;
  const remainingRuns = Math.max(0, runLimit - spentRuns);
  const sendDisabled = !question.trim() || !recording || recordingLoading || !isGeminiEnabled || busy || remainingRuns === 0 || (upload && !consent);
  const equipmentLoading = recordingLoading || (recording && !sceneReady);
  const demoGuide = DEMO_GUIDES[recording?.profile || 'hydraulic'];
  const progressEvent = [...events].reverse().find(event => ['tool_requested', 'model_request'].includes(event.type));

  useEffect(() => {
    const thread = conversationRef.current;
    if (thread) thread.scrollTop = thread.scrollHeight;
  }, [messages, busy, events.length]);

  return <div className="app-shell">
    <header className="topbar">
      <button className="brand" onClick={() => { setUpload(null); setUploadName(''); if (catalog[0]) loadRecording(catalog[0].id); }} aria-label="FaultScope home"><span className="brand-mark"><Activity size={19} /></span><span>Fault<span>Scope</span><small>TORQUESHIFT / 2026</small></span></button>
      <div className="top-status"><span className="status-dot" />{status}<span className="divider" />ARCHIVED DATA</div>
      <div className="top-actions"><span className="platform-attribution"><Cloud size={16} />Built with Google Cloud</span><button className="quiet-button" title="Demo guide" onClick={() => { setAboutTab('demo'); setTourOpen(true); }}><Compass size={16} /> Demo guide</button><button className="quiet-button" onClick={() => { setAboutTab('services'); setTourOpen(true); }}><CircleHelp size={16} /> About</button><button className="quiet-button" onClick={loadHistory}><Clock3 size={16} /> History</button><button className="mobile-menu" onClick={() => setMobileNav(value => !value)} aria-label="Open navigation">{mobileNav ? <X /> : <Menu />}</button></div>
    </header>

    <div className="layout">
      <aside className={`sidebar ${mobileNav ? 'sidebar-open' : ''}`}>
        <div className="side-section-title">WORKSPACE <span>01</span></div>
        <label className="field-label" htmlFor="recording-select">RECORDED TEST CYCLE</label>
        <select id="recording-select" value={upload ? 'upload' : recording?.id || ''} onChange={event => { setUpload(null); setUploadName(''); loadRecording(event.target.value); }}>
          {catalog.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
          {upload && <option value="upload">{uploadName} / local preview</option>}
        </select>
        <div className="record-meta"><span>{recording?.profile === 'bearing' ? 'BEARING TEST RIG' : 'HYDRAULIC TEST RIG'}</span><span>{recording?.duration_s?.toFixed(1) || '--'} SEC</span><span>{recording?.channels?.length || 0} CHANNELS</span></div>
        <div className="side-rule" />
        <div className="side-section-title">SIGNAL CHANNELS <span>{recording?.channels?.length || '—'}</span></div>
        <div className="channel-list">{recording?.channels?.slice(0, 14).map(item => <button key={item.id} className={`channel-option ${item.id === channelId ? 'channel-active' : ''}`} onClick={() => setChannelId(item.id)}><span className="channel-led" /><span><b>{item.id}</b><small>{item.quantity}</small></span><small>{item.rate_hz.toLocaleString()} Hz</small></button>)}</div>
        <div className="side-rule" />
        <div className="side-section-title">YOUR RECORDING</div>
        <button className="upload-button" onClick={() => fileRef.current?.click()}><Upload size={16} /> Inspect a JSON recording</button>
        <input ref={fileRef} type="file" accept="application/json,.json" hidden onChange={event => readUpload(event.target.files?.[0])} />
        {upload && <div className="upload-consent"><div className="upload-file"><Check size={14} />{uploadName}</div><label><input type="checkbox" checked={consent} onChange={event => setConsent(event.target.checked)} /> I understand the file is sent to FaultScope for immediate processing. It is not retained as raw samples.</label><p>Use non-sensitive public or synthetic data only. The 8 MB request cap is not a raw-data throughput guarantee.</p><button className="text-action" onClick={() => { setUpload(null); setUploadName(''); setConsent(false); if (catalog[0]) loadRecording(catalog[0].id); }}>Remove upload</button></div>}
        <div className="sidebar-bottom"><ShieldCheck size={15} /><span>READ-ONLY INVESTIGATION<br /><b>No equipment control</b></span></div>
      </aside>

      <main className="main-content">
        <section className="scene-section">
          <div className="section-heading"><div><span className="eyebrow">REFERENCE ASSEMBLY / {recording?.profile === 'bearing' ? 'ROT-01' : 'HYD-01'}</span><h1>{recording?.profile === 'bearing' ? 'Bearing test rig' : 'Hydraulic system'}</h1><p>Source-informed visual / physical sensor placement unverified</p></div><div className="scene-tag"><span className="status-dot" /> RECORDED PLAYBACK</div></div>
          <div className="equipment-loading-shell" aria-busy={Boolean(equipmentLoading)}>
            <div inert={Boolean(equipmentLoading)}>{recording && <EquipmentScene key={`${recording.id}-${sceneVersion}`} flowRatio={flowRatio} playing={playing} profile={recording.profile} selected={selectedComponent} onSelect={setSelectedComponent} onReady={() => setSceneReady(true)} />}</div>
            {equipmentLoading && <div className="equipment-loading" role="status"><span className="spinner" /><strong>{recordingLoading ? 'Loading test cycle' : 'Preparing reference assembly'}</strong><span>{recordingLoading ? 'Retrieving recorded signals' : 'Rendering the 3D view'}</span></div>}
            {!recordingLoading && !recording && <div className="equipment-loading" role="status"><AlertTriangle size={22} /><strong>Recording unavailable</strong><span>Select another test cycle or retry.</span></div>}
          </div>
          <div className="replay-strip"><div className="replay-head"><div><span className="eyebrow">MEASURED READOUTS</span><span className="replay-clock">{seconds.toFixed(2)} <small>/ {duration.toFixed(2)} S</small></span></div><span className="archived-tag">ARCHIVED / NOT LIVE</span></div>
            <div className="readout-grid">{recording?.channels?.filter(item => recording.profile === 'bearing' ? ['VIB_RAW', 'ENC_RAW'].includes(item.id) : ['PS1', 'FS1', 'TS1'].includes(item.id)).map(item => {
              const point = item.points?.reduce((nearest, candidate) => Math.abs(candidate[0] - seconds) < Math.abs(nearest[0] - seconds) ? candidate : nearest, item.points[0] || [0, 0]);
              return <button className={`readout ${item.id === channelId ? 'readout-active' : ''}`} key={item.id} onClick={() => setChannelId(item.id)}><span>{item.id} / {item.quantity}</span><b>{point?.[1]?.toPrecision(item.unit === 'recorded units' ? 4 : 5) ?? '—'} <small>{item.unit}</small></b><small>{item.rate_hz.toLocaleString()} Hz native rate</small></button>;
            })}</div>
            <div className="playback-controls"><button className="play-button" disabled={Boolean(equipmentLoading) || !recording} onClick={() => { const next = !playing; setPlaying(next); setStatus(next ? 'Recorded data / playing' : 'Recorded data / paused'); }} aria-label={playing ? 'Pause recorded playback' : 'Play recorded playback'}>{playing ? <Pause size={17} /> : <Play size={17} />}</button><input aria-label="Recorded timeline" className="timeline" type="range" min="0" max={duration} step="0.01" value={seconds} onChange={event => seek(Number(event.target.value))} /><span className="time-readout">{seconds.toFixed(1)} / {duration.toFixed(1)}s</span><span className="playback-label">{playing ? 'PLAYING' : 'PAUSED'}</span></div>
            <div className="flow-note">{recording?.profile === 'hydraulic' ? 'Illustrative tracer speed follows measured FS1 relative to this recording range. It is not a calibrated flow simulation.' : 'Recorded units only. Shaft speed is not inferred from ENC_RAW.'}</div>
          </div>
        </section>

        <details className="signals-section source-evidence">
          <summary>Recorded source evidence · {channel?.id || 'Select a channel'}</summary>
          <div className="section-heading compact"><div><span className="eyebrow">NATIVE SIGNAL / {channel?.rate_hz?.toLocaleString() || '—'} HZ</span><h2>{channel?.id || 'Signal'} <span>{channel?.quantity || 'Select a channel'}</span></h2></div><div className="signal-stats"><span>MIN <b>{channel?.statistics?.min?.toPrecision(5) ?? '—'}</b></span><span>MAX <b>{channel?.statistics?.max?.toPrecision(5) ?? '—'}</b></span></div></div>
          <SignalPlot channel={channel} seconds={seconds} duration={duration} onSeek={seek} />
          <div className="plot-footer"><span>PEAK-PRESERVING PREVIEW / NATIVE SAMPLE RATE SHOWN</span><button className="text-action" onClick={() => setSeconds(0)}><RotateCcw size={13} /> Reset cursor</button></div>
        </details>

        <aside className="ai-workspace chat-panel" aria-label="Gemini investigation chat">
          <header className="chat-header">
            <span className="chat-avatar"><Sparkles size={20} /></span>
            <div className="chat-identity"><h2>FaultScope AI</h2><span className="chat-model-brand">Powered by {modelLabel}</span><span><i className={isGeminiEnabled ? 'chat-online' : 'chat-offline'} />{isGeminiEnabled ? 'Vertex AI connected' : 'Gemini offline'}</span></div>
            <button className="icon-button" onClick={loadHistory} aria-label="Open AI conversation history" title="AI conversation history"><Clock3 size={17} /></button>
            <button className="icon-button" disabled={busy || !messages.length} onClick={() => { setMessages([]); setReport(null); setError(''); }} aria-label="New conversation" title="New conversation"><RotateCcw size={17} /></button>
          </header>
          <div className="chat-source"><Activity size={14} /><span>{upload ? uploadName : recording?.name || 'Loading recording'}</span><small>{upload ? 'UPLOAD PREVIEW' : 'RECORDED DATA'}</small></div>
          {!isGeminiEnabled && capabilities && <div className="chat-connection" role="status"><AlertTriangle size={15} /><span>Gemini isn’t enabled on this local backend. Chat will be available when it is connected.</span></div>}
          {isGeminiEnabled && remainingRuns === 0 && <div className="chat-connection" role="status"><AlertTriangle size={15} /><span>This demo's shared AI allowance has been reached. The host must enable more requests. Saved conversations and the demo guide remain available.</span></div>}
          <div className="chat-thread" ref={conversationRef} role="log" aria-label="Investigation conversation" aria-live="polite" aria-busy={busy}>
            {!messages.length && <section className="chat-welcome"><span className="chat-welcome-symbol"><Sparkles size={25} /></span><h3>{upload ? 'What would you like to investigate?' : demoGuide.title}</h3><p>{upload ? 'Ask about the channels and time interval in your recording.' : 'Compare a change, challenge the explanation, then review what is still unknown.'}</p>{!upload && <div className="chat-suggestions">{demoGuide.steps.map(step => <button key={step.title} onClick={() => prepareQuestion(step.prompt)}><Search size={14} /><span><b>{step.title}</b><small>{step.expect}</small></span><ChevronDown size={14} /></button>)}</div>}<button className="text-action demo-guide-link" onClick={() => { setAboutTab('demo'); setTourOpen(true); }}><Compass size={14} />See the demo questions and expected outcomes</button></section>}
            {messages.map(message => <article key={message.id} className={`chat-message chat-message-${message.role}`}>
              <div className="chat-message-label">{message.role === 'user' ? 'You' : message.role === 'error' ? 'Request status' : <><Sparkles size={12} />Gemini</>}</div>
              {message.role === 'assistant' ? <>
                {message.report.finding.response_kind !== 'conversation' && <h3>{message.report.finding.title}</h3>}<p>{message.report.finding.summary}</p>
                <EvidenceCitations identifiers={message.report.finding.evidence_ids || []} evidence={message.report.evidence} />
                <div className="chat-evidence">{message.report.finding.observations.map((observation, index) => <div key={index}><p>{observation.text}</p><EvidenceCitations identifiers={observation.evidence_ids} evidence={message.report.evidence} /></div>)}</div>
                {message.report.finding.uncertainties.length > 0 && <details className="chat-uncertainties"><summary><ShieldCheck size={13} />Uncertainties & review</summary><ul>{message.report.finding.uncertainties.map((item, index) => <li key={index}>{item}</li>)}</ul></details>}
                {message.report.finding.response_kind !== 'conversation' && <button className="text-action" onClick={() => { const blob = new Blob([JSON.stringify(message.report, null, 2)], { type: 'application/json' }); const link = document.createElement('a'); const url = URL.createObjectURL(blob); link.href = url; link.download = `faultscope-${message.report.id.slice(0, 8)}.json`; link.click(); URL.revokeObjectURL(url); }}><ArrowDownToLine size={13} />Export evidence report</button>}
              </> : <><p>{message.text}</p>{message.context && <small>{message.context}</small>}</>}
            </article>)}
            {busy && <article className="chat-message chat-message-assistant chat-working"><div className="chat-message-label"><Sparkles size={12} />Gemini</div><div role="status"><span className="spinner" /><span>{progressEvent?.type === 'tool_requested' ? `Checking ${progressEvent.arguments?.channel || 'recorded evidence'}` : progressEvent?.message || 'Gemini is reading your message'}</span></div>{completedEvent > 0 && <small>{completedEvent} measured evidence results received</small>}<div className="chat-progress" aria-hidden="true"><span /></div><button className="text-action" onClick={() => abortRef.current?.abort()}><X size={12} />Stop response</button></article>}
          </div>
          <footer className="chat-composer-area">
            {error && <div className="chat-error" role="alert"><AlertTriangle size={14} /><span>{error}</span><button onClick={() => setError('')} aria-label="Dismiss error"><X size={13} /></button></div>}
            <div className="chat-context"><Activity size={13} /><span>{selectedComponent || 'Whole assembly'} · {channelId || 'No channel'} · {seconds.toFixed(1)} s</span></div>
            <form className="chat-composer" onSubmit={event => { event.preventDefault(); if (!sendDisabled) startInvestigation(question); }}>
              <textarea id="question-input" aria-label="Message Gemini" maxLength={500} value={question} onChange={event => setQuestion(event.target.value)} placeholder="Ask FaultScope…" onKeyDown={event => { if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); if (!sendDisabled) startInvestigation(question); } }} />
              <div className="chat-composer-actions"><span>{question.length}/500</span><button type="submit" aria-label="Send message to Gemini" title="Send message" disabled={sendDisabled}><Send size={17} /></button></div>
            </form>
            <div className="chat-footnote"><ShieldCheck size={12} /><span>AI findings require engineering review</span></div>
          </footer>
        </aside>
        <footer className="page-footer"><span>PUBLIC RESEARCH RECORDINGS / CC BY 4.0</span><span>NO FIELD VALIDATION / NOT A SAFETY SYSTEM</span></footer>
      </main>
    </div>

    {historyOpen && <div className="modal-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) setHistoryOpen(false); }}><section className="modal-panel"><div className="modal-title"><div><span className="eyebrow">THIS BROWSER SESSION</span><h2>Recent AI reviews</h2></div><button className="icon-button" onClick={() => setHistoryOpen(false)} aria-label="Close history"><X /></button></div>{history.length ? history.map(item => <button className="history-row" disabled={busy || item.status !== 'completed'} key={item.id} onClick={() => openSavedConversation(item.id)}><span><b>{item.title || item.recording_id}</b><small>{new Date((item.created || item.created_at) * 1000).toLocaleString()} · {item.status}</small></span><ChevronDown size={16} /></button>) : <p className="empty-state">No AI reviews in this session.</p>}<p className="modal-footnote">Reports expire after seven days. Uploaded raw samples are not stored; an uploaded report cannot restore its original waveform.</p></section></div>}
    {tourOpen && <dialog ref={welcomeRef} className={`modal-panel welcome-dialog${aboutTab !== 'overview' ? ' about-services' : ''}`} aria-labelledby="welcome-title" aria-describedby="welcome-description" onCancel={event => { event.preventDefault(); closeWelcome(); }}>
      <div className="welcome-visual">
        <div className="welcome-wordmark"><Activity size={20} /><span>FaultScope</span><small>BY TORQUESHIFT</small></div>
        <button className="icon-button welcome-close" onClick={closeWelcome} aria-label="Close welcome" title="Close welcome"><X /></button>
        <EquipmentScene profile="hydraulic" flowRatio={0} playing={false} preview />
        <span className="welcome-visual-caption">HYDRAULIC REFERENCE ASSEMBLY</span>
      </div>
      <div className="about-tabs" role="tablist" aria-label="About FaultScope">
        {ABOUT_TABS.map((tab, index) => <button key={tab.id} id={`about-tab-${tab.id}`} type="button" role="tab" aria-selected={aboutTab === tab.id} aria-controls={`about-panel-${tab.id}`} tabIndex={aboutTab === tab.id ? 0 : -1} onClick={() => setAboutTab(tab.id)} onKeyDown={event => { if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) { event.preventDefault(); const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? ABOUT_TABS.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + ABOUT_TABS.length) % ABOUT_TABS.length; const next = ABOUT_TABS[nextIndex].id; setAboutTab(next); document.getElementById(`about-tab-${next}`)?.focus(); } }}>{tab.id === 'services' && <Cloud size={15} />}{tab.label}</button>)}
      </div>
      <div role="tabpanel" id={`about-panel-${aboutTab}`} aria-labelledby={`about-tab-${aboutTab}`}>
      {aboutTab === 'overview' ? <>
      <div className="welcome-content">
        <span className="eyebrow welcome-eyebrow"><Sparkles size={14} />YOUR AI INVESTIGATION WORKSPACE</span>
        <h2 id="welcome-title">Welcome to FaultScope<span>Let's make sense of your signals.</span></h2>
        <div className="welcome-platform"><Cloud size={19} /><span>Built with <b>Google Cloud</b></span><span className="platform-separator" /><Sparkles size={17} /><span>Powered by <b>{modelLabel}</b></span></div>
        <p id="welcome-description">Review a completed machine test before an engineering discussion. Ask what changed, cross-check the signals with Gemini, and separate measured observations from unproven diagnoses.</p>
        <button className="text-action demo-guide-link" onClick={() => setAboutTab('demo')}><Compass size={14} />New here? Follow the three-question demo</button>
        <div className="welcome-highlights">
          <div><Activity size={19} /><b>Real recordings</b><span>Public test cycles or your own data.</span></div>
          <div><Sparkles size={19} /><b>AI-led investigation</b><span>Gemini chooses what to measure.</span></div>
          <div><ShieldCheck size={19} /><b>Traceable answers</b><span>Cited evidence. Clear uncertainties.</span></div>
        </div>
        <div className="welcome-start"><span>{recordingLoading ? 'Preparing your first recording.' : recording ? 'Your recording is ready to explore.' : 'Your investigation starts here.'}</span><button className="primary-button" autoFocus onClick={closeWelcome}>Enter workspace <ArrowRight size={17} /></button></div>
        <p className="welcome-boundary">Recorded data, not live monitoring. Reference geometry, not calibrated CAD. Engineering review required; not a validated diagnosis or safety system.</p>
      </div>
      </> : aboutTab === 'demo' ? <div className="welcome-content demo-content">
        <span className="eyebrow welcome-eyebrow"><Compass size={14} />THREE QUESTIONS / ONE RECORDED CYCLE</span>
        <h2 id="welcome-title">An investigation you can follow<span>{demoGuide.title}</span></h2>
        <p id="welcome-description">{demoGuide.scenario}</p>
        <p className="demo-recording"><b>First demo: {demoGuide.recommended}.</b> Keep the same recording and conversation for all three questions. {upload ? 'Select a public recording before using these examples.' : `Selected: ${recording?.name || 'Loading recording'}.`}</p>
        <ol className="demo-steps">{demoGuide.steps.map((step, index) => <li key={step.title}><span className="demo-step-number">0{index + 1}</span><div><h3>{step.title}</h3><p className="demo-prompt">{step.prompt}</p><p className="demo-expect"><b>Look for:</b> {step.expect}</p><button className="text-action" disabled={busy || !!upload || !recording} onClick={() => prepareQuestion(step.prompt)}>Use this question <ArrowRight size={14} /></button></div></li>)}</ol>
        <p className="demo-finish"><ShieldCheck size={16} /><span>Open an evidence citation to inspect the source channel, time window and calculation. The result is a reviewable engineering note, not a fault verdict. The 3D assembly gives reference context; it is not live telemetry.</span></p>
        {isGeminiEnabled && remainingRuns === 0 && <p className="demo-availability">Live questions are currently blocked by the shared demo allowance. The host must enable more requests; saved reports remain available in History.</p>}
      </div> : <div className="welcome-content service-content">
        <span className="eyebrow welcome-eyebrow"><Cloud size={14} />GOOGLE CLOUD AI BUILDER CUP 2026</span>
        <h2 id="welcome-title">Built with Google Cloud<span>From a question to a traceable answer.</span></h2>
        <p id="welcome-description">FaultScope brings Google's AI and cloud services together for recorded-machine investigations. TorqueShift builds the experience; Gemini provides the intelligence.</p>
        <div className="google-service-list">{GOOGLE_SERVICES.map(service => <div key={service.name} className="google-service"><service.icon size={20} /><div><h3>{service.name === 'Gemini' ? modelLabel : service.name}<small>{service.kind}</small></h3><p>{service.detail}</p></div></div>)}</div>
        <p className="service-runtime-note"><Activity size={15} /><span>{capabilities?.runtime?.hosting === 'cloud_run' ? 'Current backend: Cloud Run.' : capabilities?.runtime?.hosting === 'local' ? 'Current backend: local development server, not Cloud Run.' : 'Cloud Run and Firestore describe the cloud deployment, not a guarantee about this preview.'} {capabilities?.runtime?.storage === 'firestore' ? 'Session storage: Firestore.' : capabilities?.runtime?.storage === 'sqlite' ? 'Session storage: local SQLite.' : ''} {isGeminiEnabled ? 'Gemini inference is configured through Vertex AI.' : 'Gemini inference is currently disabled.'}</span></p>
        <p className="service-attribution">An independent TorqueShift project built with Google technologies. Google service names are trademarks of Google LLC; no endorsement is implied.</p>
        <button className="primary-button" onClick={closeWelcome}>Back to workspace <ArrowRight size={16} /></button>
      </div>}
      </div>
    </dialog>}
  </div>;
}

export default App;