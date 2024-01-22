import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import mockProduct from '../mockProduct.json'

export const useProductStore = defineStore('productStore', () => {
  actions: {
    async fetchProductInfo() {
      return mockProduct.json
    }
  }
})
