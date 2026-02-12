import { useNavigate } from "react-router-dom";
import "../styles/sessionCard.css";

export default function SessionCard({ id, img, subject, topic, teacher, dateTime }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/live-sessions/${id}`);
  };

  return (
    <div
      className="sessionCard"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <img className="sessionCard__img" src={img} alt={subject} />
      <div className="sessionCard__body">
        <h4 className="sessionCard__subject">{subject}</h4>
        <p className="sessionCard__text">Session Title/Topic: {topic}</p>
        <p className="sessionCard__text">Teacher Name: {teacher}</p>
        <p className="sessionCard__text">Date & Time: {dateTime}</p>
      </div>
    </div>
  );
}
