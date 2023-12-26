import * as THREE from "three";
import { woodTexture } from "./textures";
const woodMaterial = new THREE.MeshStandardMaterial({
  map: woodTexture,
});
woodMaterial.side = THREE.DoubleSide;

export { woodMaterial };
