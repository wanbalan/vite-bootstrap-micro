import { createApp } from 'vue'
import './style.css'
import App from "./App.vue"
import VibeUI from '@velkymx/vibeui'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import store from './store'

createApp(App)
  .use(VibeUI)
  .use(store)
  .mount('#app')
