import * as THREE from "three"; // Import the Three.js library

function getBody() { // Define a function to create a body mesh
  const size = 0.5; // Set the size of the body mesh
  const range = 2; // Set the range for random position generation
  let x = Math.random() * range - range * 0.5; // Generate a random x-coordinate within the range
  let y = Math.random() * range - range * 0.5 + 0; // Generate a random y-coordinate within the range
  let z = Math.random() * range - range * 0.5; // Generate a random z-coordinate within the range
  const geometry = new THREE.IcosahedronGeometry(size, 1); // Create an IcosahedronGeometry object with the specified size and detail
  const material = new THREE.MeshStandardMaterial({ // Create a MeshStandardMaterial object with the specified properties
    color: 0xffffff, // Set the color of the material to white
    flatShading: true // Enable flat shading for the material
  });
  const mesh = new THREE.Mesh(geometry, material); // Create a Mesh object using the geometry and material
  mesh.position.set(x, y, z); // Set the position of the mesh to the randomly generated coordinates
  const wireMat = new THREE.MeshBasicMaterial({ // Create a MeshBasicMaterial object for the wireframe
    color: 0x000, // Set the color of the wireframe to black
    wireframe: true // Enable wireframe for the material
  });
  const wireMesh = new THREE.Mesh(geometry, wireMat); // Create a Mesh object for the wireframe using the geometry and wireframe material
  wireMesh.scale.setScalar(1.001); // Scale the wireframe slightly larger than the mesh
  mesh.add(wireMesh); // Add the wireframe mesh as a child of the main mesh
  return { mesh }; // Return an object containing the mesh
}

//Mesh for mouse ball(floating light)
function getMouseBall() { // Define a function to create a mouse ball mesh
  const mouseSize = 0.25; // Set the size of the mouse ball
  const geometry = new THREE.IcosahedronGeometry(mouseSize, 8); // Create an IcosahedronGeometry object with the specified size and detail
  const material = new THREE.MeshStandardMaterial({ // Create a MeshStandardMaterial object with the specified properties
    color: 0xffffff, // Set the color of the material to white
    emissive: 0xffffff, // Set the emissive color of the material to white
  });
  const mouseLight = new THREE.PointLight(0xffffff, 2); // Create a PointLight object with the specified color and intensity
  const mouseMesh = new THREE.Mesh(geometry, material); // Create a Mesh object using the geometry and material
  mouseMesh.add(mouseLight); // Add the point light as a child of the mouse mesh

  function update(mousePos) { // Define a function to update the position of the mouse ball
    let { x, y, z } = { x: mousePos.x * 5, y: mousePos.y * 5, z: 1 }; // Calculate the new position based on the mouse position
    mouseMesh.position.set(x, y, z); // Set the position of the mouse mesh to the calculated position
  }
  return { mesh: mouseMesh, update }; // Return an object containing the mouse mesh and the update function
}

export { getBody, getMouseBall }; // Export the getBody and getMouseBall functions