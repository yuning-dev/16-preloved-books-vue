import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import mockProduct from '../mockProduct.json'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    recommendedProducts: [],
    allProducts: [],
    activeProduct: null,
  }),
  getters: {
  },
  actions: {
    async fetchRecommendedProducts() {
      this.recommendedProducts = mockProduct.slice(0, 4)
    },
    async fetchAllProducts() {
      this.allProducts = mockProduct.slice(0, mockProduct.length)
    },
    async fetchProductInfo(id) {
      this.activeProduct = mockProduct.find((product) => product.id === id)
    },
  }
})
