import { onMounted, ref } from "vue";

const theme = ref("dark");

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
    setTheme("dark");
    // const saved = localStorage.getItem("theme");
    // if (saved) {
    //   console.log("saved theme", saved);
    //   setTheme(saved);
    // } else {
    //   setTheme("dark");
    //   // const prefersDark = window.matchMedia(
    //   //   "(prefers-color-scheme: dark)"
    //   // ).matches;
    //   // setTheme(prefersDark ? "dark" : "light");
    // }
  });

  return {
    theme,
    toggleTheme,
  };
}
