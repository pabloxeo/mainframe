<template>
    <div class="container">
        <div class="nombre">PA BLo</div>
        <canvas ref="canvas" class="scene" />
    </div>
</template>

<script setup>
import { ref, onMounted, computed, watchEffect } from "vue";
import { Scene } from "three";
import { useWindowSize } from "@vueuse/core";
import { initRenderer, updateRenderer } from "../renderer";
import { initCamera, updateCamera } from "../camera";
import { createCube } from "../cube";
import { lightGroup } from '../light.js'

const canvas = ref(null);
const scene = new Scene();
let renderer = null;
let camera = null;

const cube = createCube();
camera = initCamera();

const { width, height } = useWindowSize()
const aspectRatio = computed(() => width.value / height.value);

scene.add(camera);
scene.add(cube);
scene.add(lightGroup);

watchEffect(() => {
    updateRenderer(renderer, width.value, height.value);
    updateCamera(camera, aspectRatio.value);
});

onMounted(() => {
    renderer = initRenderer(canvas.value);
    renderer.setClearColor(0xfff, 0);
    updateRenderer(renderer, width.value, height.value);
    updateCamera(camera, aspectRatio.value);
    const tick = () => {
        //render
        renderer.render(scene, camera);
        window.requestAnimationFrame(tick);
        //animation
        cube.rotation.y += 0.0025;
        cube.rotation.x += 0.0025;
        cube.rotation.z += 0.0025;
    };
    tick();
});

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Ultra&display=swap');

.container {
    transform-origin: top left;
    transform: scale(1);
    scale: 10vw;
    margin: 6em;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: visible;

}

canvas.scene {
    position: relative;
    z-index: 1; /* now above the text */

}

.nombre {
    position: absolute;
    z-index: 0; /* now behind the canvas */
    font-family: 'Climate Crisis', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
    "YEAR" 1979;
    font-size: 12em;
    letter-spacing: -0.3em;
    line-height: 1.2em; /* reduce vertical gap */
    color: black;
    writing-mode: vertical-lr;
    text-orientation: upright;
    width: auto;
}


@media (max-width: 1400px) {
  .container {
    transform: scale(0.8);
  }
}

@media (max-width: 1000px) {
  .container {
    transform: scale(0.6);
  }
}
</style>
