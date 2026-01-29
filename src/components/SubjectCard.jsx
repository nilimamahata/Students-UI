import "../styles/subjectCard.css";

export default function SubjectCard({ img, subject, teacher }) {
  return (
    <div className="subjectCard">
      <img className="subjectCard__img" src={img} alt={subject} />

      <div className="subjectCard__body">
        <h4 className="subjectCard__title">{subject}</h4>
        <p className="subjectCard__teacher">{teacher}</p>
      </div>
    </div>
  );
}
