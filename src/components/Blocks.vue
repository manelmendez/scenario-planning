<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-4 gap-4">
      <div class="inline-block relative m-8 p-8 rounded-lg border-2 cursor-pointer bg-red-400 hover:bg-red-700 text-white"
      v-for="block in blocks" :key="block.id" @click="goToScenarios(block.id)">{{block.name}}
        <span @click.stop="deleteBlock(block.id)" class="cursor-pointer absolute top-0 right-1 text-black" style='font-size:20px;'>&#10005;</span>
      </div>
    </div>
    <button class="fixed bottom-0 right-0 m-4 p-4 bg-blue-400 text-white rounded-lg" @click="addModal=true">Add Block</button>
    <AddBlock v-if="addModal" @cancel="addModal=false" @createBlock="createBlock" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AddBlock from './AddBlock.vue'

export default {
  components: {
    AddBlock
  },
  setup() {
    const router = useRouter()
    let addModal = ref(false)
    let blocks = ref(JSON.parse(localStorage.getItem("blocks")))
    const goToScenarios = (id) => {
      router.push(`/block/${id}/scenarios`)
    }
    const createBlock = (block) => {
      addModal.value = false
      blocks.value.push(block)
      localStorage.setItem("blocks", JSON.stringify(blocks.value))
    }
    const deleteBlock = (blockId) => {
      let index = blocks.value.findIndex((item) => item.id == blockId)
      blocks.value.splice(index, 1)
      localStorage.setItem("blocks", JSON.stringify(blocks.value))
    }
    return {
      blocks,
      goToScenarios,
      addModal,
      AddBlock,
      createBlock,
      deleteBlock
    }
  }
}
</script>

<style>

</style>