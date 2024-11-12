import { mount } from '@vue/test-utils'
import AutoComplete from '../AutoComplete.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('Autocomplete Integration', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('changes search label when changing clicking other search categories', async () => {
    const wrapper = mount(AutoComplete)

    const CategoriesButtons = wrapper.findAll('button')
    const allButton = CategoriesButtons.find((button) => button.text() === 'all')
    const booksButton = CategoriesButtons.find((button) => button.text() === 'books')
    const citiesButton = CategoriesButtons.find((button) => button.text() === 'cities')

    expect(wrapper.text()).toContain('Search for all')

    await booksButton?.trigger('click')
    expect(wrapper.text()).toContain('Search for books')

    await citiesButton?.trigger('click')
    expect(wrapper.text()).toContain('Search for cities')

    await allButton?.trigger('click')
    expect(wrapper.text()).toContain('Search for all')
  })

  it('changes for items when input is larger or equal to 3', async () => {
    const wrapper = mount(AutoComplete)

    const autocompleteInput = wrapper.find('input')

    expect(wrapper.text()).toContain('Please type at least 3 characters to search.')

    await autocompleteInput.setValue('sa')
    expect(wrapper.text()).toContain('Please type at least 3 characters to search.')

    await autocompleteInput.setValue('san')
    expect(wrapper.text()).not.toContain('Please type at least 3 characters to search.')

    await autocompleteInput.setValue('sanfr')
    expect(wrapper.text()).toContain('No results found.')

    await autocompleteInput.setValue('san fr')
    expect(wrapper.text()).toContain('san francisco')
  })

  it('clears search with clear button escape', async () => {
    const wrapper = mount(AutoComplete)

    const autocompleteInput = wrapper.find('input')

    expect(wrapper.find('#close-icon').exists()).toBe(false)
    expect(wrapper.text()).toContain('Please type at least 3 characters to search.')

    await autocompleteInput.setValue('san fr')
    expect(wrapper.text()).toContain('san francisco')

    expect(wrapper.find('#close-icon').exists()).toBe(true)

    await wrapper.find('#close-icon').trigger('click')
    expect(wrapper.text()).toContain('Please type at least 3 characters to search.')
    expect(wrapper.find('#close-icon').exists()).toBe(false)

    await autocompleteInput.setValue('san fr')
    expect(wrapper.text()).toContain('san francisco')

    await autocompleteInput.trigger('keydown.escape')
    expect(wrapper.text()).not.toContain('san francisco')
    expect(wrapper.text()).toContain('Please type at least 3 characters to search.')
  })

  it('results should change based on selected category', async () => {
    const wrapper = mount(AutoComplete)

    const autocompleteInput = wrapper.find('input')
    const CategoriesButtons = wrapper.findAll('button')
    const booksButton = CategoriesButtons.find((button) => button.text() === 'books')
    const citiesButton = CategoriesButtons.find((button) => button.text() === 'cities')

    expect(wrapper.text()).toContain('Please type at least 3 characters to search.')

    await autocompleteInput.setValue('san fr')
    expect(wrapper.text()).toContain('san francisco')

    await booksButton?.trigger('click')
    expect(wrapper.text()).not.toContain('san francisco')
    expect(wrapper.text()).not.toContain('Please type at least 3 characters to search.')
    expect(wrapper.text()).toContain('No results found.')

    await citiesButton?.trigger('click')
    expect(wrapper.text()).toContain('san francisco')
  })
})
