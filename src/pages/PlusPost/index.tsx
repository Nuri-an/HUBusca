import React, { useContext, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, Keyboard } from 'react-native';
import Toast, { BaseToast } from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

import { setPost } from '../../services';
import { PropsPost } from '../../services/@types/Posts';
import AuthContext from '../../contexts/Posts';

import {
    Container,
    Box,
    Form,
    Label,
    Input,
    TextArea,
    Button,
    TextButton,
    Header,
    Title
} from './styles';

export const PlusPost: React.FC = () => {
    const [dataForm, setDataForm] = useState<PropsPost>({
        userId: undefined,
        id: undefined,
        title: '',
        body: ''
    });
    const [send, setSend] = useState(false);
    const { getPost, storePost } = useContext(AuthContext);
    const navigation = useNavigation();

    return (
        <Container>
            <LinearGradient
                colors={['rgba(111,52,237,0.34)', 'rgba(10, 88, 255, 0.35)']}
                style={{ flex: 1 }}
            >
                <Toast ref={(ref) => Toast.setRef(ref)} />
                <Header>
                    <Title invisible={send}>
                        Adicione um novo Post
                    </Title>
                </Header>
                <Box>
                    <Form
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    >
                        <Label>
                            1. Informe aqui o título do seu post:
                        </Label>
                        <Input
                            placeholder="Título do seu post"
                            onChangeText={(val) => setDataForm({
                                ...dataForm,
                                title: val
                            })}
                            onSubmitEditing={Keyboard.dismiss}
                        />

                        <Label>
                            2. Informe aqui a descrição do seu post:
                        </Label>
                        <TextArea
                            placeholder="Descrição do seu post"
                            multiline={true}
                            textAlignVertical="top"
                            onChangeText={(val) => setDataForm({
                                ...dataForm,
                                body: val
                            })}
                            onSubmitEditing={Keyboard.dismiss}
                        />

                        <Button
                            onPress={
                                () => setPost(dataForm).then(async (response) => {
                                    await storePost(response)
                                    getPost().then((posts) => {
                                        console.log(posts)
                                    })
                                    if (response) {
                                        setSend(true)
                                        Toast.show({
                                            type: 'success',
                                            text1: 'Post enviado!',
                                            text2: 'Tudo certo! Seu post foi enviado com sucesso 🎉'
                                        });
                                        setTimeout(() => navigation.navigate('Profile'), 5000);
                                    } else {
                                        Toast.show({
                                            type: 'error',
                                            text1: 'Opsss!',
                                            text2: 'Não foi possível enviar seu post, algo de errado aconteceu 😕'
                                        });
                                    }
                                })
                            }
                        >
                            <TextButton>
                                Enviar
                            </TextButton>
                        </Button>

                    </Form>
                </Box>
            </LinearGradient>
        </Container>
    )
}