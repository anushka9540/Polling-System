<template>
  <transition name="fade">
    <div v-if="isSidebarOpen" class="fixed inset-0 z-40 bg-black bg-opacity-50"></div>
  </transition>

  <transition name="slide-right">
    <aside v-if="isSidebarOpen" class="fixed top-0 right-0 z-50 h-full bg-white shadow-lg w-full md:w-[500px] p-6 md:p-9">
      <div class="flex items-center justify-between p-4 md:p-6">
        <h2 class="text-lg font-semibold md:text-xl">Menu</h2>
        <button @click="toggleSidebar" class="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex justify-center mt-2">
        <img :src="logo" alt="Zoosk Logo" class="w-20 md:w-24" />
      </div>

      <nav class="flex flex-col p-4 space-y-3 text-base text-center md:p-6 md:space-y-4 md:text-lg">
        <a href="#" class="block hover:text-gray-900">About Zoosk</a>
        <a href="#" class="block hover:text-gray-900">Help Center</a>
        <a href="#" class="block hover:text-gray-900">Dating & Relationship</a>
        <a href="#" class="block hover:text-gray-900">Press</a>
        <a href="#" class="block hover:text-gray-900">Privacy</a>
        <a href="#" class="block hover:text-gray-900">Safety</a>
        <a href="#" class="block hover:text-gray-900">Terms of Use</a>
      </nav>

      <div class="flex flex-col items-center mt-8 md:mt-10">
        <div class="flex space-x-4">
          <img :src="appStore" alt="App Store" class="w-28 md:w-32"/>
          <img :src="googlePlay" alt="Google Play" class="w-28 md:w-32"/>
        </div>
        <div class="flex mt-6 space-x-4">
          <a href="#"><img :src="facebookIcon" class="w-6 md:w-8" alt="Facebook"/></a>
          <a href="#"><img :src="xIcon" class="w-6 md:w-8" alt="X"/></a>
          <a href="#"><img :src="instaIcon" class="w-6 md:w-8" alt="Instagram"/></a>
        </div>
      </div>
  
      <div class="mt-6 text-xs text-center text-gray-500 md:mt-8 md:text-sm">
        © 2025 Zoosk
        <div class="mt-2">
          <button class="px-3 py-1 text-gray-700 border rounded">English ▼</button>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script setup>
import { ref, defineProps, defineExpose } from "vue";
import logo from '../assets/zoosk-logo.svg'
import appStore from '../assets/app-store.svg'
import googlePlay from '../assets/google-play.svg'
import facebookIcon from '../assets/facebookicon.svg'
import xIcon from '../assets/xicon.svg'
import instaIcon from '../assets/instaicon.svg'

defineProps(["logo", "appStore", "googlePlay", "facebookIcon", "xIcon", "instaIcon"]);

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

defineExpose({ toggleSidebar });
</script>

<style scoped>
/* Fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Slide-in from the right */
.slide-right-enter-active, .slide-right-leave-active {
  transition: transform 0.3s ease;
}
.slide-right-enter {
  transform: translateX(100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
