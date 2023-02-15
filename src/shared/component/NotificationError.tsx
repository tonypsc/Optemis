import './Notifications.css';

const NotificationError = ({ error: { message, cause } }: Props) => (
  <div className="notification-container">
    <p>Error</p>
    <p className="notification-title">{message}</p>
  </div>
);

type Props = { error: Error };

export { NotificationError };
