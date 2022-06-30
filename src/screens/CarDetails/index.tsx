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
 About,
 Acessories,
 Footer
} from './styles';
import { Button } from '../../components/Button';

export function CarDetails(){
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
        <About>
          Este é um automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Mastranza de Sevilla. É um belíssimo carro pra quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button title='TESTE' onPress={() => {}} color="green" />
      </Footer>

   </Container>
  );
}