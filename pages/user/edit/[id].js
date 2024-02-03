import React from 'react';
import RegisterForm from '../../../components/RegisterForm';
import { useAuth } from '../../../utils/context/authContext';

export default function UserEdit() {
  const { user, updateUser } = useAuth();

  return (
    <RegisterForm user={user} updateUser={updateUser} />
  );
}
