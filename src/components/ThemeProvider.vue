<script setup lang="ts">
import { ref, onMounted, provide } from "vue";

type Theme = "light" | "dark";

const theme = ref<Theme>("dark");

function setTheme(value: Theme) {
  theme.value = value;
  localStorage.setItem("theme", value);
  document.documentElement.classList.toggle("dark", value === "dark");
}

function toggleTheme() {
  setTheme(theme.value === "light" ? "dark" : "light");
}

onMounted(() => {
  const savedTheme = localStorage.getItem("theme") as Theme | null;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  setTheme(savedTheme || systemTheme);
});

// provide ke semua anak komponen
provide("theme", theme);
provide("toggleTheme", toggleTheme);
</script>

<template>
  <!-- sama seperti React {children} -->
  <slot />
</template>
