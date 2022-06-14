
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { AuthProvider } from '@hooks/auth';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';
import theme from './src/theme';


export default function App() {
  const queryClient = new QueryClient()
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
      <StatusBar style="light" translucent backgroundColor='transparent'/>
      <AuthProvider>
     
      <Routes />
      </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}


