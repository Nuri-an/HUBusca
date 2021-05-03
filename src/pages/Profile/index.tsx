import React, { useContext, useEffect, useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Container, Header, Photo, Title, Box, TextEmpty } from './styles';
import PostsContext from '../../contexts/Posts';
import { PropsPost } from '../../services/@types/Posts';
import { CardComponent } from '../../components/Card';

import Image from '../../assets/Profile/profile.jpg';
import Toast from 'react-native-toast-message';

export const Profile: React.FC = () => {
    const { getPost, removePost } = useContext(PostsContext);
    const [post, setPost] = useState<Array<PropsPost>>();
    const scrollViewRef = useRef(null) as any;

    useEffect(() => {
        loadPost();
    }, [getPost()]);

    function loadPost() {
        getPost().then(async (response) => {
            setPost(response)
            if (response?.length !== post?.length) {
                scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true })
            }
        });
    }

    return (
        <Container>
            <LinearGradient
                colors={['rgba(111,52,237,0.34)', 'rgba(10, 88, 255, 0.35)']}
                style={{ flex: 1 }}
            >
                <Header>
                    <Photo source={Image} />
                    <Title>
                        Confira suas Postagens
                    </Title>
                </Header>
                <Toast ref={(ref) => Toast.setRef(ref)} />
                <Box ref={scrollViewRef}>
                    {
                        post === undefined
                            ? <TextEmpty > Você ainda não possui posts cadastrados! </TextEmpty>
                            : post?.map((item, index) => (
                                <CardComponent
                                    body={item.body}
                                    isLast={index === (post.length - 1)}
                                    isProfile={true}
                                    title={item.title}
                                    userId={item.userId}
                                    userName="You"
                                    key={index}
                                    remove={async () => {
                                        await removePost(index);
                                        loadPost()
                                        Toast.show({
                                            type: 'success',
                                            visibilityTime: 3000,
                                            text1: 'Post removido!',
                                            text2: 'Tudo certo! Seu post foi removido com sucesso 🎉'
                                        });
                                    }}
                                />
                            ))
                    }
                </Box>
            </LinearGradient>
        </Container>
    )
}