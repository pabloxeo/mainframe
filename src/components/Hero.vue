<template>
    <canvas ref="canvas" class="scene" />
</template>

<script setup>
import { ref, onMounted, computed, watchEffect } from "vue";
import { Scene } from "three";
import { useWindowSize } from "@vueuse/core";
import { initRenderer, updateRenderer } from "../renderer";
import { initCamera, updateCamera } from "../camera";
import { createCube } from "../cube";
import { watch } from 'vue';
import { oscuro } from '../stores/darkMode';
import { lightGroup } from '../light.js'

let color = oscuro.value ? 0x3C153B : 0xDB4C40;

watch(oscuro, (isDark) => {
    renderer.setClearColor(isDark ? 0x3C153B : 0xDB4C40, 1);
});

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
    renderer.setClearColor(color, 1);
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


canvas {
  display: block;  /* avoid inline gaps */
  margin: 0;
}
</style>
