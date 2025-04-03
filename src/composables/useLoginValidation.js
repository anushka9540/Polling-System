import { reactive, ref } from 'vue';

export function useLoginValidation() {
  const form = reactive({
    email: '',
    password: '',
    captchaVerified: false
  });

  const errors = reactive({
    email: '',
    password: ''
  });

  const showPassword = ref(false);

  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };

  const validateField = (field) => {
    if (field === 'email') {
      errors.email = form.email.trim()
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
          ? ''
          : 'Enter a valid email'
        : 'Email is required';
    }

    if (field === 'password') {
      errors.password = form.password.trim()
        ? form.password.length >= 4
          ? ''
          : 'Password must be at least 4 characters'
        : 'Password is required';
    }
  };

  const validateLoginPage = () => {
    validateField('email');
    validateField('password');
    return !errors.email && !errors.password;
  };

  const resetForm = () => {
    form.email = '';
    form.password = '';
    form.captchaVerified = false;
    errors.email = '';
    errors.password = '';
  };

  return {
    form,
    errors,
    showPassword,
    togglePassword,
    validateField,
    validateLoginPage,
    resetForm
  };
}
