import AsyncStorage from '@react-native-async-storage/async-storage';
import { PropsPost } from '../../services/@types/Posts';

export const usePost = () => {
    const getPost = async (): Promise<Array<PropsPost> | undefined> => {
        try {
            const myPosts = await AsyncStorage.getItem('@posts')
            return myPosts != null ? JSON.parse(myPosts) : undefined;
        } catch (e) {
            console.log(e);
        }
    }

    const storePost = async (value: PropsPost) => {
        try {
            AsyncStorage.getItem('@posts')
                .then(async (posts) => {
                    const newPost = posts ? JSON.parse(posts) : [];
                    newPost.push(value);
                    console.log(newPost)
                    await AsyncStorage.setItem('@posts', JSON.stringify(newPost))
                });
        } catch (e) {
            console.log(e);
        }
    }

    return {
        getPost,
        storePost
    }
}