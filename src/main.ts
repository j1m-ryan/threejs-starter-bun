import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { Timer } from "three/examples/jsm/misc/Timer.js";
import { resizeRendererToDisplaySize } from "./utils/resize";
import GUI from "lil-gui";
import _fullscreen from "./utils/fullscreen";
import gsap from "gsap";

const gui = new GUI({
  title: "ThreeJS Starter Bun",
});

const cubeFolder = gui.addFolder("cube");
const cameraFolder = gui.addFolder("camera");

const cubeProperties = {
  color: "#ff0000",
  subdivisions: 20,
  animation: () => {},
};

function main() {
  const canvas = document.getElementById("c");
  if (!canvas) {
    alert("canvas not found");
    return;
  }

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 5);
  camera.position.z = 2;
  cameraFolder
    .add(camera.position, "z")
    .min(-3)
    .max(3)
    .step(0.1)
    .name("camera position z");

  const scene = new THREE.Scene();

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  const material = new THREE.MeshPhongMaterial({
    color: cubeProperties.color,
  });

  cubeFolder.add(material, "wireframe");

  cubeFolder.addColor(cubeProperties, "color").onChange(() => {
    material.color.set(cubeProperties.color);
  });

  const geometry = new THREE.BoxGeometry(
    1,
    1,
    1,
    cubeProperties.subdivisions,
    cubeProperties.subdivisions,
    cubeProperties.subdivisions
  );

  const cube = new THREE.Mesh(geometry, material);
  cubeFolder.add(cube.position, "y").min(-3).max(3).step(0.1).name("elevation");

  cubeFolder
    .add(cubeProperties, "subdivisions")
    .min(1)
    .max(20)
    .step(1)
    .onFinishChange(() => {
      cube.geometry.dispose();
      cube.geometry = new THREE.BoxGeometry(
        1,
        1,
        1,
        cubeProperties.subdivisions,
        cubeProperties.subdivisions,
        cubeProperties.subdivisions
      );
    });

  cubeProperties.animation = () => {
    gsap.to(cube.rotation, { x: cube.rotation.x + Math.PI });
  };
  cubeFolder.add(cubeProperties, "animation").name("roll");

  cubeFolder.add(cube, "visible");

  scene.add(cube);

  const color = 0xffffff;
  const intensity = 3;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  const timer = new Timer();

  const tick = () => {
    const elapsedTime = timer.getElapsed();
    timer.update();
    cube.rotation.y = elapsedTime * 0.5;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    renderer.render(scene, camera);
    controls.update();

    requestAnimationFrame(tick);
  };

  tick();

  window.addEventListener("dblclick", () => {
    const fullScreenElement =
      document.fullscreenElement || document.webkitFullscreenElement;

    if (!fullScreenElement) {
      if (canvas.requestFullscreen) {
        canvas.requestFullscreen();
      } else if (canvas.webkitRequestFullscreen) {
        // Does not work on safari mobile
        canvas.webkitRequestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  });
}

main();
