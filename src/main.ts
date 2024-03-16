import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import { createPinia } from 'pinia'

import './style.css'

import './demos/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

const pinia = createPinia()
const app = createApp(App)

// Use component
app.use(pinia)
app.use(vuetify)
app.use(router)

app.mount('#app').$nextTick(() => {
  setTimeout(() => {
    // Wait 500ms after DOM ok.
    postMessage({ payload: 'removeLoading' }, '*')
  }, 500)
})
