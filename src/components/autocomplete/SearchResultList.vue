<script setup lang="ts">
import { useSearchStore } from '@/store/searchStore'
import SearchResultItem from './SearchResultItem.vue'

const searchStore = useSearchStore()
</script>

<template>
  <ul class="flex flex-col bg-white shadow-2xl rounded-b-2xl text-darkblue text-lg overflow-hidden">
    <SearchResultItem
      v-for="result in searchStore.searchResults"
      :result="result"
      :key="result.title"
    />
  </ul>
</template>
