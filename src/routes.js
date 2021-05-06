const Blocks = () => import('./components/Blocks.vue')
const ScenarioList = () => import('./components/ScenarioList.vue')

const routes = [
  { path: '/', component: Blocks },
  { path: '/block/:id/scenarios', component: ScenarioList },
]

export default routes
