import { Callback } from '../../../types/index.js';
import { FC, ComponentType, CSSProperties, ReactNode } from 'react';
import { IconProps } from '../Icon/Icon.js';
import { ButtonStyle } from '../../input/Button/Button.js';
import { CommonComponentProps, FlexAlign } from '../../../types/styling.js';

interface AccordionProps extends Omit<CommonComponentProps, 'onClick'> {
    /** The label displayed on the accordion button. */
    label: string;
    /** Removes the border. */
    borderless?: boolean;
    /** Reduces the margin and padding to create a more compact appearance. */
    compact?: boolean;
    /** An optional icon to be displayed alongside the label. */
    Icon?: ComponentType<IconProps> | null;
    /** Flex alignment of the accordion label and icon. */
    labelAlignment?: FlexAlign;
    /** Whether the icon should be on the left or right of the label. */
    iconLeft?: boolean;
    /** The initial open/closed state of the accordion. */
    defaultState?: boolean;
    /** Callback function triggered when the accordion button is clicked. */
    onClick?: Callback<void>;
    /** Class for the inner content container. */
    innerClassName?: string;
    /** Styles for the inner content container. */
    innerStyle?: CSSProperties;
    /** Visual style of the accordion internal button. */
    buttonStyle?: ButtonStyle;
    /** The content inside the accordion. */
    children: ReactNode;
}
/**
 * An expandable and collapsible section that can display content when toggled.
 * Supports optional icons, border styles, and compact mode.
 */
declare const Accordion: FC<AccordionProps>;

export { Accordion };
