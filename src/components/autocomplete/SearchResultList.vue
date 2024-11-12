<script setup lang="ts">
import { useSearchStore } from '@/store/searchStore'
import SearchResultItem from './SearchResultItem.vue'

const searchStore = useSearchStore()
</script>

<template>
  <ul class="flex flex-col bg-white shadow-2xl rounded-b-2xl text-darkblue text-lg overflow-hidden">
    <SearchResultItem
      v-if="searchStore.searchResults.length > 0"
      v-for="result in searchStore.searchResults"
      @click="searchStore.searchParam = result.title"
      @keydown.enter="searchStore.searchParam = result.title"
      @keydown.space="searchStore.searchParam = result.title"
      :tabindex="0"
      :result="result"
      :key="result.title"
    />
  </ul>
</template>
