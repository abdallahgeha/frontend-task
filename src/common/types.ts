import type { books } from '@/data/books'
import type { cities } from '@/data/cities'
import type { SearchCategory } from './constants'

export type BookType = (typeof books)[number]
export type CityType = (typeof cities)[number]
export type SearchResult = { title: string; type: SearchCategory; subtitle?: string }
