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

import PostsContext from './src/contexts/Posts/index';
import { usePost } from './src/hooks/usePost';
import { StatusBar } from 'react-native';

export default function App() {
  const { getPost, storePost, removePost } = usePost();
  
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
      <PostsContext.Provider value={{ getPost, storePost, removePost }}>
        <StatusBar animated={true} backgroundColor="transparent" hidden={true} />
        <Routes />
      </PostsContext.Provider>
    );
  };
}
