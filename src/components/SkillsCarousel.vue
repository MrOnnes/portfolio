<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { Motion } from "@oku-ui/motion";

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
    icon: "design_services",
    title: "Design Systems",
    description: "Consistent brand experiences",
    color: "from-purple-400 to-indigo-600",
  },
  {
    icon: "bolt",
    title: "Generative AI",
    description: "Enhance creative workflows",
    color: "from-yellow-400 to-orange-500",
  },
  //   {
  //     icon: "bolt",
  //     title: "Performance",
  //     description: "Optimized user experiences",
  //     color: "from-yellow-400 to-orange-500",
  //   },
];

const currentIndex = ref(0);
const isAutoPlaying = ref(true);
const containerWidth = ref(0);
const containerRef = ref<HTMLElement | null>(null);

let intervalId: number | null = null;

onMounted(() => {
  startAutoPlay();

  const updateContainerWidth = () => {
    if (containerRef.value) {
      containerWidth.value = containerRef.value.offsetWidth;
    }
  };
  updateContainerWidth();
  window.addEventListener("resize", updateContainerWidth);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };
  window.addEventListener("keydown", handleKeyDown);

  onUnmounted(() => {
    stopAutoPlay();
    window.removeEventListener("resize", updateContainerWidth);
    window.removeEventListener("keydown", handleKeyDown);
  });
});

function startAutoPlay() {
  stopAutoPlay();
  if (isAutoPlaying.value) {
    intervalId = window.setInterval(() => {
      goToNext();
    }, 4000);
  }
}
function stopAutoPlay() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function pauseAndResume() {
  stopAutoPlay();
  isAutoPlaying.value = false;
  setTimeout(() => {
    isAutoPlaying.value = true;
    startAutoPlay();
  }, 8000);
}

function goToNext() {
  currentIndex.value = (currentIndex.value + 1) % skills.length;
  pauseAndResume();
}

function goToPrevious() {
  currentIndex.value = (currentIndex.value - 1 + skills.length) % skills.length;
  pauseAndResume();
}

function goToSlide(index: number) {
  currentIndex.value = index;
  pauseAndResume();
}

const cardWidth = () => (containerWidth.value < 768 ? 256 : 320); // w-64 = 256, w-80 = 320
const gap = () => (containerWidth.value < 768 ? 16 : 32);
const totalCardSpace = () => cardWidth() + gap();
</script>

<template>
  <div class="relative max-w-6xl mx-auto">
    <!-- Carousel Container -->
    <div class="flex items-center justify-center min-h-[400px] overflow-hidden">
      <div class="relative w-full h-full flex items-center justify-center">
        <Motion
          v-for="(skill, index) in skills"
          :key="skill.title"
          v-show="Math.abs(index - currentIndex) <= 2"
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{
            opacity: index === currentIndex ? 1 : 0.4,
            scale: index === currentIndex ? 1.1 : 0.85,
            x: (index - currentIndex) * totalCardSpace(),
          }"
          :transition="{ duration: 0.6, ease: 'easeInOut' }"
          class="absolute cursor-pointer"
          :class="index === currentIndex ? 'z-10' : 'z-0'"
          style="left: 50%; transform: translateX(-50%)"
          @click="goToSlide(index)"
          :whileHover="
            index === currentIndex ? { scale: 1.15 } : { scale: 0.9 }
          "
        >
          <div
            class="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            :class="containerWidth < 768 ? 'w-64' : 'w-80'"
          >
            <div class="flex flex-col items-center text-center space-y-4">
              <Motion
                class="w-16 h-16 rounded-2xl flex items-center justify-center text-white"
                :class="`bg-gradient-to-br ${skill.color}`"
                :whileHover="{ rotate: 12 }"
                :transition="{ duration: 0.3 }"
              >
                <span class="material-symbols-outlined text-3xl">
                  {{ skill.icon }}
                </span></Motion
              >
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
              class="h-1 rounded-full mt-6"
              :class="`bg-gradient-to-r ${skill.color}`"
              :initial="{ scaleX: 0, opacity: 0 }"
              :animate="{
                scaleX: index === currentIndex ? 1 : 0,
                opacity: index === currentIndex ? 1 : 0,
              }"
              :transition="{ duration: 0.3 }"
            /></div
        ></Motion>
      </div>
    </div>

    <!-- Navigation Controls -->
    <div class="flex items-center justify-between mt-8">
      <!-- Previous Button -->
      <Motion
        as="button"
        @click="goToPrevious"
        class="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
        :whileHover="{ scale: 1.05 }"
        :whileTap="{ scale: 0.95 }"
      >
        <span
          class="material-symbols-outlined text-gray-600 dark:text-gray-300"
        >
          chevron_left
        </span>
      </Motion>

      <!-- Dots -->
      <div class="flex space-x-2">
        <Motion
          v-for="(_, index) in skills"
          :key="index"
          as="button"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all duration-300"
          :class="
            index === currentIndex
              ? 'bg-gradient-to-r from-purple-500 to-pink-500'
              : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
          "
          :whileHover="{ scale: 1.2 }"
          :whileTap="{ scale: 0.9 }"
        />
      </div>

      <!-- Next Button -->
      <Motion
        as="button"
        @click="goToNext"
        class="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
        :whileHover="{ scale: 1.05 }"
        :whileTap="{ scale: 0.95 }"
      >
        <span
          class="material-symbols-outlined text-gray-600 dark:text-gray-300"
        >
          chevron_right
        </span>
      </Motion>
    </div>

    <!-- Auto-play indicator -->
    <div class="flex justify-center mt-4">
      <Motion
        class="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ delay: 1 }"
      >
        <div
          class="w-2 h-2 rounded-full"
          :class="isAutoPlaying ? 'bg-green-500' : 'bg-red-500'"
        />
        {{ isAutoPlaying ? "Auto-scrolling" : "Manual control" }}
      </Motion>
    </div>
  </div>
</template>
