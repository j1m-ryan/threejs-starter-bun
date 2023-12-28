import * as THREE from "three";
import { lightsFolder } from "./libgui";

const ambientLight = new THREE.AmbientLight("white", 1);

lightsFolder
  .add(ambientLight, "intensity")
  .min(0)
  .max(5)
  .step(0.01)
  .name("Ambient Light Intensity");

const hemisphereLight = new THREE.HemisphereLight("white", "green", 1);
lightsFolder
  .add(hemisphereLight, "intensity")
  .min(0)
  .max(10)
  .step(0.01)
  .name("hemisphere light intensity");

const directionalLight = new THREE.DirectionalLight("white", 2);
directionalLight.position.set(2, 2, 2);
lightsFolder
  .add(directionalLight, "intensity")
  .min(0)
  .max(10)
  .step(0.01)
  .name("directional light intensity");

directionalLight.castShadow = true;
directionalLight.shadow.camera.far = 10;

const directionalLightShadowMapSizeResolution = 2048;
directionalLight.shadow.mapSize.set(
  directionalLightShadowMapSizeResolution,
  directionalLightShadowMapSizeResolution
);
export { ambientLight, hemisphereLight, directionalLight };
