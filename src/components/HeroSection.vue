<template>
  <Section
    className="min-h-screen bg-gray-100 dark:bg-gray-900 relative overflow-hidden flex items-center justify-center"
  >
    <!-- /* Background gradient shapes */  -->
    <Motion
      class="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300 rounded-full opacity-70 blur-3xl"
      :animate="{ x: [0, 30, 0], y: [0, -20, 0] }"
      :transition="{ duration: 6, repeat: Infinity, ease: 'easeInOut' }"
    />

    <Motion
      class="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-300 via-cyan-300 to-teal-300 rounded-full opacity-60 blur-2xl"
      :animate="{ x: [0, -20, 0], y: [0, 15, 0] }"
      :transition="{ duration: 4, repeat: Infinity, ease: 'easeInOut' }"
    />

    <!-- Main content -->
    <div class="container mx-auto px-6 text-center relative z-10">
      <Motion
        :initial="{ opacity: 0, y: 50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.2 }"
        ><h1
          class="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-400 dark:to-white bg-clip-text text-transparent"
        >
          Hi, I'm Senno Adi
        </h1>
        <Motion
          class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 0.4 }"
        >
          <!-- UI &amp; UX Designer -->
          UI / UX Designer
        </Motion>
        <Motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.6, delay: 0.6 }"
          ><Button
            size="lg"
            class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div class="flex gap-2">
              View My Work<span class="material-symbols-outlined">
                arrow_downward
              </span>
            </div>
          </Button>
        </Motion>
      </Motion>
    </div>

    <!-- Floatin accent illustration -->
    <Motion
      class="absolute top-1/2 right-10 transform -translate-y-1/2"
      :animate="{ y: [0, -15, 0], rotate: [0, 5, 0, -5, 0] }"
      :transition="{ duration: 4, repeat: Infinity, ease: 'easeInOut' }"
      ><div
        class="w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl shadow-lg opacity-80 flex items-center justify-center"
      >
        <div
          class="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center"
        >
          <div
            class="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md"
          ></div>
        </div>
      </div>
    </Motion>

    <!-- Scroll indicator -->
    <Motion
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      :animate="{ y: [0, 10, 0] }"
      :transition="{ duration: 1.5, repeat: Infinity }"
    >
      <div
        class="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center"
      >
        <div
          class="w-1 h-3 bg-gray-400 dark:border-gray-500 rounded-full mt-2"
        ></div>
      </div>
    </Motion>
  </Section>
</template>
<script setup lang="ts">
import { Motion } from "@oku-ui/motion";
</script>
<style lang=""></style>
