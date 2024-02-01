<template>
    <div :class="$style.wrapper">
        <template v-for="product in recommendedProducts">
            <ProductTile :product="product"/>
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
        ])
    }
}

</script>

<style module src="./Home.css"></style>