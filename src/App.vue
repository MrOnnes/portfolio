<script setup>
import AboutSection from "./components/AboutSection.vue";
import ContactSection from "./components/ContactSection.vue";
import HeroSection from "./components/HeroSection.vue";
import ProjectSection from "./components/ProjectSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ThemeProvider from "./components/ThemeProvider.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
</script>

<template>
  <ThemeProvider>
    <div class="min-h-screen">
      <nav
        class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
      >
        <div class="container mx-auto px-6 py-4">
          <div class="flex justify-between items-center">
            <div
              class="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Senno Adi
            </div>

            <div class="flex items-center gap-6">
              <div class="hidden md:flex space-x-8">
                <a
                  href="#hero"
                  class="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
                  >Home</a
                >
                <a
                  href="#about"
                  class="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
                  >About</a
                >
                <a
                  href="#skills"
                  class="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
                  >Skills</a
                >
                <!-- <a
                  href="#projects"
                  class="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
                  >Projects</a
                > -->
                <a
                  href="#contact"
                  class="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
                  >Contact</a
                >
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <Main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <!-- //todo Perbaiki bagian project -->
        <!-- <section id="projects">
          <ProjectSection />
        </section> -->
        <section id="contact">
          <ContactSection />
        </section>
      </Main>
    </div>
  </ThemeProvider>

  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.dark ::-webkit-scrollbar-track {
  background: #374151;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #8b5cf6, #ec4899);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #7c3aed, #db2777);
}
</style>
