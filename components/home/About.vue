<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="container text-center text-lg-start">
    <div class="row align-items-center">
      <section class="col-lg-8">
        <h1 class="pb-4">
          {{ strings.aboutTitle }}
        </h1>

        <p
          v-for="(p, i) in strings.aboutParagraphs"
          :key="i"
          class="paragraph"
          v-html="p"
        />
      </section>

      <div class="col-lg-4">
        <section
          class="py-5 py-lg-0 d-flex justify-content-center justify-content-lg-end"
        >
          <UiOwnerImage />
        </section>
      </div>
    </div>

    <section class="py-5">
      <ul class="list-unstyled d-flex flex-wrap gap-4 justify-content-center">
        <li v-for="(skill, i) in conf.owner.skills" :key="i">
          <a
            class="link-body-emphasis text-decoration-none skill-icon d-flex gap-2 justify-content-center flex-column align-items-center"
            :href="skill.uri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <Icon
                :name="skill.icon"
                width="28"
                height="28"
                style="color: white"
              />
            </span>
            <span>
              {{ skill.name }}
            </span>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
const strings = computed(() => useLanguageStore().strings)

const conf = useAppConfig()
</script>

<style>
.skill-icon * {
  fill: var(--bs-body-color);
}
</style>
