<template>
  <Header></Header>
  <div
    class="flex justify-center bg-center"
    :style="{
       backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center bottom -60px',
      backgroundRepeat: 'no-repeat'
    }"
  >
    <div
      class="w-full max-w-[480px] relative mt-[-16px] sm:w-[100%] sm:px-4 lg:w-[480px] sm:p-8 lg:mt-[-37px] lg:pb-20 pb-9"
      style="filter: drop-shadow(0px 4px 20px rgba(55, 71, 86, 0.15))"
    >
      <div class="top-0 left-0 w-full">
        <img
          src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/form-border.548a764ea427d86a828a.svg"
          alt="Form Border"
          class="w-full h-auto"
        />
      </div>
      <div class="relative z-10 pl-10 pr-10 bg-white shadow-lg rounded-b-2xl">
        <form @submit.prevent="handleLoginWithReset">
          <div class="mb-4">
            <label
              for="email"
              class="block text-sm text-[#5a6978] mb-[4px] pt-[30px] leading-[22px] font-sans text-[15px] font-medium"
            >
              Email Address:
            </label>
            <input
              type="email"
              v-model="form.email"
              @input="handleChange('email')"
              class="w-full p-2 px-6 mt-2 text-black bg-gray-200 border-none rounded-lg outline-none focus:ring-1 focus:ring-cyan-500"
              placeholder="name@email.com"
            />
            <p v-if="errors.email" class="text-sm text-red-500">
              {{ errors.email }}
            </p>
          </div>

          <div class="relative mb-4">
            <label
              for="password"
              class="block text-sm text-[#5a6978] mb-[4px] mt-[20px] font-sans text-[15px] font-medium"
              >Password:</label
            >
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="form.password"
              @input="handleChange('password')"
              class="w-full p-2 px-6 mt-2 text-black bg-gray-200 border-none rounded-lg outline-none focus:ring-1 focus:ring-cyan-500"
              placeholder="Password"
            />
            <p v-if="errors.password" class="text-sm text-red-500">
              {{ errors.password }}
            </p>
            <span
              @click="togglePassword"
              class="absolute transform -translate-y-1/2 cursor-pointer right-3 top-[54px]"
            >
              <i
                class="fa-solid fa-eye"
                :style="{ color: showPassword ? '#19b7ea' : '#858585' }"
              ></i>
            </span>
          </div>

          <div class="text-center mb-[15px] mt-[19px]">
            <a href="#" class="text-[13.5px] text-[#5a6978] font-medium"
              >Forgot Password?</a
            >
          </div>

          <div class="flex items-center w-[260px] p-2 -mb-2 bg-gray-50 border border-gray-300 rounded-[5px]">
            <label class="relative flex items-center cursor-pointer">
              <input v-model="isHuman" type="checkbox" class="hidden peer" />
              <div class="mr-2 w-[28px] h-[28px] border border-gray-400 rounded-[2px] bg-white transition-all duration-300 ease-in-out transform cursor-pointer flex items-center justify-center peer-checked:bg-[#f9fbfc] peer-checked:border-[#19b7ea] peer-checked:shadow-lg">
                <svg v-if="isHuman" class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </label>

            <label class="text-[rgb(85,85,85)] cursor-pointer text-[12px] ml-3">I am human</label>
            <img :src="hCaptchaImg" class="h-[43px] ml-[80px]" />
          </div>

          <button
            :disabled="!isHuman"
            class="w-full py-[7px] rounded-[250px] shadow-md text-[20px] mt-3"
            :class="isHuman ? 'bg-[#19b7ea] text-white' : 'bg-[#dadada] text-[#999]'"
          >
            Log In
          </button>
        </form>

        <div class="flex items-center my-4 justify-evenly">
          <div class="border w-[100px]"></div>
          <span class="text-[#7f8b96] text-[13px]">Or</span>
          <div class="border w-[100px]"></div>
        </div>

        <div class="flex flex-col items-center space-y-4">
          <button
            class="w-full h-[40px] bg-white border border-gray-400 text-[#1b3e85] rounded-[8px] flex items-center justify-center hover:bg-gray-100 font-medium text-[13.5px]"
          >
            <img
              :src="facebookicon"
              class="mr-5 w-[30px] h-[25px] text-[#1b3e85]"
            />
            Log in with Facebook*
          </button>

          <button
            class="w-full h-[40px] bg-white border border-gray-400 text-gray-600 rounded-[8px] flex items-center justify-center hover:bg-gray-100"
          >
            <img :src="googleicon" class="mr-5 w-[27px] h-[22px]" />
            Log in with Google*
          </button>

          <p
            class="pt-1 text-left text-gray-400 text-[10px] leading-loose p-3 font-normal"
          >
            *By selecting "Log in with Facebook" or "Log in with Google", you
            agree to our
            <a href="#" class="underline">Terms</a> (including the mandatory
            arbitration of disputes) and consent to our
            <a href="#" class="underline">Privacy Policy</a>."
          </p>
        </div>
      </div>

      <HamburgerMenu ref="sidebar" :logo="zoosklogo" />
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>
import { useAuthStore } from '../stores/useAuthStore.js'; 
import { useValidation } from '../composables/useValidation.js';
import HamburgerMenu from './HamburgerMenu.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import backgroundImage from '../assets/background-img.webp';
import hCaptchaImg from '../assets/hcapctha.jpg';
import facebookicon from '../assets/fb-icon.svg';
import googleicon from '../assets/google-icon.svg';
import { ref } from 'vue';

const isHuman = ref(false);

const authStore = useAuthStore();
const { form, errors, handleLogin, handleChange } = authStore;
const {showPassword, togglePassword} = useValidation();

const handleLoginWithReset = async () => {
  const isLoginSuccessful = await handleLogin();

  if (isLoginSuccessful) {
    isHuman.value = false;
  }
};
</script>
