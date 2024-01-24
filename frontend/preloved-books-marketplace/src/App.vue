<script setup>
import { RouterLink, RouterView } from 'vue-router'

import ProductPage from './components/ProductPage.vue'; 
</script>

<template>
  <header>
    <div :class="$style.wrapper">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/search">Search (placeholder)</RouterLink>
        <RouterLink to="/product/:id">Product (placeholder)</RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style module src="./App.css"></style>
