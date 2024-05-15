<script setup lang="ts">
defineProps<{ src: string; index: number }>();
</script>

<template>
  <img
    :src="src"
    :alt="`Portrait ${index}`"
    class="h-[170px] rounded-md border border-slate-300 dark:border-slate-600"
  />
</template>
