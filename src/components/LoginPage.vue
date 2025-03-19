<template>
  <div>
    <div
      v-if="!isSidebarOpen"
      class="relative flex items-center justify-center w-full min-h-screen px-4 bg-gray-100 bg-center"
      :style="{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center bottom -80px',
        backgroundRepeat: 'no-repeat'
      }"
    >
      <div
        class="absolute flex items-center justify-between w-full px-6 mx-auto sm:px-20 top-2"
      >
        <div class="flex items-center">
          <img :src="zoosklogo" alt="Zoosk Logo" class="h-6 mr-2 sm:h-8" />
        </div>
        <div class="flex items-center gap-2 sm:gap-6">
          <router-link
            to="/signup"
            class="text-[10px] sm:text-[20px] text-gray-600 hover:text-gray-500"
          >
            Sign Up
          </router-link>
          <button
            @click="toggleSidebar"
            class="text-xl text-gray-700 sm:text-2xl hover:text-gray-400"
          >
            ☰
          </button>
        </div>
      </div>

      <div
        class="relative z-10 w-full max-w-[25.5rem] p-6 bg-white shadow-lg mt-11 rounded-2xl sm:p-8"
      >
        <div
          class="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-yellow-400 via-blue-600 via-blue-800 via-cyan-300 to-blue-400 rounded-t-2xl"
        ></div>

        <form @submit.prevent="handleLogin" class="space-y-2">
          <div>
            <label class="text-sm font-semibold text-gray-500"
              >Email Address:</label
            >
            <input
              type="email"
              v-model="form.email"
              class="w-full p-2.5 mt-2 text-black bg-gray-200 border-none rounded-lg outline-none focus:ring-1 focus:ring-cyan-500 px-6"
              placeholder="name@email.com"
            />
            <p v-if="errors.email" class="mt-1 text-sm text-red-500">
              {{ errors.email }}
            </p>
          </div>

          <div>
            <label class="text-sm font-semibold text-gray-500">Password:</label>
            <div class="relative">
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="form.password"
                class="w-full p-2.5 mt-2 mb-2 text-black bg-gray-200 border border-none rounded-lg outline-none focus:ring-1 focus:ring-cyan-500 px-6"
                placeholder="Password"
              />
              <span
                @click="togglePassword"
                class="absolute transform -translate-y-1/2 cursor-pointer right-3 top-[30px]"
              >
                <i
                  class="fa-solid fa-eye"
                  :style="{ color: showPassword ? '#19b7ea' : '#858585' }"
                ></i>
              </span>
              <p v-if="errors.password" class="mt-1 text-sm text-red-500">
                {{ errors.password }}
              </p>
            </div>
          </div>

          <div class="mt-3 mb-5">
            <a href="#" class="block text-center text-gray-500 text-[14px]"
              >Forgot password?</a
            >
          </div>

          <div class="flex justify-center w-full p-0">
            <div
              id="hcaptcha-container"
              class="w-full max-w-xs p-0 mt-3 -mb-1 sm:max-w-sm"
            ></div>
          </div>

          <button
            type="submit"
            :disabled="!captchaVerified"
            class="w-full py-3 font-bold text-center text-white bg-cyan-400 rounded-3xl hover:bg-cyan-400 disabled:bg-gray-300"
          >
            Log In
          </button>

          <div class="flex items-center justify-evenly">
            <div class="border border-gray-400 w-[70px]"></div>
            <span class="text-gray-500 text-[13px]">Or</span>
            <div class="w-[70px] border border-gray-400"></div>
          </div>

          <button
            class="flex items-center justify-center w-full py-2 font-semibold text-blue-900 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            <img :src="facebookicon" alt="Facebook" class="w-5 h-5 mr-2" /> Log
            in with Facebook*
          </button>
          <button
            class="flex items-center justify-center w-full py-2 mt-2 text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            <img :src="googleicon" alt="Google" class="w-5 h-5 mr-2" /> Log in
            with Google*
          </button>

          <p class="mt-4 text-left text-gray-400 text-[10px] leading-loose">
            *By selecting "Log in with Facebook" or "Log in with Google", you
            agree to our
            <a href="#" class="underline">Terms</a> (including the mandatory
            arbitration of disputes) and consent to our
            <a href="#" class="underline">Privacy Policy</a>.
          </p>
        </form>
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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuth } from '../composables/useAuth';
import zoosklogo from '../assets/zoosk-logo.svg';
import HamburgerMenu from './HamburgerMenu.vue';
import facebookicon from '../assets/fb-icon.svg';
import googleicon from '../assets/google-icon.svg';
import Footer from './Footer.vue';
import backgroundImage from '../assets/background-img.webp';

const sidebar = ref(null);
const captchaVerified = ref(false);

const toggleSidebar = () => {
  if (sidebar.value) {
    sidebar.value.toggleSidebar();
  }
};

const { form, errors, handleLogin, togglePassword, showPassword } = useAuth();

onMounted(() => {
  window.hcaptchaCallback = function (token) {
    captchaVerified.value = true;
  };

  const script = document.createElement('script');
  script.src = 'https://js.hcaptcha.com/1/api.js';
  script.async = true;
  script.defer = true;
  script.onload = () => {
    window.hcaptcha.render('hcaptcha-container', {
      sitekey: '41092c54-1ee4-42eb-9bcc-a31d3a665dbd',
      theme: 'light',
      size: 'normal',
      callback: window.hcaptchaCallback
    });
  };
  document.body.appendChild(script);
});
</script>
