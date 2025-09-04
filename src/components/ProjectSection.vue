<script setup lang="ts">
import { Motion } from "@oku-ui/motion";
import { ref, watch } from "vue";
// import { useInView } from "motion-v";
import portoMobileImg from "../assets/image/porto-mobile-app.png";
import portoWebsiteImg from "../assets/image/porto-website.png";

const projects = [
  {
    title: "Mini 4WD Tools Mobile App",
    description:
      "A mobile app designed for Tamiya hobbyists, featuring a set of calculation tools to fine-tune car setups and share references within the community. Built to make competitive play easier and more accessible.",

    image: portoMobileImg,
    tags: ["Flutter", "Material Design"],
    gradient: "from-blue-500 to-purple-600",
    buttonText: "Go to playstore",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.mronnes.mini4wdspeedchecker&hl=en",

    // codeUrl: "https://github.com/username/dashboard",
  },
  {
    title: "Bracketly – Hobby Event Portal",
    description:
      "A web platform that centralizes hobby events across Indonesia, from TCG tournaments to Tamiya and Beyblade competitions. Empowering communities to discover, share, and manage events in one place.",
    image: portoWebsiteImg,
    tags: ["Vue", "Tailwindcss", "Figma"],
    gradient: "from-green-500 to-teal-600",
    buttonText: "Go to website",
    demoUrl: "https://bracketly.vercel.app/",
    // codeUrl: "https://github.com/username/banking",
  },
  {
    title: "Creative Portfolio",
    description:
      "A stunning portfolio website showcasing modern design principles and smooth animations.",
    image:
      "https://images.unsplash.com/photo-1676731820390-a119efe23333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Motion", "Design"],
    gradient: "from-pink-500 to-orange-500",
    buttonText: "demo",
    demoUrl: "https://example.com/portfolio",
    codeUrl: "https://github.com/username/portfolio",
  },
];

const sectionRef = ref<HTMLElement | null>(null);
// const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

const selectedProject = ref<(typeof projects)[0] | null>(null);

// watch(isInView, (val) => {
// console.log("Is in view Project:", val);
// });
</script>

<template>
  <section ref="sectionRef" class="py-24 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <!-- <Motion
        :initial="{ opacity: 0, y: 30 }"
        :animate="isInView.value ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }" -->
      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :transition="{ duration: 0.8 }"
        class="text-center mb-16"
      >
        <h2
          class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-purple-700 dark:from-white dark:to-purple-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in
          frontend development and UI design.
        </p>
      </Motion>

      <!-- Grid -->
      <div
        class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 max-w-7xl mx-auto"
      >
        <Motion
          v-for="(project, index) in projects"
          :key="project.title"
          class="group cursor-pointer"
          @click="selectedProject = project"
          ><div
            class="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3]"
          >
            <!-- Project Image -->
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <!-- Hover Overlay -->
            <Motion
              class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              :initial="{ opacity: 0 }"
              :whileHover="{ opacity: 1 }"
            >
              <Motion
                class="text-center px-6"
                :initial="{ y: 20, opacity: 0 }"
                :whileHover="{ y: 0, opacity: 1 }"
                :transition="{ delay: 0.1 }"
              >
                <h3 class="text-2xl font-bold text-white mb-2">
                  {{ project.title }}
                </h3>
                <!-- <p class="text-white/80 text-sm">Click to view details</p> -->
              </Motion>
            </Motion>
          </div>
        </Motion>
      </div>

      <!-- View All Projects -->
      <!-- <Motion
        class="text-center mt-12"
        :initial="{ opacity: 0, y: 30 }"
        :animate="isInView.value ? { opacity: 1, y: 0 } : {}" -->
      <Motion class="text-center mt-12">
        <button
          class="border border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900 hover:border-purple-400 dark:hover:border-purple-500 px-8 py-3 rounded-full font-medium"
        >
          View Résumé
        </button>
      </Motion>
    </div>

    <!-- Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
    >
      <div
        class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-6"
      >
        <!-- Close Button -->
        <button
          @click="selectedProject = null"
          class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <span class="material-symbols-outlined text-2xl"> close </span>
        </button>

        <!-- Project Detail -->
        <div v-if="selectedProject" class="space-y-6">
          <h3
            class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-700 dark:from-white dark:to-purple-400 bg-clip-text text-transparent"
          >
            {{ selectedProject.title }}
          </h3>

          <!-- Image -->
          <div class="relative overflow-hidden rounded-xl">
            <img
              :src="selectedProject.image"
              :alt="selectedProject.title"
              class="w-full h-64 md:h-80 object-cover"
            />
            <div
              class="absolute bottom-0 left-0 right-0 h-2"
              :class="`bg-gradient-to-r ${selectedProject.gradient}`"
            />
          </div>

          <!-- Description -->
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {{ selectedProject.description }}
          </p>

          <!-- Tags -->
          <div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
              Technologies Used
            </h4>
            <div class="flex flex-wrap gap-3 mt-2">
              <span
                v-for="tag in selectedProject.tags"
                :key="tag"
                class="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Actions -->
          <div
            class="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700"
          >
            <a
              v-if="selectedProject.demoUrl"
              :href="selectedProject.demoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 text-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium"
            >
              <span class="material-symbols-outlined align-middle mr-1">
                open_in_new
              </span>
              {{ selectedProject.buttonText }}
            </a>

            <a
              v-if="selectedProject.codeUrl"
              :href="selectedProject.codeUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 text-center border border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900 px-6 py-3 rounded-full font-medium"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
