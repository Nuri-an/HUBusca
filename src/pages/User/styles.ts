import styled from 'styled-components/native';
import { Dimensions, StatusBar } from 'react-native';

interface PropsCard {
    isLast: boolean
}

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Box = styled.ScrollView`
    flex: 1;
    padding-top: ${StatusBar.currentHeight && StatusBar.currentHeight + 20}px;
    padding-right: 20px;
    padding-left: 20px;
`;

export const Card = styled.View<PropsCard>`
    width: ${ Dimensions.get('window').width * 0.89}px;
    border-radius: 15px;
    margin-top: 80px;
    background-color: #F4F4F4;
    padding: 15px;
    align-self: center;
    margin-bottom: ${({ isLast }) => isLast ? 170 : 0}px;
`;

export const BoxIcon = styled.View`
    align-self: center;
    margin-top: -50px;
    padding: 15px;
    background-color: #F4F4F4;
    border-radius: 200px;
`;

export const Author = styled.Text`
    font-size: 14px;
    font-family: Poppins_500Medium_Italic;
    text-align: center;
    color: #000;
`;

export const Name = styled.Text`
    font-size: 16px;
    font-family: Poppins_700Bold;
    text-align: center;
    color: #000;
    margin-bottom: 40px;
`;

export const Content = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Description = styled.Text`
    font-size: 14px;
    font-family: Poppins_500Medium;
    color: #000;
    margin-top: 5px;
    margin-left: 5px;
`;

