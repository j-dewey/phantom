import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import { CommonComponentProps, BackgroundDepth } from '../../../types/styling.js';

type EdgeShape = 'inset' | 'outset';
interface SectionEdges {
    /** Defines the shape of the top edge of the section. */
    top?: EdgeShape;
    /** Defines the shape of the bottom edge of the section. */
    bottom?: EdgeShape;
}
interface SectionProps extends CommonComponentProps<HTMLDivElement> {
    /** Determines the background color of the section. */
    background?: BackgroundDepth;
    /** A URL for a background image applied to the section. */
    backgroundImage?: string;
    /** Enables a parallax effect for the background image. */
    parallax?: boolean;
    /** Specifies the shape of the top and bottom edges of the section. */
    edges?: SectionEdges;
    /** The content inside the section. */
    children?: ReactNode;
}
/** A flexible section component that supports background images, parallax effects, and various styling options. */
declare const Section: ForwardRefExoticComponent<SectionProps & RefAttributes<HTMLDivElement>>;

export { Section };
