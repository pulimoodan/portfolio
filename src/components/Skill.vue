<script setup lang="ts">
defineProps<{ icon: string; label: string }>();
</script>

<template>
  <div
    class="flex items-center gap-2 px-4 py-2 bg-green-100 rounded border border-slate-300 dark:border-slate-600 dark:bg-green-900"
  >
    <img :src="icon" alt="Skill icon" class="h-6" />
    <span>{{ label }}</span>
  </div>
</template>
