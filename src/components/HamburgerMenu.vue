<template>
  <transition name="fade">
    <div v-if="isSidebarOpen" class="fixed inset-0 z-40 bg-blue-100 bg-opacity-70"></div>
  </transition>

  <transition name="slide-right">
    <aside 
      v-if="isSidebarOpen" 
      class="fixed top-0 right-0 z-50 h-full bg-white shadow-lg w-full md:w-[470px] p-5 flex flex-col md:items-start items-center text-center md:text-left space-y-3"
    >
      <div class="flex items-center justify-between w-full p-4">
        <img :src="logo" alt="Zoosk Logo" class="w-32 h-14 md:w-36 md:h-16" />

        <button @click="toggleSidebar" class="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-gray-400" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav class="flex flex-col w-full p-3 space-y-2 text-base text-gray-900 md:p-4 md:space-y-4">
        <a href="#" class="block hover:text-gray-600">About Zoosk</a>
        <a href="#" class="block hover:text-gray-600">Help Center</a>
        <a href="#" class="block hover:text-gray-600">Dating & Relationship</a>
        <a href="#" class="block hover:text-gray-600">Press</a>
      </nav>

      <nav class="flex flex-col w-full p-4 space-y-2 text-base text-gray-600 md:space-y-4">
        <a href="#" class="block hover:text-gray-400">Privacy</a>
        <a href="#" class="block hover:text-gray-400">Safety</a>
        <a href="#" class="block hover:text-gray-400">Terms of Use</a>
      </nav>

      <div class="flex flex-col items-center mt-8 md:items-start">
        <div class="flex justify-center space-x-4 md:justify-start">
          <img :src="appStore" alt="App Store" class="w-24 md:w-28"/>
          <img :src="googlePlay" alt="Google Play" class="w-24 md:w-28"/>
        </div>
        <div class="flex justify-center mt-10 space-x-6 md:justify-start">
          <a href="https://www.facebook.com/"><img :src="facebookIcon" class="w-6 md:w-8" alt="Facebook"/></a>
          <a href="https://x.com/"><img :src="xIcon" class="w-6 md:w-8" alt="X"/></a>
          <a href="https://www.instagram.com/"><img :src="instaIcon" class="w-6 md:w-8" alt="Instagram"/></a>
        </div>
      </div>

      <div class="flex flex-col w-full space-y-5 text-xs text-gray-800 md:flex-row md:justify-between md:items-center">
        <p class="w-full mt-10">© 2025 Zoosk</p>

        <div class="relative flex justify-center w-full">
          <button @click="toggleDropdown" class="flex items-center justify-between w-40 p-2 text-gray-700 bg-gray-200 border border-gray-400 rounded-lg">
            {{ selectedLanguage }}
            <span class="ml-2"><i class="fa-solid fa-chevron-down" style="color: #858585;"></i></span> 
          </button>

          <div v-if="isDropdownOpen" 
            class="absolute z-10 w-40 max-w-full overflow-y-auto text-center transform -translate-x-1/2 bg-white border border-gray-400 rounded shadow-md max-h-60 left-1/2 bottom-full">
            <ul>
              <li v-for="(language, index) in languages" :key="index" 
                @click="selectLanguage(language)" 
                class="p-2 cursor-pointer hover:bg-gray-200">
                {{ language }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script setup>
import { ref, defineExpose } from "vue";
import logo from '../assets/zoosk-logo.svg';
import appStore from '../assets/app-store.svg';
import googlePlay from '../assets/google-play.svg';
import facebookIcon from '../assets/facebookicon.svg';
import xIcon from '../assets/xicon.svg';
import instaIcon from '../assets/instaicon.svg';

const isSidebarOpen = ref(false);
const isDropdownOpen = ref(false);
const selectedLanguage = ref("English");

const languages = ref([
  "Dansk",
  "Deutsch",
  "English",
  "English (UK)",
  "Español",
  "Español (España)",
  "Ελληνικά",
  "Français",
]);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectLanguage = (language) => {
  selectedLanguage.value = language;
  isDropdownOpen.value = false;
};

defineExpose({ toggleSidebar });
</script>

<style scoped>
/* Sidebar animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

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

