<template>
    <div :class="$style.wrapper">
        <img :src="postBuildURL" width="150">
        <div :class="$style.title"> {{ product.title }}</div>
        <div :class="$style.author">by {{ product.author }}</div>
        <div :class="$style.condition">{{ product.condition }}</div>
        <div :class="$style.price">£{{ product.price }}</div>
        <div :class="$style.addToCartWrapper"><button :class="$style.addToCart" @click="testPinia">Add to cart</button></div>
    </div>
</template>

<script>
export default {
    name: 'ProductTile',
    props: {
        product: Object,
    },
    data() {
        return {
            currentImagePath: this.imagePath
        }
    },
    mounted() {
        console.log(this.product.imagePath)
        console.log(this.postBuildURL)
        return this.product?.imagePath       
    },
    computed: {
        postBuildURL() {
            return new URL(`../../assets/${this.product.image}`, import.meta.url).href
        }
    },
}
</script>

<style module src="./ProductTile.css"></style>