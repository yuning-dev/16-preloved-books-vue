import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import mockProduct from '../mockProduct.json'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    recommendedProducts: [],
    allProducts: [],
    activeProduct: null,
    searchResults: []
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
    // searchAlgorithm(input) {
    //     console.log(this.allProducts)
    //     const searchWords = input.toLowerCase().split(' ')
    //     let titleWordLists = this.allProducts.map((product) => product.title.toLowerCase().split(' '))

    //     console.log(titleWordLists)

    //     let productCopies = []

    //     titleWordLists.forEach((titleWordList, i) => {
    //         let score = 0
    //         titleWordList.forEach(titleWord => {
    //             if (searchWords.find(titleWord)) {
    //                 score++
    //             }
    //         })
    //         const copy = {
    //             ...this.allProducts[i],
    //             score
    //         }
    //         productCopies.push(copy)
    //     })
    // }
  }
})
