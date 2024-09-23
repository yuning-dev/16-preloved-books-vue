<template>
    <input :class="$style.searchBar" type="text" v-model="input" placeholder="Search books..."/>
    <button :class="$style.searchBtn" @click="searchAlgorithm">Search!</button>
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
        ...mapState(useProductStore, ['allProducts'])
    },
    methods: {
        ...mapActions(useProductStore, ['fetchAllProducts']),
        searchAlgorithm() {
            console.log(this.allProducts)
            const lcInput = this.input.toLowerCase()
            const splitInput = lcInput.split(' ')
            console.log(splitInput)
            let splitTitles = []

            for (let i = 0; i < this.allProducts.length; i++) {
                const title = this.allProducts[i].title
                splitTitles.push(title.toLowerCase().split(' '))
            }

            console.log(splitTitles)

            let score = []

            for (let i = 0; i < splitTitles.length; i++) {
                let titleScore = 0
                for (let j = 0; j < splitTitles[j].length; j++) {
                    for (let k = 0; k < splitInput.length; k++) {
                        if (splitTitles[i][j] === splitInput[k]) {
                            titleScore++
                        }
                    }
                }
                score.push(titleScore)
                titleScore = 0
            }


            console.log(score)

            const copyProducts = []
            for (let i = 0; i < this.allProducts.length; i++) {
                const copy = { 
                   ...this.allProducts[i],
                   score: score[i]
                }
                copyProducts.push(copy)
            }

            console.log(copyProducts)
        }
    }
}
</script>

<style module src="./SearchBar.css"></style>