import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType{} // esse DefaultTheme é o que o styled components procura nos temas.

}

