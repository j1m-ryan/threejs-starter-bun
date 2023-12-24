import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { Timer } from "three/examples/jsm/misc/Timer.js";

declare global {
  interface Document {
    mozCancelFullScreen?: () => Promise<void>;
    msExitFullscreen?: () => Promise<void>;
    webkitExitFullscreen?: () => Promise<void>;
    mozFullScreenElement?: Element;
    msFullscreenElement?: Element;
    webkitFullscreenElement?: Element;
  }

  interface HTMLElement {
    msRequestFullscreen?: () => Promise<void>;
    mozRequestFullscreen?: () => Promise<void>;
    webkitRequestFullscreen?: () => Promise<void>;
  }
}

function main() {
  const canvas = document.getElementById("c");
  if (!canvas) {
    alert("canvas not found");
    return;
  }

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 5);
  camera.position.z = 2;

  const scene = new THREE.Scene();

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  const material = new THREE.MeshPhongMaterial({ color: "red" });

  const geometry = new THREE.BoxGeometry();

  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  const color = 0xffffff;
  const intensity = 3;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

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
        // Does not working on safari mobile version
        canvas.webkitRequestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  });
}

main();
