import { ForwardRefExoticComponent, ComponentType, MouseEventHandler, ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes, RefAttributes } from 'react';
import { BaseCommonComponentProps, FlexAlign, VisualContext } from '../../../types/styling.js';
import { IconProps } from '../../content/Icon/Icon.js';

type ButtonStyle = 'outline' | 'filled' | 'text' | 'ghost';
interface BaseButtonProps extends BaseCommonComponentProps {
    /** Specifies the button type, determining default styles. */
    type?: 'primary' | 'default' | 'text';
    /** Defines the button size. */
    size?: 'regular' | 'small' | 'large';
    /** Expands the button to full width. */
    full?: boolean;
    /** Sets the button's content alignment. */
    align?: FlexAlign;
    /** Specifies the visual style of the button. */
    variant?: ButtonStyle;
    /** Determines the button's color scheme based on context. */
    context?: VisualContext;
    /** Applies rounded styles to the button. */
    rounded?: boolean;
    /** An optional icon displayed inside the button. */
    Icon?: ComponentType<IconProps>;
    /** Positions the icon to the right side of the button content. */
    iconRight?: boolean;
    /** Handler for hover events. */
    onHover?: MouseEventHandler<HTMLElement>;
    /** Disables the button when set to `true`. */
    disabled?: boolean;
    /** Displays a loading spinner inside the button. */
    isLoading?: boolean;
    /** The content inside the button. */
    children?: ReactNode;
}
/** Props for a link-style button using an `<a>` or `<Link>`. */
interface LinkButtonProps extends BaseButtonProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type'> {
    /** The URL or route the button should navigate to. */
    link: string;
    /** For links to be opened in a new tab with appropriate security attributes. */
    external?: boolean;
    /** Prevents `onClick` from being used in link buttons to avoid conflicts. */
    onClick?: never;
    /** Not applicable to links; included in regular buttons only. */
    htmlType?: never;
    /** Not applicable to links; used for buttons in forms. */
    form?: never;
}
/** Props for a regular `<button>` element. */
interface RegularButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    /** Ensures `link` is not passed when using a regular button. */
    link?: never;
    /** Ensures the link-related external attribute is not passed. */
    external?: never;
    /** Defines the HTML `type` attribute for the button. */
    htmlType?: 'button' | 'reset' | 'submit';
    /** Associates the button with a form by its `id`. */
    form?: string;
}
/** Type definition for the Button component, supporting both links and regular buttons. */
type ButtonProps = LinkButtonProps | RegularButtonProps;
/** A versatile button component that supports links, different styles, icons, and loading states. */
declare const Button: ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;

export { Button, type ButtonStyle };
