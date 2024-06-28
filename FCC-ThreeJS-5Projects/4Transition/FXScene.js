import * as THREE from "three"; // Import the Three.js library

//change this to add more or fewer on screen
const objCount = 5000; // Define the number of objects to be created
function getMeshProps() { // Define a function to generate properties for the objects
  const arr = []; // Initialize an empty array to store the object properties
  for (let i = 0; i < objCount; i += 1) { // Loop through the desired number of objects
    arr.push( // Push the properties of each object into the array
      {
        position: { // Define the position of the object
          x: Math.random() * 10000 - 5000, // Random x-coordinate between -5000 and 5000
          y: Math.random() * 6000 - 3000, // Random y-coordinate between -3000 and 3000
          z: Math.random() * 8000 - 4000 // Random z-coordinate between -4000 and 4000
        },
        rotation: { // Define the rotation of the object
          x: Math.random() * 2 * Math.PI, // Random x-rotation between 0 and 2π
          y: Math.random() * 2 * Math.PI, // Random y-rotation between 0 and 2π
          z: Math.random() * 2 * Math.PI, // Random z-rotation between 0 and 2π
        },
        scale: Math.random() * 200 + 100 // Random scale between 100 and 300
      }
    )
  }
  return arr; // Return the array of object properties
}

const dummyProps = getMeshProps(); // Call the getMeshProps function and store the returned array in dummyProps
function getMesh(material, needsAnimatedColor = false) { // Define a function to create a mesh with the given material and optional animated color
  //change this to increase or decrease size of objects
  const size = 0.25; // Define the size of the object
  //can change the object for personalizeASean - Icos -> Boxes or w/e
  const geometry = new THREE.IcosahedronGeometry(size, 1); // Create an IcosahedronGeometry object with the specified size and detail
  const mesh = new THREE.InstancedMesh(geometry, material, objCount); // Create an InstancedMesh object using the geometry, material, and object count

  const dummy = new THREE.Object3D(); // Create a dummy Object3D to store the object's transformation
  const color = new THREE.Color(); // Create a Color object to store the object's color
  let props; // Declare a variable to store the object's properties
  for (let i = 0; i < objCount; i++) { // Loop through the desired number of objects
    props = dummyProps[i]; // Get the properties of the current object from the dummyProps array
    dummy.position.x = props.position.x; // Set the x-coordinate of the dummy object
    dummy.position.y = props.position.y; // Set the y-coordinate of the dummy object
    dummy.position.z = props.position.z; // Set the z-coordinate of the dummy object

    dummy.rotation.x = props.rotation.x; // Set the x-rotation of the dummy object
    dummy.rotation.y = props.rotation.y; // Set the y-rotation of the dummy object
    dummy.rotation.z = props.rotation.z; // Set the z-rotation of the dummy object

    dummy.scale.set(props.scale, props.scale, props.scale); // Set the scale of the dummy object

    dummy.updateMatrix(); // Update the matrix of the dummy object

    mesh.setMatrixAt(i, dummy.matrix); // Set the matrix of the mesh at the current index
    //Can change/use below to make it do one color - looks cleaner IMO
    if (needsAnimatedColor) { mesh.setColorAt(i, color.setScalar(0.1 + 0.9 * Math.random())); } // Set the color of the mesh at the current index if animated color is needed
    //Can change/use the below HSL color instead, instead of one color, many colors
    //if (needsAnimatedColor) { mesh.setColorAt(i, color.setHSL(Math.random(), 1.0, 0.5)); }
  }
  return mesh; // Return the created mesh
}

// sets up the scene, using a shared renderer, 
export function getFXScene({ renderer, material, clearColor, needsAnimatedColor = false }) { // Define a function to create an FX scene with the given parameters

  const w = window.innerWidth; // Get the width of the window
  const h = window.innerHeight; // Get the height of the window
  const camera = new THREE.PerspectiveCamera( 50, w / h, 1, 10000); // Create a PerspectiveCamera object with the specified field of view, aspect ratio, near plane, and far plane
  camera.position.z = 2000; // Set the z-position of the camera

  // Setup scene
  const scene = new THREE.Scene(); // Create a Scene object
  scene.fog = new THREE.FogExp2(clearColor, 0.0002); // Add a FogExp2 object to the scene with the specified color and density

  scene.add(new THREE.HemisphereLight(0xffffff, 0x555555, 1.0)); // Add a HemisphereLight object to the scene with the specified colors and intensity
  const mesh = getMesh(material, needsAnimatedColor); // Create a mesh using the getMesh function with the given material and optional animated color
  scene.add(mesh); // Add the mesh to the scene

  //frame buffer object, a container for the renderer
  const fbo = new THREE.WebGLRenderTarget(w, h); // Create a WebGLRenderTarget object with the specified width and height

  const rotationSpeed = new THREE.Vector3(0.1, -0.2, 0.15); // Define the rotation speed of the mesh
  const update = (delta) => { // Define a function to update the scene
    mesh.rotation.x += delta * rotationSpeed.x; // Update the x-rotation of the mesh
    mesh.rotation.y += delta * rotationSpeed.y; // Update the y-rotation of the mesh
    mesh.rotation.z += delta * rotationSpeed.z; // Update the z-rotation of the mesh
    if (needsAnimatedColor) {
      material.color.setHSL(0.1 + 0.5 * Math.sin(0.0002 * Date.now()), 1, 0.5); // Update the color of the material if animated color is needed
    }
  }

  const render = (delta, rtt) => { // Define a function to render the scene
    update(delta); // Update the scene

    renderer.setClearColor(clearColor); // Set the clear color of the renderer

    if (rtt) { // If rendering to a render target
      renderer.setRenderTarget(fbo); // Set the render target of the renderer
      renderer.clear(); // Clear the render target
      renderer.render(scene, camera); // Render the scene to the render target
    } else { // If rendering to the screen
      renderer.setRenderTarget(null); // Set the render target to null
      renderer.render(scene, camera); // Render the scene to the screen
    }
  };

  return { fbo, render, update }; // Return an object containing the render target, render function, and update function
};
