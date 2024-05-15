<script setup lang="ts">
import { ArrowUpRightIcon } from "@heroicons/vue/20/solid";
defineProps<{
  image: string;
  title: string;
  points: string[];
  webpage: string;
  github: string;
}>();
</script>

<template>
  <div
    class="flex flex-col items-stretch gap-4 p-3 bg-green-100 border border-slate-300 w-auto rounded dark:bg-green-900 dark:border-slate-600"
  >
    <div
      class="h-[150px] bg-black rounded border border-slate-300 dark:border-slate-600"
      :style="`background: url(${image}); background-size:cover;`"
    ></div>
    <!-- <img :src="image" alt="Header image" class="h-[80px] rounded" /> -->
    <div class="flex flex-col gap-2 flex-1 justify-between">
      <h4 class="font-bold text-md">{{ title }}</h4>
      <ul class="list-disc gap-2 flex flex-col pl-4">
        <li v-for="point in points" class="text-xs">{{ point }}</li>
      </ul>
      <div
        class="flex gap-4 text-xs text-blue-600 underline dark:text-blue-300"
      >
        <a :href="webpage" class="flex">
          webpage <ArrowUpRightIcon class="w-3" />
        </a>
        <a :href="github" class="flex">
          github <ArrowUpRightIcon class="w-3" />
        </a>
      </div>
    </div>
  </div>
</template>
