interface Notification {
    type: 'success' | 'error';
    name?: string;
    message: string;
    data?: string;
}
declare const pushSuccess: (message: string, name?: string, data?: string) => void;
declare const pushError: (message: string, name?: string, data?: string) => void;
declare const popNotification: () => Notification | null;

export { type Notification, popNotification, pushError, pushSuccess };
