import Home from './components/Home.vue'
import Buttons from './components/Buttons.vue'
import Inputs from './components/Inputs.vue'

export const routes = [
  { path: '', component: Home },
  { path: '/buttons', component: Buttons },
  { path: '/inputs', component: Inputs }
]
