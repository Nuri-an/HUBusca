import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Container, Header, Box, Loading } from './styles';
import { LogoIcon } from '../../assets/icons';

import { PropsPost } from '../../services/@types/Posts'
import { PropsUser } from '../../services/@types/Users'
import { getAllPosts, getAllUser } from '../../services';
import { CardComponent } from '../../components/Card';

export const Home: React.FC = () => {
    const [post, setPosts] = useState<Array<PropsPost>>();
    const [users, setUsers] = useState<Array<PropsUser>>();

    useEffect(() => {
        getAllPosts().then(function (response) {
            setPosts(response)
        })

        getAllUser().then(function (response) {
            setUsers(response)
        })
    }, [])

    function GetUsername(id: number | undefined) {
        const user = users?.find(user => user.id === id);

        return user?.username;
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
                <Box>
                    {
                        post?.length === 0
                            ? <Loading size='large' color='#000' />
                            : post?.map((item, index) => (
                                <CardComponent
                                    body={item.body}
                                    title={item.title}
                                    index={index}
                                    isLast={index === (post.length - 1)}
                                    isProfile={false}
                                    userId={item.userId}
                                    userName={GetUsername(item.userId)}
                                    key={index}
                                />
                            ))
                    }
                </Box>
            </LinearGradient>
        </Container>
    )
}