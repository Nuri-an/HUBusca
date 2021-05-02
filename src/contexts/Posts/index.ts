import { createContext } from 'react';
import { PropsPost } from '../../services/@types/Posts';

interface PropsUsePost {
    getPost: () => Promise<Array<PropsPost> | undefined>,
    storePost: (e: PropsPost) => Promise<void>,
    removePost: (index: number) => Promise<string | undefined>
}

const PostsContext = createContext<PropsUsePost>({} as PropsUsePost);

export default PostsContext;