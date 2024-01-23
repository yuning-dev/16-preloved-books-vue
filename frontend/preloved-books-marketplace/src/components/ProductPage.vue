<template>
    <div :class="$style.wrapper">
        <img src="../assets/the-hobbit.jpg">
        <div :class="$style.content">
            <div :class="$style.header">The Hobbit</div>
            <div :class="$style.author">by J. R. R. Tolkien</div>
            <div :class="$style.shortDescription">The Hobbit is the unforgettable story of Bilbo, a peace-loving hobbit, who embarks on a strange and magical adventure. A timeless classic.</div>
            <div :class="$style.detailsWrapper">
                <span :class="$style.condition">Condition: Good</span>
                <span :class="$style.price">Price: 3.50</span>
            </div>
            <div :class="$style.stock">Only 6 books left in stock</div>
            <button :class="$style.addToCart" @click="testPinia">Add to cart</button>
        </div>
    </div>
</template>

<script>
import { mapStores, mapState, mapActions } from 'pinia';
import { useProductStore } from '@/stores/ProductStore';

export default {
    name: 'ProductPage',
    data() {
        return {
            currentProduct: '',
        }
    },
    computed: {
        ...mapStores(useProductStore),
        ...mapState(useProductStore, [
            'productList',
        ]),
    },
    mounted() {
        // const id = this.$route.params.id     this is returning undefined
        this.fetchProductInfo(2).then((fetchedProduct) => {
            this.currentProduct = fetchedProduct
            console.log(this.currentProduct)
        })
    },
    methods: {
        ...mapActions(useProductStore, [
            'fetchProductInfo'
        ]),
        testPinia() {
            console.log(this.fetchProductInfo(2))
        },
    },
}
</script>

<style module src="./ProductPage.css"></style>