import { FC, ReactNode } from 'react';
import { CommonComponentProps, Theme } from '../../../types/styling.js';

interface StyledAppProps extends CommonComponentProps {
    /** The initial theme of the application (light or dark). */
    theme?: Theme;
    /** Enables or disables the anchor controller for tooltips/popovers. */
    anchors?: boolean;
    /** Enables or disables the modal controller for handling modals. */
    modals?: boolean;
    /** Enables or disables the banner system for global notifications. */
    banners?: boolean;
    /** Minimizes cookie tracking and storage for privacy-conscious applications. */
    minimizeCookies?: boolean;
    /** Set the minimum height to always fill the viewport. */
    fillViewport?: boolean;
    /** Scrolls back to the top of the page upon changing the path. */
    resetOnNavigation?: boolean;
    /** The id of an existing root DOM element to be used as the StyledApp root. */
    rootId?: string;
    /** The main content of the application. */
    children: ReactNode;
}
/** The root component for a styled application using Phantom, providing theme, global controllers, and contextual support. */
declare const StyledApp: FC<StyledAppProps>;

export { StyledApp };
