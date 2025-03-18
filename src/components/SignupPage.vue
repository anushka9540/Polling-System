<template>
    <div class="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100 sm:px-0"
      :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
      
      <div class="absolute flex items-center justify-between w-full max-w-6xl px-6 mx-auto top-2">
        <img :src="zoosklogo" alt="Zoosk Logo" class="h-6 sm:h-8">
        <div class="flex items-center space-x-4">
          <router-link to="/" class="text-blue-600 hover:underline">Log In</router-link>
          <button @click="toggleSidebar" class="text-2xl text-gray-600">☰</button>
        </div>
      </div>
      
      <div class="absolute w-full max-w-md p-6 bg-white border-gray-400 shadow-2xl rounded-3xl sm:right-10 sm:top-20">
        <div class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-yellow-400 via-blue-600 via-blue-800 via-cyan-300 to-blue-400 rounded-t-3xl"></div>
        
        <div class="flex mb-4 space-x-2">
          <button class="flex items-center justify-center w-full py-2 font-bold text-gray-700 border border-gray-900 rounded-lg hover:bg-gray-100">
            <img :src="facebookicon" alt="Facebook" class="w-5 h-5 mr-2"/> Sign up
          </button>
          <button class="flex items-center justify-center w-full py-2 font-bold text-gray-700 border border-gray-900 rounded-lg hover:bg-gray-100">
            <img :src="googleicon" alt="Google" class="w-5 h-5 mr-2"/> Sign up
          </button>
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700">I'm a:</label>
          <div class="flex mt-1 space-x-2">
            <button class="flex-1 py-2 text-gray-800 transition-all duration-300 border-2 border-gray-400 rounded-3xl hover:bg-cyan-100 hover:border-cyan-600">Woman</button>
            <button class="flex-1 py-2 text-gray-800 transition-all duration-300 border-2 border-gray-400 rounded-3xl hover:bg-cyan-100 hover:border-cyan-600">Man</button>
          </div>
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700">Interested in:</label>
          <div class="flex mt-1 space-x-2">
            <button class="flex-1 py-2 text-gray-800 transition-all duration-300 border-2 border-gray-400 rounded-3xl hover:bg-cyan-100 hover:border-cyan-600">Women</button>
            <button class="flex-1 py-2 text-gray-800 transition-all duration-300 border-2 border-gray-400 rounded-3xl hover:bg-cyan-100 hover:border-cyan-600">Men</button>
            <button class="flex-1 py-2 text-gray-800 transition-all duration-300 border-2 border-gray-400 rounded-3xl hover:bg-cyan-100 hover:border-cyan-600">Both</button>
          </div>
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700">Birthday</label>
          <div class="flex mt-1 space-x-2 text-gray-700">
            <select class="w-full px-3 py-2 bg-transparent border border-gray-700 rounded hover:border-cyan-600">
              <option>Day</option>
            </select>
            <select class="w-full px-3 py-2 bg-transparent border border-gray-400 rounded hover:border-cyan-600">
              <option>Month</option>
            </select>
            <select class="w-full px-3 py-2 bg-transparent border border-gray-400 rounded hover:border-cyan-600">
              <option>Year</option>
            </select>
          </div>
        </div>
        
        <div class="mb-4 text-gray-700">
          <label class="block text-gray-700">Email Address</label>
          <input v-model="form.email" type="email" placeholder="name@email.com" class="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded" />
        </div>
        
        <div class="mb-4 text-gray-700">
          <label class="block text-gray-700">Password</label>
          <input v-model="form.password" placeholder="password" class="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded" />
        </div>
        
        <div class="flex items-center p-2 mb-4 border border-gray-400 rounded">
          <input type="checkbox" class="mr-2" />
          <label class="text-gray-700">I am human</label>
        </div>
        
        <button @click="handleSignup" class="w-full py-2 text-white bg-blue-500 rounded">View Singles</button>
      </div>
    </div>
    <Footer></Footer>
    <HamburgerMenu ref="sidebar" 
      :logo="zoosklogo" 
      :appStore="appStore" 
      :googlePlay="googlePlay" 
      :facebookIcon="facebookIcon" 
      :xIcon="xIcon" 
      :instaIcon="instaIcon" 
    />
  </template>
  
  <script setup>
  import {ref} from 'vue'
  import { useAuth } from '../composables/useAuth.js';
  import zoosklogo from '../assets/zoosk-logo.svg';
  import backgroundImage from '../assets/background-img.webp';
  import HamburgerMenu from './HamburgerMenu.vue';
  import facebookicon from '../assets/fb-icon.svg';
  import googleicon from '../assets/google-icon.svg';
  import Footer from './Footer.vue';
  
  const { form, errors, handleSignup } = useAuth();

  const sidebar = ref(null);

const toggleSidebar = () => {
  if (sidebar.value) {
    sidebar.value.toggleSidebar();
  }
};
  </script>
  
  <style scoped>
  </style>