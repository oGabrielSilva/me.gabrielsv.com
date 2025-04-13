import { defineStore } from 'pinia'
import { computed } from 'vue'

type ColorScheme = 'dark' | 'light'

const themes: ColorScheme[] = ['dark', 'light']

const isThemeOption = (value: unknown): value is ColorScheme => {
  return themes.includes(value as ColorScheme)
}

export const useThemeStore = defineStore('theme', () => {
  const conf = useAppConfig()
  const cookie = useCookie(conf.theme.storage.key)

  const current = computed(
    () =>
      (isThemeOption(cookie.value)
        ? cookie.value
        : conf.theme.default) as ColorScheme
  )
  const isDark = computed(() => current.value === 'dark')

  const set = (next: ColorScheme) => {
    if (isThemeOption(next)) {
      cookie.value = next
      return
    }

    console.warn(`Invalid theme option: ${next}`)
  }

  const toggle = () => {
    set(current.value === 'dark' ? 'light' : 'dark')
  }

  const update = () => {
    if (import.meta.client) {
      useHead({
        htmlAttrs: {
          [conf.theme.html.attr]: current.value,
        },
      })
    }
  }

  watch(
    () => current.value,
    () => {
      update()
    },
    { deep: true }
  )

  onMounted(() => {
    update()
  })

  return { current, isDark, set, toggle, update }
})
