import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { BorderlessButtonProps } from 'react-native-gesture-handler'
import {useTheme} from 'styled-components'

import {
 Container
} from './styles';

interface Props extends BorderlessButtonProps { // Interface na qual possui extenção das props do borderless do gesture handler.
  color?: string;
}

export function BackButton({color, ...rest} : Props){ // o ...rest vai pegar os resto das propriedades do extends.

  const theme = useTheme(); // hook para utilizarmos a variavel tema na qual o Provider está envolvendo no App.tsx

return ( // o ...rest logo abaixo ele vai pegar as propriedades que passar via parametro que do componente 
   <Container {...rest} > 
     <MaterialIcons
     name="chevron-left"
     size={24}
     color={color ? color : theme.colors.text} // Iremos fazer um IF ternária em que se a pessoa não informar a cor vai puxar o do tema, se informar vai com o color mesmo.
     />
   </Container>
  );
}