import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import { CommonComponentProps, BackgroundDepth } from '../../../types/styling.js';

interface BoxProps extends CommonComponentProps<HTMLDivElement> {
    /** Determines the background color of the section. */
    background?: BackgroundDepth;
    /** Adds a border to the box. */
    border?: boolean;
    /** Removes the default border radius corner rounding. */
    sharp?: boolean;
    /** Internal padding of the box. */
    padding?: string;
    /** Takes up 100% of available width. */
    block?: boolean;
    /** Takes up 100% of available height. */
    stretch?: boolean;
    /** The text or element to be highlighted. */
    children?: ReactNode;
}
/** A basic styled box component. */
declare const Box: ForwardRefExoticComponent<BoxProps & RefAttributes<HTMLDivElement>>;

export { Box };
