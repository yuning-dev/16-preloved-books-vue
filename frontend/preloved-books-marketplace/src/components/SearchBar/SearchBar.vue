<template>
    <input :class="$style.searchBar" type="text" v-model="input" placeholder="Search books..."/>
    <button :class="$style.searchBtn" @click="searchAlgorithm(this.input)">Search!</button>
</template>

<script>
import { useProductStore } from '@/stores/ProductStore';
import { mapState, mapActions, mapStores } from 'pinia';

export default {
    name: 'SearchBar',
    data() {
        return {
            input: ''
        }
    },
    mounted() {
        this.fetchAllProducts()
    },
    computed: {
        ...mapStores(useProductStore),
        ...mapState(useProductStore, ['allProducts', 'searchResults'])
    },
    methods: {
        ...mapActions(useProductStore, ['fetchAllProducts']),
        searchAlgorithm() {
            console.log(this.allProducts)
            const searchWords = this.input.toLowerCase().split(' ')
            let titleWordLists = this.allProducts.map((product) => product.title.toLowerCase().split(' '))

            console.log(titleWordLists)

            let productCopies = []

            titleWordLists.forEach((titleWordList, i) => {
                let score = 0
                titleWordList.forEach(titleWord => {
                    if (searchWords.find(searchWord => searchWord === titleWord)) {
                        score++
                    }
                })
                const copy = {
                    ...this.allProducts[i],
                    score
                }
                if (copy.score > 0) {
                    this.searchResults.push(copy)
                }
                productCopies.push(copy)
            })
        }
    }
}
</script>

<style module src="./SearchBar.css"></style>