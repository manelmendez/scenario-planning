<template>
  <td class="px-6 py-4 text-center whitespace-nowrap">
    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" :class="scenario.type == true ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
      {{ scenario.type==true ? 'Positive' : 'Negative' }}
    </span>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-900">{{ scenario.scenario }}</div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-500">{{ scenario.users }}</div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-500">{{ scenario.behaviour }}</div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
    <span v-for="country in scenario.countries" :key="country" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" 
    :class="country == 'BE' ? 'bg-green-100 text-green-800' : country == 'DX' ? 'bg-red-100 text-red-800' : country == 'FI' ? 'bg-blue-100 text-blue-800' :
    country == 'FR' ? 'bg-yellow-100 text-yellow-800' : country == 'NL' ? 'bg-gray-100 text-black' : country == 'NX' ? 'bg-pink-100 text-pink-800' : 
    country == 'RU' ? 'bg-black text-white' : 'bg-purple-100 text-purple-800'">
      {{ country }}
    </span>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <span @click="deleteScenario" class="cursor-pointer" style='font-size:16px;'>&#10060;</span>
  </td>
</template>

<script>
import { toRefs } from 'vue'

export default {
  props: {
    scenario: {
      type: Object,
      required: true
    }
  },
  emits: ["deleteScenario"],
  setup(props, { emit }) {
    const { scenario } = toRefs(props)

    const deleteScenario = () => {
      console.log("hola");
      emit("deleteScenario", scenario.id)
    }

    return {
      scenario,
      deleteScenario
    }
  },
}
</script>

<style>

</style>