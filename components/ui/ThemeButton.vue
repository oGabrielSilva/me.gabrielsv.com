<template>
  <button
    class="btn"
    :class="`btn-${theme.current}`"
    type="button"
    @click="theme.toggle"
  >
    <font-awesome-icon
      v-if="theme.current === 'light'"
      :icon="['fas', 'sun']"
    />

    <font-awesome-icon v-else :icon="['fas', 'moon']" />
  </button>
</template>

<script setup lang="ts">
const theme = useThemeStore()
</script>

<style scoped></style>
