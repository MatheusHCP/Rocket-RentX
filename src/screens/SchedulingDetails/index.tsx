import React from 'react';
import { Image } from 'react-native-svg';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';

import speedSvg from '../../../assets/icons/Speed.svg'
import accelerationSvg from '../../../assets/icons/Up.svg'
import forceSvg from '../../../assets/icons/Forca.svg'
import gasolineSvg from '../../../assets/icons/Gasolina.svg'
import exchangeSvg from '../../../assets/icons/Cambio.svg'
import peopleSvg from '../../../assets/icons/people.svg'

import {
 Container,
 Header,
 CarImages,
 Content,
 Details,
 Description,
 Brand,
 Name,
 Rent,
 Period,
 Price,
 Acessories,
 Footer,
 RentalPeriod,
 CalendarIcon,
 DateInfo,
 DateTitle,
 DateValue,
 RentalPrice,
 RentalPriceLabel,
 RentalPriceDetails,
 RentalPriceQuota,
 RentalPriceTotal,
} from './styles';
import { Button } from '../../components/Button';
import Icon from 'react-native-vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

export function SchedulingDetails(){
  const theme = useTheme();
return (
   <Container>
     <Header>
       <BackButton onPress={() => {}} />
     </Header>

     <CarImages>
        <ImageSlider imagesUrl={['https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png']}  />
     </CarImages>

      <Content>
        <Details>

          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 500</Price>
          </Rent>

        </Details>
        <Acessories>
          <Acessory name="380Km/h" icon={speedSvg} />
          <Acessory name="3.2s" icon={accelerationSvg} />
          <Acessory name="800 HP" icon={forceSvg} />
          <Acessory name="Gasolina" icon={gasolineSvg} />
          <Acessory name="Auto" icon={exchangeSvg} />
          <Acessory name="2 pessoas" icon={peopleSvg} />
        </Acessories>

        <RentalPeriod>
          <CalendarIcon>
            <Icon 
            
            name='calendar'
            size={RFValue(24)}
            color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2022</DateValue>
          </DateInfo>
            <Icon 
            
            name='chevron-right'
            size={RFValue(24)}
            color={theme.colors.text}
            />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>19/06/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
       
        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>

      </Content>

      <Footer>
        <Button title='Confirmar' onPress={() => {}} color="" />
      </Footer>

   </Container>
  );
}