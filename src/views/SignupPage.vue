<template>
  <Header />
  <div
    class="relative flex justify-center px-4 py-10 bg-gray-100 md:justify-end sm:px-0"
    :style="{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: '125%',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat'
    }"
  >
    <div
      class="absolute left-20 top-[75px] max-w-[850px] hide-on-768-and-below"
    >
      <h1
        class="xl:text-[54px] text-[#374756] font-bold leading-tight font-euclid text-[45px] responsive-heading"
      >
        Your one in a million might be closer than you think.
      </h1>
      <p class="mt-4 text-[#374756] xl:text-[30px] text-[25px]">
        <strong>1.6 million</strong> messages sent daily.
      </p>
    </div>

    <div
      class="relative w-full max-w-md p-8 bg-white border-gray-400 shadow-2xl rounded-3xl md:mr-16 form-center top-[-40px] md:top-[-10px]"
    >
      <div class="absolute top-0 left-0 w-full">
        <img
          src="https://static3.zoosk.com/browser-86c22481/touch/en-GB/form-border.548a764ea427d86a828a.svg"
          alt="Form Border"
          class="w-full h-auto"
        />
      </div>

      <div class="flex mb-6 space-x-2">
        <button
          class="flex items-center justify-center w-full py-3 font-euclid text-[#374756] border border-[#374756] rounded-md hover:bg-gray-100"
        >
          <img :src="facebookIcon" alt="Facebook" class="w-[25px] h-5 mr-2" />
          Sign up
        </button>
        <button
          class="flex items-center justify-center w-full py-3 font-euclid text-[#374756] border border-[#374756] rounded-md hover:bg-gray-100"
        >
          <img :src="googleicon" alt="Google" class="w-5 h-5 mr-2" /> Sign up
        </button>
      </div>

      <div class="mb-6">
        <label class="block text-[#374756] font-euclid mb-2"
          >Select a Role:</label
        >
        <div v-if="roleStore.roles.length > 0" class="grid grid-cols-2 gap-3">
          <button
            v-for="role in roleStore.roles"
            :key="role.id"
            @click="form.role = role"
            type="button"
            :class="[
              'w-full py-3 rounded-full border-2 text-center transition-all duration-200 font-Eucliid',
              form.role?.id === role.id
                ? 'bg-[#E6F8FF] text-[#374756] border-[#19B7EA]'
                : 'bg-[#F8F9FA] text-[#374756] border-[#A4ADB5] hover:bg-[#E6F8FF] hover:border-[#19B7EA]'
            ]"
          >
            {{ role.name }}
          </button>
        </div>
        <div v-else class="text-[#374756]">
          <button
            class="w-full py-3 font-medium text-center transition-all duration-200 border border-[#A4ADB5] rounded-full text-[#19b7ea]"
          >
            Role Loading...
          </button>
        </div>
        <p v-if="errors.role" class="mt-1 text-sm text-red-500">
          {{ errors.role }}
        </p>
      </div>

      <div class="flex gap-2 mb-6 juistify-between">
        <div>
          <label class="block text-[#374756] font-euclid mb-1"
            >First Name</label
          >
          <input
            v-model="form.firstName"
            type="text"
            placeholder="First name"
            class="w-full px-5 py-3 mt-1 text-[#374756] bg-[#f8f9fa] border border-[#A4ADB5] rounded focus:outline-none font-Euclid text-[15px] placeholder:text-[#374756]"
          />
          <p v-if="submitted && errors.firstName" class="text-sm text-red-500">
            {{ errors.firstName }}
          </p>
        </div>
        <div>
          <label class="block text-[#374756] font-euclid mb-1">Last Name</label>
          <input
            v-model="form.lastName"
            type="text"
            placeholder="Last name"
            class="w-full px-5 py-3 mt-1 bg-[#f8f9fa] border text-[#374756] border-[#A4ADB5] rounded focus:outline-none font-Euclid text-[15px] placeholder:text-[#374756]"
          />
          <p v-if="submitted && errors.lastName" class="text-sm text-red-500">
            {{ errors.lastName }}
          </p>
        </div>
      </div>

      <div class="mb-6">
        <label class="block text-[#374756] font-euclid mb-1"
          >Email Address</label
        >
        <input
          v-model="form.email"
          type="email"
          placeholder="name@gmail.com"
          class="w-full px-5 py-3 mt-1 bg-[#f8f9fa] border text-[#374756] border-[#A4ADB5] rounded focus:outline-none placeholder:text-[#374756] font-Euclid text-[15px]"
        />
        <p v-if="errors.email" class="text-sm text-red-500">
          {{ errors.email }}
        </p>
      </div>

      <div class="mb-6">
        <PasswordInput
          label="Password"
          placeholder="Enter password"
          v-model="form.password"
          :error="errors.password"
        />
      </div>

      <div class="mb-6">
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm password"
          v-model="form.confirmPassword"
          :error="errors.confirmPassword"
        />
      </div>

      <div class="mb-6">
        <Captcha v-model="form.captchaVerified" :errors="errors" />
      </div>

      <button
        @click="handleSignup"
        :disabled="loading"
        class="w-full py-3 text-white rounded-[40px] bg-[#19b7ea] hover:bg-cyan-400 text-[20px] font-Euclid flex items-center justify-center gap-2"
      >
        <span v-if="!loading">Register</span>
        <span
          v-else
          class="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin"
        ></span>
      </button>
      <p
        class="pt-3 text-left text-[#7F8B96] text-[11px] leading-loose font-Eucld"
      >
        *By selecting "Sign up", you agree to our
        <a href="#" class="underline">Terms of use</a> (including the mandatory
        arbitration of disputes) and have understood our
        <a href="#" class="underline">Privacy Notice</a>.
      </p>
    </div>
  </div>
  <Footer />
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
import { ref, onMounted } from 'vue';
import backgroundImage from '../assets/background/singup bgImage.webp';
import HamburgerMenu from '../components/HamburgerMenu.vue';
import facebookIcon from '../assets/icons/facebookicon.svg';
import googleicon from '../assets/icons/google-icon.svg';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import { useSignupValidation } from '../composables/useSignupValidation';
import { useSignupAuth } from '../stores/useSignupAuthStore';
import { useToast } from '../composables/useToast';
import { useRoleStore } from '../stores/useRollAuthStore.js';
import { useRouter } from 'vue-router';
import Captcha from '../components/Captcha.vue';
import PasswordInput from '../components/PasswordInput.vue';

const roleStore = useRoleStore();
onMounted(() => {
  roleStore.fetchRoles();
});

const { form, errors, submitted, validateSignupForm, setFieldErrors } =
  useSignupValidation();

const { handleSignup: signupApi } = useSignupAuth();
const { showToast } = useToast();
const router = useRouter();
const loading = ref(false);

const handleSignup = async () => {
  submitted.value = true;
  const isValid = validateSignupForm();
  if (!isValid) return;

  loading.value = true;

  const payload = {
    firstName: form.firstName.trim(),
    lastName: form.lastName.trim(),
    email: form.email.trim(),
    password: form.password,
    roleId: form.role.id
  };

  const { success, message, fieldErrors } = await signupApi(payload);

  loading.value = false;

  if (fieldErrors) {
    setFieldErrors(fieldErrors);
  }

  if (message?.toLowerCase().includes('email is already in use')) {
    errors.email = 'Email is already in use. Please try another.';
  }

  if (success) {
    showToast(message, 'success');
    router.push('/');
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .hide-on-768-and-below {
    display: none !important;
  }
  .form-center {
    margin: 0 auto;
  }
}
@media (max-width: 1024px) {
  .responsive-heading {
    font-size: 44px;
    max-width: 430px;
    line-height: 1.2;
  }

  .hide-on-768-and-below {
    margin-left: -30px;
  }
}
</style>
