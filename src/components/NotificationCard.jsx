import "../styles/listCard.css";

export default function NotificationCard({ title, subject, teacher, time }) {
  return (
    <div className="notifItem">
      <div className="notifItem__bar" />
      <div className="notifItem__content">
        <p className="notifItem__title">{title}</p>
        <p className="notifItem__sub">{subject}</p>
        <p className="notifItem__sub">{teacher}</p>
        <p className="notifItem__sub">{time}</p>
      </div>
    </div>
  );
}



