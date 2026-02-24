import { CSSProperties, ForwardRefExoticComponent, ReactElement, RefAttributes } from 'react';
import { CommonComponentProps, VisualContext } from '../../../types/styling.js';

interface IconProps extends CommonComponentProps {
    /** Defines the size of the icon. */
    size?: 'small' | 'regular' | 'large' | 'full' | CSSProperties['width'];
    /** Specifies the visual context (color theme) for the icon. */
    context?: VisualContext;
    /** Makes the icon align inline with surrounding text. */
    inline?: boolean;
    /** Tooltip text displayed on hover. */
    tooltip?: string;
}
interface FullIconProps extends IconProps {
    /** The icon element to be rendered. */
    icon: ReactElement;
}
/** A flexible icon component that supports sizing, context-based theming, and tooltips. */
declare const Icon: ForwardRefExoticComponent<FullIconProps & RefAttributes<HTMLElement>>;

export { Icon, type IconProps };
