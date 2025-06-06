<template>
  <div class="desktop_navbar_container">
    <div class="navbar_desktop_logo">
      <a href="#Banner"><div class="logo">Area</div></a>
    </div>
    <div class="navbar_learn_more">
      <a href="https://www.figma.com/sites/" target="_blank" rel="noopener noreferrer">
        <div class="discover_more_content">
          <div class="discover_more cta-1">
            <div>Learn More</div>
            <div class="learn_more_icon"><span class="material-icons-round"> call_made </span></div>
          </div>
        </div></a
      >
    </div>
  </div>
  <div class="desktop_fixed_navbar_container">
    <a v-for="item in navItems" :key="item" :href="'#' + item" @click="menuClosed = true">
      <div class="cta_2 navbar_desktop_item">{{ item }}</div>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navItems = ['Benefits', 'Specifications', 'How-to', 'Contact Us']
</script>
