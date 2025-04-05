import { reactive, watch } from 'vue';

export function useSignupValidation() {
  const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    captchaVerified: false
  });

  const errors = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    captchaVerified: ''
  });

  const validateSignupForm = () => {
    let isValid = true;

    Object.keys(errors).forEach(key => errors[key] = '');

    if (!form.firstName) {
      errors.firstName = 'First name is required';
      isValid = false;
    }

    if (!form.lastName) {
      errors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = 'Valid email is required';
      isValid = false;
    }

    if (!form.password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (form.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (form.password !== form.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    if (!form.role) {
      errors.role = 'Role is required';
      isValid = false;
    }

    if (!form.captchaVerified) {
      errors.captchaVerified = 'Please confirm you are human';
      isValid = false;
    }

    return isValid;
  };

  Object.keys(form).forEach((key) => {
    watch(() => form[key], (newValue) => {
      if (typeof newValue === 'string') {
        errors[key] = newValue.trim() === '' ? `${key.charAt(0).toUpperCase() + key.slice(1)}  is required` : ' ';
      } else if (typeof newValue === 'boolean') {
        errors[key] = !newValue ? 'Please confirm you are human' : '';
      }
    });
  });

  return {
    form,
    errors,
    validateSignupForm,
  };
}
