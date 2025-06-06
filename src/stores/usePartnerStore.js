// src/stores/usePartnerStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePartnerStore = defineStore('partner', () => {
  const partnerLogos = ref([
    '/caramulino/homepage/2.png',
    '/caramulino/homepage/1.png',
    '/caramulino/homepage/5.png',
    '/caramulino/homepage/6.png',
    '/caramulino/homepage/4.png',
    '/caramulino/homepage/3.png',
  ])
  return { partnerLogos }
})
