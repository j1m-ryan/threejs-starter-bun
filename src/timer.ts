import { Timer } from "three/examples/jsm/misc/Timer.js";
import { resizeRendererToDisplaySize } from "./utils/resize";
import cube from "./cube";
import renderer from "./renderer";
import camera from "./camera";
import scene from "./scene";
import controls from "./controls";

const timer = new Timer();

export default timer;

export const tick = () => {
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
