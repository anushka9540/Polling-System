import { ref, watch } from 'vue';

export function useAuth() {
  const form = ref({
    email: '',
    password: '',
  });

  const errors = ref({
    email: '',
    password: '',
  });

  const showPassword = ref(false);

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    errors.value.email = !form.value.email.trim()
      ? 'Email is required.'
      : emailRegex.test(form.value.email)
        ? ''
        : 'Please enter a valid email.';
  };
  

  const validatePassword = () => {
    if (!form.value.password) {
      errors.value.password = 'Password is required';
    } else {
      errors.value.password = '';
    }
  };

  watch(
    () => form.value.email,
    (newValue) => {
      if (newValue !== '') validateEmail();
      else errors.value.email = 'Email is required';
    }
  );

  watch(
    () => form.value.password,
    (newValue) => {
      if (newValue !== '') validatePassword();
      else errors.value.password = 'Password is required';
    }
  );

  const validateForm = () => {
    validateEmail();
    validatePassword();
    return !errors.value.email && !errors.value.password;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch('https://postman-api-endpoint.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: form.value.email,
          password: form.value.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      alert('Login successful!');
      form.value.email = '';
      form.value.password = '';
    } catch (error) {
      alert('Invalid email or password');
      
    }
  };

  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };

  return {
    form,
    errors,
    handleLogin,
    showPassword,
    togglePassword,
  };
}