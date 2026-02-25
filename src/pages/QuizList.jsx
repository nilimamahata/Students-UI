import { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import QuizCard from "../components/QuizCard";
import "../styles/quiz.css";

export default function QuizList() {
  const navigate = useNavigate();
  const { subjectId } = useParams();
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tab || "pending");
  useEffect(() => {
  if (tab) {
    setActiveTab(tab);
  }
}, [tab]);
  // State for data (future backend data)
  const [pendingQuizzes, setPendingQuizzes] = useState([]);
  const [completedQuizzes, setCompletedQuizzes] = useState([]);

  // Mock data (simulates backend response)
  useEffect(() => {
    const mockPendingQuizzes = [
    { id: 1, title: "Asgn./Quiz - X", teacher: "Teacher Name", deadline: "Date & Time (Deadline)" },
    { id: 2, title: "Asgn./Quiz - X", teacher: "Teacher Name", deadline: "Date & Time (Deadline)" },
    { id: 3, title: "Asgn./Quiz - X", teacher: "Teacher Name", deadline: "Date & Time (Deadline)" },
    { id: 4, title: "Asgn./Quiz - X", teacher: "Teacher Name", deadline: "Date & Time (Deadline)" },
    { id: 5, title: "Asgn./Quiz - X", teacher: "Teacher Name", deadline: "Date & Time (Deadline)" },
    { id: 6, title: "Asgn./Quiz - X", teacher: "Teacher Name", deadline: "Date & Time (Deadline)" },
  ];

    const mockCompletedQuizzes = [
      { id: 101, title: "Asgn./Quiz - X", teacher: "Teacher Name", deadline: "Date & Time (Completed)" },
      { id: 102, title: "Asgn./Quiz - X", teacher: "Teacher Name", deadline: "Date & Time (Completed)" },
    ];

    setPendingQuizzes(mockPendingQuizzes);
    setCompletedQuizzes(mockCompletedQuizzes);
  }, []);

{/*   // example for backend //

  useEffect(() => {
  fetch(`/api/subjects/${subjectId}/quizzes`)
    .then((res) => res.json())
    .then((data) => {
      setPendingQuizzes(data.pending);
      setCompletedQuizzes(data.completed);
    });
}, [subjectId]);

*/}

  const quizzes = activeTab === "pending" ? pendingQuizzes : completedQuizzes;

  const handleQuizClick = (quiz) => {
    if (activeTab === "pending") {
      navigate(`/subjects/quiz/${subjectId}/take/${quiz.id}`);
    } else {
      navigate(`/subjects/quiz/${subjectId}/result/${quiz.id}`);
    }
  };

  return (
    <div className="quizListPage">
      {/* Back button — outside the header box, above it */}
      <button className="quizBackHeader" onClick={() => navigate(-1)}>
        &lt; Back
      </button>

      {/* Header box — fixed, does not scroll */}
      <div className="quizListHeaderBox">
        {/* Top row: title | search */}
        <div className="quizListHeaderRow">
          <h2 className="quizListTitle">Subject Name</h2>
          <div className="quizSearch">
            <input placeholder="Search..." />
            <span className="quizSearchIcon">🔍</span>
          </div>
        </div>

        {/* Tabs — attached to bottom of header */}
        <div className="quizTabs">
          <button
            className={`quizTab ${activeTab === "pending" ? "quizTabActive" : ""}`}
            onClick={() => setActiveTab("pending")}
          >
            Pending
          </button>
          <button
            className={`quizTab ${activeTab === "completed" ? "quizTabActive" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Body box — scrolls */}
      <div className="quizListBodyBox">
        <div className="quizGrid">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} {...quiz} isCompleted={activeTab === "completed"} onClick={() => handleQuizClick(quiz)} />
          ))}
        </div>
      </div>
    </div>
  );
}
