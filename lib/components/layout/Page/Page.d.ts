import { FC, ReactNode } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface PageProps extends CommonComponentProps {
    /** The title of the page, which updates the document title. */
    title?: string;
    /** The header section of the page. */
    header?: ReactNode;
    /** The footer section of the page. */
    footer?: ReactNode;
    /** The main content of the page. */
    children?: ReactNode;
}
/** A structured layout component that manages headers, footers, and content organization. */
declare const Page: FC<PageProps>;

export { Page };
