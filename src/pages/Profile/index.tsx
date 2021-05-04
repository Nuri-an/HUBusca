import React, { useContext, useEffect, useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Container, Header, Photo, Title, Box, TextEmpty } from './styles';
import PostsContext from '../../contexts/Posts';
import { PropsPost } from '../../services/@types/Posts';
import { CardComponent } from '../../components/Card';

import Image from '../../assets/Profile/profile.jpg';
import Toast from 'react-native-toast-message';

//Nessa página é listado todos os posts do usuário atual

export const Profile: React.FC = () => {
    const { getPost, removePost } = useContext(PostsContext);
    const [post, setPost] = useState<Array<PropsPost>>(); //Receberá o arrays contendo todos os posts do usuário atual
    const scrollViewRef = useRef(null) as any; //Receberá a referência da scrollView para fazer o scroll da tela ao topo, após a criação ou remoção de items

    useEffect(() => { //Recarrega a lista e faz o scroll, sempre que os posts armazenados localmente se alterarem
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
                        (post?.length === 0 || !post)
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
                                            type: 'error',
                                            visibilityTime: 3000,
                                            topOffset: 50,
                                            text1: 'Post removido!',
                                            text2: 'Tudo certo! Seu post foi removido com sucesso.'
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