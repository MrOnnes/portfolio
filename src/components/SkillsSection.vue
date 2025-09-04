<template>
  <section ref="refSection" class="py-24 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-6">
      <!-- Header -->
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }"
        :transition="{ duration: 0.8 }"
        class="text-center mb-16"
        ><h2
          class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-700 dark:from-white dark:to-purple-400 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I specialize in creating beautiful, functional digital experiences
          using modern technologies and design principles.
        </p>
      </Motion>

      <!-- Skills grid -->

      <SkillsCarousel />
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Motion } from "@oku-ui/motion";
import { useInView } from "motion-v";
import SkillsCarousel from "./SkillsCarousel.vue";

const refSection = ref<HTMLElement | null>(null);
const isInView = useInView(refSection, { once: true, margin: "-100px" });
</script>
<style lang=""></style>
