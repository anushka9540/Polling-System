<template>
  <transition name="fade">
    <div v-if="isSidebarOpen" class="fixed inset-0 z-40 bg-blue-100 bg-opacity-70"></div>
  </transition>

  <transition name="slide-right">
    <aside v-if="isSidebarOpen" class="fixed top-0 right-0 z-50 h-full bg-white shadow-lg w-full md:w-[470px] p-5 md:p-5">
      <div class="flex items-center justify-between p-4 -mt-8 md:p-6">
        <img :src="logo" alt="Zoosk Logo" class="w-32 h-14 md:w-36 md:h-16" />

        <button @click="toggleSidebar" class="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-gray-400" viewBox="0 0 24 24" stroke="currentColor" fill="none">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav class="flex flex-col p-3 lg:space-y-3 text-base text-left md:p-4 md:space-y-4 md:text-md lg:text-[16px] lg:font-thin">
        <a href="#" class="block text-gray-900 hover:text-gray-600">About Zoosk</a>
        <a href="#" class="block text-gray-900 hover:text-gray-600">Help Center</a>
        <a href="#" class="block text-gray-900 hover:text-gray-600">Dating & Relationship</a>
        <a href="#" class="block text-gray-900 hover:text-gray-600">Press</a>
      </nav>

      <nav class="flex flex-col p-4 lg:space-y-3 text-base text-left md:p-4 md:space-y-4 md:text-md lg:text-[16px] lg:font-thin">
        <a href="#" class="block text-gray-600 hover:text-gray-400">Privacy</a>
        <a href="#" class="block text-gray-600 hover:text-gray-400">Safety</a>
        <a href="#" class="block text-gray-600 hover:text-gray-400">Terms of Use</a>
      </nav>

      <div class="flex flex-col justify-start mt-8 mb-10 md:mt-8">
        <div class="flex space-x-7">
          <img :src="appStore" alt="App Store" class="w-20 md:w-28"/>
          <img :src="googlePlay" alt="Google Play" class="w-20 md:w-28"/>
        </div>
        <div class="flex mt-8 space-x-6">
          <a href="https://www.facebook.com/"><img :src="facebookIcon" class="w-6 md:w-8" alt="Facebook"/></a>
          <a href="https://x.com/"><img :src="xIcon" class="w-6 md:w-8" alt="X"/></a>
          <a href="https://www.instagram.com/"><img :src="instaIcon" class="w-6 md:w-8" alt="Instagram"/></a>
        </div>
      </div>
  
      <div class="flex items-center justify-between text-xs text-center text-gray-800 lg:mt-28 md:mt-8 md:text-sm">
        <p> © 2025 Zoosk</p>
        <div class="relative">
          <button @click="toggleDropdown" class="flex items-center justify-between w-40 p-2 text-gray-700 bg-gray-200 border border-gray-400 rounded-lg">
            {{ selectedLanguage }}
            <span class="ml-2"><i class="fa-solid fa-v" style="color: #858585;"></i></span> 
          </button>
          <div v-if="isDropdownOpen" class="absolute left-0 z-10 w-40 overflow-y-auto bg-white border border-gray-400 rounded shadow-md bottom-full max-h-60">
            <ul>
              <li v-for="(language, index) in languages" :key="index" @click="selectLanguage(language)" class="p-2 cursor-pointer hover:bg-gray-200">
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
import { ref, defineProps, defineExpose } from "vue";
import logo from '../assets/zoosk-logo.svg';
import appStore from '../assets/app-store.svg';
import googlePlay from '../assets/google-play.svg';
import facebookIcon from '../assets/facebookicon.svg';
import xIcon from '../assets/xicon.svg';
import instaIcon from '../assets/instaicon.svg';

defineProps(["logo", "appStore", "googlePlay", "facebookIcon", "xIcon", "instaIcon"]);

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

/* .fade-enter-active, .fade-leave-active {
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
} */
</style>
