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

export default function App() {
  const { getPost, storePost, removePost } = usePost(); //hooks customizados, que alteram o arrays de posts local pelo Async Storage 
  
  const [fontsLoaded] = useFonts({ //Fonts utilizadas na aplicação
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_700Bold
  });

  if (!fontsLoaded) { //Verifica se as fontes já foram carregadas
    return <AppLoading />;

  } else { //Retorna as rotas da aplicação (Tab e Stack), englobadas pelo contexto, que possui como valor os hooks customizados
    return (
      <PostsContext.Provider value={{ getPost, storePost, removePost }}>
        <Routes />
      </PostsContext.Provider>
    );
  };
}
