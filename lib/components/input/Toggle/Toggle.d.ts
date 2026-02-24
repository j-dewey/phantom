import { Callback } from '../../../types/index.js';
import { FC } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface ToggleProps extends Omit<CommonComponentProps, 'onChange'> {
    /** The label displayed when the toggle is in the "on" position. */
    checked?: string;
    /** The label displayed when the toggle is in the "off" position. */
    notChecked?: string;
    /** The default state of the toggle when it mounts. */
    defaultState?: boolean;
    /** Disables the toggle, preventing user interaction. */
    disabled?: boolean;
    /** Callback function triggered when the toggle state changes. */
    onChange?: Callback<boolean>;
}
/** A customizable toggle switch component with labeled states. */
declare const Toggle: FC<ToggleProps>;

export { Toggle };
