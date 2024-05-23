import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// Create and mount the app
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')




