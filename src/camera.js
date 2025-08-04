import { PerspectiveCamera } from "three";

export const initCamera = () => {
  const camera = new PerspectiveCamera(
    75,
    window.width / window.height,
    0.1,
    100
  );
  camera.position.z = 5;

  return camera;
};

export const updateCamera = (camera, aspectRatio) => {
  if (!camera) return;
  camera.aspect = aspectRatio;
  camera.updateProjectionMatrix();
};
