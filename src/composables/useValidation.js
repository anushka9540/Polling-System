import { ref, watch } from 'vue';

export function useValidation() {
  const form = ref({
    email: '',
    password: '',
  });

  const errors = ref({
    email: '',
    password: '',
  });

  const validateEmail = () => {
    if (!form.value.email) {
      errors.value.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
      errors.value.email = 'Enter a valid email';
    } else {
      errors.value.email = '';
    }
  };

  const validatePassword = () => {
    if (!form.value.password) {
      errors.value.password = 'Password is required';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(form.value.password)) {
      errors.value.password =
        'Password must have at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character';
    } else {
      errors.value.password = '';
    }
  };

  watch(
    () => form.value.email,
    (newValue) => {
      if (newValue !== '') validateEmail(); 
      else errors.value.email = '';
    }
  );

  watch(
    () => form.value.password,
    (newValue) => {
      if (newValue !== '') validatePassword(); 
      else errors.value.password = '';
    }
  );

  const validateForm = () => {
    validateEmail();
    validatePassword();
    return !errors.value.email && !errors.value.password;
  };

  const handleLogin = () => {
    if (!validateForm()) return;

    alert('Login successful!');

    form.value.email = '';
    form.value.password = '';

    errors.value.email = '';
    errors.value.password = '';
  };

  return {
    form,
    errors,
    handleLogin,
  };
}
