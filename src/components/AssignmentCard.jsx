import { useNavigate } from "react-router-dom";
import "../styles/listCard.css";

export default function AssignmentCard({ id, title, teacher, due }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/subjects/assignments/${id}`);
  };

  return (
    <div
      className="listItem"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <div className="listItem__left">
        <p className="listItem__title">{title}</p>
        <p className="listItem__sub">Teacher: {teacher}</p>
        <p className="listItem__sub">Due Date: {due}</p>
      </div>
      <div className="listItem__right">›</div>
    </div>
  );
}
