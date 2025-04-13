<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const lang = useLanguageStore()

const strings = computed(() => {
  return lang.strings
})

useHead({
  titleTemplate(title) {
    return title
      ? `${title} - ${strings.value.appTitle}`
      : strings.value.appTitle
  },
  meta: [
    { name: 'apple-mobile-web-app-title', content: strings.value.appTitle },
  ],
  htmlAttrs: { lang: lang.strings.$properties.code },
})

watch(
  () => strings,
  () => {
    useHead({
      htmlAttrs: { lang: strings.value.$properties.code },
    })
  },
  { deep: true }
)
</script>
