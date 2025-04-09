<template>
  <div class="relative mb-4">
    <label class="block text-[#374756] font-euclid">{{ label }}</label>
    <input
      :type="showPassword ? 'text' : 'password'"
      v-model="password"
      :placeholder="placeholder"
      class="w-full px-3 py-3 mt-1 bg-[#f8f9fa] border border-[#A4ADB5] rounded text-[#374756] focus:outline-none placeholder:text-[#374756] font-Euclid text-[15px]"
    />
    <span
      @click="togglePassword"
      class="absolute transform -translate-y-1/2 cursor-pointer right-3 top-[52px]"
    >
      <i
        class="fa-solid fa-eye"
        :style="{ color: showPassword ? '#19b7ea' : '#858585' }"
      ></i>
    </span>
    <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  label: String,
  placeholder: String,
  modelValue: String,
  error: String
});

const emit = defineEmits();

const password = ref(props.modelValue);
const showPassword = ref(false);

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

watch(
  () => props.modelValue,
  (val) => {
    password.value = val;
  }
);

watch(password, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>
