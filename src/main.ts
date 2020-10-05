import { createApp } from 'vue'
import router from "./router";
import index from './layouts/index.vue'
import "./styles/main.styl"

const app = createApp(index)
app.use(router)
app.mount('#app')
