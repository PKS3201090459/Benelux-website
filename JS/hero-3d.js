document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('3d-canvas-container');
    if (!container || typeof THREE === 'undefined') return;

    // Get brand colors strictly
    const brand1Hex = '#95B415'; // Greenish 
    const brand2Hex = '#D69113'; // Goldish

    // Scene setup
    const scene = new THREE.Scene();

    // Dimensions
    let width = container.clientWidth || window.innerWidth / 2;
    let height = container.clientHeight || 500;

    // Camera
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.z = window.innerWidth < 768 ? 24 : 18;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // High quality color rendering
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Refractive Liquid Glass Shape
    const glassGeo = new THREE.TorusKnotGeometry(2.2, 1.0, 256, 64);
    const glassMat = new THREE.MeshPhysicalMaterial({
        color: brand1Hex, // Tint the glass with the brand color
        emissive: brand2Hex,
        emissiveIntensity: 0.15, // Subtle inner glow of brand 2
        metalness: 0.3,
        roughness: 0.05,
        transmission: 1.0,  
        ior: 1.4,           
        thickness: 3.0,     
        transparent: true,
        side: THREE.DoubleSide
    });
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    mainGroup.add(glassMesh);

    // 2. The Floating Logo has been removed to resolve CORS issues on local file systems
    // and simplify the visual composition.


    // 3. Orbiting Colored Orbs (to refract through the glass)
    const orbGeo = new THREE.SphereGeometry(2.0, 32, 32);
    
    const orb1Mat = new THREE.MeshBasicMaterial({ color: brand1Hex });
    const orb1 = new THREE.Mesh(orbGeo, orb1Mat);
    scene.add(orb1);

    const orb2Mat = new THREE.MeshBasicMaterial({ color: brand2Hex });
    const orb2 = new THREE.Mesh(orbGeo, orb2Mat);
    scene.add(orb2);

    // Dynamic Brand Lighting
    scene.add(new THREE.AmbientLight(brand1Hex, 0.5));
    
    // Directional lights painted with brand colors
    const dirLight1 = new THREE.DirectionalLight(brand1Hex, 2.0);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(brand2Hex, 2.0);
    dirLight2.position.set(-10, -10, 5);
    scene.add(dirLight2);

    // Parallax logic
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', (event) => {
        handleInteraction(event.clientX, event.clientY);
    });

    document.addEventListener('touchmove', (event) => {
        if (event.touches.length > 0) {
            handleInteraction(event.touches[0].clientX, event.touches[0].clientY);
        }
    }, { passive: true });

    function handleInteraction(clientX, clientY) {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const nx = (clientX - centerX) / (rect.width / 2);
        const ny = (clientY - centerY) / (rect.height / 2);
        mouseX = nx * 0.25;
        mouseY = ny * 0.25;
    }

    window.addEventListener('resize', () => {
        width = container.clientWidth || window.innerWidth / 2;
        height = container.clientHeight || 500;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const t = clock.getElapsedTime();

        glassMesh.rotation.x = t * 0.08;
        glassMesh.rotation.y = t * 0.12;

        orb1.position.x = Math.sin(t * 0.6) * 5;
        orb1.position.y = Math.cos(t * 0.9) * 4;
        orb1.position.z = -4; 

        orb2.position.x = Math.cos(t * 0.5) * 5;
        orb2.position.y = Math.sin(t * 0.8) * 4;
        orb2.position.z = -4; 

        mainGroup.position.y = Math.sin(t * 1.5) * 0.15;

        mainGroup.rotation.y += (mouseX - mainGroup.rotation.y) * 0.04;
        mainGroup.rotation.x += (mouseY - mainGroup.rotation.x) * 0.04;

        renderer.render(scene, camera);
    }

    animate();
});
