import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import { CommonComponentProps, ResponsiveType, Theme } from '../../../types/styling.js';

interface StyledFooterProps extends CommonComponentProps {
    /** Defines the height of the footer. */
    height?: ResponsiveType<string>;
    /** Sets the theme for the footer. */
    theme?: Theme;
    /** The content inside the footer. */
    children: ReactNode;
}
/** A styled footer component that supports custom height, theme, and optional top border. */
declare const StyledFooter: ForwardRefExoticComponent<StyledFooterProps & RefAttributes<HTMLDivElement>>;

export { StyledFooter };
