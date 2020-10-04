import { createRouter, createWebHashHistory } from "vue-router";
import Index from "./pages/Index.vue";
import Portafolio from "./pages/Portafolio.vue";
import RedesSociales from "./pages/Redes-sociales.vue";
import Contactanos from "./pages/Contactanos.vue";
import AcercaDeMi from "./pages/Acerca-de-mi.vue";

const routes = [
  { name:'Index', path: '/', component: Index },
  { name:'Portafolio', path: '/Portafolio', component: Portafolio },
  { name:'Redes-sociales', path: '/Redes-sociales', component: RedesSociales },
  { name:'Contactanos', path: '/Contactanos', component: Contactanos  },
  { name:'Acerca-de-mi', path: '/Acerca-de-mi', component: AcercaDeMi },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router;

