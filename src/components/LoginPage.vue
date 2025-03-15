<template>
    <div 
      class="relative flex items-center justify-center min-h-screen bg-cover bg-center" 
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <!-- Sign Up Option -->
      <div class="absolute top-10 right-[200px]">
        <a href="#" class="text-purple-600 font-semibold hover:underline">Sign Up</a>
      </div>
  
      <!-- Login Form -->
      <div class="bg-white bg-opacity-90 shadow-lg rounded-3xl flex w-full max-w-md p-8 flex-col">
        <h2 class="text-2xl font-bold text-gray-800 text-center">Welcome Back!</h2>
        <p class="text-gray-500 text-center mb-6">Login to continue</p>
  
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="text-gray-700 text-sm font-semibold">Email Address:</label>
            <input
              type="email"
              v-model="form.email"
              class="w-full p-3 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300 bg-transparent"
              placeholder="Enter your email"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1 text-left">{{ errors.email }}</p>
          </div>
          <div>
            <label class="text-gray-700 text-sm font-semibold">Password:</label>
            <input
              type="password"
              v-model="form.password"
              class="w-full p-3 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-300 bg-transparent"
              placeholder="Enter Password"
            />
            <p v-if="errors.password" class="text-red-500 text-sm mt-1 text-left">{{ errors.password }}</p>
          </div>
  
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input type="checkbox" id="rememberMe" class="mr-2">
              <label for="rememberMe" class="text-gray-600 text-sm">Remember Me</label>
            </div>
            <a href="#" class="text-purple-500 text-sm hover:underline">Forgot password?</a>
          </div>
  
          <button class="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition">
            Log In
          </button>
  
          <div class="text-center mt-6">
            <p class="text-gray-600">Or log in with</p>
            <div class="flex justify-center space-x-4 mt-2">
              <button class="bg-gray-200 p-3 rounded-full">
                <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" class="w-[20px] h-[20px]" />
              </button>
              <button class="bg-gray-200 p-3 rounded-full">
                <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" class="w-[20px] h-[20px]" />
              </button>
            </div>
          </div>
  
          <div class="text-gray-600 text-xs text-center mt-4">
            <p>
              *By selecting "Log in with Facebook" or "Log in with Google", you agree 
              to our 
              <a href="#" class="text-purple-500 hover:underline">Terms of Use</a> 
              (including the mandatory arbitration of disputes) and 
              consent to our 
              <a href="#" class="text-purple-500 hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useValidation } from '../composables/useValidation.js';
  import bgImage from '../assets/background-image.avif';
  
  const { form, errors, handleLogin } = useValidation();
  </script>
  