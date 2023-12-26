import * as THREE from "three";

import { woodMaterial } from "../shared/materials";

const geometry = new THREE.TorusGeometry(0.3, 0.1, 20);

const torus = new THREE.Mesh(geometry, woodMaterial);
torus.position.x = 2;

export default torus;
