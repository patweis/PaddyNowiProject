import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import EditorView from '../views/EditorView.vue'
import ContactView from '../views/ContactView.vue'
import AchievementsView from '../views/AchievementsView.vue'
import CareerView from '../views/CareerView.vue'
import DownloadsView from '../views/ContactView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import ProjectView from '../views/ProjectView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    }, {
      path: '/editor',
      name: 'Bearbeiten',
      component: EditorView
    },{
      path: '/contact',
      name: 'Kontact',
      component: ContactView
    },{
      path: '/achievements',
      name: 'Leistungen',
      component: AchievementsView
    },{
      path: '/projects',
      name: 'Projekte',
      component: ProjectView
    },{
      path: '/career',
      name: 'Karriere',
      component: CareerView
    },{
      path: '/downloads',
      name: 'Download',
      component: DownloadsView
    }, {
      path: '/aboutus',
      name: 'Über Uns',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutUsView
    }
  ]
})

export default router
