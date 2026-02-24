import { Option, NullablePrimitive } from '../../../types/index.js';
import { FC } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface MultiDropdownProps extends Omit<CommonComponentProps, 'defaultValue' | 'onChange'> {
    /** The list of available options for the multi-select dropdown. */
    options: Option[];
    /** Allows clearing the selected values. */
    isClearable?: boolean;
    /** The default selected values when the component mounts. */
    defaultValue?: NullablePrimitive[];
    /** The currently selected values (controlled component). */
    value?: NullablePrimitive[];
    /** Placeholder text displayed when no options are selected. */
    placeholder?: string;
    /** Disables user interaction with the dropdown. */
    disabled?: boolean;
    /** Callback function triggered when the selection changes. */
    onChange?: (selected: NullablePrimitive[]) => void;
}
/** A customizable multi-select dropdown component with support for accessibility, clearing, and controlled values. */
declare const MultiDropdown: FC<MultiDropdownProps>;

export { MultiDropdown };
