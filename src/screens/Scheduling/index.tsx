import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../../assets/icons/arrow.svg';

import {
 Container,
 Header,
 Title,
 RentalPeriod,
 DateInfo,
 DateTitle,
 DateValue,
 Content,
 Footer,
} from './styles';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';

export function Scheduling(){
    const theme = useTheme();
return (
   <Container>
       <Header>
           <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
           <BackButton onPress={() => {}} color={theme.colors.shape} />
           <Title>
               Escolha uma {'\n'}
               data de inicio e {'\n'}
               fim do aluguel
           </Title>

           <RentalPeriod>
               <DateInfo>
                   <DateTitle>DE</DateTitle>
                   <DateValue selected={false} >18/06/2022</DateValue>
               </DateInfo>

               <ArrowSvg/>

                <DateInfo>
                   <DateTitle>ATÉ</DateTitle>
                   <DateValue selected={false} >18/06/2022</DateValue>
               </DateInfo>
           </RentalPeriod>
       </Header>

       <Content>
            <Calendar/>
       </Content>

       <Footer>
           <Button title='Confirmar' />
       </Footer>
       
   </Container>
  );
}