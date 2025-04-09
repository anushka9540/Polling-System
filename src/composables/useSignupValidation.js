import { reactive,ref } from "vue";

export function useSignupValidation() {
  const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: null,
    captchaVerified: false
  });

  const errors = reactive({});
  const submitted = ref(false);

  const validateSignupForm = () => {
    submitted.value = true;

    const trimmedFirstName = form.firstName.trim();
    const trimmedLastName = form.lastName.trim();
    const trimmedEmail = form.email.trim();

    errors.firstName = !trimmedFirstName
      ? 'First name is required'
      : trimmedFirstName.length < 4
      ? 'First name must be at least 4 characters'
      : '';

    errors.lastName = !trimmedLastName
      ? 'Last name is required'
      : trimmedLastName.length < 4
      ? 'Last name must be at least 4 characters'
      : '';

    errors.email = !trimmedEmail
      ? 'Email is required'
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)
      ? 'Please enter a valid email address'
      : '';

    errors.password = !form.password
      ? 'Password is required'
      : !/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/.test(form.password)
      ? 'Password must be at least 8 characters, include an uppercase letter, number, and symbol'
      : '';

    errors.confirmPassword = !form.confirmPassword
      ? 'Confirm password is required'
      : form.confirmPassword !== form.password
      ? 'Passwords do not match'
      : '';

    errors.role = !form.role ? 'Role is required' : '';
    errors.captchaVerified = !form.captchaVerified
      ? 'Please verify the captcha'
      : '';

    return Object.values(errors).every((e) => !e);
  };

  const setFieldErrors = (fieldErrors) => {
    for (const key in fieldErrors) {
      errors[key] = fieldErrors[key];
    }
  };

  return {
    form,
    errors,
    submitted,
    validateSignupForm,
    setFieldErrors 
  };
}
