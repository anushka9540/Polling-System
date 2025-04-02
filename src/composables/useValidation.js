import { ref } from 'vue';

export function useValidation() {
  const showPassword = ref(false);

  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      return 'Email is required.';
    } else if (!emailRegex.test(email)) {
      return 'Please enter a valid email.';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password.trim()) {
      return 'Password is required';
    }
    return '';
  };

  return {
    showPassword,
    togglePassword,
    validateEmail,
    validatePassword
  };
}
