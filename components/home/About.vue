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
            :class="getRandomDirection()"
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

function getRandomDirection() {
  return Math.random() < 0.5 ? 'left' : 'right'
}
</script>

<style>
.skill-icon {
  transition: all 0.3s ease-in-out;
}

.skill-icon * {
  fill: var(--bs-body-color);
}

.skill-icon:hover * {
  fill: var(--bs-primary-text-emphasis);
  color: var(--bs-primary-text-emphasis);
  transform-origin: center;
}

.skill-icon.left:hover {
  transform: rotate(-6deg);
}

.skill-icon.right:hover {
  transform: rotate(6deg);
}
</style>
