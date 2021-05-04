import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { RouteProp, useRoute } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { PropsUser } from '../../services/@types/Users';
import { getUser } from '../../services';
import {
    Container,
    Box,
    Card,
    BoxIcon,
    Author,
    Name,
    Content,
    Description
} from './styles';

import {
    UserIcon,
    PinIcon,
    PhoneIcon,
    LinkIcon,
    CompanyIcon,
    KeyIcon,
    ChevronLeftIcon,
} from '../../assets/icons';

type ParamList = {
    User: {
        userId: number;
    };
};

//Nessa página é possível ver as informações de um usuário específico

export const User: React.FC = () => {
    const route = useRoute<RouteProp<ParamList, 'User'>>(); //Irá acessar o parametro idUser, id do usuário, que será enviado na navegação
    const [user, setUser] = useState<PropsUser>(); //Receberá o objeto - user, contendo as informações do usuário que faz referência ao idUser enviado
    const navigation = useNavigation();

    useEffect(() => {
        getUser(route.params.userId).then((response) => {
            setUser(response);
        })
    }, []);

    return (
        <Container>
            <LinearGradient
                colors={['rgba(111,52,237,0.34)', 'rgba(10, 88, 255, 0.35)']}
                style={{ flex: 1 }}
            >
                <Box>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <ChevronLeftIcon width={24} height={24} color='#000000' />
                    </TouchableOpacity>
                    <Card isLast={false}>
                        <BoxIcon>
                            <UserIcon width={50} height={50} color={'#8367F6'} />
                        </BoxIcon>
                        <Author>
                            @{user?.username}
                        </Author>
                        <Name>
                            {user?.name}
                        </Name>
                        <Content>
                            <PinIcon width={20} height={20} />
                            <Description>
                                {user?.address.city}, {user?.address.street}, {user?.address.suite}
                            </Description>
                        </Content>

                        <Content>
                            <PhoneIcon width={20} height={20} />
                            <Description>
                                {user?.phone}
                            </Description>
                        </Content>

                        <Content>
                            <LinkIcon width={20} height={20} />
                            <Description>
                                {user?.website}
                            </Description>
                        </Content>
                    </Card>

                    <Card isLast={true}>
                        <BoxIcon>
                            <CompanyIcon width={50} height={50} color={'#0057FF'} />
                        </BoxIcon>
                        <Author>
                            {user?.company.name}
                        </Author>
                        <Name>
                            "{user?.company.catchPhrase}"
                        </Name>
                        <Content>
                            <KeyIcon width={20} height={20} />
                            <Description>
                                {user?.company.bs}
                            </Description>
                        </Content>
                    </Card>
                </Box>
            </LinearGradient>
        </Container>
    )
}