import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';
import { LinkDecoration } from './LinkDecoration.js';
import { LinkProps } from 'react-router-dom';

interface StyledLinkProps extends LinkProps, CommonComponentProps<HTMLAnchorElement> {
    /** Disables the link from being clicked. */
    disabled?: boolean;
    /** The base visual style for link. */
    base?: LinkDecoration | null;
    /** The style for link on hover. */
    hover?: LinkDecoration | null;
    /** For links to be opened in a new tab with appropriate security attributes. */
    external?: boolean;
    /** The content inside the link. */
    children: ReactNode;
}
/** A styled link component with styling inheritance and external link handling. */
declare const StyledLink: ForwardRefExoticComponent<StyledLinkProps & RefAttributes<HTMLAnchorElement>>;

export { StyledLink };
