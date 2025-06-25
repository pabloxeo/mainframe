<script setup>
</script>

<template>
  <nav>
    <router-link to="/mainframe/">Home</router-link> |
    <router-link to="/mainframe/projects">Projects</router-link> |
    <router-link to="/mainframe/contact">Contact</router-link>
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