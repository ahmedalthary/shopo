<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from "./components/Header.vue"
import Footers from "./components/Footer.vue"

</script>

<template>
  <div>
    <Navigation />
    <RouterView />
    <Footers />
  </div>
</template>

<style scoped></style>
