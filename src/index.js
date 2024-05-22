import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

// Configuración de la escena, la cámara y el renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Posición de la cámara
camera.position.z = 15;

// Establece el color de fondo de la escena a blanco
scene.background = new THREE.Color(0xffffff); // Blanco en formato hexadecimal

// Añadir una luz a la escena
const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Luz ambiental
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Luz direccional
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Cargar modelo GLTF
const gltfLoader = new GLTFLoader();
gltfLoader.load('./laevolu.gltf', (gltf) => {
  scene.add(gltf.scene);
  animate();
}, undefined, (error) => {
  console.error(error);
});

// Cargar modelo OBJ
// const objLoader = new OBJLoader();
// objLoader.load('models/laevolu.obj', (obj) => {
//   scene.add(obj);
//   animate();
// }, undefined, (error) => {
//   console.error(error);
// });

// Función de animación
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Llamar a la función de animación para iniciar el renderizado
animate();
