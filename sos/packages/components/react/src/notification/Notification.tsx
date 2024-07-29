import { commonStyle, stateStyle } from './notification.css';

type NotificationProps = {
  state: 'default' | 'warning' | 'danger';
};

export const Notification: React.FC<NotificationProps> = ({
  state = 'danger',
}) => {
  const commonClass = commonStyle;
  const stateClass = stateStyle[state];
  return (
    <div className={`${commonClass} ${stateClass}`}>
      <span className="material-symbols-outlined">{'warning'}</span>
      Warning
    </div>
  );
};
