import React from 'react';
import RegisterForm from '../../../components/RegisterForm';
import { useAuth } from '../../../utils/context/authContext';

export default function UserEdit() {
  const { user, setUser } = useAuth();

  return (
    <RegisterForm user={user} setUser={setUser} />
  );
}
