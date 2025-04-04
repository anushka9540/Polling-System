<template>
  <Header></Header>
  <div
    class="relative flex justify-end px-4 py-10 bg-gray-100 sm:px-0"
    :style="{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat'
    }"
  >
    <div
      class="relative w-full max-w-sm p-6 bg-white border-gray-400 shadow-2xl rounded-3xl sm:mr-10"
    >
      <div class="absolute top-0 left-0 w-full">
        <img
          src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/form-border.548a764ea427d86a828a.svg"
          alt="Form Border"
          class="w-full h-auto"
        />
      </div>
      <div class="flex mb-4 space-x-2">
        <button
          class="flex items-center justify-center w-full py-2 font-bold text-gray-700 border border-gray-900 rounded-lg hover:bg-gray-100"
        >
          <img :src="facebookicon" alt="Facebook" class="w-5 h-5 mr-2" /> Sign
          up
        </button>
        <button
          class="flex items-center justify-center w-full py-2 font-bold text-gray-700 border border-gray-900 rounded-lg hover:bg-gray-100"
        >
          <img :src="googleicon" alt="Google" class="w-5 h-5 mr-2" /> Sign up
        </button>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-Euclid">I'm a:</label>
        <div class="flex mt-1 space-x-2">
          <button
            class="flex-1 py-2 text-gray-800 transition-all duration-300 border-gray-400 border-1 rounded-3xl hover:bg-cyan-100 hover:border-cyan-600"
          >
            Woman
          </button>
          <button
            class="flex-1 py-2 text-gray-800 transition-all duration-300 border-gray-400 border-1 rounded-3xl hover:bg-cyan-100 hover:border-cyan-600"
          >
            Man
          </button>
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-Euclid">Interested in:</label>
        <div class="flex mt-1 space-x-2">
          <button
            class="flex-1 py-2 text-gray-800 transition-all duration-300 border-gray-400 border-1 rounded-3xl hover:bg-cyan-100 hover:border-cyan-500"
          >
            Women
          </button>
          <button
            class="flex-1 py-2 text-gray-800 transition-all duration-300 border-gray-400 border-1 rounded-3xl hover:bg-cyan-100 hover:border-cyan-500"
          >
            Men
          </button>
          <button
            class="flex-1 py-2 text-gray-800 transition-all duration-300 border-gray-400 border-1 rounded-3xl hover:bg-cyan-100 hover:border-cyan-500"
          >
            Both
          </button>
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-Euclid">Birthday</label>
        <div class="flex mt-1 space-x-2 text-gray-700">
          <select
            class="w-full px-3 py-2 bg-transparent border border-gray-700 rounded hover:border-cyan-500"
          >
            <option>Day</option>
          </select>
          <select
            class="w-full px-3 py-2 bg-transparent border border-gray-400 rounded hover:border-cyan-500"
          >
            <option>Month</option>
          </select>
          <select
            class="w-full px-3 py-2 bg-transparent border border-gray-400 rounded hover:border-cyan-500"
          >
            <option>Year</option>
          </select>
        </div>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-Euclid">First Name</label>
        <input
          type="text"
          class="w-full px-3 py-2 mt-1 text-gray-700 bg-transparent border border-gray-400 rounded"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-Euclid">Last Name</label>
        <input
          type="text"
          class="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-Euclid">Email</label>
        <input
          type="email"
          class="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-Euclid">Role</label>
        <select
          class="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded"
        >
          <option>Select Role</option>
        </select>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-Euclid">Password</label>
        <input
          type="password"
          class="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-Euclid">Confirm Password</label>
        <input
          type="password"
          class="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded"
        />
      </div>

      <div
        class="flex items-center p-2 mb-4 text-gray-700 border border-gray-400 rounded"
      >
        <input type="checkbox" class="mr-2" />
        I am human <img :src="hCaptcha" alt="" class="w-10 h-10 ml-28" />
      </div>

      <button
        @click="handleSignup"
        class="w-full py-3 text-white rounded-[40px] bg-cyan-500"
      >
        View Singles
      </button>
      <p
        class="pt-3 text-left text-gray-400 text-[11px] leading-loose font-normal"
      >
        *By selecting "Sign up", you agree to our
        <a href="#" class="underline">Terms</a> (including the mandatory
        arbitration of disputes) and have understood our
        <a href="#" class="underline">Privacy Notice</a>.
      </p>
    </div>
  </div>
  <Footer></Footer>
  <HamburgerMenu
    ref="sidebar"
    :logo="zoosklogo"
    :appStore="appStore"
    :googlePlay="googlePlay"
    :facebookIcon="facebookIcon"
    :xIcon="xIcon"
    :instaIcon="instaIcon"
  />
</template>

<script setup>
import { ref } from 'vue';
import backgroundImage from '../assets/background/background-img.webp';
import HamburgerMenu from '../components/HamburgerMenu.vue';
import facebookicon from '../assets/icons/fb-icon.svg';
import googleicon from '../assets/icons/google-icon.svg';
import Footer from '../components/Footer.vue';
import hCaptcha from '../assets/captcha/hcapctha.jpg';
import Header from '../components/Header.vue';

const sidebar = ref(null);

const toggleSidebar = () => {
  if (sidebar.value) {
    sidebar.value.toggleSidebar();
  }
};
</script>

<style scoped></style>
