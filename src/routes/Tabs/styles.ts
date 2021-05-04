import styled from 'styled-components/native';

interface PropsText {
    focused: boolean,
    color: string
}

interface PropsButtonPlus {
    color: string
}

export const Typogaphy = styled.Text<PropsText>`
    font-size: 13px;
    letter-spacing: 0.5px;
    font-family: ${({ focused }) => focused ? 'Poppins_700Bold' : 'Poppins_500Medium'}; 
    color: ${({ color }) => color };
`;

export const ButtonPlus = styled.View<PropsButtonPlus>`
    width: 80px;
    height: 80px;
    margin-top: -40px;
    border-radius: 200px;
    background-color: ${({color}) => color};
    flex: 1;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px 8px #000;
`;