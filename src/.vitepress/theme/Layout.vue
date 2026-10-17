<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { provide, watch } from 'vue'

const route = useRoute()

watch(() => route.path, (path, referrer) => {
  window.goatcounter?.count?.({ path, referrer })
})

const { isDark } = useData()

provide('toggle-appearance', () => {
  isDark.value = !isDark.value
})
</script>

<template>
  <DefaultTheme.Layout>
    <!-- Replace the default hero icon with the app screenshot in a tilted device frame.
         The hero's indigo→cyan glow (.image-bg) is a sibling slot and stays put. -->
    <template #home-hero-image>
      <div class="ts-hero-phone">
        <div class="ts-frame">
          <img src="/img/hero-library.webp" alt="The Tsumiru library on Android" width="688" height="1366" fetchpriority="high" />
        </div>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
.ts-hero-phone {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Dark device bezel — gradient rim + soft shadow, tilted like the mockup */

.ts-frame {
  padding: 7px;
  border-radius: 30px;
  background: linear-gradient(160deg, #23263f, #0c0e1c);
  border: 1px solid #2b2f4d;
  box-shadow:
    0 30px 70px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(124, 123, 255, 0.1);
  transform: rotate(-7deg);
}

.ts-frame img {
  display: block;
  width: auto;
  height: 300px;
  border-radius: 23px;
}

@media (min-width: 640px) {
  .ts-frame img {
    height: 360px;
  }
}

@media (min-width: 960px) {
  .ts-frame img {
    height: 460px;
  }
}
</style>

<!-- Non-scoped: tame VitePress's mobile hero negative margins. By default the
     stacked hero pulls the image up (margin-top:-76px → the tilted phone's top
     leaks into the nav) and pulls the heading up (margin-bottom:-48px → the
     phone's bottom overlaps "Your Suwayomi library"). Our screenshot is taller
     and tilted, so those overlaps are severe. Reset the margins and let the
     image container reserve the phone's real height, with a clean gap below. -->
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
