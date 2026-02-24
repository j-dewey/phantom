import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface DividerProps extends CommonComponentProps<HTMLHRElement> {
    /** Expands the divider beyond its container by the specified length. */
    expand?: string;
    /** Vertical padding for the divider. */
    space?: string;
}
/** A horizontal divider with optional expansion beyond its container. */
declare const Divider: ForwardRefExoticComponent<DividerProps & RefAttributes<HTMLHRElement>>;

export { Divider };
