import { SearchCategory } from '@/common/constants'
import type { SearchResult } from '@/common/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchStore = defineStore('searchStore', () => {
  const searchCategory = ref<SearchCategory>(SearchCategory.All)
  const searchParam = ref('')

  const searchResults: SearchResult[] = [
    { title: 'citi 1', type: SearchCategory.Cities },
    { title: 'citi 2', type: SearchCategory.Cities },
    { title: 'citi 3', type: SearchCategory.Cities },
    { title: 'Book 1', subtitle: 'author 2', type: SearchCategory.Books },
    { title: 'Book 2', subtitle: 'author 2', type: SearchCategory.Books },
  ]

  return { searchParam, searchCategory, searchResults }
})
