import * as THREE from "three"; // Import the Three.js library
import { getBody, getMouseBall } from "./getBodies.js"; // Import functions to create physics bodies
import RAPIER from 'https://cdn.skypack.dev/@dimforge/rapier3d-compat@0.11.2'; // Import RAPIER physics library
import { EffectComposer } from "jsm/postprocessing/EffectComposer.js"; // Import EffectComposer for post-processing
import { RenderPass } from "jsm/postprocessing/RenderPass.js"; // Import RenderPass for rendering the scene
import { UnrealBloomPass } from "jsm/postprocessing/UnrealBloomPass.js"; // Import UnrealBloomPass for bloom effect

//Boilerplate Scene Setup
const w = window.innerWidth; // Get the width of the window
const h = window.innerHeight; // Get the height of the window
const scene = new THREE.Scene(); // Create a new scene
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000); // Create a perspective camera
camera.position.z = 5; // Set the camera's position
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Create a WebGL renderer with antialiasing
renderer.setSize(w, h); // Set the size of the renderer
renderer.toneMapping = THREE.ACESFilmicToneMapping; // Set the tone mapping of the renderer
renderer.outputColorSpace = THREE.SRGBColorSpace; // Set the output color space of the renderer
document.body.appendChild(renderer.domElement); // Append the renderer's canvas to the document body

let mousePos = new THREE.Vector2(); // Container for mouse position

await RAPIER.init(); // Initialize the RAPIER physics engine
const gravity = { x: 0.0, y: 0, z: 0.0 }; // Define gravity vector
const world = new RAPIER.World(gravity); // Create a RAPIER world with gravity

// post-processing - bloom effect for lighing
const renderScene = new RenderPass(scene, camera); // Create a RenderPass to render the scene
const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.4, 100); // Create an UnrealBloomPass for bloom effect
bloomPass.threshold = 0.005; // Set the threshold for bloom effect
bloomPass.strength = 2.0; // Set the strength of the bloom effect
bloomPass.radius = 0; // Set the radius of the bloom effect
const composer = new EffectComposer(renderer); // Create an EffectComposer for post-processing
composer.addPass(renderScene); // Add the RenderPass to the composer
composer.addPass(bloomPass); // Add the UnrealBloomPass to the composer

const numBodies = 100; // Number of physics bodies to create
const bodies = []; // Array to store the physics bodies
for (let i = 0; i < numBodies; i++) {
  const body = getBody(RAPIER, world); // Create a physics body using RAPIER and the world
  bodies.push(body); // Add the body to the array
  scene.add(body.mesh); // Add the body's mesh to the scene
}

const mouseBall = getMouseBall(RAPIER, world); // Create a mouse ball physics body
scene.add(mouseBall.mesh); // Add the mouse ball mesh to the scene

const hemiLight = new THREE.HemisphereLight(0x00bbff, 0xaa00ff); // Create a hemisphere light
hemiLight.intensity = 0.2; // Set the intensity of the light
scene.add(hemiLight); // Add the light to the scene


function animate() {
  requestAnimationFrame(animate); // Request the next frame for animation
  world.step(); // Step the physics world
  mouseBall.update(mousePos); // Update the mouse ball's position
  bodies.forEach(b => b.update()); // Update each physics body
  composer.render(scene, camera); // Render the scene using the composer
  // controls.update();
}

animate(); // Start the animation loop

function handleWindowResize () { // Function to handle window resize events
  camera.aspect = window.innerWidth / window.innerHeight; // Update the camera's aspect ratio
  camera.updateProjectionMatrix(); // Update the camera's projection matrix
  renderer.setSize(window.innerWidth, window.innerHeight); // Resize the renderer
}
window.addEventListener('resize', handleWindowResize, false); // Add a resize event listener

// mouse move handler
function handleMouseMove (evt) { // Function to handle mouse move events
  mousePos.x = (evt.clientX / window.innerWidth) * 2 - 1; // Calculate the normalized mouse x-coordinate
  mousePos.y = -(evt.clientY / window.innerHeight) * 2 + 1; // Calculate the normalized mouse y-coordinate
}
window.addEventListener('mousemove', handleMouseMove, false); // Add a mouse move event listener