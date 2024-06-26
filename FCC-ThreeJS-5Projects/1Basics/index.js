import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true})
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;
controls.enablePan = false;
controls.enableZoom = false;


const geo = new THREE.IcosahedronGeometry(1.0, 2);
const mat = new THREE.MeshStandardMaterial({ 
    color: 0xffffff,
    flatShading: true,
})
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const wireMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const wireMesh = new THREE.Mesh(geo, wireMat);
wireMesh.scale.setScalar(1.01);
mesh.add(wireMesh);

const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
scene.add(hemiLight);


function animate(t = 0) {
    requestAnimationFrame(animate);
    //uncomment below 2 to rotate
    //mesh.rotation.x += 0.01;
    //mesh.rotation.y += 0.01;
    mesh.scale.setScalar(Math.cos(t * 0.001) + 1.0) //Will cause the orb to shrink and expand over and over again
    renderer.render(scene, camera);
    controls.update();
}
animate();



//renderer.render(scene, camera);







