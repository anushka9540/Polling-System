import { defineStore } from 'pinia';
import axios from 'axios';
import { useValidation } from '../composables/useValidation';
import { useToast } from '../composables/useToast';
import { BASE_URL } from '../constant';

export const useAuthStore = defineStore('auth', () => {
  const validation = useValidation(); 
  const { showToast } = useToast();

  const handleLogin = async () => {
    if (!validation.validateForm()) { // validation logic is fully inside the composable
      return false;
    }

    try {
      const response = await axios.post(`${BASE_URL}/user/login`, {
        email: validation.form.value.email,
        password: validation.form.value.password
      });

      showToast(response.data.message || 'Login successful!', '#4CAF50');
      validation.resetForm();
      return true;
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'An error occurred. Please try again.';
      showToast(errorMessage, '#FF5733');
      return false;
    }
  };

  return {
    ...validation, 
    handleLogin
  };
});
