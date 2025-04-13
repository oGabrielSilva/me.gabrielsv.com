<template>
  <div class="container-xl text-center text-lg-start">
    <h1 class="">
      {{ strings.myServices }}
    </h1>

    <p class="pt-3">{{ strings.myServicesText }}</p>

    <div class="row py-5 text-start">
      <article
        v-for="(service, i) in strings.services"
        :key="i"
        class="col-sm-6 py-3"
      >
        <div class="card card-hover h-100 shadow">
          <div class="card-body py-5 px-3 px-lg-4">
            <span class="card-icon">
              <font-awesome-icon :icon="service.icon" class="fs-3" />
            </span>
            <h5 class="card-title mb-3 mt-4">{{ service.title }}</h5>
            <p
              v-for="(d, dI) in service.descriptions"
              :key="dI"
              class="card-text my-1"
            >
              {{ d }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const strings = computed(() => useLanguageStore().strings)
</script>

<style scoped>
.card-hover,
.card-hover * {
  transition: all 0.3s ease;
}

.card-hover {
  border: 1px solid transparent;
  background-color: var(--bs-body-bg);
  color: var(--bs-body-color);
}

.card-hover:hover {
  transform: translateY(-5px);
  border-color: var(--bs-border-color-translucent, rgba(0, 0, 0, 0.125));
  box-shadow: 0 0 20px var(--bs-warning, #eeff00);
  background-color: rgba(var(--bs-warning-rgb), 0.05);
}

.card-hover:hover .card-icon * {
  transform: rotate(10deg) scale(1.1);
  transform-origin: center;
}
</style>
