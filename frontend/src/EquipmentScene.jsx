import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Expand, Focus, Layers3, Minus, Plus, RotateCcw } from 'lucide-react';

export default function EquipmentScene({ flowRatio, playing, profile, selected, onSelect, onReady, preview = false }) {
  const hostRef = useRef(null);
  const sceneRef = useRef(null);
  const valuesRef = useRef({ flowRatio, playing, selected, onSelect, onReady });
  const [exploded, setExploded] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  valuesRef.current = { flowRatio, playing, selected, onSelect, onReady };

  useEffect(() => {
    const host = hostRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#171b20');
    const camera = new THREE.PerspectiveCamera(36, 1, .1, 100);
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); }
    catch { setUnavailable(true); valuesRef.current.onReady?.(); return undefined; }
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    host.appendChild(renderer.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enabled = !preview;
    controls.minDistance = 4; controls.maxDistance = 18;
    controls.maxPolarAngle = Math.PI / 2 - .04;
    controls.enablePan = false;
    function reset() { camera.position.set(5.6, 4.5, 7); controls.target.set(0, .8, 0); controls.update(); }
    reset();
    scene.add(new THREE.HemisphereLight('#ecfff0', '#526959', 2.6));
    const key = new THREE.DirectionalLight('#fff3df', 3.5);
    key.position.set(-3, 7, 5); key.castShadow = true; key.shadow.mapSize.set(1024, 1024); scene.add(key);
    const rim = new THREE.DirectionalLight('#90d9df', 2.7); rim.position.set(5, 3, -4); scene.add(rim);
    const material = (color, metalness = .55) => new THREE.MeshStandardMaterial({ color, metalness, roughness: .34 });
    const steel = material('#c3cbd3'); const green = material('#467d7a'); const dark = material('#30363e');
    const copper = material('#eaa07f'); const accent = material('#94efd3', .2);
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(25, 25), new THREE.ShadowMaterial({ opacity: .28 }));
    floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; floor.position.y = -.12; scene.add(floor);
    const grid = new THREE.GridHelper(18, 36, '#424b58', '#282f38'); grid.position.y = -.11; scene.add(grid);
    const assembly = new THREE.Group(); scene.add(assembly);
    const groups = new Map(); const selectable = []; const particles = [];
    const group = (id, position, offset) => {
      const result = new THREE.Group(); result.position.set(...position);
      result.userData = { id, home: result.position.clone(), offset: new THREE.Vector3(...offset) };
      groups.set(id, result); assembly.add(result); return result;
    };
    const mesh = (parent, geometry, mat, position, rotation = [0, 0, 0]) => {
      const result = new THREE.Mesh(geometry, mat.clone()); result.position.set(...position); result.rotation.set(...rotation);
      result.castShadow = true; result.receiveShadow = true; parent.add(result);
      if (parent.userData.id) { result.userData.component = parent.userData.id; selectable.push(result); }
      return result;
    };
    const box = (parent, size, position, mat = steel) => mesh(parent, new THREE.BoxGeometry(...size), mat, position);
    const cylinder = (parent, radius, height, position, mat = steel, axis = 'y') => mesh(parent, new THREE.CylinderGeometry(radius, radius, height, 40), mat, position, axis === 'x' ? [0, 0, Math.PI / 2] : axis === 'z' ? [Math.PI / 2, 0, 0] : undefined);
    const ring = (parent, radius, thickness, position, mat = steel, rotation = [0, 0, 0]) => mesh(parent, new THREE.TorusGeometry(radius, thickness, 12, 48), mat, position, rotation);
    box(assembly, [6.5, .16, 3.2], [0, 0, 0], dark);
    if (profile === 'bearing') {
      const motor = group('drive', [-2, .75, 0], [-.6, .15, 0]);
      cylinder(motor, .42, 1.25, [0, 0, 0], green, 'x');
      for (let index = 0; index < 12; index++) cylinder(motor, .46, .03, [-.53 + index * .095, 0, 0]);
      box(motor, [1.4, .12, .85], [0, -.48, 0], dark); box(motor, [.42, .2, .4], [-.2, .49, 0], green);
      cylinder(assembly, .11, 4.5, [.6, .75, 0], steel, 'x');
      cylinder(assembly, .25, .35, [-1.15, .75, 0], copper, 'x');
      for (const [id, horizontal] of [['support', -.4], ['bearing', 1.3]]) {
        const housing = group(id, [horizontal, .75, 0], [id === 'bearing' ? .25 : -.25, .6, id === 'bearing' ? .45 : -.45]);
        box(housing, [.8, .13, 1.1], [0, -.57, 0], dark);
        box(housing, [.5, .4, .8], [0, -.35, 0], green);
        ring(housing, .43, .11, [0, 0, 0], green, [0, Math.PI / 2, 0]);
        ring(housing, .31, .045, [.12, 0, 0], steel, [0, Math.PI / 2, 0]);
        ring(housing, .16, .05, [.14, 0, 0], steel, [0, Math.PI / 2, 0]);
        for (let index = 0; index < 10; index++) mesh(housing, new THREE.SphereGeometry(.06, 14, 10), steel, [.13, Math.cos(index * Math.PI / 5) * .25, Math.sin(index * Math.PI / 5) * .25]);
        if (id === 'bearing') cylinder(housing, .09, .23, [0, .58, 0], copper);
      }
      const encoder = group('encoder', [2.55, .75, 0], [.6, .2, 0]);
      cylinder(encoder, .28, .3, [0, 0, 0], green, 'x');
      box(encoder, [.3, .5, .2], [0, -.4, 0]); box(encoder, [.65, .1, .8], [0, -.65, 0], dark);
    } else {
      const pump = group('pump', [-2, .65, -.2], [-.6, .15, .2]);
      cylinder(pump, .38, 1.25, [0, 0, 0], green, 'x');
      for (let index = 0; index < 11; index++) cylinder(pump, .42, .035, [-.48 + index * .095, 0, 0]);
      cylinder(pump, .4, .15, [.65, 0, 0], copper, 'x'); cylinder(pump, .19, .25, [.84, 0, 0], dark, 'x');
      box(pump, [1.5, .12, .8], [0, -.43, 0], dark); box(pump, [.4, .24, .4], [-.15, .47, 0], green);
      const valve = group('valve', [0, .7, -.5], [0, .5, -.35]);
      box(valve, [1.15, .58, .72], [0, 0, 0]);
      for (const direction of [-1, 1]) { cylinder(valve, .23, .5, [direction * .72, .02, 0], green, 'x'); cylinder(valve, .13, .2, [direction * .28, .4, 0], copper); }
      box(valve, [1.3, .1, .85], [0, -.34, 0], dark);
      const accumulator = group('accumulator', [2.1, 1.15, -.5], [.5, .4, -.3]);
      cylinder(accumulator, .36, 1.3, [0, 0, 0], green);
      for (const direction of [-1, 1]) mesh(accumulator, new THREE.SphereGeometry(.36, 28, 20), green, [0, direction * .65, 0]);
      cylinder(accumulator, .11, .2, [0, .99, 0], copper);
      for (const height of [-.3, .3]) ring(accumulator, .37, .03, [0, height, 0], steel, [Math.PI / 2, 0, 0]);
      const cooler = group('cooler', [1.1, .75, 1], [.35, .15, .6]);
      box(cooler, [1.3, 1.15, .4], [0, 0, 0], dark);
      for (let index = 0; index < 14; index++) box(cooler, [.04, 1.02, .45], [-.55 + index * .085, 0, 0]);
      ring(cooler, .36, .045, [0, 0, .27], green); cylinder(cooler, .1, .1, [0, 0, .3], green, 'z');
      box(assembly, [1.65, .65, 1], [-1, .43, 1], green); box(assembly, [1.75, .07, 1.1], [-1, .79, 1]);
      const routes = [[[-1.1, .65, -.2], [-.85, .65, -.2], [-.7, 1.05, -.5], [0, 1.05, -.5]], [[.35, 1.05, -.5], [.6, 1.4, -.5], [2.1, 1.4, -.5]], [[2.1, .2, -.5], [2.65, .3, -.5], [2.65, .3, 1], [1.7, .6, 1]], [[.4, .6, 1], [-.1, .6, 1], [-1, .82, 1]]];
      for (const points of routes) {
        const curve = new THREE.CatmullRomCurve3(points.map(point => new THREE.Vector3(...point)));
        mesh(assembly, new THREE.TubeGeometry(curve, 48, .045, 9, false), steel, [0, 0, 0]);
        for (let index = 0; index < 4; index++) {
          const particle = mesh(assembly, new THREE.SphereGeometry(.045, 8, 6), accent, [0, 0, 0]);
          particles.push({ particle, curve, offset: index / 4 });
        }
      }
    }
    let separated = false; let frame; let phase = 0; const clock = new THREE.Clock();
    let ready = false;
    const resize = () => {
      if (!host.clientWidth || !host.clientHeight) return;
      camera.aspect = host.clientWidth / host.clientHeight; camera.updateProjectionMatrix();
      renderer.setSize(host.clientWidth, host.clientHeight); renderer.render(scene, camera);
      if (!ready) { ready = true; valuesRef.current.onReady?.(); }
    };
    const observer = new ResizeObserver(resize); observer.observe(host); resize();
    let start;
    const raycaster = new THREE.Raycaster();
    const pointerDown = event => { start = [event.clientX, event.clientY]; };
    const pointerUp = event => {
      if (!start || Math.hypot(event.clientX - start[0], event.clientY - start[1]) > 5) return;
      const bounds = renderer.domElement.getBoundingClientRect();
      raycaster.setFromCamera(new THREE.Vector2((event.clientX - bounds.left) / bounds.width * 2 - 1, -(event.clientY - bounds.top) / bounds.height * 2 + 1), camera);
      const hit = raycaster.intersectObjects(selectable)[0];
      if (hit) valuesRef.current.onSelect?.(hit.object.userData.component);
      start = null;
    };
    renderer.domElement.addEventListener('pointerdown', pointerDown); renderer.domElement.addEventListener('pointerup', pointerUp);
    sceneRef.current = { reset, zoom: multiplier => {
      const direction = camera.position.clone().sub(controls.target);
      direction.setLength(THREE.MathUtils.clamp(direction.length() * multiplier, controls.minDistance, controls.maxDistance));
      camera.position.copy(controls.target).add(direction); controls.update();
    }, separate: value => { separated = value; }, focus: id => { const component = groups.get(id); if (component) controls.target.copy(component.position); controls.update(); } };
    setExploded(false);
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), .05);
      const values = valuesRef.current;
      if (values.playing && !matchMedia('(prefers-reduced-motion: reduce)').matches) phase = (phase + delta * Math.max(0, values.flowRatio) * .3) % 1;
      for (const component of groups.values()) {
        const target = component.userData.home.clone(); if (separated) target.add(component.userData.offset);
        component.position.lerp(target, 1 - Math.exp(-delta * 9));
        component.traverse(object => { if (object.isMesh) { object.material.emissive.set(values.selected === component.userData.id ? '#476a36' : '#000000'); object.material.emissiveIntensity = .45; } });
      }
      for (const { particle, curve, offset } of particles) { particle.visible = !separated; particle.position.copy(curve.getPoint((phase + offset) % 1)); }
      controls.update(); renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); controls.dispose();
      renderer.domElement.removeEventListener('pointerdown', pointerDown); renderer.domElement.removeEventListener('pointerup', pointerUp);
      scene.traverse(item => { item.geometry?.dispose(); if (Array.isArray(item.material)) item.material.forEach(entry => entry.dispose()); else item.material?.dispose(); });
      renderer.dispose(); renderer.domElement.remove(); sceneRef.current = null;
    };
  }, [profile, preview]);

  const components = profile === 'bearing' ? [['drive', 'Motor'], ['support', 'Support bearing'], ['bearing', 'Test bearing'], ['encoder', 'Encoder']] : [['pump', 'Pump'], ['valve', 'Control valve'], ['accumulator', 'Accumulator'], ['cooler', 'Cooler']];
  return <div className={`equipment-stage${preview ? ' equipment-preview' : ''}`} aria-label={preview ? 'Hydraulic reference assembly' : undefined}>
    <div className="scene-host" ref={hostRef}>{unavailable && <p className="scene-unavailable">3D rendering unavailable. Recorded signals and analysis remain accessible.</p>}</div>
    {!preview && <><div className="scene-toolbar" role="toolbar" aria-label="Equipment view controls">
      <button onClick={() => sceneRef.current?.zoom(.85)} aria-label="Zoom in" title="Zoom in"><Plus size={17} /></button>
      <button onClick={() => sceneRef.current?.zoom(1.18)} aria-label="Zoom out" title="Zoom out"><Minus size={17} /></button>
      <button onClick={() => { const next = !exploded; setExploded(next); sceneRef.current?.separate(next); }} aria-pressed={exploded} aria-label="Separate components" title={exploded ? 'Assemble components' : 'Separate components'}><Expand size={17} /></button>
      <button onClick={() => sceneRef.current?.focus(selected)} disabled={!selected} aria-label="Focus selected component" title="Focus selected component"><Focus size={17} /></button>
      <button onClick={() => sceneRef.current?.reset()} aria-label="Reset equipment view" title="Reset equipment view"><RotateCcw size={17} /></button>
    </div>
    <div className="component-selector" role="group" aria-label="Reference components">{components.map(([id, label]) => <button key={id} aria-pressed={selected === id} onClick={() => onSelect(id)}><Layers3 size={12} />{label}</button>)}</div>
    <span className="scene-disclaimer">Reference geometry · recorded playback · sensor placement unverified</span></>}
  </div>;
}