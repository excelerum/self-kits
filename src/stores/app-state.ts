import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAppStateStore = defineStore('app-state', () => {
  // Loading screen
  const isScreenLoading = ref(false)

  function startScreenLoading() {
    isScreenLoading.value = true
  }
  function stopScreenLoading() {
    isScreenLoading.value = false
  }

  // Open Draw

  return {
    isScreenLoading,
    startScreenLoading,
    stopScreenLoading
  }
})
