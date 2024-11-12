<script setup lang="ts">
import type { SearchResult } from '@/common/types'
import { getFormattedTitle } from '@/common/utils'
import { SearchCategory } from '@/common/constants'
import CityIcon from '../icons/CityIcon.vue'
import BookIcon from '../icons/BookIcon.vue'
import { useSearchStore } from '@/store/searchStore'

defineProps<{
  result: SearchResult
}>()

const searchStore = useSearchStore()
</script>

<template>
  <li
    class="flex items-center gap-2 hover:bg-slate-200/80 focus:bg-slate-200/80 focus:outline-none p-4 text-lg cursor-pointer"
  >
    <CityIcon v-if="result.type === SearchCategory.Cities" />
    <BookIcon v-else />
    <div>
      <p>
        <span
          v-for="(part, i) in getFormattedTitle(result.title, searchStore.searchParam)"
          :key="i"
        >
          <span
            v-if="part.toLowerCase() === searchStore.searchParam.toLowerCase()"
            class="font-normal"
          >
            {{ part }}
          </span>
          <span v-else class="font-bold">
            {{ part }}
          </span>
        </span>
      </p>
      <p v-if="!!result.subtitle" class="text-current/70 text-sm capitalize">
        {{ result.subtitle }}
      </p>
    </div>
  </li>
</template>
