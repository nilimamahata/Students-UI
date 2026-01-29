import SubjectCard from "../components/SubjectCard";
import "../styles/subjects.css";

export default function SubjectsAssignments() {
  const subjectData = [
    {
      img: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600",
      subject: "Subject Name",
      teacher: "Teacher Name",
    },
    {
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
      subject: "Subject Name",
      teacher: "Teacher Name",
    },
    {
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600",
      subject: "Subject Name",
      teacher: "Teacher Name",
    },
    {
      img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600",
      subject: "Subject Name",
      teacher: "Teacher Name",
    },
    {
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600",
      subject: "Subject Name",
      teacher: "Teacher Name",
    },
    {
      img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600",
      subject: "Subject Name",
      teacher: "Teacher Name",
    },
    {
      img: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600",
      subject: "Subject Name",
      teacher: "Teacher Name",
    },
    {
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600",
      subject: "Subject Name",
      teacher: "Teacher Name",
    },
    {
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
      subject: "Subject Name",
      teacher: "Teacher Name",
    },
    {
      img: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600",
      subject: "Subject Name",
      teacher: "Teacher Name",
    },
  ];

  return (
    <div className="subjectsPage">
      <div className="subjectsBox">
        <div className="subjectsHeader">
          <h2 className="subjectsTitle">Subjects (Assignments)</h2>

          <div className="subjectsSearch">
            <input placeholder="Search..." />
            <span className="subjectsSearchIcon">🔍</span>
          </div>
        </div>

        <div className="subjectsGrid">
          {subjectData.map((item, idx) => (
            <SubjectCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
