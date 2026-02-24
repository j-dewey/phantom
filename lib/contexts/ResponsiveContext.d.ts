import * as react from 'react';
import { FC, ReactNode } from 'react';
import { Dimensions, Callback } from '../types/index.js';
import { Theme, Breakpoints, ResponsiveType } from '../types/styling.js';

interface ResponsiveContextInterface {
    windowSize: Dimensions;
    theme: Theme;
    setTheme: Callback<Theme>;
    atBreakpoint: (breakpoint: Breakpoints) => boolean;
    parse: <T>(responsiveType: ResponsiveType<T> | undefined) => T | undefined;
    isMobile: boolean;
    isResponsiveContextLoaded: boolean;
}
declare const ResponsiveContext: react.Context<ResponsiveContextInterface | null>;
interface ResponsiveContextProviderProps {
    minimizeCookies?: boolean;
    theme?: Theme;
    children: ReactNode;
}
declare const ResponsiveContextProvider: FC<ResponsiveContextProviderProps>;

export { ResponsiveContext, type ResponsiveContextInterface, ResponsiveContextProvider };
