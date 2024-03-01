import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
scene.backgroundColor = 0xffffff;
scene.fog = new THREE.Fog(0xffffff, 0.0025, 50);
scene.add(new THREE.AmbientLight(0x666666));
const dirLight = new THREE.DirectionalLight(0xaaaaaaa);
dirLight.position.set(5, 12, 8);
dirLight.castShadow = true;

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.VSMShadowMap;
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xffffff);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.x = -3;
camera.position.z = 8;
camera.position.y = 2;

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();