import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

interface ButtonProps extends RectButtonProps{
    color: string;
}

export const Container = styled(RectButton)<ButtonProps>`
   width: 100%;

   padding: 19px;
   align-items: center;
   justify-content: center;
   

   background-color: ${({color, theme}) => color ? color : theme.colors.main }
`;


export const Title = styled.Text`
   font-family: 'Inter';
   font-weight: 500;
   font-size: ${RFValue(15)}px;
   

   color: ${({theme}) => theme.colors.shape};
`;