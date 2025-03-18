<template>
  <div>
    <div v-if="!isSidebarOpen" 
      class="relative flex items-center justify-center w-full min-h-screen px-4 bg-gray-100 bg-center bg-cover"
      :style="{ backgroundImage: `url(${backgroundImage})` }">
      
      <div class="absolute flex items-center justify-between w-full max-w-6xl px-6 mx-auto top-3">
        <div class="flex items-center">
          <img :src="zoosklogo" alt="Zoosk Logo" class="h-6 mr-2 sm:h-8" />
        </div>
        <div class="flex items-center gap-6">
          <router-link to="/signup" class="text-sm font-semibold text-gray-700 sm:text-base hover:underline">
            Sign Up
          </router-link>
          <button @click="toggleSidebar" class="text-2xl text-gray-600">☰</button>
        </div>
      </div>
  
      <div class="relative z-10 w-full max-w-sm p-6 bg-white shadow-lg mt-11 rounded-2xl sm:p-8">
        <div class="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-yellow-400 via-blue-600 via-blue-800 via-cyan-300 to-blue-400 rounded-t-2xl"></div>
  
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="text-sm font-semibold text-gray-700">Email Address:</label>
            <input type="email" v-model="form.email" class="w-full p-3 text-black bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" placeholder="name@email.com" />
            <p v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</p>
          </div>
  
          <div>
            <label class="text-sm font-semibold text-gray-700">Password:</label>
            <div class="relative">
              <input :type="showPassword ? 'text' : 'password'" v-model="form.password" class="w-full p-3 text-black bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" placeholder="Enter your password" />
              <span @click="togglePassword"
              class="absolute text-gray-600 transform -translate-y-1/2 cursor-pointer right-3 top-1/2">
              <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24"
                stroke="currentColor" fill="none">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12A3 3 0 119 12a3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z" />
              </svg>
  
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor"
                fill="none">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13.875 18.825A9.965 9.965 0 0112 19c-5 0-9-7-9-7s2.182-3.456 5.625-5.825M21 21L3 3" />
              </svg>
            </span>
              <p v-if="errors.password" class="text-sm text-red-500">{{ errors.password }}</p>
            </div>
          </div>
  
          <a href="#" class="block text-sm text-center text-gray-500 hover:underline">Forgot password?</a>
  
          <button type="submit" class="w-full py-3 font-bold text-center text-gray-600 bg-gray-300 rounded-3xl hover:bg-gray-200">
            Log In
          </button>

          <div class="flex items-center my-4">
          <hr class="w-full border-gray-300" />
          <span class="px-2 text-gray-500">Or</span>
          <hr class="w-full border-gray-300" />
        </div>
  
        <button
          class="flex items-center justify-center w-full py-3 font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">
          <img :src="facebookicon" alt="Facebook" class="w-5 h-5 mr-2" /> Log in
          with Facebook
        </button>
        <button
          class="flex items-center justify-center w-full py-3 mt-2 font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">
          <img :src="googleicon" alt="Google" class="w-5 h-5 mr-2" /> Log in
          with Google
        </button>
  
        <p class="mt-4 text-xs text-left text-gray-600">
          *By selecting "Log in with Facebook" or "Log in with Google", you agree to our 
          <a href="#" class="text-blue-500 hover:underline">Terms</a> (including the mandatory arbitration of disputes) and consent to our
          <a href="#" class="text-blue-500 hover:underline">Privacy Policy</a>.
        </p>
        </form>
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
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';
import zoosklogo from '../assets/zoosk-logo.svg';
import HamburgerMenu from "./HamburgerMenu.vue";
import facebookicon from '../assets/fb-icon.svg';
import googleicon from '../assets/google-icon.svg';
import Footer from './Footer.vue';
import backgroundImage from '../assets/background-img.webp'

const sidebar = ref(null);

const toggleSidebar = () => {
  if (sidebar.value) {
    sidebar.value.toggleSidebar();
  }
};

const { form, errors, handleLogin, togglePassword, showPassword } = useAuth();
</script>
