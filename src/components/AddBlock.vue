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
                Create Block
              </h3>
              <div class="mt-2">
                <form>
                  <div class="flex flex-col">
                    <label for="scenario">Name</label>
                    <input v-model="name" type="text" class="border-2 rounded-lg"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" @click="createBlock" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm">
            Create Block
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
    let name = ref("")
    const cancel = () => {
      emit("cancel")
    }
    const createBlock = () => {
      const blockBody = {
        id: id.value,
        name: name.value,
        scenarios: []
      }
      emit("createBlock", blockBody)
    }
    return {
      cancel,
      createBlock,
      name
    }
  }
}
</script>

<style>

</style>