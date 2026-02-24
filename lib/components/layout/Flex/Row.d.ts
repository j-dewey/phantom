import { FlexProps } from './Flex.js';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import '../../../types/styling.js';

interface RowProps extends Omit<FlexProps, 'flex'> {
}
/** A flexbox-based row layout component that arranges children horizontally. */
declare const Row: ForwardRefExoticComponent<RowProps & RefAttributes<HTMLDivElement>>;

export { Row, type RowProps };
