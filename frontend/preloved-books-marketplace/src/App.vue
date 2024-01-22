<script setup>
import { RouterLink, RouterView } from 'vue-router'

import ProductPage from './components/ProductPage.vue'; 
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/search"></RouterLink>
      </nav>
      <ProductPage />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
