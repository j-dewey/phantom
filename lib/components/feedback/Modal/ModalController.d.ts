import { FC } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface ModalControllerProps extends CommonComponentProps {
}
/** A global modal controller that listens for modal state changes and renders active modals in a portal. */
declare const ModalController: FC<ModalControllerProps>;

export { ModalController };
