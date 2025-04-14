<template>
  <div class="ratio ratio-1x1">
    <img
      :src="conf.owner.imageURI"
      :alt="conf.owner.fullName"
      class="img-fluid rounded-circle object-fit-cover w-100 h-100"
      width="360"
      height="360"
      :title="conf.owner.fullName"
      draggable="false"
      loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
const conf = useAppConfig()
</script>

<style scoped>
img {
  border: 6px solid;
}

.ratio {
  max-width: 256px;
  max-height: 256px;
}

@media (min-width: 768px) {
  .ratio {
    max-width: 360px;
    max-height: 360px;
  }
}
</style>
