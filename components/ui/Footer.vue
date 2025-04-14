<template>
  <div class="py-6">
    <footer class="container text-center">
      <section class="pb-4">
        <div>
          <UiLogo />
        </div>
        <div class="pt-4">
          <p>
            <strong class="fw-light">{{ strings.appFullTitle }}</strong>
          </p>
          <p>
            {{ strings.cnpj }}: <strong>{{ conf.owner.cnpj }}</strong>
          </p>
        </div>
      </section>

      <section class="d-flex justify-content-center pb-5">
        <UiOwnerSocialLinks />
      </section>

      <section>
        <p class="text-muted">
          <small>
            {{ strings.designedAndDevelopedBy }} {{ conf.owner.fullName }}.
          </small>
        </p>
        <p>
          <small>
            {{ new Date().getFullYear() }} &copy;
            {{ strings.allRightsReserved }}
          </small>
        </p>
      </section>
    </footer>
  </div>
</template>

<script setup lang="ts">
const conf = useAppConfig()
const strings = computed(() => useLanguageStore().strings)
</script>

<style scoped></style>
