import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})