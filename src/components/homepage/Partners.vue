<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="partners_content">
          <div class="title body-1">Trusted by:</div>
          <div class="partners_logo_wraper">
            <div class="partner_logo" v-for="(logo, index) in partnerLogos" :key="index">
              <img :src="logo" alt="Partner Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { usePartnerStore } from '@/stores/usePartnerStore'

const store = usePartnerStore()
const { partnerLogos } = storeToRefs(store)
</script>
