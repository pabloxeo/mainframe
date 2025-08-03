<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const oscuro = ref(false)

const imageSrc = ref(new URL('../assets/on.png', import.meta.url).href)



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
    imageSrc.value = new URL(
        oscuro.value ? '../assets/off.png' : '../assets/on.png',
        import.meta.url
    ).href

    // toggle a class on the <body> tag
    document.body.classList.toggle('dark-mode', oscuro.value)
}
</script>

<template>
    <div :class="['header', oscuro ? 'darkmode' : '']">
        <img :src="imageSrc" @click="changeImage" alt="xeo logo" style="height: 90px;" id="switch" />

        <!-- Hamburger icon for mobile -->
        <div class="hamburger" @click="toggleMenu">
            ☰
        </div>

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
.header {
    color: rgb(0, 0, 0);
    background-color: #E06E3E;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: solid;
    border-radius: 12em;
    margin: 1em;
}

.header.darkmode {
    color: #fff;
    background-color: #69424E;
    display: flex;
    justify-content: space-between;
    align-items: center;
    outline: solid;
    border-radius: 12em;
    margin: 1em;
}


.links {
    margin-right: 2vw;
    gap: 10vw;
    display: flex;
    font-size: 2vw;
}

#switch {
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
    font-size: 60px;
    margin: inherit;
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
        outline: solid;
        font-size: 5vw;
    }

    .links.mobile-hidden {
        display: none;
    }

    .hamburger {
        display: block;
    }

}
</style>