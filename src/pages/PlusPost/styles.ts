import styled from 'styled-components/native';
import { Dimensions, StatusBar } from 'react-native';

interface PropsTitle {
    invisible: boolean
}

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Header = styled.View`
    padding-top: ${StatusBar.currentHeight && StatusBar.currentHeight + 20}px;
    height: 120px;
    padding-bottom: 10px;
    padding-right: 30px;
    padding-left: 30px;
    border-bottom-color: #F5F5F5;
    border-bottom-width: 1px;
    justify-content: flex-end;
`;

export const Title = styled.Text<PropsTitle>`
    font-size: 18px;
    font-family: Poppins_700Bold;
    text-align: center;
    color: #000;
    display:  ${({ invisible }) => invisible ? 'none' : 'flex'}
`;

export const Box = styled.ScrollView`
    flex: 1;
    padding-top: 70px;
    padding-right: 20px;
    padding-left: 20px;
`;

export const Form = styled.KeyboardAvoidingView`
    margin-bottom: 100px;
    flex: 1;
`;

export const Label = styled.Text`
    font-size: 16px;
    margin-bottom: 3px;
    margin-top: 30px;
    padding-left: 20px;
    font-family: Poppins_500Medium;
`;

export const Input = styled.TextInput`
    width: ${ Dimensions.get('window').width * 0.89}px;
    height: 40px;
    border-radius: 10px;
    border-color: #0057FF;
    border-width: 1px;
    background-color: #FFF;
    padding-left: 20px;
    padding-right: 20px;
`;

export const TextArea = styled.TextInput`
    width: ${ Dimensions.get('window').width * 0.89}px;
    height: 100px;
    border-radius: 10px;
    border-color: #0057FF;
    border-width: 1px;
    background-color: #FFF;
    padding: 20px;
    margin-bottom: 50px;
`;

export const Button = styled.TouchableOpacity`
    width: ${ Dimensions.get('window').width * 0.3}px;
    height: 50px;
    background-color: #0057FF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-bottom: 100px;
`;

export const TextButton = styled.Text`
    font-size: 16px;
    color: #FFF;
    font-family: Poppins_400Regular;
`;