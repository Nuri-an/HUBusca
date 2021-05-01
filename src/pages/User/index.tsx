import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

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
    KeyIcon
} from '../../assets/icons';

export const User: React.FC = () => {
    return (
        <Container>
            <LinearGradient
                colors={['rgba(111,52,237,0.34)', 'rgba(10, 88, 255, 0.35)']}
                style={{ flex: 1 }}
            >
                <Box>
                    <Card isLast={false}>
                        <BoxIcon>
                            <UserIcon width={50} height={50} color={'#8367F6'} />
                        </BoxIcon>
                        <Author>
                            @Bret
                        </Author>
                        <Name>
                            Leanne Graham
                        </Name>
                        <Content>
                            <PinIcon width={20} height={20} />
                            <Description>
                                Gwenborough, Kulas Light, Apt. 556
                            </Description>
                        </Content>

                        <Content>
                            <PhoneIcon width={20} height={20} />
                            <Description>
                                1-770-736-8031 x56442
                            </Description>
                        </Content>

                        <Content>
                            <LinkIcon width={20} height={20} />
                            <Description>
                                hildegard.org
                            </Description>
                        </Content>
                    </Card>

                    <Card isLast={true}>
                        <BoxIcon>
                            <CompanyIcon width={50} height={50} color={'#0057FF'} />
                        </BoxIcon>
                        <Author>
                            Romaguera-Crona
                        </Author>
                        <Name>
                            "Multi-layered client-server neural-net"
                        </Name>
                        <Content>
                            <KeyIcon width={20} height={20} />
                            <Description>
                                harness real-time e-markets
                            </Description>
                        </Content>
                    </Card>
                </Box>
            </LinearGradient>
        </Container>
    )
}