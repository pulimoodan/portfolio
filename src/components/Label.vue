<script setup lang="ts">
defineProps<{ value: string }>();
</script>

<template>
  <span
    class="font-bold text-purple-700 md:absolute md:top-0 md:left-[-20px] md:translate-x-[-100%] dark:text-purple-400"
  >
    ✨ {{ value }}
  </span>
</template>
