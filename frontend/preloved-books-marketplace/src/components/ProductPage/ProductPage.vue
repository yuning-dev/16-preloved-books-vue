<template>
    <div :class="$style.wrapper">
        <div :class="$style.innerWrapper">
            <template v-if="activeProduct">
                <img :src="postBuildURL" :class="$style.bookImage">
                <div :class="$style.content">
                    <div :class="$style.header">{{ activeProduct.title }}</div>
                    <div :class="$style.author">by {{ activeProduct.author }}</div>
                    <div :class="$style.shortDescription">{{ activeProduct.shortDescription }}</div>
                    <div :class="$style.price">
                        £{{ activeProduct.price }}
                    </div> 
                    <div :class="$style.conditionWrapper">
                        Condition: {{ activeProduct.condition }}
                    </div>
                    <div :class="$style.addToCartWrapper"><button :class="$style.addToCart" @click="testPinia">Add to cart</button></div>
                    <div :class="$style.stock">Only {{ activeProduct.quantityInStock }} books left in stock</div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { mapStores, mapState, mapActions } from 'pinia';
import { useProductStore } from '@/stores/ProductStore';

export default {
    name: 'ProductPage',
    computed: {
        ...mapStores(useProductStore),
        ...mapState(useProductStore, [
            'activeProduct'
        ]),
        postBuildURL() {
            return new URL(`../../assets/${this.activeProduct.image}`, import.meta.url).href
        }
    },
    mounted() {
        const id = this.$route.params.id
        this.fetchProductInfo(Number(id))
    },
    methods: {
        ...mapActions(useProductStore, [
            'fetchProductInfo'
        ]),
    },
}
</script>

<style module src="./ProductPage.css"></style>