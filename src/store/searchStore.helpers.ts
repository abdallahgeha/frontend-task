import { includesIgnoreCase } from '@/common/utils'
import { MIN_CHAR_INPUT, SearchCategory } from '@/common/constants'
import type { SearchResult } from '@/common/types'
import { books } from '@/data/books'
import { cities } from '@/data/cities'

export const getBookResults = (
  searchParam: string,
  searchCategory: SearchCategory,
): SearchResult[] => {
  if (searchParam.length < MIN_CHAR_INPUT) return []
  if (searchCategory !== SearchCategory.Books && searchCategory !== SearchCategory.All) return []

  return books
    .filter((book) => includesIgnoreCase(book.title, searchParam))
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((book) => ({
      title: book.title,
      type: SearchCategory.Books,
      subtitle: book.author,
    }))
}

export const getCityResults = (
  searchParam: string,
  searchCategory: SearchCategory,
): SearchResult[] => {
  if (searchParam.length < MIN_CHAR_INPUT) return []
  if (searchCategory !== SearchCategory.Cities && searchCategory !== SearchCategory.All) return []

  return cities
    .filter((city) => includesIgnoreCase(city, searchParam))
    .sort((a, b) => a.localeCompare(b))
    .map((city) => ({
      title: city,
      type: SearchCategory.Cities,
    }))
}
