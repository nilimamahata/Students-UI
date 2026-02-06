import "../styles/listCard.css";

export default function AssignmentCard({ title, teacher, due }) {
  return (
    <div className="listItem">
      <div className="listItem__left">
        <p className="listItem__title">{title}</p>
        <p className="listItem__sub">Teacher: {teacher}</p>
        <p className="listItem__sub">Due Date: {due}</p>
      </div>
      <div className="listItem__right">›</div>
    </div>
  );
}
  

