<template>
  <Header></Header>
  <div class="relative flex justify-center px-4 py-10 bg-gray-100 md:justify-end sm:px-0"

    :style="{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat'
    }"
  >

  <div class="absolute left-20 top-[75px] max-w-[850px] hide-on-768-and-below">
  <h1 class="text-[54px] text-[#374756] font-bold leading-tight font-euclid">
    Your one in a million might be <br />
    closer than you think.
  </h1>
  <p class="mt-4 text-base text-[#374756] text-[30px]">
    <strong>1.6 million</strong> messages sent daily.
  </p>
</div>

    <div class="relative w-full max-w-md p-8 bg-white border-gray-400 shadow-2xl rounded-3xl sm:mr-20">
      <div class="absolute top-0 left-0 w-full">
        <img
          src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/form-border.548a764ea427d86a828a.svg"
          alt="Form Border"
          class="w-full h-auto"
        />
      </div>

      <div class="flex mb-4 space-x-2">
        <button class="flex items-center justify-center w-full py-2 font-bold text-[#374756] border border-gray-900 rounded-lg hover:bg-gray-100">
          <img :src="facebookicon" alt="Facebook" class="w-5 h-5 mr-2" /> Sign up
        </button>
        <button class="flex items-center justify-center w-full py-2 font-bold text-[#374756] border border-gray-900 rounded-lg hover:bg-gray-100">
          <img :src="googleicon" alt="Google" class="w-5 h-5 mr-2" /> Sign up
        </button>
      </div>

      <div class="mb-4 text-[#374756]">
        <label class="block text-[#374756] font-euclid">Role</label>
        <select v-model="form.role" class="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded">
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="moderator">Moderator</option>
          <option value="admin">Admin</option>
        </select>
        <p v-if="errors.role" class="text-sm text-red-500">{{ errors.role }}</p>
      </div>

      <div class="mb-4">
        <label class="block text-[#374756] font-euclid">First Name</label>
        <input v-model="form.firstName" type="text" placeholder="First name" class="w-full px-3 py-2 mt-1 text-[#374756] bg-transparent border border-gray-400 rounded" />
        <p v-if="errors.firstName" class="text-sm text-red-500">{{ errors.firstName }}</p>
      </div>

      <div class="mb-4">
        <label class="block text-[#374756] font-euclid">Last Name</label>
        <input v-model="form.lastName" type="text" placeholder="Last name" class="w-full px-3 py-2 mt-1 bg-transparent border text-[#374756] border-gray-400 rounded" />
        <p v-if="errors.lastName" class="text-sm text-red-500">{{ errors.lastName }}</p>
      </div>

      <div class="mb-4">
        <label class="block text-[#374756] font-euclid">Email</label>
        <input v-model="form.email" type="email" placeholder="name@gmail.com" class="w-full px-3 py-2 mt-1 bg-transparent border text-[#374756] border-gray-400 rounded" />
        <p v-if="errors.email" class="text-sm text-red-500">{{ errors.email }}</p>
      </div>

      <div class="mb-4">
        <label class="block text-[#374756] font-euclid">Password</label>
        <input v-model="form.password" type="password" placeholder="Password" class="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded text-[#374756]" />
        <p v-if="errors.password" class="text-sm text-red-500">{{ errors.password }}</p>
      </div>

      <div class="mb-4">
        <label class="block text-[#374756] font-euclid">Confirm Password</label>
        <input v-model="form.confirmPassword" type="password" placeholder="Confirm Password" class="w-full px-3 py-2 mt-1 bg-transparent border border-gray-400 rounded text-[#374756]" />
        <p v-if="errors.confirmPassword" class="text-sm text-red-500">{{ errors.confirmPassword }}</p>
      </div>

      <div class="flex items-center p-2 mb-4 text-[#374756] border border-gray-400 rounded">
        <label class="flex items-center cursor-pointer">
          <input type="checkbox" class="hidden peer" v-model="form.captchaVerified" />
          <div class="mr-2 w-[28px] h-[28px] border border-gray-400 rounded-[4px] bg-white transition-all duration-300 ease-in-out transform cursor-pointer flex items-center justify-center peer-checked:bg-[#f9fbfc] peer-checked:border-[#215b6e] peer-checked:border-2 peer-checked:shadow-lg">
            <svg v-if="form.captchaVerified" class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          I am human
        </label>
        <img :src="hCaptcha" alt="hCaptcha" class="w-10 h-10 ml-4" />
      </div>
      <p v-if="errors.captchaVerified" class="mb-4 text-sm text-red-500">{{ errors.captchaVerified }}</p>

      <button @click="handleSignup" class="w-full py-3 text-white rounded-[40px] bg-cyan-500">
        View Singles
      </button>
      <p class="pt-3 text-left text-gray-400 text-[11px] leading-loose font-Eucld">
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
import { useSignupValidation } from '../composables/useSignupValidation';
import { useSignupAuth } from '../stores/useSignupAuthStore'; 
import { useToast } from '../composables/useToast'; 

const sidebar = ref(null);
const toggleSidebar = () => {
  if (sidebar.value) sidebar.value.toggleSidebar();
};

const {
  form,
  errors,
  validateSignupForm,
} = useSignupValidation();

const { handleSignup: signupApi } = useSignupAuth(); 
const { showToast } = useToast(); 

const handleSignup = async () => {
  const isValid = validateSignupForm();
  if (!isValid) return;

  const payload = {
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    password: form.password,
    role: form.role
  };

  const response = await signupApi(payload);

  if (!response.success) {
    showToast(response.message, 'error');
  }
};

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
</script>

