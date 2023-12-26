import * as THREE from "three";
import { hemisphereLight } from "../lights";

const hemisphereLightHelper = new THREE.HemisphereLightHelper(
  hemisphereLight,
  0.1
);

export { hemisphereLightHelper };
