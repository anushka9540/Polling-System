<template>
  <div
    class="flex items-center p-2 mb-4 text-[#374756] border border-gray-300 rounded md:w-[270px] h-20 w-[230px] bg-gray-50"
  >
    <label class="flex items-center cursor-pointer">
      <input type="checkbox" class="hidden peer" v-model="captchaVerified" />
      <div
        class="mr-2 w-[28px] h-[28px] border border-gray-400 rounded-[4px] bg-white transition-all duration-300 ease-in-out transform cursor-pointer flex items-center justify-center peer-checked:bg-[#f9fbfc] peer-checked:border-[#215b6e] peer-checked:border-2 peer-checked:shadow-lg"
      >
        <svg
          v-if="captchaVerified"
          class="w-6 h-6 text-green-600"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      I am human
    </label>
    <img :src="hCaptcha" alt="hCaptcha" class="w-10 h-10 ml-12 md:ml-20" />
  </div>
  <p v-if="errors.captchaVerified" class="mt-2 text-sm text-red-500">
    {{ errors.captchaVerified }}
  </p>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
import hCaptcha from '../assets/captcha/hcapctha.jpg';

const captchaVerified = ref(false);

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  errors: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits();

watch(captchaVerified, (newVal) => {
  emit('update:modelValue', newVal);
});
</script>
