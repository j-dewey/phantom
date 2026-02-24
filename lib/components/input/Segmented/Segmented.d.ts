import { Option, Callback, NullablePrimitive } from '../../../types/index.js';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface SegmentedProps extends Omit<CommonComponentProps, 'onChange'> {
    /** Array of selectable options, each containing a value and label. */
    options?: Option[];
    /** The default selected index when the component mounts. */
    defaultValue?: number;
    /** The currently selected index (controlled component). */
    value?: number;
    /** Expands the segmented control to full width. */
    full?: boolean;
    /** Compact display style. */
    compact?: boolean;
    /** Disables all buttons inside the segmented control. */
    disabled?: boolean;
    /** Callback function triggered when a selection is made. */
    onChange?: Callback<NullablePrimitive>;
}
/** A segmented button group that allows users to toggle between multiple options. */
declare const Segmented: ForwardRefExoticComponent<SegmentedProps & RefAttributes<HTMLDivElement>>;

export { Segmented };
