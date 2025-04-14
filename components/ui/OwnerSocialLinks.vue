<template>
  <ul
    class="list-unstyled d-flex gap-3 m-0 p-0 flex-wrap justify-content-md-start justify-content-center"
  >
    <li v-for="(social, i) in conf.owner.social" :key="i">
      <a
        :href="social.uri"
        :data-social="social.name"
        target="_blank"
        rel="noopener noreferrer"
        class="link-body-emphasis text-decoration-none"
      >
        <font-awesome-icon :icon="social.icon" class="fs-2" />
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const conf = useAppConfig()
</script>

<style scoped></style>
