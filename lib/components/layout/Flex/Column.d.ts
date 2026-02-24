import { FlexProps } from './Flex.js';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import '../../../types/styling.js';

interface ColumnProps extends Omit<FlexProps, 'flex'> {
}
/** A flexbox-based column layout component that stacks children vertically. */
declare const Column: ForwardRefExoticComponent<ColumnProps & RefAttributes<HTMLDivElement>>;

export { Column, type ColumnProps };
