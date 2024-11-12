import { SearchCategory } from '@/common/constants'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { getBookResults, getCityResults } from './searchStore.helpers'

export const useSearchStore = defineStore('searchStore', () => {
  const searchCategory = ref<SearchCategory>(SearchCategory.All)
  const searchParam = ref('')

  const bookResults = computed(() => getBookResults(searchParam.value, searchCategory.value))
  const cityResults = computed(() => getCityResults(searchParam.value, searchCategory.value))

  const searchResults = computed(() => {
    return [...bookResults.value, ...cityResults.value]
  })

  return { searchParam, searchCategory, searchResults }
})
