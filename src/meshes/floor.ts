import * as THREE from "three";

import { woodMaterial } from "../shared/materials";

const geometry = new THREE.PlaneGeometry(20, 20, 20);

const floor = new THREE.Mesh(geometry, woodMaterial);
floor.rotation.x = Math.PI / 2;
floor.position.y = -2;

export default floor;
