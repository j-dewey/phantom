import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { CommonComponentProps } from '../../../types/styling.js';

interface BannerProps extends CommonComponentProps {
    /**
     * Duration (in milliseconds) for which the notification is displayed before disappearing.
     */
    notificationLength?: number;
    /**
     * Delay (in milliseconds) before showing a new notification when another notification is already present.
     */
    concurrentNotificationDelay?: number;
}
/**
 * A floating notification banner that displays error or success messages.
 * It listens for notification changes and automatically updates its state to show new notifications.
 */
declare const Banner: ForwardRefExoticComponent<BannerProps & RefAttributes<HTMLElement>>;

export { Banner, type BannerProps };
