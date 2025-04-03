import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { BASE_URL } from '../constants/constant.js';

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter();
  const user = ref(JSON.parse(localStorage.getItem('user')) || null);
  const token = ref(localStorage.getItem('token') || null); 

  const handleLogin = async (payload) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, payload);
  
      const successResponse = { success: true, message: response.data.message || 'Login successful!' };
  
      user.value = response.data.user;
      token.value = response.data.token;
  
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token); 
      router.push('/polls'); 
  
      return successResponse;
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'An error occurred. Please try again.' };
    }
  };

  return { user, token, handleLogin };
});
