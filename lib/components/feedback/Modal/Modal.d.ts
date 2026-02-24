import { Callback } from '../../../types/index.js';
import { ForwardRefExoticComponent, ReactElement, ReactNode, RefAttributes } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface ModalProps extends CommonComponentProps<HTMLDivElement> {
    /** An optional icon displayed next to the header. */
    icon?: ReactElement;
    /** The title of the modal. */
    header: string;
    /** The text for the accept button. */
    accept?: string | null;
    /** The text for the reject button. */
    reject?: string | null;
    /** Swaps the colors of the accept and reject buttons. */
    swapColors?: boolean;
    /** Callback function triggered when the accept button is clicked. */
    onAccept?: Callback<void>;
    /** Closes the modal automatically when the accept button is clicked. */
    closeOnAccept?: boolean;
    /** Callback function triggered when the reject button is clicked. */
    onReject?: Callback<void>;
    /** Associates the accept button with a form by its id. */
    form?: string;
    /** The content inside the modal body. */
    children: ReactNode;
}
/** A flexible modal component with an optional header, icon, buttons, and customizable actions. */
declare const Modal: ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>>;

export { Modal };
