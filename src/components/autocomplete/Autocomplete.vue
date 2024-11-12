<script setup lang="ts">
import { useSearchStore } from '@/store/searchStore'
import AutoCompleteInput from './AutoCompleteInput.vue'
import MinChar from './MinChar.vue'
import SelectCategory from './SelectCategory.vue'
import { MIN_CHAR_INPUT } from '@/common/constants'

const searchStore = useSearchStore()
</script>

<template>
  <SelectCategory />
  <AutoCompleteInput />
  <MinChar v-if="searchStore.searchParam.length < MIN_CHAR_INPUT" />
</template>
