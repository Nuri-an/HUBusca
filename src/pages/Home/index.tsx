import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { Container, Header, Box, Card, Title, Body, Author } from './styles';
import { LogoIcon } from '../../assets/icons';

export const Home: React.FC = () => {

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
                    <Card isLast={false}>
                        <Title>
                            sunt aut facere repellat provident occaecati excepturi optio reprehenderit
                        </Title>
                        <Body>
                            quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto
                        </Body>
                        <Author>
                            @Bret
                        </Author>
                    </Card>
                </Box>
            </LinearGradient>
        </Container>
    )
}