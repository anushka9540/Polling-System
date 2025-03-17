<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
        
        <div class="flex mt-4 space-x-2">
          <button class="flex-1 py-2 text-white bg-blue-600 rounded">Sign Up with Facebook</button>
          <button class="flex-1 py-2 text-white bg-red-500 rounded">Sign Up with Google</button>
        </div>
        
        <div class="mt-4">
          <label class="block text-gray-700">I'm a:</label>
          <div class="flex mt-1 space-x-2">
            <button class="flex-1 py-2 border rounded">Woman</button>
            <button class="flex-1 py-2 border rounded">Man</button>
          </div>
        </div>
        
        <div class="mt-4">
          <label class="block text-gray-700">Interested in:</label>
          <div class="flex mt-1 space-x-2">
            <button class="flex-1 py-2 border rounded">Women</button>
            <button class="flex-1 py-2 border rounded">Men</button>
            <button class="flex-1 py-2 border rounded">Both</button>
          </div>
        </div>
        
        <div class="mt-4">
          <label class="block text-gray-700">Birthday</label>
          <div class="flex mt-1 space-x-2">
            <select class="w-full px-3 py-2 border rounded">
              <option>Day</option>
            </select>
            <select class="w-full px-3 py-2 border rounded">
              <option>Month</option>
            </select>
            <select class="w-full px-3 py-2 border rounded">
              <option>Year</option>
            </select>
          </div>
        </div>
        
        <div class="mt-4">
          <label class="block text-gray-700">Email Address</label>
          <input v-model="form.email" type="email" class="w-full px-3 py-2 mt-1 border rounded" />
          <p v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</p>
        </div>
        
        <div class="mt-4">
          <label class="block text-gray-700">Password</label>
          <input v-model="form.password" type="password" class="w-full px-3 py-2 mt-1 border rounded" />
          <p v-if="errors.password" class="text-sm text-red-500">{{ errors.password }}</p>
        </div>
        
        <div class="flex items-center mt-4">
          <input type="checkbox" class="mr-2" />
          <label class="text-gray-700">I am human</label>
        </div>
        
        <button @click="handleSignup" class="w-full py-2 mt-4 text-white bg-blue-500 rounded">View Singles</button>
        
        <!-- Login option -->
        <p class="mt-4 text-center text-gray-700">
          Already have an account?
          <router-link to="/login" class="text-blue-600 hover:underline">Login</router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { useAuth } from '../composables/useAuth.js';
  
  export default {
    setup() {
      const { form, errors, handleSignup } = useAuth();
      return { form, errors, handleSignup };
    },
  };
  </script>
  
  <style scoped>
  button {
    transition: all 0.3s;
  }
  button:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  </style>
  