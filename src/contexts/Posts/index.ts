import { createContext } from 'react';
import { PropsPost } from '../../services/@types/Posts';

//Cria o contexto na aplicação
interface PropsUsePost {
    getPost: () => Promise<Array<PropsPost> | undefined>,
    storePost: (value: PropsPost) => Promise<boolean | undefined>,
    removePost: (index: number) => Promise<string | undefined>
}

const PostsContext = createContext<PropsUsePost>({} as PropsUsePost);

export default PostsContext;