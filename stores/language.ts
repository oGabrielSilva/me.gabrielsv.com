import { defineStore } from 'pinia'

const getByCode = (code: string) => {
  const conf = useAppConfig()
  const lang = conf.i18n.languages.find(
    (lang) => lang.$properties.code === code
  )
  const found = !!lang

  return { lang: lang || conf.i18n.default, found }
}

export const useLanguageStore = defineStore('language', () => {
  const conf = useAppConfig()
  const cookie = useCookie(conf.i18n.storage.key)

  const currentLanguageRef = ref(
    cookie.value ? getByCode(cookie.value).lang : conf.i18n.default
  )

  const strings = computed(() => currentLanguageRef.value)
  const code = computed(() => currentLanguageRef.value.$properties.code)

  const set = (code: string) => {
    const result = getByCode(code)
    if (result.found) {
      currentLanguageRef.value = result.lang
      cookie.value = result.lang.$properties.code
    }
  }

  return {
    strings,
    code,
    set,
  }
})
