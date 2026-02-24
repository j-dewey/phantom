import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import { CommonComponentProps, VisualContext } from '../../../types/styling.js';

interface CalloutProps extends CommonComponentProps<HTMLDivElement> {
    /** The style context of the callout. */
    context?: VisualContext;
    /** The text or element to be highlighted. */
    children?: ReactNode;
}
/** A callout component that can be used for multiple contexts. */
declare const Callout: ForwardRefExoticComponent<CalloutProps & RefAttributes<HTMLDivElement>>;

export { Callout };
