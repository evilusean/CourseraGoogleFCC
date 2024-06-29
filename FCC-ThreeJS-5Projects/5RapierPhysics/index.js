import * as THREE from "three";
import { getBody, getMouseBall } from "./getBodies.js";
import RAPIER from 'https://cdn.skypack.dev/@dimforge/rapier3d-compat@0.11.2';
import { EffectComposer } from "jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "jsm/postprocessing/UnrealBloomPass.js";

//Boilerplate Scene Setup
const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

let mousePos = new THREE.Vector2(); // container for mouse position, 

await RAPIER.init(); //initialize the physics enginer
const gravity = { x: 0.0, y: 0, z: 0.0 }; //define gravity
const world = new RAPIER.World(gravity); //create a 'world' passing in that gravity

// post-processing - bloom effect for lighing
const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.4, 100);
bloomPass.threshold = 0.005;
bloomPass.strength = 2.0;
bloomPass.radius = 0;
const composer = new EffectComposer(renderer); //replaces the renderer in the scene
composer.addPass(renderScene);
composer.addPass(bloomPass);

const numBodies = 100; //how many objects you want
const bodies = [];
for (let i = 0; i < numBodies; i++) {
  const body = getBody(RAPIER, world); //for each geometry body, use the RAPIER physics engine, and world gravity
  bodies.push(body);
  scene.add(body.mesh);
}

const mouseBall = getMouseBall(RAPIER, world); //mouse ball(the light) args = use the RAPIER physics engine, and world gravity
scene.add(mouseBall.mesh);

const hemiLight = new THREE.HemisphereLight(0x00bbff, 0xaa00ff);
hemiLight.intensity = 0.2;
scene.add(hemiLight);


function animate() {
  requestAnimationFrame(animate);
  world.step(); //add the gravity world 
  mouseBall.update(mousePos);
  bodies.forEach(b => b.update()); //gives the balls physics, attracted to the center of the screen
  composer.render(scene, camera);
  // controls.update();
}

animate();

function handleWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', handleWindowResize, false);

// mouse move handler
function handleMouseMove (evt) {
  mousePos.x = (evt.clientX / window.innerWidth) * 2 - 1;
  mousePos.y = -(evt.clientY / window.innerHeight) * 2 + 1;
}
window.addEventListener('mousemove', handleMouseMove, false);