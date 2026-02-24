import { ForwardRefExoticComponent, HTMLAttributes, ReactNode, RefAttributes } from 'react';

interface HoverMarkProps extends HTMLAttributes<HTMLElement> {
    /** The text or element to be highlighted. */
    children?: ReactNode;
}
/** A component that highlights text when hovered. */
declare const HoverMark: ForwardRefExoticComponent<HoverMarkProps & RefAttributes<HTMLElement>>;

export { HoverMark };
