<template>
  <div :class="['navbar-container', { box_shadow: !menuClosed }]">
    <a href="#Banner"><div class="logo">Area</div></a>

    <span class="material-icons-round" @click="menuClosed = false" v-show="menuClosed">menu</span>
    <span class="material-icons-round" @click="menuClosed = true" v-show="!menuClosed">close</span>
  </div>
  <div class="nav_menu" v-if="!menuClosed">
    <ul>
      <ul>
        <a v-for="item in navItems" :key="item" :href="'#' + item" @click="menuClosed = true">
          <li class="cta_2">{{ item }}</li>
        </a>
      </ul>
    </ul>

    <a href="https://www.figma.com/sites/" target="_blank" rel="noopener noreferrer">
      <div class="discover_more_content">
        <div class="discover_more cta-1">
          <div>Learn More</div>
          <div class="learn_more_icon"><span class="material-icons-round"> call_made </span></div>
        </div>
      </div></a
    >
  </div>
  <Overlay :overlayValue="!menuClosed" :onCloseOverlay="() => (menuClosed = true)" />
</template>

<script setup>
import { ref } from 'vue'
import Overlay from '@/components/layout/Overlay.vue'

const menuClosed = ref(true)
const navItems = ['Benefits', 'Specifications', 'How-to', 'Contact Us']
</script>
