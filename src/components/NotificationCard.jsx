import { useNavigate } from "react-router-dom";
import "../styles/listCard.css";

export default function NotificationCard({ title, subject, teacher, time, type }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === "Assignments") {
      navigate("/subjects/assignments");
    } else if (type === "Live Sessions") {
      navigate("/live-sessions");
    }
  };

  return (
    <div className="notifItem" onClick={handleClick} role="button" tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
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
