import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

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

export const Loading = styled.ActivityIndicator`
    margin-left: 20px;
`;