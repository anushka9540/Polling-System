<template>
  <header
    class="flex items-center justify-between px-6 text-white py-7 sm:px-12 lg:px-20"
  >
    <div class="flex items-center text-2xl font-semibold">
      <img :src="zoosklogo" alt="" class="h-8 mr-2" />
    </div>
    <div class="flex items-center space-x-6 md:space-x-16">
      <router-link
        v-if="isSignupPage"
        to="/"
        class="text-base sm:text-lg lg:text-xl text-[#374756] no-underline"
      >
        Log in
      </router-link>
      <router-link
        v-else
        to="/signup"
        class="text-[#374756] no-underline font-normal md:text-[20px] hover:text-gray-400"
      >
        Sign Up
      </router-link>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 448 512"
        @click="toggleSidebar"
        class="text-xl cursor-pointer w-[25px] h-[24px] text-[#374756] hover:text-gray-500"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
        ></path>
      </svg>
    </div>
    <HamburgerMenu ref="sidebar" :logo="zoosklogo" />
  </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import zoosklogo from '../assets/zoosk-logo.svg';
import HamburgerMenu from './HamburgerMenu.vue';

const route = useRoute();
const sidebar = ref(null);

const isSignupPage = computed(() => route.path === '/signup');

const toggleSidebar = () => {
  if (sidebar.value) {
    sidebar.value.toggleSidebar();
  }
};
</script>
