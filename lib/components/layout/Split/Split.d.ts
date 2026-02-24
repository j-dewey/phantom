import { FC, ReactNode } from 'react';
import { Breakpoints } from '../../../types/styling.js';
import { FlexProps } from '../Flex/Flex.js';

interface SplitColumnProps extends Omit<FlexProps, 'flex'> {
    /** The breakpoint at which the layout switches to a column-based structure. */
    breakpoint: Breakpoints;
}
interface SplitProps {
    /** Determines whether the left or right side is the main content area. */
    mainSide: 'left' | 'right';
    /** Defines responsive behavior for switching to a column layout. */
    asColumn: SplitColumnProps;
    /** The two child elements to be placed in the split layout. */
    children: ReactNode[];
}
/** A layout component that splits content into two sections and adapts responsively based on breakpoints. */
declare const Split: FC<SplitProps>;

export { Split };
