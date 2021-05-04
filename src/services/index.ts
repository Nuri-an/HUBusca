//Arquivo para conectar com as rotas da api

import { PropsPost } from './@types/Posts';
import { PropsUser } from './@types/Users';
import api from './api';

export const getAllPosts = async (): Promise<Array<PropsPost>> => { //Retorna uma Promise com todos os posts
    const response = await api.get('/posts');

    return response.data;
};

export const setPost = async ( data: PropsPost ): Promise<PropsPost> => { //Recebe um objeto - post, "insere" esse post na api e retona uma Promise com os dados dele (sempre id = 101)
    const response = await api.post('/posts', data);

    return response.data;
};

export const getAllUser = async (): Promise<Array<PropsUser>> => { //Retorna uma Promise com todos os usuários
    const response = await api.get('/users');

    return response.data;
};

export const getUser = async ( id: number | undefined ): Promise<PropsUser> => { //Recebe o id de um usuário, busca as informações dele na api e retorna uma Promise com os dados dele
    const response = await api.get(`/users/${id}`);

    return response.data;
};
