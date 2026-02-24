import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import { CommonComponentProps, FlexAlignSimple } from '../../../types/styling.js';

type HeadingLevels = 'hero' | 'major' | 'regular' | 'minor';
interface HeadingProps extends CommonComponentProps {
    /** An optional subheading displayed below the main heading. */
    subheading?: ReactNode;
    /** The text alignment of the heading. */
    align?: FlexAlignSimple;
    /** The size of the heading, determining its semantic tag. */
    size?: HeadingLevels;
    /** The size of the subheading if it should differ from the heading scale. */
    subheadingSize?: HeadingLevels;
    /** Whether both the heading and subheading should be soft text. */
    soft?: boolean;
    /** The main heading content. */
    children?: ReactNode;
}
/** A flexible heading component with optional subheading and size variations. */
declare const Heading: ForwardRefExoticComponent<HeadingProps & RefAttributes<HTMLElement | HTMLHeadingElement>>;

export { Heading };
