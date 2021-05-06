<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col px-10 py-10">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Scenario
                </th>
                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Users
                </th>
                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expected Behaviour
                </th>
                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Countries
                </th>
                <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody v-if="scenarios.length > 0" class="bg-white divide-y divide-gray-200" >
              <tr v-for="scenario in scenarios" :key="scenario.id">
                <ScenarioItem :scenario="scenario" @deleteScenario="deleteScenario" />
              </tr>
            </tbody>
          </table>
          <button class="fixed bottom-0 right-0 m-4 p-4 bg-blue-400 text-white rounded-lg" @click="addModal=true">Add Scenario</button>
        </div>
      </div>
    </div>
    <AddScenario v-if="addModal" @cancel="addModal=false" @createScenario="createScenario" />
  </div>
</template>

<script>
import { toRefs, ref } from 'vue'
import { useRoute } from 'vue-router'
import ScenarioItem from './ScenarioItem.vue'
import AddScenario from './AddScenario.vue'

export default {
  components: {
    ScenarioItem,
    AddScenario
  },
  setup() {
    let addModal = ref(false)
    const route = useRoute()
    const id = route.params.id
    let blocks = ref(JSON.parse(localStorage.getItem("blocks")))
    let scenarios = ref([])
    for (const block of blocks.value) {
      if (block.id == id) {
        scenarios.value = block.scenarios
      }
    }
    const createScenario = (scenario) => {
      addModal.value = false
      for (const block of blocks.value) {
        if (block.id == id) {
          block.scenarios.push(scenario)
        }
      }
      localStorage.setItem("blocks", JSON.stringify(blocks.value))
    }
    const deleteScenario = (scenarioId) => {
      for (const block of blocks.value) {
        if (block.id == id) {
          let index = block.scenarios.findIndex((item) => item.id == scenarioId)
          block.scenarios.splice(index, 1)
        }
      }
      localStorage.setItem("blocks", JSON.stringify(blocks.value))
    }
    return {
      scenarios,
      ScenarioItem,
      AddScenario,
      addModal,
      createScenario,
      deleteScenario
    }
  },
}
</script>