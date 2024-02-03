import React from 'react';
import { useAuth } from '../../../utils/context/authContext';
import RegisterForm from '../../../components/RegisterForm';

export default function UserEdit() {
  const { user, setUser } = useAuth();

  return (
    <RegisterForm user={user} setUser={setUser} />
  );
}
