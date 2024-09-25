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
        // TODO - extract into an action
        // TODO - write tests for that action
        // TODO - extension 1 - give half scores for partial matches
        // TODO - extension 2 - use levenshtein distance and tune it to figure out the score
        searchAlgorithm() {
            console.log(this.allProducts)
            const lcInput = this.input.toLowerCase()
            const splitInput = lcInput.split(' ')
            let splitTitles = [] //this.allProducts.map((product) => product.title.toLowerCase().split(' '))

            for (let i = 0; i < this.allProducts.length; i++) {
                const title = this.allProducts[i].title
                splitTitles.push(title.toLowerCase().split(' '))
            }

            console.log(splitTitles)

            let score = [] // TODO rename to scores

            // TODO - easier to reason about if split into functions
            for (let i = 0; i < splitTitles.length; i++) {
                let titleScore = 0
                for (let j = 0; j < splitTitles[i].length; j++) {
                    for (let k = 0; k < splitInput.length; k++) {
                        if (splitTitles[i][j] === splitInput[k]) {
                            console.log(splitTitles[i][j])
                            titleScore++
                        }
                    }
                }
                score.push(titleScore)
                titleScore = 0 // not necessary
            }

            // Iterates through lists of words
            // for lett ....
                // Iterates through words from an individual title
                // for let ...
                    // Iterates through words from 
            

            console.log(splitTitles[5][0] === splitInput[0])
            console.log(splitTitles[5][4] === splitInput[0])

            console.log(score)

            const copyProducts = [] // TODO - rename to productCopies
            // TODO - don't need this extra loop, can just add the objects to an array of
            // objects as you go, instead of adding all the scores to an array and then
            // generating another array
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