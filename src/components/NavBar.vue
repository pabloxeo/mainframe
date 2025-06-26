<template>
  <nav>
    <router-link to="/">
      <img src="../assets/icono.png" alt="xeo logo" style="height: 3em; vertical-align: middle;" />
    </router-link>
    <div class="nav-links">
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
</template>

<style scoped>
nav {
    margin-left: -1em;
    margin-bottom: 1em;
    display: flex;
    align-items: center;
    gap: 1em;
    justify-content: space-between;
}

.nav-links {
    margin-right: 1em;
    display: flex;
    gap: 1em;
}

router-link {
  margin: 0;
}
</style>