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
  <li class="flex items-center gap-2 border-mediumblue p-4 border-t first:rounded-none text-lg">
    <CityIcon v-if="result.type === SearchCategory.Cities" />
    <BookIcon v-else />
    <div>
      <p class="text-lg">{{ result.title }}</p>
      <p v-if="!!result.subtitle" class="text-current/70 text-sm">{{ result.subtitle }}</p>
    </div>
  </li>
</template>
