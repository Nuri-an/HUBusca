import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { Container, Header, Box, Card, Title, Body, Author, Loading } from './styles';
import { LogoIcon } from '../../assets/icons';

import { PropsPost } from '../../services/@types/Posts'
import { PropsUser } from '../../services/@types/Users'
import { getAllPosts, getAllUser } from '../../services';

export const Home: React.FC = () => {
    const [post, setPosts] = useState<Array<PropsPost>>();
    const [users, setUsers] = useState<Array<PropsUser>>();
    const navigation = useNavigation();

    useEffect(() => {
        getAllPosts().then(function (response) {
            setPosts(response)
        })

        getAllUser().then(function (response) {
            setUsers(response)
        })
    }, [])

    function GetUsername(id: number) {
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
                                <Card isLast={index === (post.length - 1)} key={index}>
                                    <Title>
                                        {item.title}
                                    </Title>
                                    <Body>
                                        {item.body}
                                    </Body>
                                    <TouchableOpacity onPress={() => navigation.navigate('User', { userId: item.userId })}>
                                        <Author>
                                            @{GetUsername(item.id)}
                                        </Author>
                                    </TouchableOpacity>
                                </Card>
                            ))
                    }
                </Box>
            </LinearGradient>
        </Container>
    )
}