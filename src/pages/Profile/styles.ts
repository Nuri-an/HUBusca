import styled from 'styled-components/native';
import { Dimensions, StatusBar } from 'react-native';

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
    justify-content: flex-end;
`;

export const Photo = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 200px;
    align-self: center;
`;

export const Title = styled.Text`
    margin-top: 20px;
    font-size: 18px;
    font-family: Poppins_500Medium;
    text-align: center;
    color: #000;
`;

export const Box = styled.ScrollView`
    flex: 1;
    padding-top: 50px;
    padding-right: 20px;
`;

export const Content = styled.View`
    margin-bottom: 100px;
`;