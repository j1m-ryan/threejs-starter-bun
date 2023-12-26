import * as THREE from "three";
import { textureLoader } from "../loadingManager";
import woodImage from "../../static/textures/wood/wood_floor_worn_diff_1k.jpg";
const woodTexture = textureLoader.load(woodImage);
woodTexture.colorSpace = THREE.SRGBColorSpace;

export { woodTexture };
