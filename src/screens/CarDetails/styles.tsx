import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.background_secondary}
`;


export const Header = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;   

   position: absolute;
   margin-top: ${getStatusBarHeight() + 18}px;
   margin-left: 24px;
`;

export const CarImages = styled.View`
   margin-top: ${getStatusBarHeight() + 32}px;

`;

export const Content = styled.ScrollView.attrs({ // Essas configurações do attrs seria as propriedades que você teria que colocar lá no componente do ScrolView como no caso aqui. lá no index.tsx por exemplo na tag scrollview
   contentContainerStyle: {
      padding: 24,
      alignItems: 'center'
   },
   showsVerticalScrollIndicator: false
})`

`;
export const Details = styled.View`
   width: 100%;

   flex-direction: row;
   align-items: center;
   justify-content: space-between;

   margin-top: 38px;

`;
export const Description = styled.View`

`;
export const Brand = styled.Text`

   font-family: 'Archivo';
   font-weight: 500;
   color: ${({theme}) => theme.colors.text_detail};

   font-size: ${RFValue(10)}px;
   text-transform: uppercase;

`;
export const Name = styled.Text`

   font-family: 'Archivo';
   font-weight: 500;
   color: ${({theme}) => theme.colors.title};

   font-size: ${RFValue(25)}px;

`;
export const Rent = styled.View`

`;
export const Period = styled.Text`

   font-family: 'Archivo';
   font-weight: 500;
   color: ${({theme}) => theme.colors.text_detail};

   font-size: ${RFValue(10)}px;
   text-transform: uppercase;

`;
export const Price = styled.Text`

   font-family: 'Archivo';
   font-weight: 500;
   color: ${({theme}) => theme.colors.main};

   font-size: ${RFValue(25)}px;
`;

export const About = styled.Text`

   font-family: 'Archivo';
   font-weight: 400;
   color: ${({theme}) => theme.colors.text};
   font-size: ${RFValue(15)}px;
   text-align: justify;

   line-height: 25px;
   margin-top: 23px;

`;

export const Acessories = styled.View`

   width: 100%;

   flex-direction: row; 
   flex-wrap: wrap; // Wrap para quebrar as colunas dos itens de detalhes, quando não cabe os conteudos na tela.
   align-items: center;
   justify-content: space-between;

   margin-top: 16px
   
`;

export const Footer = styled.View`

   width: 100%;
   background-color: ${({theme}) => theme.colors.background_primary};
   
            // cima, dos lados, baixo.
   padding-top: 24px;
   padding-bottom: ${getBottomSpace() + 18}px;
   padding-left: 24px;
   padding-right: 24px;
`;