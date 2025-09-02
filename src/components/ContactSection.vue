<template>
  <section
    ref="sectionRef"
    class="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
  >
    <!-- Background gradient shapes -->
    <Motion
      class="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300 rounded-full opacity-30 blur-3xl"
      :animate="{
        x: [0, 20, 0],
        y: [0, -15, 0],
      }"
      :transition="{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }"
    />

    <Motion
      class="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-300 via-cyan-300 to-teal-300 rounded-full opacity-40 blur-2xl"
      :animate="{
        x: [0, -15, 0],
        y: [0, 10, 0],
      }"
      :transition="{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }"
    />

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <Motion
          :initial="{ opacity: 0, y: 50 }"
          :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }"
          :transition="{ duration: 0.8 }"
          class="space-y-8"
        >
          <h2
            class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-700 to-pink-600 dark:from-white dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
          >
            Let's work together!
          </h2>

          <Motion
            class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            :initial="{ opacity: 0, y: 30 }"
            :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }"
            :transition="{ duration: 0.8, delay: 0.2 }"
          >
            I'm always interested in new opportunities and exciting projects.
            Whether you have a project in mind or just want to chat about design
            and development, I'd love to hear from you.
          </Motion>

          <!-- Contact Options -->
          <Motion
            class="flex flex-col sm:flex-row gap-6 justify-center items-center"
            :initial="{ opacity: 0, y: 30 }"
            :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }"
            :transition="{ duration: 0.8, delay: 0.4 }"
          >
            <a
              href="mailto:senno.adi2509@gmail.com"
              class="flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <span class="material-symbols-outlined mr-3"> mail </span>
              Send me an email
            </a>

            <!-- <button
              class="flex items-center justify-center border border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900 hover:border-purple-400 dark:hover:border-purple-500 px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <span class="material-symbols-outlined mr-3"> chat </span>
              Let's chat
            </button> -->
          </Motion>

          <!-- Additional Contact Info -->
          <Motion
            class="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12 pt-8 border-t border-gray-200"
            :initial="{ opacity: 0 }"
            :animate="isInView ? { opacity: 1 } : { opacity: 0 }"
            :transition="{ duration: 0.8, delay: 0.6 }"
          >
            <div
              class="flex items-center gap-3 text-gray-600 dark:text-gray-300"
            >
              <div
                class="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center"
              >
                <span class="material-symbols-outlined text-white"> mail </span>
              </div>
              <span>senno.adi2509@gmail.com</span>
            </div>

            <!-- <div
              class="flex items-center gap-3 text-gray-600 dark:text-gray-300"
            >
              <div
                class="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-600 rounded-lg flex items-center justify-center"
              >
                <span class="material-symbols-outlined text-white">
                  calendar_month
                </span>
              </div>
              <span>Available for new projects</span>
            </div> -->
          </Motion>

          <!-- Social Links -->
          <!-- <Motion
            class="flex gap-6 justify-center pt-8"
            :initial="{ opacity: 0, y: 20 }"
            :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
            :transition="{ duration: 0.8, delay: 0.8 }"
          >
            <Motion
              v-for="(social, index) in socials"
              :key="social"
              href="#"
              as="a"
              class="w-12 h-12 bg-gray-100 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
              :whileHover="{ scale: 1.1, y: -2 }"
              :whileTap="{ scale: 0.95 }"
              :initial="{ opacity: 0, y: 20 }"
              :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }"
              :transition="{ duration: 0.4, delay: 0.8 + index * 0.1 }"
            >
              <span class="text-sm font-medium">{{ social[0] }}</span>
            </Motion>
          </Motion> -->
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Motion } from "@oku-ui/motion";
import { useInView } from "motion-v";

const sectionRef = ref(null);
const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

const socials = ["Twitter", "LinkedIn", "GitHub", "Dribbble"];
</script>
