import React from 'react';
import { StatusBar } from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'

import Logo from '../../../assets/icons/Logotipo.svg'
import theme from '../../styles/theme';

import { Car } from '../../components/Car';


import {
 Container,
 Header,
 TotalCars,
 HeaderContent
} from './styles';

export function Home(){
  const carDataOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent:{
        period: 'AO DIA',
        price: 120,
    },
    thumbnail: 'https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png'
    }

    const carDataTwo = {
      brand: 'Porsche',
      name: 'Panamera',
      rent:{
          period: 'AO DIA',
          price: 340,
      },
      thumbnail: 'https://w7.pngwing.com/pngs/472/988/png-transparent-2017-porsche-panamera-2018-porsche-panamera-e-hybrid-volkswagen-2018-porsche-panamera-4-porsche-compact-car-car-performance-car.png'
      }


return (
   <Container>
     <StatusBar
     barStyle='light-content'
     backgroundColor={theme.colors.header}
     />
    <Header>
      <HeaderContent>
        <Logo 
          width={RFValue(108)}
          height={RFValue(12)}
        />
        <TotalCars>
          Total de 12 carros
        </TotalCars>
      </HeaderContent>
    </Header>
    <Car data={carDataOne} />
    <Car data={carDataTwo} />
   </Container>
  );
}