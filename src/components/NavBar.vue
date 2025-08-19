<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import onImg from '../assets/on.png'
import menu from '../assets/menu.png'

const imageSrc = ref(onImg)

const menuSrc = ref(menu)


const showLinks = ref(false)

function handleResize() {
    if (window.innerWidth > 1000) {
        showLinks.value = true // force visible on desktop
    } else {
        showLinks.value = false // reset for mobile
    }
}

function toggleMenu() {
    showLinks.value = !showLinks.value
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
    handleResize() // trigger immediately on load
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})

</script>

<template>
    <div :class="['header', '']">
        <router-link class="goto" to="/home"><img :src="imageSrc" alt="xeo logo" id="switch" /></router-link>
        <!-- Hamburger icon for mobile -->
        <img :src="menuSrc" class="hamburger" @click="toggleMenu"></img>

        <!-- Navigation links -->
        <div class="links" :class="{ 'mobile-hidden': !showLinks } " @click="toggleMenu">
            <router-link class="goto" to="/about">About</router-link>
            <router-link class="goto" to="/projects">Projects</router-link>
            <router-link class="goto" to="/contact">Contact</router-link>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
.header {
    font-family: 'Pixelify Sans', sans-serif;
    height: 4em;
    color: white;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 1em;
}


.links {
    gap: 2vw;
    display: flex;
    font-size: 1.5em;
}

#switch {
    margin-left: 1em;
    height: 50px;
    cursor: pointer;
    /* changes cursor on hover */
    transition: transform 0.2s;
    /* smooth animation */
}

#switch:hover {
    transform: scale(1.1);
}

/* Default: hide hamburger on desktop */
.hamburger {
    display: none;
    height: 90px;
}

/* On small screens, we *conditionally* hide the links */
@media only screen and (max-width: 1000px) {
    .links {
        flex-direction: column;
        background-color: black;
        position: absolute;
        right: 1em;
        top: 100px;
        padding: 1em;
        border-radius: 0.5em;
        gap: 1em;
        z-index: 3;
    }

    .links.mobile-hidden {
        display: none;
    }

    .hamburger {
        display: block;
    }

}
</style>