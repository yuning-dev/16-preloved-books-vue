<template>
    <template v-for="product in currentProductList">
        <ProductTile :product="product"/>
    </template>
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
    data() {
        return {
            currentProductList: [],
            currentProduct: null,
        }
    },
    mounted() {
        this.fetchProductInfo(2).then((fetchedProduct) => {
            this.currentProduct = fetchedProduct
            // console.log(fetchedProduct)
            // console.log(this.currentProduct)
        })
        console.log(this.productList)
        this.currentProductList = this.productList
    },
    computed: {
        ...mapState(useProductStore, [
            'productList'
        ])
    },
    methods: {
        ...mapActions(useProductStore, [
            'fetchProductInfo'
        ])
    }
}

</script>

<style module src="./Home.css"></style>