// light.js
import * as THREE from "three";

// Create a group to hold all lights
const light = new THREE.Group();

// Ambient light for general illumination
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
light.add(ambient);

// Directional light to simulate sunlight
const directional = new THREE.DirectionalLight(0xffffff, 0.8);
directional.position.set(5, 10, 7.5);
directional.castShadow = true;
light.add(directional);

// Uncomment if you want to visualize the directional light
// const helper = new THREE.DirectionalLightHelper(directional, 1);
// light.add(helper);

export const lightGroup = light;
