// src/stores/usePartnerStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePartnerStore = defineStore('partner', () => {
  const partnerLogos = ref([
    '/homepage/2.png',
    '/homepage/1.png',
    '/homepage/5.png',
    '/homepage/6.png',
    '/homepage/4.png',
    '/homepage/3.png',
  ])
  return { partnerLogos }
})
