import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface LoadingProps extends CommonComponentProps {
    /** Defines the size of the loading indicator in pixels. */
    size?: number;
    /** Sets the thickness of the loading animation. */
    thickness?: number;
    /** Custom width for the loading container. */
    width?: string;
    /** Custom height for the loading container. */
    height?: string;
    /** Defines the minimum height of the loading container. */
    minHeight?: string;
    /** The color of the loading indicator. */
    color?: string;
}
/** A customizable loading spinner component with support for size, thickness, and color adjustments. */
declare const Loading: ForwardRefExoticComponent<LoadingProps & RefAttributes<HTMLDivElement>>;

export { Loading };
