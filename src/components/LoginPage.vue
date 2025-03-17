<template> 
  <div 
    v-if="!isSidebarOpen" 
    class="relative flex items-center justify-center w-full min-h-screen px-4 bg-gray-100 bg-center bg-cover"
    :style="{ backgroundImage: `url(${backgroundImage})` }">
    
    <div class="absolute flex items-center justify-between w-full max-w-6xl px-6 mx-auto top-5">
      <div class="flex items-center">
        <img :src="zoosklogo" alt="Zoosk Logo" class="h-6 mr-2 sm:h-8">
      </div>
      <div class="flex items-center space-x-4">
        <router-link to="/signup" class="text-sm font-semibold text-gray-700 sm:text-base hover:underline">
          Sign Up
        </router-link>

        <HamburgerMenu @toggleSidebar="toggleSidebar"></HamburgerMenu>
      </div>
    </div>

    <div class="relative z-10 w-full max-w-sm p-6 bg-white shadow-lg rounded-2xl sm:p-8">
      <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-blue-600 via-blue-800 via-cyan-300 to-blue-400 rounded-t-2xl"></div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="text-sm font-semibold text-gray-700">Email Address:</label>
          <input
            type="email"
            v-model="form.email"
            class="w-full p-3 text-black bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="name@email.com"
          />
          <p v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</p>
        </div>

        <div>
          <label class="text-sm font-semibold text-gray-700">Password:</label>
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="form.password"
              class="w-full p-3 text-black bg-gray-100 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Password"
            />
            <span @click="togglePassword" class="absolute inset-y-0 flex items-center text-gray-600 cursor-pointer right-3">
              <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12A3 3 0 119 12a3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/>
              </svg>
            </span>
            <p v-if="errors.password" class="text-sm text-red-500">{{ errors.password }}</p>
          </div>
        </div>

        <a href="#" class="block text-sm text-right text-blue-500 hover:underline">Forgot password?</a>

        <button type="submit" class="w-full py-3 font-semibold text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Log In
        </button>

        <div class="flex items-center my-4">
          <hr class="w-full border-gray-300"/>
          <span class="px-2 text-gray-500">Or</span>
          <hr class="w-full border-gray-300"/>
        </div>

        <button class="flex items-center justify-center w-full py-3 font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">
          <img :src="facebookicon" alt="Facebook" class="w-5 h-5 mr-2"/> Log in with Facebook
        </button>
        <button class="flex items-center justify-center w-full py-3 mt-2 font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">
          <img :src="googleicon" alt="Google" class="w-5 h-5 mr-2"/> Log in with Google
        </button>

        <p class="mt-4 text-xs text-center text-gray-600">
          *By logging in, you agree to our <a href="#" class="text-blue-500 hover:underline">Terms</a> and <a href="#" class="text-blue-500 hover:underline">Privacy Policy</a>.
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';
import zoosklogo from '../assets/zoosk-logo.svg'
import facebookicon from '../assets/fb-icon.svg'
import googleicon from '../assets/google-icon.svg'
import backgroundImage from '../assets/background-img.webp'
import HamburgerMenu from './HamburgerMenu.vue';

const { form, errors, handleLogin, togglePassword, showPassword } = useAuth();
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>















