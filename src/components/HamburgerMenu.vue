<template>
    <div>
      <button class="fixed z-50 p-2 text-gray-700 rounded-md top-4 right-4 focus:outline-none" @click="toggleMenu">
        <span v-if="isOpen" class="text-2xl font-bold">✖</span>
        <span v-else class="text-2xl font-bold">☰</span>
      </button>
  
      <div
        :class="[
          'fixed top-0 right-0 w-96 h-full p-6 bg-white shadow-lg transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        ]"
      >
  
        <div class="mt-2">
          <img :src="logo" alt="Zoosk Logo" class="w-24" />
        </div>
  
        <nav class="mt-6 space-y-5 font-semibold text-gray-700">
          <a href="#" class="block text-lg cursor-pointer hover:text-gray-900">About Zoosk</a>
          <a href="#" class="block text-lg hover:text-gray-900">Help Center</a>
          <a href="#" class="block text-lg hover:text-gray-900">Dating & Relationship</a>
          <a href="#" class="block text-lg hover:text-gray-900">Press</a>
          <a href="#" class="block text-lg hover:text-gray-900">Privacy</a>
          <a href="#" class="block text-lg hover:text-gray-900">Safety</a>
          <a href="#" class="block text-lg hover:text-gray-900">Terms of Use</a>
        </nav>
  
        <div class="mt-10">
          <div class="flex space-x-4">
            <img :src="appStore" alt="App Store" class="w-32"/>
            <img :src="googlePlay" alt="Google Play" class="w-32"/>
          </div>
          <div class="flex mt-6 space-x-4">
            <a href="#"><img :src="facebookIcon" class="w-8" alt="Facebook"/></a>
            <a href="#"><img :src="xIcon" class="w-8" alt="X"/></a>
            <a href="#"><img :src="instaIcon" class="w-8" alt="Instagram"/></a>
          </div>
        </div>
  
        <div class="mt-8 text-sm text-gray-500">
          © 2025 Zoosk
          <div class="mt-2">
            <button class="px-4 py-1 text-gray-700 border rounded">English ▼</button>
          </div>
        </div>
      </div>
  
      <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-20"></div>
    </div>
</template>

  
  <script setup>
  import { ref } from 'vue';
  import logo from '../assets/zoosk-logo.svg'
  import appStore from '../assets/app-store.svg'
  import googlePlay from '../assets/google-play.svg'
  import facebookIcon from '../assets/facebookicon.svg'
  import xIcon from '../assets/xicon.svg'
  import instaIcon from '../assets/instaicon.svg'
  import { useAuth } from '../composables/useAuth';
  
  const isOpen = ref(false);
  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
  };

</script>
  













