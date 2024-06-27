import * as THREE from "three";
import { OrbitControls } from 'jsm/controls/OrbitControls.js';
import spline from "./spline.js"; //path data
import { EffectComposer } from "jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "jsm/postprocessing/UnrealBloomPass.js";

//The core of this is to create a tube, and then attaching a camera that follows a path inside of that tube

//BoilerPlate JS
const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x000000, 0.3); //arguments = color of fog, and density
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000); //view degrees, aspect ratio, min, max
camera.position.z = 5; //camera position
const renderer = new THREE.WebGLRenderer(); //renderer
renderer.setSize(w, h); //aspect ratio screen/canvas size
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

// post-processing
const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 1.5, 0.4, 100);
bloomPass.threshold = 0.002;
bloomPass.strength = 3.5;
bloomPass.radius = 0;
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);

// create a line geometry from the spline
const points = spline.getPoints(100); //creates the line from 100 points of 'spline.js'
const geometry = new THREE.BufferGeometry().setFromPoints(points); //set vertices from above points
const material = new THREE.LineBasicMaterial({ color: 0xff0000 }); //use a red material
const line = new THREE.Line(geometry, material); //create the mesh/line from the points
// scene.add(line); //this line isn't used

// create a tube geometry from the spline
const tubeGeo = new THREE.TubeGeometry(spline, 222, 0.65, 16, true); 
//pass in the spline to create the tube geometry arguments = source, divisions on length, radius,radial division = # of divisions along that radius, closed or not

// create edges geometry from the spline
const edges = new THREE.EdgesGeometry(tubeGeo, 0.2); //arguments = source, line width
const lineMat = new THREE.LineBasicMaterial({ color: 0xff0000 }); //line material for edges geometry
const tubeLines = new THREE.LineSegments(edges, lineMat); //create line mesh from line segments
scene.add(tubeLines); //adds it to scene

const numBoxes = 55;
const size = 0.075;
const boxGeo = new THREE.BoxGeometry(size, size, size);
for (let i = 0; i < numBoxes; i += 1) {
  const boxMat = new THREE.MeshBasicMaterial({ 
    color: 0xffffff, //red color
    wireframe: true //wireframe, for the tube
  });
  const box = new THREE.Mesh(boxGeo, boxMat);
  const p = (i / numBoxes + Math.random() * 0.1) % 1;
  const pos = tubeGeo.parameters.path.getPointAt(p);
  pos.x += Math.random() - 0.4;
  pos.z += Math.random() - 0.4;
  box.position.copy(pos);
  const rote = new THREE.Vector3(
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    Math.random() * Math.PI
  );
  box.rotation.set(rote.x, rote.y, rote.z);
  const edges = new THREE.EdgesGeometry(boxGeo, 0.2);
  const color = new THREE.Color().setHSL(0.7 - p, 1, 0.5);
  const lineMat = new THREE.LineBasicMaterial({ color });
  const boxLines = new THREE.LineSegments(edges, lineMat);
  boxLines.position.copy(pos);
  boxLines.rotation.set(rote.x, rote.y, rote.z);
  // scene.add(box);
  scene.add(boxLines);
}

//Fly through - progresses along the curve/tube - 
function updateCamera(t) {
  const time = t * 0.1; //grabs a point along the spline, the points are between 0 and 1
  const looptime = 10 * 1000; 
  const p = (time % looptime) / looptime; // will give the remainder of dividing by the looptime, and then divides that by the looptime again 
  const pos = tubeGeo.parameters.path.getPointAt(p); //gets current position
  const lookAt = tubeGeo.parameters.path.getPointAt((p + 0.03) % 1); //calculates a position slightly ahead of current 
  camera.position.copy(pos); // tells camera to move to that position 
  camera.lookAt(lookAt); //tells camera to look at position just slightly ahead
}

function animate(t = 0) {
  requestAnimationFrame(animate); //every time you call request animation, it passes in a 't' timestamp- then pass that timestamp into update camera method
  updateCamera(t); //pass the (t) to above function updateCamera
  composer.render(scene, camera);
  controls.update();
}
animate();

function handleWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', handleWindowResize, false);
