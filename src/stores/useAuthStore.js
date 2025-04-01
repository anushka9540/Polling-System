import { defineStore } from 'pinia';
import { ref } from 'vue';

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

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!form.value.email.trim()) {
      errors.value.email = 'Email is required.';
    } else if (!emailRegex.test(form.value.email)) {
      errors.value.email = 'Please enter a valid email.';
    } else {
      errors.value.email = '';
    }
  };

  const validatePassword = () => {
    if (!form.value.password.trim()) {
      errors.value.password = 'Password is required';
    } else {
      errors.value.password = '';
    }
  };

  const handleChange = (field) => {
    if (field === 'email') {
      validateEmail();
    } else if (field === 'password') {
      validatePassword();
    }
  };

  const validateForm = () => {
    validateEmail();
    validatePassword();
    return !errors.value.email && !errors.value.password;
  };

  const handleLogin = async () => {
    formSubmitted.value = true;

    validateEmail();
    validatePassword();

    if (!validateForm()) return false;

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
        throw new Error(data.message || 'Login failed');
      }

      alert('Login successful!');

      form.value.email = '';
      form.value.password = '';
      errors.value.email = '';
      errors.value.password = '';
      formSubmitted.value = false;

      return true;
    } catch (error) {
      alert('Invalid email or password');
      return false;
    }
  };

  return {
    form,
    errors,
    handleLogin,
    handleChange,
  };
});
