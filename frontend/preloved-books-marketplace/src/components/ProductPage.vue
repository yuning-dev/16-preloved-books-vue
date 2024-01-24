<template>
    <div :class="$style.wrapper">
        <template v-if="currentProduct">
            <img src="../assets/the-hobbit.jpg">
            <div :class="$style.content">
                <div :class="$style.header">{{ currentProduct.title }}</div>
                <div :class="$style.author">by {{ currentProduct.author }}</div>
                <div :class="$style.shortDescription">{{ currentProduct.shortDescription }}</div>
                <div :class="$style.price">
                    £{{ currentProduct.price }}
                </div> 
                <div :class="$style.detailsWrapper1">
                    Condition: {{ currentProduct.condition }}
                </div>
                <div :class="$style.detailsWrapper2">
                    <span :class="$style.quantityWrapper">Quantity: <input type="text" :class="$style.quantityWanted"></span>
                    <span :class="$style.addToCartWrapper"><button :class="$style.addToCart" @click="testPinia">Add to cart</button></span>
                </div>
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
            return this.currentProduct?.imagePath
        },
        type() {
            return this.currentProduct?.type
        }
    },
    mounted() {
        // const id = this.$route.params.id
        // console.log(id)
        this.fetchProductInfo(2).then((fetchedProduct) => {
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