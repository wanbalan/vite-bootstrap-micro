import { createApp } from 'vue'
import './style.css'
import App from "./App.vue"
import VibeUI from '@velkymx/vibeui'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
import "../node_modules/@velkymx/vibeui/dist/vibeui.css"

import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App)
  .use(VibeUI)
  .use(pinia)
  .mount('#app')
