<template>
    <div :class="$style.titleWrapper">
        <div :class="$style.title">Here are your search results:</div>
    </div>
    <div :class="$style.wrapper">
        <template v-for="product in searchResults">
            <ProductTile :product="product" @routeToProduct="openProductPage"/>
        </template>
    </div>
</template>

<script>
import { useProductStore } from '@/stores/ProductStore';
import { mapState, mapActions } from 'pinia';
import ProductTile from '../components/ProductTile/ProductTile.vue'

export default {
    name: 'Search',
    components: {
        ProductTile
    },
    // mounted() {
    //     this.fetchRecommendedProducts()
    // },
    computed: {
        ...mapState(useProductStore, [
            'searchResults'
        ])
    },
    methods: {
        // ...mapActions(useProductStore, [
        //     'fetchRecommendedProducts'
        // ]),
        openProductPage(id) {
            this.$router.push({ path: `/product/${id}` })
        },
    }
}

</script>

<style module src="./Search.css"></style>