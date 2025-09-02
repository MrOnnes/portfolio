<template>
  <Motion
    as="button"
    @click="toggleTheme"
    aria-label="Toggle theme"
    class="relative w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
    :whileHover="{ scale: 1.05 }"
    :whileTap="{ scale: 0.95 }"
  >
    <!-- Sun icon -->
    <Motion
      initial="false"
      :animate="{
        scale: theme === 'light' ? 1 : 0,
        rotate: theme === 'light' ? 0 : 180,
      }"
      :transition="{ duration: 0.3 }"
      class="absolute"
    >
      <span class="material-symbols-outlined text-yellow-500 text-[20px]">
        sunny
      </span></Motion
    >
    <!-- Moon icon -->
    <Motion
      initial="false"
      :animate="{
        scale: theme === 'dark' ? 1 : 0,
        rotate: theme === 'dark' ? 0 : -180,
      }"
      :transition="{ duration: 0.3 }"
      class="absolute"
    >
      <span class="material-symbols-outlined text-blue-400 text-[20px]">
        dark_mode
      </span>
    </Motion>
  </Motion>
</template>
<script setup>
import { Motion } from "@oku-ui/motion";
import { useTheme } from "../composables/useTheme";

const { theme, toggleTheme } = useTheme();
</script>
<style lang=""></style>
