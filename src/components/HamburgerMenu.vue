<template>
  <transition name="fade">
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 z-40 bg-blue-100 bg-opacity-70"
    ></div>
  </transition>

  <transition name="slide-right">
    <aside
      v-if="isSidebarOpen"
      class="fixed top-0 right-0 z-50 h-full bg-white shadow-lg w-full md:w-[470px] md:pl-9 pt-3 flex flex-col md:items-start items-center text-center md:text-left space-y-3 overflow-y-auto md:pr-9"
    >
      <div class="flex items-center justify-between w-full">
        <img
          src="https://static3.zoosk.com/browser-21c23b32/touch/en-US/assets/images/svg/aes-heart-red.svg"
          alt="Zoosk Logo"
          class="h-8 w-14 md:w-20 md:h-8"
        />

        <button @click="toggleSidebar" class="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 text-gray-400"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div
        class="flex flex-col w-full space-y-2 text-base text-gray-900 md:space-y-4"
      >
        <nav
          class="flex flex-col w-full p-3 space-y-4 text-[#374756] text-[18px] md:p-4 md:space-y-4 font-Euclid"
        >
          <a href="#" class="block hover:text-gray-600">About Zoosk</a>
          <a href="#" class="block hover:text-gray-600">Help Center</a>
          <a href="#" class="block hover:text-gray-600"
            >Dating & Relationship</a
          >
          <a href="#" class="block hover:text-gray-600">Press</a>
        </nav>

        <nav
          class="flex flex-col w-full p-4 space-y-4 text-[18px] text-[#7F8B96] md:space-y-4 font-Euclid"
        >
          <a href="#" class="block hover:text-gray-400">Privacy</a>
          <a href="#" class="block hover:text-gray-400">Safety</a>
          <a href="#" class="block hover:text-gray-400">Terms of Use</a>
        </nav>

        <div class="flex flex-col items-center w-full mt-10 md:items-start">
          <!-- App Store and Google Play -->
          <div
            class="flex flex-wrap justify-center gap-2 pl-4 sm:gap-6 md:gap-8"
            style="gap: 3rem !important"
          >
            <img :src="appStore" alt="App Store" class="w-32 md:w-28" />
            <img :src="googlePlay" alt="Google Play" class="w-32 md:w-28" />
          </div>

          <!-- Social Media Icons -->
          <div class="flex justify-center gap-6 pl-4 mt-10 sm:mt-24 md:mt-28">
            <a href="https://www.facebook.com/">
              <img :src="facebookIcon" class="w-10 md:w-8" alt="Facebook" />
            </a>
            <a href="https://x.com/">
              <img :src="xIcon" class="w-10 md:w-8" alt="X" />
            </a>
            <a href="https://www.instagram.com/">
              <img :src="instaIcon" class="w-10 md:w-8" alt="Instagram" />
            </a>
          </div>
        </div>

        <div
          class="flex flex-col w-full space-y-5 text-xs text-gray-800 md:flex-row md:justify-between md:items-center"
        >
          <p
            class="order-2 w-full mt-16 font-semibold text-center md:text-left md:w-auto md:order-1 text-[18px] pl-3"
          >
            © 2025 Zoosk
          </p>

          <div
            class="relative flex justify-center order-1 w-full top-5 md:w-auto md:order-2"
          >
            <button
              @click="toggleDropdown"
              class="flex items-center justify-between md:w-44 p-3 text-gray-600 bg-gray-100 border border-gray-400 rounded-lg text-[16px] font-semibold w-52"
            >
              {{ selectedLanguage }}
              <span class="ml-2"
                ><i class="fa-solid fa-chevron-down" style="color: #858585"></i
              ></span>
            </button>

            <div
              v-if="isDropdownOpen"
              class="absolute z-10 w-40 max-w-full overflow-y-auto text-center transform -translate-x-1/2 bg-white border border-gray-400 rounded shadow-md max-h-60 left-1/2 bottom-full"
            >
              <ul>
                <li
                  v-for="(language, index) in languages"
                  :key="index"
                  @click="selectLanguage(language)"
                  class="p-2 cursor-pointer hover:bg-gray-200"
                >
                  {{ language }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script setup>
import { ref, defineExpose } from 'vue';
import appStore from '../assets/logo image/app-store.svg';
import googlePlay from '../assets/logo image/google-play.svg';
import facebookIcon from '../assets/icons/facebookicon.svg';
import xIcon from '../assets/icons/xicon.svg';
import instaIcon from '../assets/icons/instaicon.svg';

const isSidebarOpen = ref(false);
const isDropdownOpen = ref(false);
const selectedLanguage = ref('English');

const languages = ref([
  'Dansk',
  'Deutsch',
  'English',
  'English (UK)',
  'Español',
  'Español (España)',
  'Ελληνικά',
  'Français'
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}
.slide-right-enter {
  transform: translateX(100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
