import { setActivePinia, createPinia } from 'pinia'
import { useSearchStore } from '@/store/searchStore'
import { SearchCategory } from '@/common/constants'

describe('useSearchStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with default values', () => {
    const store = useSearchStore()
    expect(store.searchParam).toBe('')
    expect(store.searchCategory).toBe(SearchCategory.All)
    expect(store.searchResults).toEqual([])
  })

  it('returns no results if searchParam length is less than MIN_CHAR_INPUT (3)', () => {
    const store = useSearchStore()
    store.searchParam = 'hii'
    expect(store.searchResults).toEqual([])
  })

  it('searches within books when searchCategory is Books', () => {
    const store = useSearchStore()
    store.searchParam = 'Jones'
    store.searchCategory = SearchCategory.Books

    const results = store.searchResults
    expect(results.length).toBeGreaterThan(0)
    expect(results.every((result) => result.type === SearchCategory.Books)).toBe(true)
  })

  it('searches within cities when searchCategory is Cities', () => {
    const store = useSearchStore()
    store.searchParam = 'san'
    store.searchCategory = SearchCategory.Cities

    const results = store.searchResults
    expect(results.length).toBeGreaterThan(0)
    expect(results.every((result) => result.type === SearchCategory.Cities)).toBe(true)
  })

  it('searches in both books and cities when searchCategory is All', () => {
    const store = useSearchStore()
    store.searchParam = 'tom'
    store.searchCategory = SearchCategory.All

    const results = store.searchResults
    expect(results.length).toBeGreaterThan(0)
    expect(results.some((result) => result.type === SearchCategory.Books)).toBe(true)

    store.searchParam = 'san'
    const newResults = store.searchResults
    expect(newResults.some((result) => result.type === SearchCategory.Cities)).toBe(true)
  })

  it('returns no results if no match is found', () => {
    const store = useSearchStore()
    store.searchParam = 'nonexistent'
    store.searchCategory = SearchCategory.Cities

    expect(store.searchResults).toEqual([])
  })
})
