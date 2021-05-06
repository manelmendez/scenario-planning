import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHistory, createRouter } from "vue-router";
import routes from './routes.js'

const router = createRouter({
  history: createWebHistory(),
  routes
})
const app = createApp(App)
app.use(router)
app.mount('#app')
