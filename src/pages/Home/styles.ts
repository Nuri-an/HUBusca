import styled from 'styled-components/native';
import { Dimensions, StatusBar } from 'react-native';

interface PropsCard {
    isLast: boolean;
}

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Header = styled.View`
    padding-top: ${StatusBar.currentHeight && StatusBar.currentHeight + 20}px;
    padding-bottom: 10px;
    padding-right: 30px;
    padding-left: 30px;
    border-bottom-color: #F5F5F5;
    border-bottom-width: 1px;
`;

export const Box = styled.ScrollView`
    flex: 1;
    padding-top: 50px;
    padding-right: 20px;
`;

export const Card = styled.View<PropsCard>`
    width: ${ Dimensions.get('window').width * 0.95}px;
    height: ${ Dimensions.get('window').height * 0.3 }px;
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
`;

export const Author = styled.Text`
    font-size: 16px;
    font-family: Poppins_700Bold;
    text-align: right;
    color: #8367F6;
`;

export const Loading = styled.ActivityIndicator`
    margin-left: 20px;
`;