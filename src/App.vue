<template>
  <Navbar></Navbar>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
</script>
