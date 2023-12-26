import * as THREE from "three";
import canvas from "./canvas";

const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

export default renderer;
