export const setEmailToResetPassword = (email: any) => {
  localStorage.setItem('emailToResetPassword', JSON.stringify(email));
};

export const getEmailToResetPassword = () => {
  const item = localStorage.getItem('emailToResetPassword');
  if (item) {
    const currenItem: string | null = JSON.parse(item);
    return currenItem;
  } else {
    return null;
  }
};
