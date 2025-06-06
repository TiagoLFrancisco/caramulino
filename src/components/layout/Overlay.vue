<template>
  <div class="overlay" @click.self="onCloseOverlay" v-if="overlayValue"></div>
</template>

<script setup>
import { watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  overlayValue: Boolean,
  onCloseOverlay: Function,
})

function handleKeydown(event) {
  if (event.key === 'Escape' && props.overlayValue) {
    props.onCloseOverlay?.()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  if (props.overlayValue) {
    document.body.style.overflow = 'hidden'
  }
})

watch(
  () => props.overlayValue,
  (val) => {
    document.body.style.overflow = val ? 'hidden' : ''
  },
)

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
}
</style>
