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

  {/* left*/}
  <div className="sessionCard__left">
    <h4 className="sessionCard__subject">{subject}</h4>

    <p className="sessionCard__text">
      Session Title/Topic: {topic}
    </p>

    <p className="sessionCard__teacher">
      Teacher Name: {teacher}
    </p>
  </div>

  {/* right*/}
  <div className="sessionCard__right">
    <p className="sessionCard__starts">
      Starts soon
    </p>

    <p className="sessionCard__time">
      Date & Time: {dateTime}
    </p>
  </div>

</div>

    </div>
  );
}
