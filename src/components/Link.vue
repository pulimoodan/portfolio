<script setup lang="ts">
import { ArrowUpRightIcon } from "@heroicons/vue/20/solid";

defineProps<{ icon: string; label: string; link: string }>();
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="text-blue-600 underline flex items-center gap-1 dark:text-blue-300"
  >
    <img :src="icon" alt="Social media icon" class="w-4 rounded" />
    <div class="flex items-center">
      {{ label }}
      <ArrowUpRightIcon class="w-4" />
    </div>
  </a>
</template>
