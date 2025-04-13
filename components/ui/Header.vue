<template>
  <div>
    <header class="container pt-3">
      <div
        class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center"
      >
        <NuxtLink
          class="text-reset text-decoration-none"
          :to="{ name: 'index' }"
        >
          <UiLogo
            :title="strings.appFullTitle"
            :aria-label="strings.logoDescription"
          />
        </NuxtLink>

        <div
          class="d-flex align-items-center justify-content-end gap-sm-3 gap-2"
        >
          <UiThemeButton />
          <UiLanguageSelector />
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
const strings = computed(() => useLanguageStore().strings)
</script>

<style scoped></style>
