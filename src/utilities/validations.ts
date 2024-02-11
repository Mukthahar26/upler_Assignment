export const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePhone = (phone: string) => {
  const regex = /^\d{10}$/;
  return regex.test(phone);
};
