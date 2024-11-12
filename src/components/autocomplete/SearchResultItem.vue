<script setup lang="ts">
import type { SearchResult } from '@/common/types'
import { SearchCategory } from '@/common/constants'
import CityIcon from '../icons/CityIcon.vue'
import BookIcon from '../icons/BookIcon.vue'

defineProps<{
  result: SearchResult
}>()
</script>

<template>
  <li
    class="flex items-center gap-2 border-mediumblue hover:bg-slate-200/80 focus:bg-slate-200/80 focus:font-semibold focus:outline-none p-4 first:rounded-none text-lg cursor-pointer"
  >
    <CityIcon v-if="result.type === SearchCategory.Cities" />
    <BookIcon v-else />
    <div>
      <p class="text-lg capitalize">{{ result.title }}</p>
      <p v-if="!!result.subtitle" class="text-current/70 text-sm capitalize">
        {{ result.subtitle }}
      </p>
    </div>
  </li>
</template>
