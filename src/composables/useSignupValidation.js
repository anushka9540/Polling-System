import { reactive, watch, ref } from 'vue';

export function useSignupValidation() {
  const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: { id: '' }, // Initialize role as an object
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

  const showPassword = ref(false);

  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };

  const formatLabel = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      errors.email = 'Email is required';
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Enter a valid email';
      return false;
    }
    errors.email = '';
    return true;
  };

  const validatePassword = (password) => {
    if (!password) {
      errors.password = 'Password is required';
      return false;
    }
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!strongPassword.test(password)) {
      errors.password = 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character';
      return false;
    }
    errors.password = '';
    return true;
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
      return false;
    }
    if (confirmPassword !== form.password) {
      errors.confirmPassword = 'Passwords do not match';
      return false;
    }
    errors.confirmPassword = '';
    return true;
  };

  const validateSignupForm = () => {
    let isValid = true;

    // Reset all error messages
    Object.keys(errors).forEach(key => errors[key] = '');

    if (!form.role || !form.role.id) {
      errors.role = 'Role is required';
      isValid = false;
    }

    if (!form.firstName.trim()) {
      errors.firstName = 'First name is required';
      isValid = false;
    }

    if (!form.lastName.trim()) {
      errors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!validateEmail(form.email)) {
      isValid = false;
    }

    if (!validatePassword(form.password)) {
      isValid = false;
    }

    if (!validateConfirmPassword(form.confirmPassword)) {
      isValid = false;
    }

    // Check CAPTCHA validation
    if (!form.captchaVerified) {
      errors.captchaVerified = 'Please verify that you are human';
      isValid = false;
    }

    return isValid;
  };

  // Watch each field in the form
  Object.keys(form).forEach((key) => {
    watch(() => form[key], (newValue) => {
      const label = formatLabel(key);

      if (typeof newValue === 'string') {
        if (!newValue.trim()) {
          errors[key] = `${label} is required`;
        } else {
          errors[key] = '';

          if (key === 'email') validateEmail(newValue);
          if (key === 'password') validatePassword(newValue);
          if (key === 'confirmPassword' && newValue !== form.password) {
            errors.confirmPassword = 'Passwords do not match';
          }
        }
      }

      // if (typeof newValue === 'boolean' && key === 'captchaVerified') {
      //   if (!newValue) {
      //     errors.captchaVerified = 'Please verify that you are human';
      //   } else {
      //     errors.captchaVerified = '';
      //   }
      // }
    });
  });

  return {
    form,
    errors,
    validateSignupForm,
    showPassword,
    togglePassword
  };
}
