import { defineStore } from 'pinia';
import axios from 'axios';
import { useValidation } from '../composables/useValidation';
import { useToast } from '../composables/useToast';
import { BASE_URL } from '../constant';

export const useAuthStore = defineStore('auth', () => {
  const { form, errors, validateForm, resetForm, formSubmitted } = useValidation();
  const { showToast } = useToast();

  const handleLogin = async () => {
    formSubmitted.value = true;

    if (!validateForm()) {
      return false;
    }

    try {
      const response = await axios.post(`${BASE_URL}/user/login`, {
        email: form.value.email,
        password: form.value.password
      });

      showToast(response.data.message || 'Login successful!', '#4CAF50');
      resetForm();
      return true;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'An error occurred. Please try again.';
      showToast(errorMessage, '#FF5733');
      return false;
    }
  };

  return {
    form,
    errors,
    handleLogin,
    formSubmitted
  };
});
