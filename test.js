function createSpinningGlobe() {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a sphere geometry
    const geometry = new THREE.SphereGeometry(2, 32, 32);

    // Load a texture for the globe
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('path/to/texture.jpg');

    // Create a material with the texture
    const material = new THREE.MeshBasicMaterial({ map: texture });

    // Create a mesh with the geometry and material
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Rotate the globe
        globe.rotation.y += 0.01;

        // Render the scene with the camera
        renderer.render(scene, camera);
    }

    // Start the animation loop
    animate();
}
