import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../constants/constant.js';

export const useRoleStore = defineStore('roleStore', () => {
  const roles = ref([]);

  const fetchRoles = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/role/list`);
      console.log('API response:', response.data);
      roles.value = response.data || [];
      console.log('API responssse:', response.data);
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };

  return {
    roles,
    fetchRoles
  };
});
