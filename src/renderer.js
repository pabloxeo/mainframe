import { WebGLRenderer } from "three";

export const initRenderer = (canvas) => {
  const renderer = new WebGLRenderer({
    canvas: canvas,
  });
  return renderer;
};

export function updateRenderer(renderer, width, height) {
  if (!renderer) return;
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
}
