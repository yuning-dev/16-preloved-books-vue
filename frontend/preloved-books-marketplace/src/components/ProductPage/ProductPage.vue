<template>
    <div :class="$style.wrapper">
        <template v-if="currentProduct">
            <img :src="imagePath">
            <div :class="$style.content">
                <div :class="$style.header">{{ currentProduct.title }}</div>
                <div :class="$style.author">by {{ currentProduct.author }}</div>
                <div :class="$style.shortDescription">{{ currentProduct.shortDescription }}</div>
                <div :class="$style.price">
                    £{{ currentProduct.price }}
                </div> 
                <div :class="$style.conditionWrapper">
                    Condition: {{ currentProduct.condition }}
                </div>
                <div :class="$style.addToCartWrapper"><button :class="$style.addToCart" @click="testPinia">Add to cart</button></div>
                <div :class="$style.stock">Only {{ currentProduct.quantityInStock }} books left in stock</div>
            </div>
        </template>

    </div>
</template>

<script>
import { mapStores, mapState, mapActions } from 'pinia';
import { useProductStore } from '@/stores/ProductStore';

export default {
    name: 'ProductPage',
    data() {
        return {
            currentProduct: null,
        }
    },
    computed: {
        ...mapStores(useProductStore),
        ...mapState(useProductStore, [
            'productList',
        ]),
        imagePath() {
            const path = this.currentProduct?.imagePath
            console.log(path)
            return path
        },
        type() {
            return this.currentProduct?.type
        }
    },
    mounted() {
        // const id = this.$route.params.id
        // console.log(id)
        this.fetchProductInfo(3).then((fetchedProduct) => {
            this.currentProduct = fetchedProduct
            // console.log(fetchedProduct)
            // console.log(this.currentProduct)
        })
    },
    methods: {
        ...mapActions(useProductStore, [
            'fetchProductInfo'
        ]),
    },
}
</script>

<style module src="./ProductPage.css"></style>