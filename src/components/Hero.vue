<script setup>
import { ref, onMounted } from 'vue'

const message = 'Hi, I\'m Pablo — a software engineer with a focus on performance, precision, and pushing boundaries.';
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
  <section class="flex flex-col md:flex-row md:h-[calc(60vh-1rem)] justify-center items-center py-8 gap-8">
    <div class="flex flex-col justify-center px-4 md:px-8">
      <h1 class="text-3xl mb-4">Welcome to Mainframe</h1>
      <p class="font-mono text-lg max-w-[32ch]">
        {{ display }}<span class="blinking-cursor">▮</span>
      </p>
    </div>
    <div class="flex justify-center items-center">
      <img
        src="../assets/portrait.jpeg"
        alt="Pablo Cantudo Gómez"
        class="rounded-full w-40 h-40 md:w-60 md:h-60 object-cover shadow-lg glow-shadow"
      />
    </div>
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

.glow-shadow {
  box-shadow: 0 0 5px 0 #fff9c4, 0 2px 20px 0 #0006;
}
</style>