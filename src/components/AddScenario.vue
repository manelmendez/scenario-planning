<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div>
            <div class="">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Create Scenario
              </h3>
              <div class="mt-2">
                <form>
                  <div class="flex flex-col">
                    <label for="scenario">Scenario</label>
                    <input v-model="scenario" type="text" class="border-2 rounded-lg"/>
                  </div>
                  <div class="flex flex-col pt-2">
                    <label for="behaviour">Expected Behaviour</label>
                    <textarea v-model="behaviour" rows="2" cols="50" class="border-2 rounded-lg"/>
                  </div>
                  <div class="flex flex-col pt-2">
                    <label for="users">Users</label>
                    <input v-model="users" type="text" class="border-2 rounded-lg"/>
                  </div>
                  <div class="flex flex-col pt-2 w-auto">
                    <label for="type">Type</label>
                    <select v-model="type" name="Type" class="border-2 rounded-lg">
                      <option value="true">Positive</option>
                      <option value="false">Negative</option>
                    </select>
                  </div>
                  <div class="flex flex-col pt-2 w-auto">
                    <label for="type">Countries</label>
                    <select v-model="countries" name="Type" class="border-2 rounded-lg" multiple>
                      <option value="BE">BE</option>
                      <option value="DX">DX</option>
                      <option value="FI">FI</option>
                      <option value="FR">FR</option>
                      <option value="NL">NL</option>
                      <option value="NX">NX</option>
                      <option value="RU">RU</option>
                      <option value="SE">SE</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" @click="createScenario" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
            Create Scenario
          </button>
          <button type="button" @click="cancel" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'

export default {
  setup(props, { emit }) {
    let id = ref(uuidv4())
    let scenario = ref("")
    let behaviour = ref("")
    let type = ref(true)
    let users = ref("")
    let countries = ref([])
    const cancel = () => {
      emit("cancel")
    }
    const createScenario = () => {
      const scenarioBody = {
        id: id.value,
        scenario: scenario.value,
        type: type.value,
        users: users.value,
        behaviour: behaviour.value,
        countries: [...countries.value]
      }
      emit("createScenario", scenarioBody)
    }
    return {
      cancel,
      createScenario,
      scenario,
      behaviour,
      type,
      users,
      countries
    }
  }
}
</script>

<style>

</style>