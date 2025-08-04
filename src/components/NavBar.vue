<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import offImg from '../assets/off.png'
import onImg from '../assets/on.png'
import menu from '../assets/menu.png'
import { oscuro } from '../stores/darkMode';

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

function changeImage() {
    oscuro.value = !oscuro.value
    imageSrc.value = oscuro.value ? offImg : onImg

    // toggle a class on the <body> tag
    document.body.classList.toggle('dark-mode', oscuro.value)
}
</script>

<template>
    <div :class="['header', oscuro ? 'darkmode' : '']">
        <img :src="imageSrc" @click="changeImage" alt="xeo logo" id="switch" />

        <!-- Hamburger icon for mobile -->
        <img :src="menuSrc" class="hamburger" @click="toggleMenu"></img>

        <!-- Navigation links -->
        <div class="links" :class="{ 'mobile-hidden': !showLinks } " @click="toggleMenu">
            <router-link class="goto" to="/home">Home</router-link>
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
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em;
    padding-top: 2.5em;
    padding-bottom: 2.5em;
}

.header.darkmode {
    color: white;
    background-color: #3C153B;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1em;
    padding-top: 2.5em;
    padding-bottom: 2.5em;

}


.links {
    margin-right: 2vw;
    gap: 10vw;
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
        background-color: inherit;
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