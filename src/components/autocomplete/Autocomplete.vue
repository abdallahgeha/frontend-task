<script setup lang="ts">
import { useSearchStore } from '@/store/searchStore'
import AutoCompleteInput from './AutoCompleteInput.vue'
import MinChar from './MinChar.vue'
import SelectCategory from './SelectCategory.vue'
import { MIN_CHAR_INPUT } from '@/common/constants'
import SearchResultList from './SearchResultList.vue'
import NoResults from './NoResults.vue'

const searchStore = useSearchStore()
</script>

<template>
  <SelectCategory />
  <AutoCompleteInput />
  <MinChar v-if="searchStore.searchParam.length < MIN_CHAR_INPUT" />
  <SearchResultList v-else-if="searchStore.searchResults.length" />
  <NoResults v-else />
</template>
