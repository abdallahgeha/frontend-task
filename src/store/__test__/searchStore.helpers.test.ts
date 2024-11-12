import { describe, it, expect } from 'vitest'
import { SearchCategory } from '@/common/constants'
import { getBookResults, getCityResults } from '../searchStore.helpers'

describe('getBookResults', () => {
  it('returns books that match search param, case insensitive', () => {
    const searchParam = 'tom'
    const searchCategory = SearchCategory.Books
    const results = getBookResults(searchParam, searchCategory)
    expect(results.length).toBeGreaterThan(0)
    expect(results[0].title.toLowerCase()).toContain('tom')
  })

  it('returns empty when searchParam is too short', () => {
    const searchParam = 'ha'
    const searchCategory = SearchCategory.Books
    const results = getBookResults(searchParam, searchCategory)
    expect(results).toEqual([])
  })

  it('returns empty when searchCategory is not Books', () => {
    const searchParam = 'harry'
    const searchCategory = SearchCategory.Cities
    const results = getBookResults(searchParam, searchCategory)
    expect(results).toEqual([])
  })
})

describe('getCityResults', () => {
  it('returns cities that match search param, case insensitive', () => {
    const searchParam = 'san'
    const searchCategory = SearchCategory.Cities
    const results = getCityResults(searchParam, searchCategory)
    expect(results.length).toBeGreaterThan(0)
    expect(results[0].title.toLowerCase()).toContain('san')
  })

  it('returns empty when searchParam is too short', () => {
    const searchParam = 'ne'
    const searchCategory = SearchCategory.Cities
    const results = getCityResults(searchParam, searchCategory)
    expect(results).toEqual([])
  })

  it('returns empty when searchCategory is not Cities', () => {
    const searchParam = 'new'
    const searchCategory = SearchCategory.Books
    const results = getCityResults(searchParam, searchCategory)
    expect(results).toEqual([])
  })
})
