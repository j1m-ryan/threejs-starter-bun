import { createDoubleClickListener } from "./utils/fullscreen";
import scene from "./scene";
import canvas from "./canvas";
import cube from "./meshes/cube";
import { ambientLight, hemisphereLight } from "./lights";
import { tick } from "./timer";
import sphere from "./meshes/sphere";
import torus from "./meshes/torus";
import floor from "./meshes/floor";
import axesHelper from "./helpers/axesHelper";
import { hemisphereLightHelper } from "./helpers/lightHelpers";

function main() {
  scene.add(cube);
  scene.add(sphere);
  scene.add(torus);
  scene.add(floor);

  scene.add(ambientLight);
  scene.add(hemisphereLight);

  scene.add(axesHelper);
  scene.add(hemisphereLightHelper);

  createDoubleClickListener(canvas);

  tick();
}

main();
