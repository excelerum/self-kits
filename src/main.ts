import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './samples/node-api'
import router from '@/router'
import vuetify from '@/plugins/vuetify'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

// Use component
app.use(pinia)
app.use(vuetify)
app.use(router)

app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
