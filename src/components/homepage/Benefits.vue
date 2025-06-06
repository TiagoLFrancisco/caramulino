<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="cracked_the_code">
          <div class="benefits_content">
            <div class="intro_to_benefits">
              <h2 class="befefits_into_title">Benefits</h2>
              <div class="subtitle-1">We've cracked the code.</div>
              <div class="body-1">Area provides real insights, without the data overload.</div>
            </div>
            <div class="benefits_card_section">
              <div v-for="(benefit, index) in benefits" :key="index" class="benefit_card">
                <div class="benefit_icon">
                  <span class="material-icons-round">
                    {{ benefit.iconName }}
                  </span>
                </div>
                <div class="benefit_info">
                  <div class="benefit_title subtitle-2">
                    {{ benefit.genefitName }}
                  </div>
                  <div class="benefit_description body-1">
                    {{ benefit.benefitDescription }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mountains"></div>
        </div>
      </div>
      <div class="col-12">
        <div class="the_big_picture">
          <div class="benefits_content">
            <div class="intro_to_benefits">
              <div class="subtitle-1">See the Big Picture</div>
              <div class="body-1">
                Area turns your data into clear, vibrant visuals that show you exactly what's
                happening in each region.
              </div>
            </div>
            <div class="big_picture_card_section">
              <div v-for="(bigPicture, index) in bigPictures" :key="index" class="big_picture_card">
                <div class="counter">
                  {{ bigPicture.counter }}
                </div>

                <div class="benefit_description body-2">
                  {{ bigPicture.description }}
                </div>
              </div>
            </div>
          </div>

          <div class="discover_more_content">
            <div class="discover_more cta-1">
              <a href="https://www.figma.com/sites/" target="_blank" rel="noopener noreferrer">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="slide_show" :style="{ backgroundImage: `url(${slideImages[currentIndex]})` }">
          <div class="arrows_container">
            <img src="/homepage/arrow.svg" alt="prev" @click="prevSlide" />
            <img
              src="/homepage/arrow.svg"
              alt="next"
              style="transform: rotate(180deg)"
              @click="nextSlide"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="separator"></div>
</template>

<script setup>
import { ref } from 'vue'
import { useBenefitsStore } from '@/stores/useBenefits'

const store = useBenefitsStore()
const benefits = store.benefits
const bigPictures = store.bigPictures

const currentIndex = ref(0)

const slideImages = ['/homepage/candle.png', '/homepage/leaf.png', '/homepage/keyboard.png']

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slideImages.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slideImages.length) % slideImages.length
}
</script>
