<script setup>
import { RouterLink, RouterView } from 'vue-router'

import SearchBar from './components/SearchBar/SearchBar.vue'

import ProductPage from './components/ProductPage/ProductPage.vue'; 
import ProductTile from './components/ProductTile/ProductTile.vue'

</script>

<template>
  <header>
    <div :class="$style.imgWrapper">
      <img src="@/assets/books.jpg" :class="$style.homeBanner">
    </div>
    <div :class="$style.wrapper">
        <RouterLink to="/">Home</RouterLink>
        <SearchBar />
        <RouterLink to="/search">Search (placeholder)</RouterLink>
    </div>
  </header>
  <RouterView />
</template>

<style module src="./App.css"></style>
