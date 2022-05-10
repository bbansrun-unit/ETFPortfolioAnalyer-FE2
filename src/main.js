import { createApp, useAttrs } from 'vue'
import App from './App.vue'

// Default Style
import 'minireset.css'
import './assets/default.css'

// Router
import router from "./router"

createApp(App)
    .use(router)
    .mount('#app')
