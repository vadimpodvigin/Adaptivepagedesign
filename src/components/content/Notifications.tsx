import { Notification, NotificationProps } from "./Notification";

export interface NotificationsProps {
  notifications: NotificationProps[];
}

export function Notifications({ notifications }: NotificationsProps) {
  if (!notifications || !Array.isArray(notifications) || notifications.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-[8px] w-full">
      {notifications.map((notification, index) => (
        <Notification
          key={index}
          type={notification.type}
          title={notification.title}
          message={notification.message}
        />
      ))}
    </div>
  );
}
