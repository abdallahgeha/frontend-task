import { describe, expect, it } from 'vitest'
import { includesIgnoreCase } from '../utils'

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
