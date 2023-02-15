import './Notification.css';

const NotificationSuccess = ({ message }: Props) => (
  <div className="notification-container">
    <p className="notification-title">Success</p>
    <p>{message}</p>
  </div>
);

type Props = { message: string };

export { NotificationSuccess };
