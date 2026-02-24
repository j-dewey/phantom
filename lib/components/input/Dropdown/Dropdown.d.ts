import { Option, NullablePrimitive } from '../../../types/index.js';
import { FC } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface DropdownProps extends Omit<CommonComponentProps, 'defaultValue' | 'onChange'> {
    /** The list of options available in the dropdown. */
    options: Option[];
    /** Allows clearing the selected value. */
    isClearable?: boolean;
    /** The default selected value. */
    defaultValue?: NullablePrimitive;
    /** Placeholder text displayed when no option is selected. */
    placeholder?: string;
    /** Disables user interaction with the dropdown. */
    disabled?: boolean;
    /** Callback function triggered when an option is selected. */
    onChange?: (selected: NullablePrimitive) => void;
}
/** A customizable dropdown select component with support for accessibility, clearing, and controlled values. */
declare const Dropdown: FC<DropdownProps>;

export { Dropdown };
