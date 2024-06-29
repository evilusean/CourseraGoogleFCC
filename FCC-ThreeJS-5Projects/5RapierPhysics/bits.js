import { EffectComposer } from "jsm/postprocessing/EffectComposer.js"; // Import EffectComposer for post-processing
import { RenderPass } from "jsm/postprocessing/RenderPass.js"; // Import RenderPass for rendering the scene
import { UnrealBloomPass } from "jsm/postprocessing/UnrealBloomPass.js"; // Import UnrealBloomPass for bloom effect

// post-processing
const renderScene = new RenderPass(scene, camera); // Create a RenderPass to render the scene
const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.4, 100); // Create an UnrealBloomPass for bloom effect
bloomPass.threshold = 0.002; // Set the threshold for bloom effect
bloomPass.strength = 2.0; // Set the strength of the bloom effect
bloomPass.radius = 0; // Set the radius of the bloom effect
const composer = new EffectComposer(renderer); // Create an EffectComposer for post-processing
composer.addPass(renderScene); // Add the RenderPass to the composer
composer.addPass(bloomPass); // Add the UnrealBloomPass to the composer

// 2) Orbit controls
import { OrbitControls } from 'jsm/controls/OrbitControls.js'; // Import OrbitControls for camera control
//
const controls = new OrbitControls(camera, renderer.domElement); // Create OrbitControls for the camera
controls.enableDamping = true; // Enable damping for smooth camera movement
controls.dampingFactor = 0.03; // Set the damping factor for camera movement
// render
controls.update(); // Update the OrbitControls

// 3) physics
import { getBody, getMouseBall } from "./getBodies.js"; // Import functions to create physics bodies
//
const body = getBody(RAPIER, world); // Create a physics body using RAPIER and the world
const mouseBall = getMouseBall(RAPIER, world); // Create a mouse ball physics body
scene.add(mouseBall.mesh); // Add the mouse ball mesh to the scene
// render 
bodies.forEach((b) => { // Iterate through each physics body
    b.update(); // Update the physics body
  });
  mouseBall.update(mousePos); // Update the mouse ball position

// 4) physics
import RAPIER from 'https://cdn.skypack.dev/@dimforge/rapier3d-compat@0.11.2'; // Import RAPIER physics library
//
await RAPIER.init(); // Initialize RAPIER
let gravity = { x: 0.0, y: 0, z: 0.0 }; // Define gravity vector
let world = new RAPIER.World(gravity); // Create a RAPIER world with gravity
// render 
world.step(); // Step the physics world
/*
  1) basic scene
  2) populate with geometry
  3) wire up mouse controls
  4) add physics
  5) add Orbit Controls
  6) add post processing
*/