import * as THREE from "three";
import { OrbitControls } from 'jsm/controls/OrbitControls.js'; // don't forget the .js - for some reason

import getStarfield from "./src/getStarfield.js";
import { getFresnelMat } from "./src/getFresnelMat.js";

//ThreeJS BoilerPlate - Sets up the scene
const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000); //viewport degrees, viewport aspect ratio, min, max
camera.position.z = 5;//initial camera position
const renderer = new THREE.WebGLRenderer({ antialias: true }); // create a renderer to animate the scene
renderer.setSize(w, h); // width / height = aspect ratio
document.body.appendChild(renderer.domElement); // add the renderer to the page, will create the canvas 
// THREE.ColorManagement.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

const earthGroup = new THREE.Group(); //instead of adding to the scene, add to the earthgroup, so you can change all with one 
earthGroup.rotation.z = -23.4 * Math.PI / 180; //Earth Rotation
scene.add(earthGroup); //add the earthgroup to the scene
new OrbitControls(camera, renderer.domElement); // allows you to move around the scene
const detail = 12; //change this to change how round the ico geo is, less detail = less round/fewer faces
const loader = new THREE.TextureLoader(); //In order to use a texture(picture) we need to create a loader
const geometry = new THREE.IcosahedronGeometry(1, detail); //1 unit, with a detail of 12
const material = new THREE.MeshPhongMaterial({
  map: loader.load("./textures/00_earthmap1k.jpg"), //will load the earth textures we downloaded
  specularMap: loader.load("./textures/02_earthspec1k.jpg"), //uses the loader we previously created 
  bumpMap: loader.load("./textures/01_earthbump1k.jpg"),
  bumpScale: 0.04,
});
// material.map.colorSpace = THREE.SRGBColorSpace;
const earthMesh = new THREE.Mesh(geometry, material);
earthGroup.add(earthMesh);

const lightsMat = new THREE.MeshBasicMaterial({
  map: loader.load("./textures/03_earthlights1k.jpg"), // this is for actual city lights, aesthetic AF
  blending: THREE.AdditiveBlending, //will allow you to see the original earth underneath it and blend it with the lights - very cool - lights will be on in day 
});
const lightsMesh = new THREE.Mesh(geometry, lightsMat); //lights up the dark side of earth, reusing iso geo
earthGroup.add(lightsMesh); //add to the earth group so you can change the values with the group

const cloudsMat = new THREE.MeshStandardMaterial({
  map: loader.load("./textures/04_earthcloudmap.jpg"), //clouds asset, use loader to load
  transparent: true, //makes the clouds transparent
  opacity: 0.8, //makes semi see through clouds(mesh texture)
  blending: THREE.AdditiveBlending, //blends clouds with earth topo and city lights
  alphaMap: loader.load('./textures/05_earthcloudmaptrans.jpg'), //shows clouds 
  // alphaTest: 0.3,
});
const cloudsMesh = new THREE.Mesh(geometry, cloudsMat); //creates mesh from the texture and iso geo
cloudsMesh.scale.setScalar(1.003); //makes this mesh slightly larger so it sits on top of the city lights and the topography
earthGroup.add(cloudsMesh); //adds it to the earthgroup

const fresnelMat = getFresnelMat();
const glowMesh = new THREE.Mesh(geometry, fresnelMat);
glowMesh.scale.setScalar(1.01);
earthGroup.add(glowMesh);

const stars = getStarfield({numStars: 2000}); //allows you to set the amount of stars using 'getStarfield.js'
scene.add(stars);

const sunLight = new THREE.DirectionalLight(0xffffff, 2.0); //adds white sunlight, 
sunLight.position.set(-2, 0.5, 1.5); // sets the lights position
scene.add(sunLight); //add the sunlight to the scene

function animate() {
  requestAnimationFrame(animate);
  //mesh.scale.setScalar(Math.cos(t * 0.001) + 1.0) //Will cause the orb to shrink and expand over and over again 2DaMoon
  earthMesh.rotation.y += 0.002; //Starts the earth rotation
  lightsMesh.rotation.y += 0.002;
  cloudsMesh.rotation.y += 0.0023;
  glowMesh.rotation.y += 0.002;
  stars.rotation.y -= 0.0002;
  renderer.render(scene, camera);
}

animate();

function handleWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', handleWindowResize, false);
