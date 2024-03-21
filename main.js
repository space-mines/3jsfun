import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
scene.backgroundColor = 0xffffff;
scene.fog = new THREE.Fog(0xffffff, 0.0025, 50);
scene.add(new THREE.AmbientLight(0x666666));

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.x = -3;
camera.position.z = 8;
camera.position.y = 2;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.setClearColor(0xffffff);
document.body.appendChild( renderer.domElement );

// add orbit controls and GLTFLoader
const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

// // add lights
scene.add(new THREE.AmbientLight(0x666666));
const dirLight = new THREE.DirectionalLight(0xaaaaaa);
dirLight.position.set(5, 12, 8);
dirLight.castShadow = true;
//
// add meshes
const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
// cube.position.x = -1;
// cube.castShadow = true;
scene.add( cube );

//
// const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 100);
// const torusKnotMat = new THREE.MeshStandardMaterial({
//     color: 0x00ff88,
//     roughness: 0.1,
// });
// const torusKnotMesh = new THREE.Mesh(torusKnotGeometry, torusKnotMat);
// torusKnotMesh.castShadow = true;
// torusKnotMesh.position.x = 2;
// scene.add(torusKnotMesh);
//
// // create a very large ground plane
// const groundGeometry = new THREE.PlaneGeometry(10000,
//     10000);
// const groundMaterial = new THREE.MeshLambertMaterial({
//     color: 0xffffff
// })
// const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
// groundMesh.position.set(0, -2, 0);
// groundMesh.rotation.set(Math.PI / -2, 0, 0);
// groundMesh.receiveShadow = true;
// scene.add(groundMesh);
//
//
//
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();