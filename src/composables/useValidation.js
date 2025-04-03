import { reactive } from 'vue';

export function useValidation() {
  const errors = reactive({
    email: '',
    password: ''
  });

  const validateEmail = (email) => {
    if (!email.trim()) {
      errors.email = 'Email is required';
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Enter a valid email';
      return false;
    }
    errors.email = '';
    return true;
  };

  const isPasswordFieldEmpty = (password) => {
    if (!password.trim()) {
      errors.password = 'Password is required';
      return false;
    }
    errors.password = '';
    return true;
  };

  return { errors, validateEmail, isPasswordFieldEmpty };
}
