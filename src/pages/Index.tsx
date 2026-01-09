import { useState } from 'react';
import LoginPage from '@/components/LoginPage';
import BirthdayPage from '@/components/BirthdayPage';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return <BirthdayPage />;
};

export default Index;
