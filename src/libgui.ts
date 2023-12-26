import GUI from "lil-gui";

const gui = new GUI({
  title: "ThreeJS Starter Bun",
});

const cubeFolder = gui.addFolder("cube");
const cameraFolder = gui.addFolder("camera");
const lightsFolder = gui.addFolder("lights");

export { cubeFolder, cameraFolder, lightsFolder };
