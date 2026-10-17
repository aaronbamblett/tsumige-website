<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { provide } from 'vue'

const { isDark } = useData()

provide('toggle-appearance', () => {
  isDark.value = !isDark.value
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-image>
      <img
        class="hero-shot"
        src="/img/hero-library.png"
        alt="The Tsumige library"
        width="1400"
        height="971"
        fetchpriority="high"
      >
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.hero-shot {
  display: block;
  width: 640px;
  max-width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 30px 80px -10px rgba(155, 123, 255, 0.3);
}

@media (max-width: 959px) {
  .hero-shot {
    width: 100%;
  }
}
</style>

<!-- Non-scoped: tame VitePress's mobile hero negative margins so the stacked
     screenshot keeps a clean gap below the text. -->
<style>
@media (max-width: 959px) {
  .VPHero .image {
    margin: 0 auto 2rem;
  }

  .VPHero .image-container {
    height: auto;
  }
}
</style>
