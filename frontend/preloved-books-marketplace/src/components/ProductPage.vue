<template>
    <div :class="$style.wrapper">
        <img src="../assets/the-hobbit.jpg">
        <div :class="$style.content">
            <div :class="$style.header"></div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia';

export default {
    name: 'ProductPage',
    mounted() {

    }
}
</script>

<style module src="./ProductPage.css"></style>