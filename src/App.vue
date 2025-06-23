<script setup>
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  margin-top: 2em;
  margin-bottom: 2em;
  text-align: center;
}
router-link {
  margin: 0 1em;
}
</style>