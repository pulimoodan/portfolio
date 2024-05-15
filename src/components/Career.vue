<script setup lang="ts">
defineProps<{
  title: string;
  org: string;
  period: { from: string; to: string };
  tools: string[];
  subdued: boolean;
}>();
</script>

<template>
  <div
    :class="`flex flex-col gap-2 p-4 ${
      subdued
        ? 'bg-green-50 dark:bg-green-900'
        : 'bg-green-100  dark:bg-green-950'
    } rounded border border-slate-300 dark:border-slate-600`"
  >
    <div class="flex items-center justify-between">
      <h5 class="font-semibold text-sm">{{ title }} • {{ org }}</h5>
      <span class="text-xs">{{ period.from }} - {{ period.to }}</span>
    </div>
    <p class="text-xs text-slate-600 dark:text-gray-300">
      {{ tools.join(", ") }}
    </p>
  </div>
</template>
