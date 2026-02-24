import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface UnstyledButtonProps extends CommonComponentProps<HTMLButtonElement> {
    /** The content inside the button, typically an icon or text element. */
    children: ReactNode;
}
/** A button component with no default styles, allowing full customization. */
declare const UnstyledButton: ForwardRefExoticComponent<UnstyledButtonProps & RefAttributes<HTMLButtonElement>>;

export { UnstyledButton };
