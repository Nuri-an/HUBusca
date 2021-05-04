import AsyncStorage from '@react-native-async-storage/async-storage';
import { PropsPost } from '../../services/@types/Posts';

//Hooks para alterem os posts armazenados localmente

export const usePost = () => {
    const getPost = async (): Promise<Array<PropsPost> | undefined> => { //Retorna uma Promise com todos os posts
        try {
            const myPosts = await AsyncStorage.getItem('@posts')
            return myPosts != null ? JSON.parse(myPosts) : undefined;
        } catch (e) {
            console.log(e);
        }
    }

    const storePost = async (value: PropsPost): Promise<boolean | undefined> => { //Insere um novo post, através da inserção de um novo objeto no início do array
        try {
            AsyncStorage.getItem('@posts')
                .then(async (posts) => {
                    const newPost = posts ? JSON.parse(posts) : [];
                    newPost.unshift(value);
                    await AsyncStorage.setItem('@posts', JSON.stringify(newPost))
                });
                return true
        } catch (e) {
            console.log(e);
        }
    }

    const removePost = async ( index: number ): Promise<string | undefined> => { //Remove um post através de sua posição no array. Através da função splice() o objeto é removido do array de posts. Retorna uma mensagem de sucesso
        try {
            await AsyncStorage.getItem('@posts')
                .then(async (posts) => {
                    if(posts) {
                        const newPosts = posts ? JSON.parse(posts) : undefined
                        newPosts.splice(index, 1)
                        await AsyncStorage.setItem('@posts', JSON.stringify(newPosts))
                    }
                })
            return 'Post removido!'
        } catch (e) {
            console.log(e);
        }
    }

    return {
        getPost,
        storePost,
        removePost
    }
}