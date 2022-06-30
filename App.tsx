import React from 'react';
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { CarDetails } from './src/screens/CarDetails';

export default function App(){
return(
    <ThemeProvider theme={theme} >
        <CarDetails/>
    </ThemeProvider>
)
}