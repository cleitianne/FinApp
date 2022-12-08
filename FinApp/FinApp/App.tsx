import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import * as SplashScreen from 'expo-splash-screen'

import { Routes } from './src/routes'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'

import { AuthProvider, useAuth } from './src/hooks/auth'

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  const { userStorageLoading } = useAuth()

  if (!fontsLoaded || userStorageLoading) {
    return null
  }

  SplashScreen.hideAsync();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}