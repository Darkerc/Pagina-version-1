import { createApp } from 'vue'
import Router from "./Router";
import index from './layouts/index.vue'
import "./styles/index.css"
import "./styles/list.css"
import "./styles/content.css"
import "./styles/panel.css"

const app = createApp(index)
app.use(Router)
app.mount('#app')
