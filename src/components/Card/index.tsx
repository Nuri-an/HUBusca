import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TrashIcon } from '../../assets/icons';
import { Card, Title, Body, Footer, Author } from './styles';

interface Props {
    isLast: boolean,
    isProfile: boolean,
    title: string,
    body: string,
    userName: string | undefined,
    userId: number | undefined,
    remove?: () => void
}

//Component card, contém as informações do post (título, descrição, autor e função para excluir - apenas na listagem do usuário atual). Será usado nas páginas Home e Meus Posts

export const CardComponent: React.FC<Props> = ({
    isLast,
    isProfile,
    title,
    body,
    userName,
    userId,
    remove
}) => {
    const navigation = useNavigation();

    return (
        <Card isLast={isLast}>
            <Title>
                {title}
            </Title>
            <Body>
                {body}
            </Body>
            <Footer isProfile={isProfile} >
                {
                    isProfile && (
                        <TouchableOpacity onPress={() => 
                            remove ? remove() : {}
                        }>
                            <TrashIcon width={20} height={20} />
                        </TouchableOpacity>
                    )
                }
                <TouchableOpacity onPress={() => userId ? navigation.navigate('User', { userId: userId }) : {}}>
                    <Author>
                        @{userName}
                    </Author>
                </TouchableOpacity>
            </Footer>
        </Card>
    )
}