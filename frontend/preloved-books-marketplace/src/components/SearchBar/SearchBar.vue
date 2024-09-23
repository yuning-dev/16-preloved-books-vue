<template>
    <input type="text" v-model="input" placeholder="Search books..."/>
    <button :class="$style.searchBtn" @click="searchAlgorithm">Search!</button>
</template>

<script>
import { useProductStore } from '@/stores/ProductStore';
import { mapStores } from 'pinia';

export default {
    name: 'SearchBar',
    data() {
        return {
            input: ''
        }
    },
    computed: {
        ...mapStores(useProductStore),
    },
    methods: {
        searchAlgorithm() {
            console.log(typeof(this.input))
        }
    }
}
</script>

<style module src="./SearchBar.css"></style>