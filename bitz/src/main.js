import './style.css'
import './assets/styles/tailwind.css'
import './assets/styles/base.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { vScrollAnimate } from './composables/useScrollAnimation'

const app = createApp(App)

// Register global directives
app.directive('scroll-animate', vScrollAnimate)

app.use(createPinia())
app.use(router)

app.mount('#app')
