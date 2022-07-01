import React from 'react';
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { CarDetails } from './src/screens/CarDetails';
import { Scheduling } from './src/screens/Scheduling';
import { SchedulingDetails } from './src/screens/SchedulingDetails';

export default function App(){
return(
    <ThemeProvider theme={theme} >
        <SchedulingDetails/>
    </ThemeProvider>
)
}