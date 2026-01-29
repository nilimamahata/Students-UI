import "../styles/sessionCard.css";

export default function SessionCard({ img, subject, topic, teacher, dateTime }) {
  return (
    <div className="sessionCard">
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
