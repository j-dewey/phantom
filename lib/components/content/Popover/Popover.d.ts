import { FC, ReactNode, HTMLAttributes } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface PopoverProps extends Omit<CommonComponentProps, 'content'> {
    /** The content displayed inside the popover. */
    content: ReactNode;
    /** The direction in which the popover appears relative to the trigger element. */
    direction?: 'bottom' | 'top' | 'left' | 'right';
    /** Highlights the popover for emphasis. */
    highlight?: boolean;
    /** The delay (in milliseconds) before the popover appears on hover. */
    delay?: number;
    /** Additional class name for the anchor container. */
    anchorClass?: string;
    /** Additional props for the anchor element. */
    anchorProps?: HTMLAttributes<HTMLDivElement>;
    /** Enables toggling the popover visibility via click instead of hover. */
    clickToToggle?: boolean;
    /** The trigger element that activates the popover. */
    children: ReactNode;
}
/** A floating popover component that appears on hover or click, supporting configurable delays and positioning. */
declare const Popover: FC<PopoverProps>;

export { Popover };
