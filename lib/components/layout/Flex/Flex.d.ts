import { ReactNode, CSSProperties, ForwardRefExoticComponent, RefAttributes } from 'react';
import { CommonComponentProps, ResponsiveType, FlexAlign } from '../../../types/styling.js';

type FlexDirection = 'row' | 'column';
interface FlexProps extends CommonComponentProps<HTMLDivElement> {
    /** The child elements inside the flex container. */
    children?: ReactNode;
    /** Defines the flex direction. */
    flex?: ResponsiveType<FlexDirection>;
    /** Controls horizontal alignment. */
    align?: ResponsiveType<FlexAlign>;
    /** Controls vertical alignment. */
    verticalAlign?: ResponsiveType<FlexAlign>;
    /** Specifies the gap between flex items, with responsive support. */
    gap?: ResponsiveType<CSSProperties['gap']>;
    /** Sets position as relative. */
    relative?: boolean;
    /** Takes up 100% of available width. */
    block?: boolean;
    /** Takes up 100% of available height. */
    stretch?: boolean;
}
/** A responsive flexbox container component with configurable alignment, direction, and spacing. */
declare const Flex: ForwardRefExoticComponent<FlexProps & RefAttributes<HTMLDivElement>>;

export { Flex, type FlexProps };
