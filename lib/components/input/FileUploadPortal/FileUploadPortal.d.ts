import { Callback } from '../../../types/index.js';
import { FC } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface FileUploadPortalProps extends CommonComponentProps<HTMLInputElement> {
    /** Maximum number of files allowed for upload. */
    maxFiles?: number;
    /** Callback function triggered when files are submitted. */
    submit: Callback<File[]>;
    /** Class for the file upload wrapper element. */
    wrapperClassName?: string;
}
/** A file upload portal component that allows multiple file uploads with validation and removal support. */
declare const FileUploadPortal: FC<FileUploadPortalProps>;

export { FileUploadPortal };
