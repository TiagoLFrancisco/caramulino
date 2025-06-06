<template>
  <div class="navbar-container">
    <div class="logo">Area</div>
    <span class="material-icons-round" @click="menuClosed = false" v-show="menuClosed">menu</span>
    <span class="material-icons-round" @click="menuClosed = true" v-show="!menuClosed">close</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuClosed = ref(true)
</script>
