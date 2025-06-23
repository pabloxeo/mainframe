<script setup>
import { ref, onMounted } from 'vue'

const message = 'Hi, I\'m Pablo Cantudo Gómez, a developer.'
const display = ref('')
let i = 0

onMounted(() => {
  const interval = setInterval(() => {
    display.value += message[i]
    i++
    if (i >= message.length) clearInterval(interval)
  }, 60)
})
</script>

<template>
  <section>
    <h1 class="text-3xl">Welcome to mainframe</h1>
    <p class="font-mono text-lg inline">
      {{ display }}<span class="blinking-cursor">▮</span>
    </p>
  </section>
</template>

<style scoped>
.blinking-cursor {
  display: inline-block;
  width: 1ch;
  animation: blink 1s steps(1) infinite;
  color: #fff9c4;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
</style>