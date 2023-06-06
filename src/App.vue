<script setup>
import { RouterView } from 'vue-router';
import SiteHeader from './components/SiteHeader.vue'
</script>

<template>
   <header>
      <SiteHeader/>

   </header>
   <main class="h-fit px-2 py-5">
      <RouterView class="my-10" />
   </main>
</template>

<style>

</style>
