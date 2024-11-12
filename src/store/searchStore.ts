import { SearchCategory } from '@/common/constants'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchStore = defineStore('searchStore', () => {
  const searchCategory = ref<SearchCategory>(SearchCategory.All)
  const searchParam = ref('')

  return { searchParam, searchCategory }
})
