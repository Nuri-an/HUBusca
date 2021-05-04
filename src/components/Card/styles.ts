import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

interface PropsCard {
    isLast: boolean;
}

interface PropsFooter {
    isProfile: boolean;
}

export const Card = styled.View<PropsCard>`
    width: ${ Dimensions.get('window').width * 0.95}px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #F4F4F4;
    padding: 15px;
    margin-bottom: ${({ isLast }) => isLast ? 170 : 50}px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: Poppins_500Medium;
    font-size: 14px;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    text-align: center;
`;

export const Body = styled.Text`
    font-family: Poppins_400Regular;
    font-size: 12px;
    line-height: 20px;
    margin-top: 20px;
`;

export const Footer = styled.View<PropsFooter>`
    display: flex;
    flex-direction: row;
    justify-content: ${({ isProfile }) => isProfile ? 'space-between' : 'flex-end'};
    width: 100%;
    margin-top: 20px;
`;

export const Author = styled.Text`
    font-size: 16px;
    font-family: Poppins_700Bold;
    text-align: right;
    color: #8367F6;
`;