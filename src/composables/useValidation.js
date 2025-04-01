import { ref } from 'vue';

export function useValidation() {
  
  const showPassword = ref(false);

  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };

  return {
   
    showPassword,
    togglePassword,
  };
}