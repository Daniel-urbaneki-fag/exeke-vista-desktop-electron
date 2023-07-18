import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import routes from './router'

loadFonts()

const app = createApp(App)
app.use(vuetify)

const router = createRouter({
  history: createWebHistory(),
  routes
})
app.use(router)
app.mount('#app')
