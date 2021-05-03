import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Container, Header, Box, Loading, Footer } from './styles';
import { LogoIcon } from '../../assets/icons';

import { PropsPost } from '../../services/@types/Posts'
import { PropsUser } from '../../services/@types/Users'
import { getAllPosts, getAllUser } from '../../services';
import { CardComponent } from '../../components/Card';

export const Home: React.FC = () => {
    const [posts, setPosts] = useState<Array<PropsPost>>();
    const [postsPerPage, setPostsPerPage] = useState<Array<PropsPost>>();
    const [users, setUsers] = useState<Array<PropsUser>>();

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
            setPostsPerPage(posts?.slice(0, 5))
        }
    }, [posts])

    function GetUsername(id: number | undefined) {
        const user = users?.find(user => user.id === id);

        return user?.username;
    }

    function handlePosts(initial: number | undefined) {
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
                                onEndReachedThreshold={0.1}
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