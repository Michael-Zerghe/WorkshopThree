import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/controls/OrbitControls.js';

// RAND COLOR

function main() {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({ canvas });

    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 2;
    const far = 10000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 100;
    camera.position.y = 25;
    camera.position.x = 15;

    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 0, 0);
    controls.update();

    const scene = new THREE.Scene();


    // LIGHT 1
    {
        const color = 0xffffff;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-4, 10, -10);
        scene.add(light);
    }

    // LIGHT 2
    {
        const color = 0xffffff;
        const intensity = 0.5;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(3, 3, 4);
        scene.add(light);
    }


    // RESPONSIVE
    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

    function render() {
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }

        renderer.render(scene, camera);
    }


    render();

    controls.addEventListener('change', render);
    window.addEventListener('resize', render);

    // note: this is a workaround for an OrbitControls issue
    // in an iframe. Will remove once the issue is fixed in
    // three.js
    window.addEventListener('mousedown', (e) => {
        e.preventDefault();
        window.focus();
    });
    window.addEventListener('keydown', (e) => {
        e.preventDefault();
    });
}

main();