<template>
    <div :class="$style.titleWrapper">
        <div :class="$style.title">Some of our all-time favourites:</div>
    </div>
    <div :class="$style.wrapper">
        <template v-for="product in recommendedProducts">
            <ProductTile :product="product" @routeToProduct="openProductPage"/>
        </template>
    </div>
</template>

<script>
import { useProductStore } from '@/stores/ProductStore';
import { mapState, mapActions } from 'pinia';
import ProductTile from '../components/ProductTile/ProductTile.vue'

export default {
    name: 'Home',
    components: {
        ProductTile
    },
    mounted() {
        this.fetchRecommendedProducts()
    },
    computed: {
        ...mapState(useProductStore, [
            'recommendedProducts'
        ])
    },
    methods: {
        ...mapActions(useProductStore, [
            'fetchRecommendedProducts'
        ]),
        openProductPage(id) {
            this.$router.push({ path: `/product/${id}` })
        },
    }
}

</script>

<style module src="./Home.css"></style>