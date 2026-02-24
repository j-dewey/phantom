import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';
import { LinkProps } from 'react-router-dom';

interface UnstyledLinkProps extends LinkProps, CommonComponentProps<HTMLAnchorElement> {
    /** Disables the link from being clicked. */
    disabled?: boolean;
    /** For links to be opened in a new tab with appropriate security attributes. */
    external?: boolean;
    /** The content inside the link. */
    children: ReactNode;
}
/** An unstyled link component that inherits its styling and has external link handling. */
declare const UnstyledLink: ForwardRefExoticComponent<UnstyledLinkProps & RefAttributes<HTMLAnchorElement>>;

export { UnstyledLink };
