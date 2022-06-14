
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from 'hooks/auth';
import React from 'react';
import { SignIn } from 'screens/Signin';
import { StackRoutes } from './StackRoutes';



export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <StackRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}
