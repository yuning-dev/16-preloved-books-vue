<template>
    <input :class="$style.searchBar" type="text" v-model="input" placeholder="Search books..." @keyup.enter="searchAlgorithm"/>
    <button :class="$style.searchBtn" @click="searchAlgorithm">Search!</button>
</template>

<script>
import { useProductStore } from '@/stores/ProductStore';
import { mapState, mapActions, mapStores, mapWritableState } from 'pinia';

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
        ...mapState(useProductStore, ['allProducts']),
        ...mapWritableState(useProductStore, ['searchResults'])
    },
    methods: {
        ...mapActions(useProductStore, ['fetchAllProducts']),
        searchAlgorithm() {
            if (this.input !== '') {
                this.searchResults = []
                const searchWords = this.input.toLowerCase().split(' ')
                let titleWordLists = this.allProducts.map((product) => product.title.toLowerCase().split(' '))

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
                    console.log(this.searchResults)
                    productCopies.push(copy)
                })
                this.$router.push({ name: 'search' })
                console.log(this.searchResults)
            }
        },        
    }
}
</script>

<style module src="./SearchBar.css"></style>