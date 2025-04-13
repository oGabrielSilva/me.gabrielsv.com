<template>
  <div class="dropdown">
    <button
      class="btn dropdown-toggle"
      :class="`btn-${theme.current}`"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <font-awesome-icon :icon="['fas', 'globe']" />
      {{ langStore.strings.$properties.shortLabel }}
    </button>
    <ul class="dropdown-menu">
      <li v-for="lang in conf.i18n.languages" :key="lang.$properties.code">
        <button
          type="button"
          class="dropdown-item"
          @click="langStore.set(lang.$properties.code)"
        >
          {{ lang.$properties.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const langStore = useLanguageStore()
const theme = useThemeStore()
const conf = useAppConfig()
</script>

<style scoped></style>
