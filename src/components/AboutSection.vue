<template>
  <section ref="sectionRef" class="py-24 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <!-- Profile Image -->
        <Motion
          ref="target"
          :initial="{ opacity: 0, x: -50 }"
          :animate="inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }"
          :transition="{ duration: 0.8, delay: 0.2 }"
          class="relative"
        >
          <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1Njc5ODg4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              class="w-full h-[500px] object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent"
            ></div>
          </div>
          <!-- Floating accent -->
          <Motion
            class="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg flex items-center justify-center"
            :animate="{ rotate: [0, 360] }"
            :transition="{ duration: 8, repeat: Infinity, ease: 'linear' }"
          >
            <span class="material-symbols-outlined text-white text-3xl">
              auto_awesome
            </span>
          </Motion>
        </Motion>

        <!-- Content -->
        <Motion
          :initial="{ opacity: 0, x: 50 }"
          :animate="inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }"
          :transition="{ duration: 0.8, delay: 0.4 }"
          class="space-y-8"
        >
          <div>
            <h2
              class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-700 dark:from-white dark:to-purple-400 bg-clip-text text-transparent"
            >
              About Me
            </h2>
            <p
              class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
            >
              I'm a passionate frontend developer and UI designer with over 5
              years of experience creating beautiful, functional digital
              experiences. I love turning complex problems into simple, elegant
              solutions that users enjoy.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends,
              sketching ideas, or enjoying a good cup of coffee while
              brainstorming the next big project.
            </p>
          </div>

          <!-- Creative icons -->
          <div class="flex gap-8">
            <Motion
              class="flex items-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
              :whileHover="{ scale: 1.05 }"
              :whileTap="{ scale: 0.95 }"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform"
              >
                <span class="material-symbols-outlined text-white text-xl"
                  >code</span
                >
              </div>
              <span class="font-medium text-gray-700 dark:text-gray-200"
                >Development</span
              >
            </Motion>

            <Motion
              class="flex items-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
              :whileHover="{ scale: 1.05 }"
              :whileTap="{ scale: 0.95 }"
            >
              <div
                class="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform"
              >
                <span class="material-symbols-outlined text-white text-xl"
                  >palette</span
                >
              </div>
              <span class="font-medium text-gray-700 dark:text-gray-200"
                >Design</span
              >
            </Motion>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Motion } from "@oku-ui/motion";
import { useInView } from "motion-v";
import { ref, watch } from "vue";

// NOTE: Section bisa didefinisikan ulang sebagai Motion dengan default <section>
const Section = Motion;

const target = ref<HTMLElement | null>(null);
const inView = useInView(target, { once: true, margin: "-100px" });
// setiap kali nilai inView berubah, log ke console
watch(inView, (val) => {
  console.log("Is in view:", val);
});
</script>
