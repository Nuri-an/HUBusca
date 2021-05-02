import { PropsPost } from './@types/Posts';
import { PropsUser } from './@types/Users';
import api from './api';

export const getAllPosts = async (): Promise<Array<PropsPost>> => {
    const response = await api.get('/posts');

    return response.data;
};

export const setPost = async ( data: PropsPost ): Promise<PropsPost> => {
    const response = await api.post('/posts', data);

    return response.data;
};

export const getAllUser = async (): Promise<Array<PropsUser>> => {
    const response = await api.get('/users');

    return response.data;
};

export const getUser = async ( id: number ): Promise<PropsUser> => {
    const response = await api.get(`/users/${id}`);

    return response.data;
};
