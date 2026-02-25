import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SubjectCard from "../components/SubjectCard";
import PageHeader from "../components/PageHeader";
import "../styles/subjects.css";

export default function Subjects() {
  const navigate = useNavigate();

  // State (future backend data)
  const [subjects, setSubjects] = useState([]);

  // Mock data (simulates backend response)
  useEffect(() => {
    const mockSubjects = [
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600",
        subject: "Subject Name",
        teacher: "Teacher's Name",
      },
      {
        id: 2,
        img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
        subject: "Mathematics",
        teacher: "Mr. Smith",
      },
      {
        id: 3,
        img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600",
        subject: "Science",
        teacher: "Ms. Johnson",
      },
      {
        id: 4,
        img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600",
        subject: "Literature",
        teacher: "Mrs. Brown",
      },
      {
        id: 5,
        img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600",
        subject: "History",
        teacher: "Mr. Davis",
      },
      {
        id: 6,
        img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600",
        subject: "Art",
        teacher: "Ms. Martinez",
      },
      {
        id: 7,
        img: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600",
        subject: "Physical Education",
        teacher: "Mr. Wilson",
      },
      {
        id: 8,
        img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600",
        subject: "Computer Science",
        teacher: "Dr. Taylor",
      },
      {
        id: 9,
        img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
        subject: "Mathematics",
        teacher: "Prof. Smith",
      },
      {
        id: 10,
        img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600",
        subject: "Physics",
        teacher: "Dr. Johnson",
      },
    ];

{/*   // example for backend //

  useEffect(() => {
  fetch("/api/subjects")
    .then((res) => res.json())
    .then((data) => setSubjects(data));
}, []);

*/}

    setSubjects(mockSubjects);
  }, []);

  // Navigation stays generic (no hard dependency on data shape)
  const handleSubjectClick = (id) => {
    navigate(`/subjects/${id}`);
  };

  return (
    <div className="subjectsPage">
      <div className="subjectsHeaderBox">
        <PageHeader title="Subjects" />
      </div>

      <div className="subjectsBodyBox">
        <div className="subjectsGrid">
          {subjects.map((item) => (
            <SubjectCard
              key={item.id}
              img={item.img}
              subject={item.subject}
              teacher={item.teacher}
              onClick={() => handleSubjectClick(item.id)}
            />
          ))}
        </div>

        {/*  // example for backend //

            {subjects.map((item) => (
              <SubjectCard
                key={item.id}
                img={item.thumbnail}
                subject={item.name}
                teacher={item.teacher}
                onClick={() => navigate(`/subjects/${item.id}`)}
              />
            ))}
        */}
      </div>
    </div>
  );
}
