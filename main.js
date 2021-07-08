import * as THREE from 'https://cdn.skypack.dev/three@0.130.1';

//declarer une scene
const scene = new THREE.Scene();

//declarer le moteur de rendu 
//+ mettre le rendu du moteur de rendu en plein écran
//et l’ajouter dans la page HTML via le canvas HTML5!

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//declarer une camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30;
camera.position.y = 10;

//La forme ou creer le mesh cad l 'objet
const radiusTop = 4.0;
const radiusBottom = 4;
const height = 6.0;
const radialSegments = 31;
const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments);

//wireframe sur true va donner les lignes de la forme, sur false elle sera pleine
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: false });
const cylinder = new THREE.Mesh(geometry, material);

//pour changer la position d un mesh - en commentaire si animate actif si fixe

cylinder.position.x = 0;
cylinder.position.y = 10;


//ajouter la forme a la scene
scene.add(cylinder);


//si on veut animer l objet ...

function animate() {
    cylinder.rotation.x += 0.01
    cylinder.rotation.y += 0.01
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
};



animate();

// ou juste l afficher en fixe

renderer.render(scene, camera);
// requestAnimationFrame(render);


