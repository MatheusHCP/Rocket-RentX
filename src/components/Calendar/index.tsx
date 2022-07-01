import React from 'react';
import {
  Calendar as CustomCalendar,
  LocaleConfig

} from 'react-native-calendars'; 
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';


LocaleConfig.locales['pt-br']={
   monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
   monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
   dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
   dayNamesShort: ['DOM','SEG','TER','QUA','QUI','SEX','SAB'],
   today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt-br';

export function Calendar(){
  const theme = useTheme();

return (
   <CustomCalendar
    renderArrow={(direction) => 
      <Icon
        size={24}
        color={theme.colors.text}
        name={direction == 'left' ? 'chevron-left' : 'chevron-right'} // Essa condicional irá verificar a direção da seta para mudar a padrão que vem.
      />
    }   

    headerStyle={{
      backgroundColor: theme.colors.background_primary,
      borderBottomWidth: 0.5,
      borderBottomColor: theme.colors.text_detail,
      paddingBottom: 10,
      marginBottom: 10
    }}

    theme={{
      textDayFontFamily: 'Inter',
      textDayFontWeight: '400',
      textDayHeaderFontFamily: 'Inter',
      textDayHeaderFontWeight: '500',
      textDayFontSize: 12,
      textMonthFontSize: 20,
      textMonthFontFamily: 'Archivo',
      textMonthFontWeight: '600',
      monthTextColor: theme.colors.title,
      arrowStyle:{
        marginHorizontal: -15
      }
    }}
   
    firstDay={1}
    minDate={new Date().toString()}

   />
  );
}