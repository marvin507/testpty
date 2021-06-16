import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  
  {
    path: '/',
    name: 'About',
    component: () => import('../views/About.vue')
    
  }, 
  {
    'path': '/educacion',
    'name': 'Educacion',
    component: () => import('../views/Educacion')
  },
  {
    'path': '/experiencias',
    'name': 'Experiencias',
    component: () => import('../views/Experiencias')
  },
  {
    'path': '/skills',
    'name': 'Skills',
    component: () => import('../views/Skills')
  },
  {
    'path': '/galeria',
    'name': 'Galeria',
    component: () => import('../views/Galeria')
  },
  {
    'path': '/contacto',
    'name': 'Contacto',
    component: () => import('../views/Contacto')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
