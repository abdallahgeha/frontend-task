<script setup lang="ts">
import { MIN_CHAR_INPUT } from '@/common/constants'
</script>

<template>
  <p class="flex items-center mt-2 p-2 pl-6 text-white">
    Please type at least {{ MIN_CHAR_INPUT }} characters to search.
  </p>
</template>
