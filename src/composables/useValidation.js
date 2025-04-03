import { ref } from 'vue';

export function useValidation() {
  const showPassword = ref(false);
  const form = ref({
    email: '',
    password: ''
  });
  const errors = ref({
    email: '',
    password: ''
  });
  const formSubmitted = ref(false);

  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      return 'Email is required.';
    } else if (!emailRegex.test(email)) {
      return 'Please enter a valid email.';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (!password.trim()) {
      return 'Password is required.';
    }
    return '';
  };

  const validateForm = () => {
    errors.value.email = validateEmail(form.value.email);
    errors.value.password = validatePassword(form.value.password);

    return !errors.value.email && !errors.value.password;
  };

  const resetForm = () => {
    form.value.email = '';
    form.value.password = '';
    errors.value.email = '';
    errors.value.password = '';
    formSubmitted.value = false;
  };

  return {
    showPassword,
    togglePassword,
    validateEmail,
    validatePassword,
    validateForm,
    form,
    errors,
    formSubmitted,
    resetForm
  };
}
