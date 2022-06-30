import React from 'react';
import { SvgProps } from 'react-native-svg';

import {
 Container,
 Name
} from './styles';

interface Props{
    name: string;
    icon: React.FC<SvgProps>
}

export function Acessory({name, icon: Icon}: Props){  // Parametro Icon recebendo um Icon já no parametro e somente faz o envio do name.
return (
   <Container>
       <Icon width={32} height={32} />
       <Name>{name}</Name>
   </Container>
  );
}