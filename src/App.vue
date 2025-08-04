<script setup>
import NavBar from './components/NavBar.vue'
import { ref } from 'vue'

const isLoading = ref(true)
setTimeout(() => {
  isLoading.value = false
}, 2500) // Simulate loading for 3 seconds

</script>

<template>
  <Loading v-if="isLoading" />
  <NavBar v-if="!isLoading" />
  <router-view v-if="!isLoading" />
</template>