<template>
    <div class="relative mb-4">
      <label class="block text-[#374756] font-euclid">Password</label>
      <input
        :type="showPassword ? 'text' : 'password'"
        v-model="password"
        placeholder="Password"
        class="w-full px-3 py-2 mt-1 bg-transparent border border-[#A4ADB5] rounded text-[#374756] focus:outline-none"
      />
      <span
        @click="togglePassword"
        class="absolute transform -translate-y-1/2 cursor-pointer right-3 top-[49px]"
      >
        <i
          class="fa-solid fa-eye"
          :style="{ color: showPassword ? '#19b7ea' : '#858585' }"
        ></i>
      </span>
      <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
    </div>
  
    <div class="relative mb-4">
      <label class="block text-[#374756] font-euclid">Confirm Password</label>
      <input
        :type="showPassword ? 'text' : 'password'"
        v-model="confirmPassword"
        placeholder="Confirm Password"
        class="w-full px-3 py-2 mt-1 bg-transparent border border-[#A4ADB5] rounded text-[#374756] focus:outline-none"
      />
      <span
        @click="togglePassword"
        class="absolute transform -translate-y-1/2 cursor-pointer right-3 top-[49px]"
      >
        <i
          class="fa-solid fa-eye"
          :style="{ color: showPassword ? '#19b7ea' : '#858585' }"
        ></i>
      </span>
      <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    placeholder: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    },
    error: {
      type: String,
      default: ''
    }
  });
  
  const emit = defineEmits();
  
  const password = ref(props.modelValue);
  const confirmPassword = ref(props.modelValue);
  const showPassword = ref(false);
  
  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };
  
  watch(password, (newValue) => {
    emit('update:modelValue', newValue);
  });
  
  watch(confirmPassword, (newValue) => {
    emit('update:modelValue', newValue);
  });
  </script>
  