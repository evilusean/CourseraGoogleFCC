import * as THREE from "three"; // Import the Three.js library

const sceneMiddle = new THREE.Vector3(0, 0, 0); // Define a Vector3 representing the center of the scene

function getBody(RAPIER, world) { // Define a function to create a physics body
    const size = 0.1 + Math.random() * 0.25; // Generate a random size for the body between 0.1 and 0.35
    const range = 6; // Define the range for random position generation
    const density = size  * 1.0; // Calculate the density of the body based on its size
    let x = Math.random() * range - range * 0.5; // Generate a random x-coordinate within the range
    let y = Math.random() * range - range * 0.5 + 3; // Generate a random y-coordinate within the range, shifted up by 3
    let z = Math.random() * range - range * 0.5; // Generate a random z-coordinate within the range
    // physics - RIGID BODY
    let rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic() // Create a dynamic rigid body description
            .setTranslation(x, y, z); // Set the initial translation of the rigid body
    let rigid = world.createRigidBody(rigidBodyDesc); // Create a rigid body in the world using the description
    // KINEMATIC POSITION BASED = good for when you use a mouse movement / collider - Set the 'Density' of the ball here
    let colliderDesc = RAPIER.ColliderDesc.ball(size).setDensity(density); // Create a collider description for a ball with the specified size and density
    world.createCollider(colliderDesc, rigid); // Create a collider in the world using the description and the rigid body

    const geometry = new THREE.IcosahedronGeometry(size, 1); // Create an IcosahedronGeometry object with the specified size and detail
    const material = new THREE.MeshStandardMaterial({ // Create a MeshStandardMaterial object with the specified properties
      color: 0xffffff, // Set the color of the material to white
      flatShading: true // Enable flat shading for the material
    });
    const mesh = new THREE.Mesh(geometry, material); // Create a Mesh object using the geometry and material

    const wireMat = new THREE.MeshBasicMaterial({ // Create a MeshBasicMaterial object for the wireframe
      color: 0x990000, // Set the color of the wireframe to red
      wireframe: true // Enable wireframe for the material
    });
    const wireMesh = new THREE.Mesh(geometry, wireMat); // Create a Mesh object for the wireframe using the geometry and wireframe material
    wireMesh.scale.setScalar(1.001); // Scale the wireframe slightly larger than the mesh
    mesh.add(wireMesh); // Add the wireframe mesh as a child of the main mesh
    
    // RESETS THE FORCES -> MIDDLE OF SCENE EVERYTHING IS ATTRACTED TO 
    function update () { // Define a function to update the physics body and its corresponding mesh
      rigid.resetForces(true); // Reset the forces acting on the rigid body
      let { x, y, z } = rigid.translation(); // Get the translation of the rigid body
      let pos = new THREE.Vector3(x, y, z); // Create a Vector3 representing the position of the rigid body
      let dir = pos.clone().sub(sceneMiddle).normalize(); // Calculate the direction vector from the rigid body to the center of the scene
      rigid.addForce(dir.multiplyScalar(-0.5), true); // Apply a force to the rigid body in the opposite direction of the center of the scene
      mesh.position.set(x, y, z); // Update the position of the mesh to match the rigid body's translation
    }
    return { mesh, rigid, update }; // Return an object containing the mesh, rigid body, and update function
  }

  function getMouseBall (RAPIER, world) { // Define a function to create a mouse ball physics body
    const mouseSize = 0.25; // Set the size of the mouse ball
    const geometry = new THREE.IcosahedronGeometry(mouseSize, 8); // Create an IcosahedronGeometry object with the specified size and detail
    const material = new THREE.MeshStandardMaterial({ // Create a MeshStandardMaterial object with the specified properties
      color: 0xffffff, // Set the color of the material to white
      emissive: 0xffffff, // Set the emissive color of the material to white
    });
    const mouseLight = new THREE.PointLight(0xffffff, 1); // Create a PointLight object with the specified color and intensity
    const mouseMesh = new THREE.Mesh(geometry, material); // Create a Mesh object using the geometry and material
    mouseMesh.add(mouseLight); // Add the point light as a child of the mouse mesh
    // RIGID BODY
    let bodyDesc = RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(0, 0, 0) // Create a kinematic rigid body description with initial translation at the origin
    let mouseRigid = world.createRigidBody(bodyDesc); // Create a rigid body in the world using the description
    // COLLIDER : CHANGE THIS TO CHANGE THE IMPACT (SCALE UP/DOWN)
    let dynamicCollider = RAPIER.ColliderDesc.ball(mouseSize * 3.0); // Create a collider description for a ball with the specified size
    world.createCollider(dynamicCollider, mouseRigid); // Create a collider in the world using the description and the rigid body
    // MOUSE RIGID BODY = MOUSE POSITION THEN UPDATE THE MESH
    function update (mousePos) { // Define a function to update the position of the mouse ball based on mouse input
      mouseRigid.setTranslation({ x: mousePos.x * 5, y: mousePos.y * 5, z: 0.2 }); // Set the translation of the rigid body based on the mouse position
      let { x, y, z } = mouseRigid.translation(); // Get the translation of the rigid body
      mouseMesh.position.set(x, y, z); // Update the position of the mesh to match the rigid body's translation
    }
    return { mesh: mouseMesh, update }; // Return an object containing the mesh and update function
  }

  export { getBody, getMouseBall }; // Export the getBody and getMouseBall functions