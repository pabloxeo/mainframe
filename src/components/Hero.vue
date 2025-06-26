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
  <section class="flex h-[calc(100vh-4rem)] justify-center items-center">
    <!-- Left half: Text -->
    <div class="flex flex-col justify-center px-8">
      <h1 class="text-3xl mb-4">Welcome to Mainframe</h1>
      <p class="font-mono text-lg max-w-[32ch]">
        {{ display }}<span class="blinking-cursor">▮</span>
      </p>
    </div>
    <!-- Right half: Image -->
    <div class="flex justify-left items-center ">
      <img
        src="../assets/portrait.jpeg"
        alt="Pablo Cantudo Gómez"
        class="rounded-full w-60 h-60 object-cover shadow-lg"
      />
    </div>
  </section>
</template>

<style scoped>
section {
  margin-right: 1em;
}
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