import {
    Scene,
    Color,
    PerspectiveCamera,
    PointLight,
    WebGLRenderer,
} from 'https://unpkg.com/three@0.153.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.153.0/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'https://unpkg.com/three@0.153.0/examples/jsm/loaders/OBJLoader.js';

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new Scene();
scene.background = new Color(0xdddddd);

const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    2000
);

camera.rotation.y = (45 / 100) * Math.PI;
camera.position.x = 800;
camera.position.y = 100;
camera.position.z = 1000;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

const light1 = new PointLight(0xc4c4c4, 1);
light1.position.set(0, 300, 500);
scene.add(light1);

const light2 = new PointLight(0xc4c4c4, 1);
light2.position.set(500, 100, 0);
scene.add(light2);

const light3 = new PointLight(0xc4c4c4, 1);
light3.position.set(0, 100, -500);
scene.add(light3);

const light4 = new PointLight(0xc4c4c4, 1);
light4.position.set(-500, 300, 500);
scene.add(light4);

const objLoader = new OBJLoader();
objLoader.setPath('../img/');
objLoader.load(
    'xbox.obj',
    (object) => {
        object.scale.set(50, 50, 50);
        scene.add(object);
    },
    (xhr) => {
        console.log(
            `carregando o objeto: ${(xhr.loaded / xhr.total) * 100}% carregado`
        );
    },
    (err) => {
        console.log(`Aconteceu um erro: ${err}`);
    }
);

const animate = function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();
