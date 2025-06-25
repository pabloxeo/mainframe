import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'

let routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', redirect: '/' }, // Redirect to home for unmatched routes
]

const BASE_PATH = "/mainframe";

routes.forEach(route => {
    route.path = BASE_PATH + route.path;
});


export default createRouter({
  history: createWebHistory(),
  routes,
})