import { createApp } from 'vue'
import Router from "./Router";
import index from './layouts/index.vue'

const app = createApp(index)
app.use(Router)
app.mount('#app')
