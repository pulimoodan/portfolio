<script setup lang="ts">
import { ArrowUpRightIcon } from "@heroicons/vue/20/solid";
defineProps<{
  image: string;
  title: string;
  description: string;
  link: string;
}>();
</script>

<template>
  <a
    :href="link"
    class="flex flex-col gap-2 p-2 bg-green-100 border border-slate-300 w-auto rounded dark:bg-green-900 dark:border-slate-600"
  >
    <img :src="image" alt="Header image" class="h-[80px] rounded" />
    <h4 class="font-bold text-sm">{{ title }}</h4>
    <p class="font-medium dark:font-normal text-xs">
      {{ description }}
      <ArrowUpRightIcon class="w-5 inline text-blue-600 dark:text-blue-300" />
    </p>
  </a>
</template>
