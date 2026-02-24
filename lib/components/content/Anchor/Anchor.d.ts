import { PollingRate } from '../../../types/index.js';
import { FC, ReactElement, RefObject, ReactNode, HTMLAttributes } from 'react';
import '../../../types/styling.js';

interface AnchorProps {
    /** The component that is being anchored. */
    component: ReactElement;
    /** The direction in which the anchor should be positioned relative to the component. */
    direction?: 'left' | 'right' | 'top' | 'bottom';
    /** The padding between the anchored component and the anchor. */
    padding?: number;
    /** The interval (in milliseconds) for checking anchor position updates. */
    pollingInterval?: PollingRate;
    /** Controls the visibility of the anchor. */
    visible?: boolean;
    /** Determines whether the anchor updates its position dynamically. */
    update?: boolean;
    /** A ref for the anchor element. */
    innerRef?: RefObject<HTMLDivElement>;
    /** The content inside the anchor. */
    children: ReactNode;
    /** Additional class names for styling the anchor. */
    anchorClass?: string;
    /** Additional props for the anchor container. */
    anchorProps?: HTMLAttributes<HTMLDivElement>;
    /** Additional class names for styling the anchored component. */
    componentClassName?: string;
}
/**
 * A component that anchors another component in a specific position relative to an element.
 * Supports edge-guarding, dynamic positioning, and automatic updates.
 */
declare const Anchor: FC<AnchorProps>;

export { Anchor };
