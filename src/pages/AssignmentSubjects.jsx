import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SubjectCard from "../components/SubjectCard";
import PageHeader from "../components/PageHeader";
import "../styles/subjects.css";

export default function AssignmentSubjects() {
  const navigate = useNavigate();

  // State for data (future backend data)
  const [subjectData, setSubjectData] = useState([]);

  // Mock data (simulates backend response)
  useEffect(() => {
    const mockSubjectData = [
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600",
        subject: "Subject Name",
        teacher: "Teacher's Name",
      },
      {
        id: 2,
        img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600",
        subject: "Subject Name",
        teacher: "Teacher's Name",
      },
      {
        id: 3,
        img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600",
        subject: "Subject Name",
        teacher: "Teacher's Name",
      },
      {
        id: 4,
        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600",
        subject: "Subject Name",
        teacher: "Teacher's Name",
      },
      {
        id: 5,
        img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600",
        subject: "Subject Name",
        teacher: "Teacher's Name",
      },
      {
        id: 6,
        img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600",
        subject: "Subject Name",
        teacher: "Teacher's Name",
      },
      {
        id: 7,
        img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600",
        subject: "Subject Name",
        teacher: "Teacher's Name",
      },
    ];

    setSubjectData(mockSubjectData);
  }, []);

{/*   // example for backend //

  useEffect(() => {
  fetch("/api/subjects-assignments")
    .then((res) => res.json())
    .then((data) => setSubjectData(data));
}, []);

*/}

  return (
    <div className="subjectsPage">
      <div className="subjectsHeaderBox">
        <PageHeader title="Assignments" />
      </div>

      <div className="subjectsBodyBox">
        <div className="subjectsGrid">
          {subjectData.map((item) => (
            <SubjectCard
              key={item.id}
              {...item}
              onClick={() => navigate(`/subjects/assignments/${item.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
