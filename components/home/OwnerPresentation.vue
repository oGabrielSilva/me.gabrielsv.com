<template>
  <div data-container class="d-flex justify-content-center align-items-center">
    <div
      class="row w-100 py-4 text-center text-sm-start align-items-center flex-lg-row flex-column-reverse"
    >
      <div class="col-lg-8">
        <section>
          <div>
            <h1>
              {{ strings.hello }}
              <strong>{{ conf.owner.firstName }}</strong>
              {{ strings.here }}
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
          </nav>
        </section>
      </div>

      <div class="col-lg-4">
        <section
          class="py-5 py-lg-0 d-flex justify-content-center justify-content-sm-start justify-content-lg-end"
        >
          <div class="ratio ratio-1x1">
            <img
              :src="conf.owner.imageURI"
              :alt="conf.owner.fullName"
              class="img-fluid rounded-circle object-fit-cover w-100 h-100"
              width="256"
              height="256"
              :title="conf.owner.fullName"
              draggable="false"
              loading="lazy"
            />
          </div>
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
[data-container] {
  min-height: 85vh;
}

img {
  border: 6px solid;
}

.ratio {
  max-width: 256px;
  max-height: 256px;
}
</style>
