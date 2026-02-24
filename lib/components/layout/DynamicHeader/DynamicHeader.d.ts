import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

/** Extends `DynamicHeader` with additional dynamic behavior settings. */
interface DynamicHeaderSettings extends DynamicHeader {
    /** Enables the dynamic behavior of the header when scrolling. */
    enabled: boolean;
    /** The scroll distance (in pixels) required before dynamic settings take effect. */
    scrollDistance?: number;
}
/** Base properties for a dynamic header, allowing optional dynamic settings. */
interface BaseDynamicHeaderProps extends DynamicHeader {
    /** Configures how the header dynamically changes on scroll. */
    dynamicSettings?: DynamicHeaderSettings;
}
interface DynamicHeaderProps extends BaseDynamicHeaderProps, CommonComponentProps {
    /** The content inside the header. */
    children: ReactNode;
}
/** Defines the base properties for the dynamic header behavior. */
interface DynamicHeader {
    /** Determines if the header is inline (not fixed). */
    inline?: boolean;
    /** Specifies how the header interacts with page content (`pad` adds space, `overlap` overlays it). */
    pageSpace?: 'pad' | 'overlap';
    /** Determines whether the header has a background. */
    hasBackground?: boolean;
}
/** A header component that dynamically adjusts its behavior based on scroll distance. */
declare const DynamicHeader: ForwardRefExoticComponent<DynamicHeaderProps & RefAttributes<HTMLDivElement>>;

export { DynamicHeader, type BaseDynamicHeaderProps as DynamicHeaderProps };
