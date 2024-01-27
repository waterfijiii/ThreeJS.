const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 15;

// Box Geo
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xfb607f });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// Outline for the cube
const cubeOutline = new THREE.Mesh(cubeGeometry, new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide }));
cubeOutline.scale.multiplyScalar(1.05);
cube.add(cubeOutline);

// Cone Geo
const coneGeometry = new THREE.ConeGeometry(3, 5, 5);
const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x933d41 });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
scene.add(cone);
cone.position.set(0, 6, 0);

// Outline for the cone
const coneOutline = new THREE.Mesh(coneGeometry, new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide }));
coneOutline.scale.multiplyScalar(1.05);
cone.add(coneOutline);

// CylinderGeo
const cylinderGeometry = new THREE.CylinderGeometry(2, 2, 5, 22);
const cylinderMaterial = new THREE.MeshBasicMaterial({ color: 0x23297a });
const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
scene.add(cylinder);
cylinder.position.set(-14, 0, 0);

// Outline for the cylinder
const cylinderOutline = new THREE.Mesh(cylinderGeometry, new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide }));
cylinderOutline.scale.multiplyScalar(1.05);
cylinder.add(cylinderOutline);

// CapsuleGeometry
const capsuleGeometry = new THREE.CapsuleGeometry(2, 2, 6, 10);
const capsuleMaterial = new THREE.MeshBasicMaterial({ color: 0xf5deb3 });
const capsule = new THREE.Mesh(capsuleGeometry, capsuleMaterial);
scene.add(capsule);
capsule.position.set(14, 0, 0);

// Outline for the capsule
const capsuleOutline = new THREE.Mesh(capsuleGeometry, new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide }));
capsuleOutline.scale.multiplyScalar(1.05);
capsule.add(capsuleOutline);

// Torus Geo
const torusGeometry = new THREE.TorusGeometry(3, 2, 15, 100);
const torusMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
scene.add(torus);
torus.position.set(0, -7, 0); 

// Outline for the torus
const torusOutline = new THREE.Mesh(torusGeometry, new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide }));
torusOutline.scale.multiplyScalar(1.05);
torus.add(torusOutline);

function animate() {
    requestAnimationFrame(animate);

    // Animation
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    cone.rotation.z += 0.01;

    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;
    cylinder.rotation.z += 0.01;

    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.01;
    capsule.rotation.z += 0.01;

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    torus.rotation.z += 0.01;

    renderer.render(scene, camera);
}

animate();
