<template>
  <MobileNavbar></MobileNavbar>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import MobileNavbar from '@/components/layout/MobileNavbar.vue'
</script>
