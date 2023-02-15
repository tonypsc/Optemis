import { createElement } from 'react';
import { toast } from 'react-toastify';

import { NotificationError } from './NotificationError';

const displayNotificationError = (error: Error) => {
  toast.error(createElement(NotificationError, { error }));
};

export { displayNotificationError };
