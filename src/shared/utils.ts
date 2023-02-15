import { createElement } from 'react';
import { toast } from 'react-toastify';

import { NotificationError } from './component/NotificationError';
import { NotificationSuccess } from './component/NotificationSuccess';

const displayNotificationError = (error: Error) => {
  toast.error(createElement(NotificationError, { error }));
};

const displayNotificationSuccess = (message: string) => {
  toast.success(createElement(NotificationSuccess, { message }), {
    autoClose: 2500,
  });
};

export { displayNotificationSuccess, displayNotificationError };
