import { reactive, ref } from 'vue';
import { useValidation } from './useValidation';

export function useLogin() {
  const { errors, validateEmail, validatePassword } = useValidation();

  const form = reactive({
    email: '',
    password: '',
    captchaVerified: false
  });

  const showPassword = ref(false);

  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };

  const validateField = (field) => {
    if (field === 'email') validateEmail(form.email);
    if (field === 'password') validatePassword(form.password);
  };

  const validateLoginPage = () => {
    validateEmail(form.email);
    validatePassword(form.password);
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
