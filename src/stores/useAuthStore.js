import { defineStore } from 'pinia';
import { useValidation } from '../composables/useValidation';
import { useToast } from '../composables/useToast';

export const useAuthStore = defineStore('auth', () => {
  const {
    form,
    errors,
    validateEmail,
    validatePassword,
    resetForm,
    formSubmitted
  } = useValidation();
  const { showToast } = useToast();

  const handleLogin = async () => {
    formSubmitted.value = true;

    errors.value.email = validateEmail(form.value.email);
    errors.value.password = validatePassword(form.value.password);

    if (errors.value.email || errors.value.password) {
      return false;
    }

    try {
      const response = await fetch('http://192.168.68.107:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: form.value.email,
          password: form.value.password
        })
      });

      let data;
      try {
        data = await response.json(); // Ensure response parsing is safe
      } catch {
        throw new Error('Invalid server response');
      }

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // ✅ Show toast for successful login
      showToast('Login successful!', '#4CAF50');
      resetForm();
    } catch (error) {
      // ✅ Show toast with API error message
      showToast(error.message, '#FF5733');
    }
  };

  return {
    form,
    errors,
    handleLogin,
    formSubmitted
  };
});
