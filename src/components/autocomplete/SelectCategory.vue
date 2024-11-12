<script setup lang="ts">
import { SearchCategory } from '@/common/constants'
import { useSearchStore } from '@/store/searchStore'
import BookIcon from '../icons/BookIcon.vue'
import CityIcon from '../icons/CityIcon.vue'

const searchStore = useSearchStore()
</script>
<template>
  <div class="flex mb-8">
    <button
      v-for="category in SearchCategory"
      class="flex justify-center gap-2 border-white/50 border-y px-1 p-2 last:border-r border-l first:rounded-l last:rounded-r w-32 capitalize"
      :class="{
        'bg-white text-darkblue': searchStore.searchCategory === category,
        ' text-white': searchStore.searchCategory !== category,
      }"
      @click="searchStore.searchCategory = category"
    >
      <BookIcon class="flex-grow-0" v-if="category === SearchCategory.Books" />
      <CityIcon class="flex-grow-0" v-if="category === SearchCategory.Cities" />
      {{ category }}
    </button>
  </div>
</template>
