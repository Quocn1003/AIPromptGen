import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import GuidePage from './components/GuidePage.vue'
import ContactPage from './components/ContactPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/huong-dan',
        name: 'Guide',
        component: GuidePage
    },
    {
        path: '/lien-he',
        name: 'Contact',
        component: ContactPage
    }
]

const router = createRouter({
    history: createWebHashHistory(), // dùng hash mode
    routes,
  });
  

export default router 