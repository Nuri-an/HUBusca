import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, Keyboard } from 'react-native';

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
import { setPost } from '../../services';
import { PropsPost } from '../../services/@types/Posts';

export const PlusPost: React.FC = () => {
    const [dataForm , setDataForm] = useState<PropsPost>({
        userId: undefined,
        id: undefined,
        title: '',
        body: ''
    });
    const [send, setSend] = useState<number>();

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
                                () => setPost(dataForm).then((response) => {
                                    console.log(response)
                                    setSend(response.id)
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