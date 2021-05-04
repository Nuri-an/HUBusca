import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Container, Header, Box, Loading, Footer } from './styles';
import { LogoIcon } from '../../assets/icons';

import { PropsPost } from '../../services/@types/Posts'
import { PropsUser } from '../../services/@types/Users'
import { getAllPosts, getAllUser } from '../../services';
import { CardComponent } from '../../components/Card';

//Nessa página é possível ver a listagem de todos os posts fornecidos pela api

export const Home: React.FC = () => {
    const [posts, setPosts] = useState<Array<PropsPost>>(); //Receberá o arrays contendo todos os posts
    const [postsPerPage, setPostsPerPage] = useState<Array<PropsPost>>(); //Receberá partes da constante posts, de 5 em 5, para criar o scroll infinito
    const [users, setUsers] = useState<Array<PropsUser>>(); //Receberá o arrays contendo todos os usuários, para encontrar o username do autor

    useEffect(() => {
        getAllPosts().then(async (response) => {
            setPosts(response)
        })

        getAllUser().then(async (response) => {
            setUsers(response)
        })

    }, []);

    useEffect(() => {
        if (posts) {
            setPostsPerPage(posts?.slice(0, 5)) //Popula postsPerPage com os 5 primeiros items da lista total
        }
    }, [posts])

    function GetUsername(id: number | undefined) {  //Busca e retorna o username do autor da postagem
        const user = users?.find(user => user.id === id);

        return user?.username;
    }

    function handlePosts(initial: number | undefined) { //Popula postsPerPage com mais 4 objetos, se existirem, quando a lista se aproxima do fim
        if (initial !== undefined && posts) {
            if (posts.length > 0) {
                let newsPosts = postsPerPage;
                setPostsPerPage(
                    newsPosts?.concat(
                        posts?.slice(initial, initial + 5)
                    )
                )
            }
        }
    }

    return (
        <Container>
            <LinearGradient
                colors={['rgba(111,52,237,0.34)', 'rgba(10, 88, 255, 0.35)']}
                style={{ flex: 1 }}
            >
                <Header>
                    <LogoIcon />
                </Header>
                {
                    (postsPerPage?.length === 0 || !postsPerPage)
                        ? <Loading size='large' color='#000' />
                        : (
                            <Box
                                data={postsPerPage}
                                keyExtractor={(post: unknown, index: number) => String(index)}
                                onEndReached={() => handlePosts(postsPerPage?.length)}
                                onEndReachedThreshold={0.2}
                                renderItem={({ item }: any) => (
                                    <CardComponent
                                        body={item.body}
                                        title={item.title}
                                        isLast={item.id === postsPerPage[postsPerPage?.length - 1].id}
                                        isProfile={false}
                                        userId={item.userId}
                                        userName={GetUsername(item.userId)}
                                    />
                                )}
                            />
                        )}
            </LinearGradient>
        </Container>
    )
}