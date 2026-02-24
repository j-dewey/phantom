import { Callback } from '../../../types/index.js';
import { ForwardRefExoticComponent, ReactNode, CSSProperties, RefAttributes } from 'react';
import '../../../types/styling.js';

type Tab = {
    /** The content displayed when this tab is selected. */
    tab: ReactNode;
    /** The label displayed in the tab selection menu. */
    label: ReactNode;
    /** Disables the tab, preventing selection. */
    disabled?: boolean;
};
interface TabGroupProps {
    /** The list of available tabs. */
    tabs: Tab[];
    /** The index of the initially selected tab. */
    selectedIndex?: number;
    /** Callback function triggered when the selected tab changes. */
    onChange?: Callback<number>;
    /** Determines whether the visual style of the tabs. */
    variant?: 'tabs' | 'segmented';
    /** Compact display style. */
    compact?: boolean;
    /** Additional class name for the tab content container. */
    innerClassName?: string;
    /** Additional styles for the tab content container. */
    innerStyle?: CSSProperties;
}
/** A tab group component that allows users to switch between different content sections. */
declare const TabGroup: ForwardRefExoticComponent<TabGroupProps & RefAttributes<HTMLDivElement>>;

export { type Tab, TabGroup };
