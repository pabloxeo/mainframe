<script setup>
import { useAnimationFrame } from "motion-v"
import { ref } from "vue"

const cubeRef = ref(null)

useAnimationFrame((t) => {
    if (!cubeRef.value) return

    const rotate = Math.sin(t / 10000) * 200
    const y = (1 + Math.sin(t / 1000)) * -50
    cubeRef.value.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
})
</script>

<template>
    <div class="container">
        <div class="cube" ref="cubeRef">
            <div class="side front" />
            <div class="side left" />
            <div class="side right" />
            <div class="side top" />
            <div class="side bottom" />
            <div class="side back" />
        </div>
    </div>
</template>

<style>
:root {
  --hue-1-transparent: #fbbf24cc;
  --hue-2-transparent: #60a5facc;
  --hue-3-transparent: #f87171cc;
  --hue-4-transparent: #34d399cc;
  --hue-5-transparent: #a78bfacc;
  --hue-6-transparent: #f472b6cc;
}

.container {
    perspective: 800px;
    width: 200px;
    height: 200px;
}

.cube {
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
}

.side {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: red;
    opacity: 0.6;
}

.front {
    transform: rotateY(0deg) translateZ(100px);
    background-color: var(--hue-1-transparent);
}
.right {
    transform: rotateY(90deg) translateZ(100px);
    background-color: var(--hue-2-transparent);
}
.back {
    transform: rotateY(180deg) translateZ(100px);
    background-color: var(--hue-3-transparent);
}
.left {
    transform: rotateY(-90deg) translateZ(100px);
    background-color: var(--hue-4-transparent);
}
.top {
    transform: rotateX(90deg) translateZ(100px);
    background-color: var(--hue-5-transparent);
}
.bottom {
    transform: rotateX(-90deg) translateZ(100px);
    background-color: var(--hue-6-transparent);
}
</style>
