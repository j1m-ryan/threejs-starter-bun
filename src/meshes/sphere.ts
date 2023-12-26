import * as THREE from "three";

import { woodMaterial } from "../shared/materials";

const geometry = new THREE.SphereGeometry(0.5, 20, 20);

const sphere = new THREE.Mesh(geometry, woodMaterial);
sphere.position.x = -2;

export default sphere;
