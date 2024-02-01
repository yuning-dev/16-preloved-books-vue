import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import mockProduct from '../mockProduct.json'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    recommendedProducts: [],
    activeProduct: null,
  }),
  getters: {
  },
  actions: {
    async fetchRecommendedProducts() {
      this.recommendedProducts = mockProduct.slice(0, 3)
    },
    async fetchProductInfo(id) {
      this.activeProduct = mockProduct.find((product) => product.id === id)
    },
  }
})
