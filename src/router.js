import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', redirect: '/' }, // Redirect to home for unmatched routes
]

export default createRouter({
  history: createWebHistory('/mainframe/'), // Set base here
  routes,
})