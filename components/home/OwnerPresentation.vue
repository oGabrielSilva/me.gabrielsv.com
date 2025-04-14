<template>
  <div data-container class="d-flex justify-content-center align-items-center">
    <div class="row w-100 py-4 text-center text-sm-start align-items-center">
      <div class="col-lg-8">
        <section>
          <div>
            <span class="text-warning-emphasis">
              {{ strings.hello }}
            </span>
            <h1>
              <strong>{{ conf.owner.firstName }}</strong>
              {{ strings.here }}.
            </h1>
            <p class="pt-4">
              {{ strings.ownerText }}
            </p>
            <p>
              {{ strings.ownerTextShort }}
            </p>
          </div>

          <nav class="pt-4">
            <h4 class="mb-3">{{ strings.knowMe }}</h4>

            <UiOwnerSocialLinks />
          </nav>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const conf = useAppConfig()
const strings = computed(() => useLanguageStore().strings)
</script>

<style scoped>
@media (min-width: 333px) {
  h1 {
    font-size: 4rem;
  }
}

[data-container] {
  min-height: 85vh;
}
</style>
