import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { PiniaColada } from '@pinia/colada'
import App from './App.vue'
import './style.css'
import { PiniaColadaPluginBroadcastSync } from 'pinia-colada-plugin-broadcast-sync'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(PiniaColada, {
    plugins: [PiniaColadaPluginBroadcastSync]
})

app.mount('#app')
