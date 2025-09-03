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
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Motion
          v-for="(skill, index) in skills"
          :key="skill.title"
          :initial="{ opacity: 0, y: 50 }"
          :animate="isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }"
          :transition="{ duration: 0.6, delay: index * 0.1 + 0.2 }"
          :whileHover="{
            scale: 1.05,
            transition: { duration: 0.2 },
          }"
          class="group"
        >
          <div
            class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full"
          >
            <div class="flex flex-col items-center text-center space-y-4">
              <Motion
                class="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300"
                :class="`bg-gradient-to-br ${skill.color}`"
                :whileHover="{ scale: 1.1 }"
              >
                <span
                  class="material-symbols-outlined text-white text-xl w-8 h-8"
                  >{{ skill.icon }}
                </span>
              </Motion>
              <div>
                <h3
                  class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                >
                  {{ skill.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  {{ skill.description }}
                </p>
              </div>
            </div>
            <!-- Accent line -->
            <Motion
              class="h-1 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              :class="`bg-gradient-to-r ${skill.color}`"
              :initial="{ scaleX: 0 }"
              :whileHover="{ scaleX: 1 }"
              :transition="{ duration: 0.3 }"
            />
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Motion } from "@oku-ui/motion";
import { useInView } from "motion-v";

const refSection = ref<HTMLElement | null>(null);
const isInView = useInView(refSection, { once: true, margin: "-100px" });

const skills = [
  {
    icon: "code",
    title: "Vue & Flutter",
    description: "Building scalable applications",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    description: "Creating intuitive interfaces",
    color: "from-pink-400 to-purple-600",
  },
  {
    icon: "smartphone",
    title: "Mobile Design",
    description: "Responsive & mobile-first",
    color: "from-green-400 to-teal-600",
  },
  {
    icon: "draw",
    title: "Design Systems",
    description: "Consistent brand experiences",
    color: "from-purple-400 to-indigo-600",
  },
  {
    icon: "bolt",
    title: "Performance",
    description: "Optimized user experiences",
    color: "from-yellow-400 to-orange-500",
  },
];
</script>
<style lang=""></style>
