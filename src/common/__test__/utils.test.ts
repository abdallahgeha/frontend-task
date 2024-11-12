import { getFormattedTitle, includesIgnoreCase } from '../utils'

describe('includesIgnoreCase', () => {
  it('returns true when text includes search string, case insensitive', () => {
    const result = includesIgnoreCase('Hello World', 'hello')
    expect(result).toBe(true)
  })

  it('returns true when search string is part of the text, case insensitive', () => {
    const result = includesIgnoreCase('JavaScript is great', 'script')
    expect(result).toBe(true)
  })

  it('returns false when search string is not part of the text', () => {
    const result = includesIgnoreCase('Hello World', 'goodbye')
    expect(result).toBe(false)
  })

  it('returns true when both text and search are the same case', () => {
    const result = includesIgnoreCase('OpenAI', 'OpenAI')
    expect(result).toBe(true)
  })

  it('returns false when the text is empty', () => {
    const result = includesIgnoreCase('', 'text')
    expect(result).toBe(false)
  })

  it('returns true when search string is an empty string', () => {
    const result = includesIgnoreCase('Some text', '')
    expect(result).toBe(true)
  })

  it('returns true when both text and search are empty', () => {
    const result = includesIgnoreCase('', '')
    expect(result).toBe(true)
  })

  it('handles longer strings correctly', () => {
    const result = includesIgnoreCase('The quick brown fox jumps over the lazy dog', 'lazy')
    expect(result).toBe(true)
  })

  it('returns false for different characters with different case', () => {
    const result = includesIgnoreCase('Hello', 'HELLO!')
    expect(result).toBe(false)
  })
})

describe('getFormattedTitle', () => {
  it('returns the title as a single-element array if searchParam is empty', () => {
    const title = 'Hello World'
    const result = getFormattedTitle(title, '')
    expect(result).toEqual([title])
  })

  it('returns the title as is if searchParam is not found in title', () => {
    const title = 'Hello World'
    const searchParam = 'test'
    const result = getFormattedTitle(title, searchParam)
    expect(result).toEqual([title])
  })

  it('splits the title when searchParam is found (case-insensitive)', () => {
    const title = 'Hello World'
    const searchParam = 'world'
    const result = getFormattedTitle(title, searchParam)
    expect(result).toEqual(['Hello ', 'World', ''])
  })

  it('splits the title correctly with multiple occurrences of searchParam', () => {
    const title = 'The quick brown fox jumps over the lazy fox'
    const searchParam = 'fox'
    const result = getFormattedTitle(title, searchParam)
    expect(result).toEqual(['The quick brown ', 'fox', ' jumps over the lazy ', 'fox', ''])
  })

  it('handles searchParam as a substring of a word correctly', () => {
    const title = 'HelloWorld'
    const searchParam = 'loWo'
    const result = getFormattedTitle(title, searchParam)
    expect(result).toEqual(['Hel', 'loWo', 'rld'])
  })

  it('returns an array with the title if title is empty', () => {
    const title = ''
    const searchParam = 'test'
    const result = getFormattedTitle(title, searchParam)
    expect(result).toEqual([''])
  })
})
