import * as THREE from "three";
import { cubeFolder } from "./libgui";
import gsap from "gsap";

const cubeProperties = {
  color: "#ff0000",
  subdivisions: 20,
  animation: () => {},
};

const material = new THREE.MeshPhongMaterial({
  color: cubeProperties.color,
});

cubeFolder.add(material, "wireframe");

cubeFolder.addColor(cubeProperties, "color").onChange(() => {
  material.color.set(cubeProperties.color);
});

const geometry = new THREE.BoxGeometry(
  1,
  1,
  1,
  cubeProperties.subdivisions,
  cubeProperties.subdivisions,
  cubeProperties.subdivisions
);

const cube = new THREE.Mesh(geometry, material);
cubeFolder.add(cube.position, "y").min(-3).max(3).step(0.1).name("elevation");

cubeFolder
  .add(cubeProperties, "subdivisions")
  .min(1)
  .max(20)
  .step(1)
  .onFinishChange(() => {
    cube.geometry.dispose();
    cube.geometry = new THREE.BoxGeometry(
      1,
      1,
      1,
      cubeProperties.subdivisions,
      cubeProperties.subdivisions,
      cubeProperties.subdivisions
    );
  });

cubeProperties.animation = () => {
  gsap.to(cube.rotation, { x: cube.rotation.x + Math.PI });
};
cubeFolder.add(cubeProperties, "animation").name("roll");

cubeFolder.add(cube, "visible");

export default cube;
