// Import dependencies
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TDSLoader } from 'three/examples/jsm/loaders/TDSLoader';

export default function ThreeEntryPoint(sceneRef) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x282c34);

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
  );
  camera.position.z = 50;
  camera.position.y = -50;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  sceneRef.appendChild(renderer.domElement);

  let controls = new OrbitControls(camera, sceneRef);
  controls.target.set(0, 0, 0);
  controls.rotateSpeed = 0.5;
  controls.update();

  const loader = new TDSLoader();
  loader.load('assets/models/animal_cell.3ds', (object) => {
    scene.add(object);
  });

  const frontSpot = new THREE.SpotLight(0xeeeece);
  const frontSpot2 = new THREE.SpotLight(0xeeeece);

  frontSpot.position.set(1000, 1000, 1000);
  frontSpot2.position.set(-500, -500, -500);

  scene.add(frontSpot);
  scene.add(frontSpot2);

  const animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();
}
