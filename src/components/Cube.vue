<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const cubeRef = ref(null)
const target = ref({ x: 0, y: 0 })      // For rotation
const current = ref({ x: 0, y: 0 })     // For rotation

const targetPos = ref({ x: window.innerWidth / 2, y: window.innerHeight / 2 })   // For position
const currentPos = ref({ x: window.innerWidth / 2, y: window.innerHeight / 2 })  // For position

function onMouseMove(e) {
  // Rotation (normalized)
  target.value.x = ((e.clientX / window.innerWidth) - 0.5) * 2
  target.value.y = ((e.clientY / window.innerHeight) - 0.5) * 2
  // Position (absolute)
  targetPos.value.x = e.clientX
  targetPos.value.y = e.clientY
}

onMounted(() => {
  window.addEventListener("mousemove", onMouseMove)
  animate()
})

onUnmounted(() => {
  window.removeEventListener("mousemove", onMouseMove)
})

function animate() {
  // Smoothly interpolate rotation
  current.value.x += (target.value.x - current.value.x) * 0.08
  current.value.y += (target.value.y - current.value.y) * 0.08
  // Smoothly interpolate position
  currentPos.value.x += (targetPos.value.x - currentPos.value.x) * 0.08
  currentPos.value.y += (targetPos.value.y - currentPos.value.y) * 0.08

  const rotateX = current.value.y * 30
  const rotateY = current.value.x * 30

  if (cubeRef.value) {
    // Center the cube on the cursor (cube is 120x120)
    cubeRef.value.style.left = `${currentPos.value.x - 60}px`
    cubeRef.value.style.top = `${currentPos.value.y - 60}px`
    cubeRef.value.style.transform =
      `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`
  }
  requestAnimationFrame(animate)
}
</script>

<template>
  <div class="cube-absolute-container">
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

<style scoped>
.cube-absolute-container {
  position: fixed;
  inset: 0;
  pointer-events: none; /* So it doesn't block mouse events */
  z-index: 100;
}

.cube {
  position: absolute;
  width: 120px;
  height: 120px;
  transform-style: preserve-3d;
  transition: box-shadow 0.3s;
}

.side {
  position: absolute;
  width: 120px;
  height: 120px;
  opacity: 0.5;
  box-shadow: 0 2px 16px #0004;
}
.front  { background: #fbbf24cc; }
.back   { background: #60a5facc; }
.right  { background: #f87171cc; }
.left   { background: #34d399cc; }
.top    { background: #a78bfacc; }
.bottom { background: #f472b6cc; }

.front  { transform: rotateY(0deg) translateZ(60px);}
.back   { transform: rotateY(180deg) translateZ(60px);}
.right  { transform: rotateY(90deg) translateZ(60px);}
.left   { transform: rotateY(-90deg) translateZ(60px);}
.top    { transform: rotateX(90deg) translateZ(60px);}
.bottom { transform: rotateX(-90deg) translateZ(60px);}
</style>
