import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useValidation } from '../composables/useValidation';

export const useAuthStore = defineStore('auth', () => {
  const form = ref({
    email: '',
    password: ''
  });

  const errors = ref({
    email: '',
    password: ''
  });

  const formSubmitted = ref(false);

  const { validateEmail, validatePassword } = useValidation();

  const showToast = (message, bgColor) => {
    Toastify({
      text: message,
      duration: 3000,
      gravity: 'top',
      position: 'center',
      backgroundColor: bgColor,
      style: {
        borderRadius: '8px',
        padding: '10px',
        fontSize: '14px',
        textAlign: 'center'
      },
      stopOnFocus: true
    }).showToast();
  };

  const handleLogin = async () => {
    formSubmitted.value = true;

    errors.value.email = validateEmail(form.value.email);
    errors.value.password = validatePassword(form.value.password);

    if (errors.value.email || errors.value.password) {
      showToast('Please enter valid credentials!', '#FF5733');
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

      const data = await response.json();

      if (!response.ok) {
        if (data.message === 'User not found') {
          throw new Error('User data not found');
        }
        throw new Error(data.message || 'Login failed');
      }

      showToast('Login successful!', '#4CAF50');

      form.value.email = '';
      form.value.password = '';
      errors.value.email = '';
      errors.value.password = '';
      formSubmitted.value = false;

      return true;
    } catch (error) {
      if (error.message === 'Failed to fetch') {
        showToast(
          'Failed to fetch data. Please check your internet connection.',
          '#FF5733'
        );
      } else if (error.message === 'User data not found') {
        showToast(
          'User data not found. Please check your credentials.',
          '#FF5733'
        );
      } else {
        showToast(error.message, '#FF5733');
      }
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
