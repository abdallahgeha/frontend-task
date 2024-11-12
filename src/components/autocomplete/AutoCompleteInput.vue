<script setup lang="ts">
import { useSearchStore } from '@/store/searchStore'
import SearchIcon from '../icons/SearchIcon.vue'
import CloseIcon from '../icons/CloseIcon.vue'
import { SearchCategory } from '@/common/constants'

const searchStore = useSearchStore()
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="text-2xl text-white" for="searchbox"
      >Search for {{ searchStore.searchCategory }}</label
    >
    <div class="relative w-full">
      <SearchIcon
        v-if="!searchStore.searchParam"
        class="top-1/2 left-4 absolute w-6 h-6 text-gray-400 transform -translate-y-1/2"
      />
      <CloseIcon
        @click="searchStore.searchParam = ''"
        v-else="!!searchStore.searchParam"
        class="top-1/2 left-4 absolute w-6 h-6 text-gray-400 transform -translate-y-1/2 cursor-pointer"
      />
      <input
        type="text"
        name="searchbox"
        v-model="searchStore.searchParam"
        :placeholder="
          searchStore.searchCategory === SearchCategory.All
            ? 'Search City or Book'
            : searchStore.searchCategory === SearchCategory.Books
              ? 'Find Your Next Read'
              : 'Where to?'
        "
        class="p-4 pl-12 w-full text-2xl text-darkblue"
        @keydown.escape="searchStore.searchParam = ''"
        autofocus
        autocomplete="off"
      />
    </div>
  </div>
</template>
