// import * as THREE from 'https://cdn.skypack.dev/three@0.130.1';
//import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/controls/OrbitControls.js';

let cam, scene, renderer, controls;
const meshArray = [];
let x = [];
let y = [];
let z = [];
const check = () => {    
    
    cam = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);
    cam.position.set(1, 4, 8);
    scene = new THREE.Scene();
    cam.lookAt(scene.position);
    const geo = new THREE.BoxGeometry();
    const mat = new THREE.MeshNormalMaterial();
    const cube = 6;
    for(let i = 0; i < cube; i ++) {
        const mesh = new THREE.Mesh(geo, mat);
        const pos = i / cube  * 2 * Math.PI;
        mesh.position.x = Math.cos(pos) * 3;
        mesh.position.y = Math.cos(pos) * 3;
        mesh.position.z = Math.sin(pos) * 3;
        scene.add(mesh);
        meshArray.push(mesh);
        x.push(mesh.position.x);
        y.push(mesh.position.y);
        z.push(mesh.position.z);
    }
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls( cam, renderer.domElement );
    controls.enableDamping = true;
    controls.rotateSpeed = 0.5;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.2;

    return x,y,z;
}
const animate = () => {
    requestAnimationFrame(animate);
    for (let el of meshArray ) {
        el.rotation.z += 0.004;
        el.rotation.x -= 0.004;
    }

    renderer.render(scene, cam);

}

const loop = () =>{
    renderer.setAnimationLoop(function(){
        for(let el of meshArray){
            if (el.position.x<=0){
                el.position.x +=0.01;
            }
            else{
                el.position.x -=0.01;
            }

            if(el.position.y<=0){
                el.position.y +=0.01;
            }
            else{
                el.position.y -=0.01;
            }
            if(el.position.z<=0){
                el.position.z +=0.01;
            }
            else{
                el.position.z -=0.01;
            }

        }
    })

    renderer.render(scene,cam);
}

check();
animate();

document.getElementById('button').addEventListener('click',() =>{
    if(active = true){
        loop();
        active = false;
    }
})