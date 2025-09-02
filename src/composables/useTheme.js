import { onMounted, ref } from "vue";

const theme = ref("light");

export function useTheme() {
  function setTheme(value) {
    theme.value = value;
    document.documentElement.classList.toggle("dark", value === "dark");
    localStorage.setItem("theme", value);
  }

  function toggleTheme() {
    setTheme(theme.value === "light" ? "dark" : "light");
  }

  onMounted(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  });

  return {
    theme,
    toggleTheme,
  };
}
