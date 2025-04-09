import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { BASE_URL } from '../constants/constant.js';

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();
  const user = ref(JSON.parse(localStorage.getItem('user')) || null);
  const usertoken = ref(JSON.parse(localStorage.getItem('usertoken')) || null);
  // const usertoken = ref((localStorage.getItem('usertoken')) || null);

  const handleLogin = async (payload) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, payload);

      const successResponse = {
        success: true,
        message: response.data.message || 'Login successful!'
      };

      user.value = response.data.user;
      usertoken.value = response.data.usertoken;

      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('usertoken',JSON.stringify(response.data.usertoken));
      // localStorage.setItem('usertoken',(response.data.usertoken));
      router.push('/poll-list');

      return successResponse;
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          'An error occurred. Please try again.'
      };
    }
  };

  return { user, usertoken, handleLogin };
});
