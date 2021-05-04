import React, { useContext, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, Keyboard, ActivityIndicator } from 'react-native';
import Toast from 'react-native-toast-message';
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

//Nessa página é possível adicionar um novo post

export const PlusPost: React.FC = () => {
    const initialValue = { //Valores iniciais do formulário
        userId: undefined,
        id: undefined,
        title: '',
        body: ''
    }
    const [dataForm, setDataForm] = useState<PropsPost>(initialValue); //Receberá os valores do formulário
    const [send, setSend] = useState(false); //Receberá a informação se o formulário foi submetido ou não
    const { storePost } = useContext(AuthContext);
    const navigation = useNavigation();

    function handlePost() { //É acionado após a submissão do formulário. Faz a "inserção" do post na api e localmente, mostra uma mensagem Toast de sucesso ou erro e, caso seja sucesso, é enciado para a tela Meus Posts para visualizar o post criado
        setPost(dataForm).then(async (response) => {
            setSend(true);
            await storePost(response).then((res) => {
                if (res) {
                    Toast.show({
                        type: 'success',
                        visibilityTime: 3000,
                        topOffset: 50,
                        text1: 'Post enviado!',
                        text2: 'Tudo certo! Seu post foi enviado com sucesso 🎉'
                    });
                    setTimeout(() => {
                        setSend(false);
                        setDataForm(initialValue);
                        navigation.navigate('Profile')
                    }, 5000);
                } else {
                    Toast.show({
                        type: 'error',
                        visibilityTime: 4000,
                        text1: 'Opsss!',
                        text2: 'Não foi possível enviar seu post, algo de errado aconteceu 😕'
                    });
                    setTimeout(() => {
                        setSend(false);
                        setDataForm(initialValue);
                    }, 5000);
                }
            })
        })
    }

    return (
        <Container>
            <LinearGradient
                colors={['rgba(111,52,237,0.34)', 'rgba(10, 88, 255, 0.35)']}
                style={{ flex: 1 }}
            >
                <Header>
                    <Title>
                        Adicione um novo Post
                    </Title>
                </Header>
                <Toast ref={(ref) => Toast.setRef(ref)} />
                <Box>
                    <Form
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    >
                        <Label>
                            1. Informe aqui o título do seu post:
                        </Label>
                        <Input
                            placeholder="Título"
                            onChangeText={(val) => setDataForm({
                                ...dataForm,
                                title: val
                            })}
                            value={dataForm.title}
                            onSubmitEditing={Keyboard.dismiss}
                        />

                        <Label>
                            2. Informe aqui a descrição do seu post:
                        </Label>
                        <TextArea
                            placeholder="Descrição"
                            multiline={true}
                            numberOfLines={12}
                            textAlignVertical="top"
                            onChangeText={(val) => setDataForm({
                                ...dataForm,
                                body: val
                            })}
                            value={dataForm.body}
                            onSubmitEditing={Keyboard.dismiss}
                        />

                        <Button
                            onPress={() => handlePost()}>
                            {
                                send
                                    ? <ActivityIndicator color="#FFFFFF" />
                                    : (
                                        <TextButton>
                                            Enviar
                                        </TextButton>
                                    )
                            }
                        </Button>

                    </Form>
                </Box>
            </LinearGradient>
        </Container>
    )
}