import { ReactNode, ForwardRefExoticComponent, RefAttributes } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface TextProps extends CommonComponentProps {
    /** Sets the text alignment. */
    align?: 'center' | 'left' | 'right';
    /** Defines the text size variant. */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** Applies a softer visual style to the text. */
    soft?: boolean;
    /** The content of the text element. */
    children: ReactNode;
}
/** A flexible text component supporting size, alignment, and optional paragraph rendering. */
declare const Text: ForwardRefExoticComponent<TextProps & RefAttributes<HTMLSpanElement>>;

export { Text, type TextProps };
