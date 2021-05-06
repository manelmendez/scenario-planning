<template>
  <Nav />
  <router-view></router-view>
</template>

<script>
import Nav from './components/Nav.vue'
import Blocks from './components/Blocks.vue'
import { ref, onMounted } from 'vue'

export default {
  components: {
    Nav,
    Blocks
  },
  setup() {
    let blocks = ref([])
    onMounted(() => {
      const storedScenarios = JSON.parse(localStorage.getItem("blocks"))
      if (storedScenarios && storedScenarios.length != 0) {
        blocks.value = storedScenarios
      } else {
        blocks.value = [{
          id: 1000,
          name: "AddTariffCell",
          scenarios: [{
            id: 1,
            type: false,
            scenario: "Add TariffCell to risk Casualty",
            users: "UW admin",
            behaviour: "200 OK + tariffCellId and riskId",
            countries: ["BE", "DX", "FI", "FR"]
          },
          {
            id: 2,
            type: true,
            scenario: "Add TariffCell to risk Motor",
            users: "UW admin",
            behaviour: "200 OK + tariffCellId and riskId",
            countries: ["BE", "NL" , "NX", "RU", "SE"]
          }]
        },{
          id: 1001,
          name: "CreateRisk",
          scenarios: [{
            id: 12,
            type: false,
            scenario: "CreateRisk Casualty",
            users: "UW admin",
            behaviour: "200 OK + tariffCellId and riskId",
            countries: ["BE", "DX", "FI", "FR"]
          },
          {
            id: 22,
            type: true,
            scenario: "CreateRisk Motor",
            users: "UW admin",
            behaviour: "200 OK + tariffCellId and riskId",
            countries: ["BE", "NL" , "NX", "RU", "SE"]
          }]
        }]
      }
    })
    onMounted(() => {
      localStorage.setItem("blocks", JSON.stringify(blocks.value))
    })
    return {
      blocks
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
