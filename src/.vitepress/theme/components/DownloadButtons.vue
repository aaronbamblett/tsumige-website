<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { data as release } from '../data/release.data'

interface Platform {
  key: 'android' | 'ios' | 'windows' | 'macos' | 'linux' | 'web'
  label: string
  match: RegExp
}

const PLATFORMS: Platform[] = [
  { key: 'android', label: 'Android', match: /-android-universal\.apk$/ },
  { key: 'ios', label: 'iOS (sideload)', match: /-ios\.ipa$/ },
  { key: 'windows', label: 'Windows', match: /-windows-x64\.zip$/ },
  { key: 'macos', label: 'macOS', match: /-macos-x64\.zip$/ },
  { key: 'linux', label: 'Linux (AppImage)', match: /-linux-x86_64\.AppImage$/ },
  { key: 'web', label: 'Web', match: /-web\.zip$/ },
]

const tagName = computed(() => release.stable.tag_name ?? 'v0.0.0')
const assets = computed(() => release.stable.assets ?? [])

const downloads = computed(() =>
  PLATFORMS.map(p => ({
    ...p,
    asset: assets.value.find(a => p.match.test(a.name)),
  })).filter(p => p.asset),
)

const releasePageUrl = computed(() => release.stable.html_url)

// Highlight the visitor's current platform as the primary button.
const current = ref<Platform['key']>('android')

onMounted(() => {
  const ua = navigator.userAgent
  if (/android/i.test(ua))
    current.value = 'android'
  else if (/iphone|ipad|ipod/i.test(ua))
    current.value = 'ios'
  else if (/windows/i.test(ua))
    current.value = 'windows'
  else if (/mac os x|macintosh/i.test(ua))
    current.value = 'macos'
  else if (/linux/i.test(ua))
    current.value = 'linux'
  else
    current.value = 'web'
})
</script>

<template>
  <div>
    <div class="download-buttons">
      <a
        v-for="d in downloads"
        :key="d.key"
        class="download-button"
        :class="d.key === current ? 'primary' : 'secondary'"
        :download="d.asset?.name"
        :href="d.asset?.browser_download_url"
      >
        <IconDownload />
        <span class="text">{{ d.label }}</span>
      </a>
    </div>
    <span class="version-disclaimer">
      Tsumiru <strong>{{ tagName }}</strong>.
      Android needs <strong>8.0</strong> or higher. On Android, use the
      <strong>universal</strong> APK unless you know your device's ABI.
      Per-architecture builds are on the
      <a :href="releasePageUrl" target="_blank" rel="noopener">release page</a>.
      The iOS build is unsigned — see
      <a href="/docs/guides/install-ios">installing on iOS</a> before downloading it.
    </span>
  </div>
</template>

<style lang="stylus">
.download-buttons {
  display: flex
  flex-wrap: wrap
  gap: 0.75em
  justify-content: center
  align-items: center
  margin: 0.75em auto
}

.download-button {
  display: inline-block
  border: 1px solid transparent
  text-align: center
  font-weight: 600
  white-space: nowrap
  transition: color 0.25s, border-color 0.25s, background-color 0.25s
  cursor: pointer
  transition: all 0.3s ease
  border-radius: 20px
  padding: 0 20px
  line-height: 38px
  font-size: 14px

  &:hover {
    text-decoration: none !important
  }

  &.primary {
    border-color: var(--vp-button-brand-border)
    color: var(--vp-button-brand-text)
    background-color: var(--vp-button-brand-bg)

    &:hover {
      border-color: var(--vp-button-brand-hover-border)
      color: var(--vp-button-brand-hover-text)
      background-color: var(--vp-button-brand-hover-bg)
    }

    &:active {
      border-color: var(--vp-button-brand-active-border)
      color: var(--vp-button-brand-active-text)
      background-color: var(--vp-button-brand-active-bg)
    }
  }

  &.secondary {
    border-color: var(--vp-button-alt-border)
    color: var(--vp-button-alt-text)
    background-color: var(--vp-button-alt-bg)

    &:hover {
      border-color: var(--vp-button-alt-hover-border)
      color: var(--vp-button-alt-hover-text)
      background-color: var(--vp-button-alt-hover-bg)
    }

    &:active {
      border-color: var(--vp-button-alt-active-border)
      color: var(--vp-button-alt-active-text)
      background-color: var(--vp-button-alt-active-bg)
    }
  }

  svg {
    display: inline-block
    vertical-align: middle
    margin-right: 0.5em
    font-size: 1.25em
  }

  .text {
    margin-right: 10px
  }

  .version {
    font-size: 0.8em
  }
}

.version-disclaimer {
  display: block
  text-align: center
  margin: 0.75em auto
  font-size: 0.75rem
}
</style>
