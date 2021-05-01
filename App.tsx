import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;

  } else {
    return (
      <Routes />
    );
  };
}
