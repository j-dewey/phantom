import { ForwardRefExoticComponent, CSSProperties, ReactNode, RefAttributes } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface StyledImageProps extends CommonComponentProps {
    /** The source URL of the image. */
    image: string;
    /** The alt text for the image, used for accessibility. */
    alt: string;
    /** Adds a border around the image. */
    border?: boolean;
    /** Rounds the corners of the image. */
    round?: boolean;
    /** Ensures the image fits within its container while preserving aspect ratio. */
    fit?: boolean;
    /** Sets a maximum width for the image. */
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | CSSProperties['width'];
    /** An optional caption displayed below the image. */
    caption?: string | ReactNode;
}
/** A styled image component supporting borders, rounded corners, sizing constraints, and captions. */
declare const StyledImage: ForwardRefExoticComponent<StyledImageProps & RefAttributes<HTMLElement>>;

export { StyledImage };
