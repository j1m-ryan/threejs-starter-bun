import { createDoubleClickListener } from "./utils/fullscreen";
import scene from "./scene";
import canvas from "./canvas";
import cube from "./cube";
import light from "./light";
import { tick } from "./timer";

function main() {
  scene.add(cube);
  scene.add(light);

  createDoubleClickListener(canvas);

  tick();
}

main();
