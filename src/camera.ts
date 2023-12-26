import * as THREE from "three";
import { cameraFolder } from "./libgui";
const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 100);

camera.position.z = 2;

cameraFolder
  .add(camera.position, "z")
  .min(-3)
  .max(3)
  .step(0.001)
  .name("camera position z");

export default camera;
