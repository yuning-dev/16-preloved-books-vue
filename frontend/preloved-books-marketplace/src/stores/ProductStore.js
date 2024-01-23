import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import mockProduct from '../mockProduct.json'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    productList: [],
  }),
  getters: {

  },
  actions: {
    async fetchProductInfo(id) {
      console.log('hey')
      const product = mockProduct.find((product) => product.id === id)
      this.productList.push(product)
      return product
    },
  }
})
