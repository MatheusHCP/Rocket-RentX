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

export const RentalPeriod = styled.View`
   width: 100%;

   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   margin-top: 40px;

   border-bottom-width: 1px;
   border-bottom-color: ${({theme}) => theme.colors.line};
   padding-bottom: 16px;
`;
export const CalendarIcon = styled.View`
   width: 48px;
   height: 48px;
   background-color: ${({theme}) => theme.colors.main};

   justify-content: center;
   align-items: center;

`;
export const DateInfo = styled.View`

`;
export const DateTitle = styled.Text`

   font-family: 'Inter';
   font-weight: 500;
   color: ${({theme}) => theme.colors.text_detail};

   font-size: ${RFValue(10)}px;
   text-transform: uppercase;

`;
export const DateValue = styled.Text`

   font-family: 'Inter';
   font-weight: 500;
   color: ${({theme}) => theme.colors.title};

   font-size: ${RFValue(15)}px;

`;

export const RentalPrice = styled.View`
   width: 100%;
   margin-top: 16px;

`;

export const RentalPriceLabel = styled.Text`

   font-family: 'Inter';
   font-weight: 500;
   color: ${({theme}) => theme.colors.text_detail};

   font-size: ${RFValue(10)}px;
   text-transform: uppercase;
`;

export const RentalPriceDetails = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   align-items: center

`;

export const RentalPriceQuota = styled.Text`
   font-family: 'Inter';
   font-weight: 500;
   color: ${({theme}) => theme.colors.title};

   font-size: ${RFValue(15)}px;

`;

export const RentalPriceTotal = styled.Text`
   font-family: 'Archivo';
   font-weight: 500;
   color: ${({theme}) => theme.colors.success};

   font-size: ${RFValue(24)}px;

`;