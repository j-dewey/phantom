import { FC, HTMLInputTypeAttribute, ReactNode } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface InputProps extends CommonComponentProps<HTMLInputElement> {
    /** The name of the input field, used for form submission. */
    name: string;
    /** The type of input field. */
    type?: HTMLInputTypeAttribute;
    /** An optional label displayed above the input field. */
    label?: string | ReactNode;
    /** Placeholder text shown inside the input field. */
    placeholder?: string;
    /** An error message displayed below the input field. */
    error?: string;
    /** Additional class names for the fieldset wrapper. */
    fieldClass?: string;
}
/** A customizable form input component with optional labels, validation, and error messaging. */
declare const FormInput: FC<InputProps>;

export { FormInput };
