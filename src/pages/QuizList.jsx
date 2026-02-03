import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuizCard from "../components/QuizCard";
import "../styles/quiz.css";

export default function QuizList() {
  const navigate = useNavigate();
  const { subjectId } = useParams();
  const [activeTab, setActiveTab] = useState("pending");

  const pendingQuizzes = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600",
      title: "Asgn./Quiz - X",
      teacher: "Teacher Name",
      deadline: "Date & Time (Deadline)",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
      title: "Asgn./Quiz - X",
      teacher: "Teacher Name",
      deadline: "Date & Time (Deadline)",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600",
      title: "Asgn./Quiz - X",
      teacher: "Teacher Name",
      deadline: "Date & Time (Deadline)",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600",
      title: "Asgn./Quiz - X",
      teacher: "Teacher Name",
      deadline: "Date & Time (Deadline)",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
      title: "Asgn./Quiz - X",
      teacher: "Teacher Name",
      deadline: "Date & Time (Deadline)",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600",
      title: "Asgn./Quiz - X",
      teacher: "Teacher Name",
      deadline: "Date & Time (Deadline)",
    },
  ];

  const completedQuizzes = [
    {
      id: 101,
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600",
      title: "Asgn./Quiz - X",
      teacher: "Teacher Name",
<<<<<<< HEAD
      deadline: "Date & Time (Deadline)",
=======
      deadline: "Completed: 20 Jan 2026",
>>>>>>> 915fef792b7169a0c634dca13309c00526be6516
    },
    {
      id: 102,
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
      title: "Asgn./Quiz - X",
      teacher: "Teacher Name",
<<<<<<< HEAD
      deadline: "Date & Time (Deadline)",
=======
      deadline: "Completed: 18 Jan 2026",
>>>>>>> 915fef792b7169a0c634dca13309c00526be6516
    },
  ];

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
<<<<<<< HEAD
      {/* Back button in grey header area */}
      <button className="quizBackHeader" onClick={() => navigate(-1)}>
        &lt; Back
      </button>

      <div className="quizListBox">
        {/* Title center */}
        <h2 className="quizListTitle">Subject Name</h2>

        {/* Tabs + Search Row */}
        <div className="quizTopRow">
          <div className="quizTabs">
            <button
              className={`quizTab ${activeTab === "pending" ? "quizTabActive" : ""}`}
=======
      <div className="quizListBox">
        {/* Back Button */}
        <button className="quizListBack" onClick={() => navigate(-1)}>
          &lt; Back
        </button>

        {/* Subject Title */}
        <h2 className="quizListTitle">Subject Name</h2>

        {/* Tabs and Search */}
        <div className="quizListHeader">
          <div className="quizListTabs">
            <button
              className={`quizListTab ${activeTab === "pending" ? "quizListTab--active" : ""}`}
>>>>>>> 915fef792b7169a0c634dca13309c00526be6516
              onClick={() => setActiveTab("pending")}
            >
              Pending
            </button>
<<<<<<< HEAD

            <button
              className={`quizTab ${activeTab === "completed" ? "quizTabActive" : ""}`}
=======
            <button
              className={`quizListTab ${activeTab === "completed" ? "quizListTab--active" : ""}`}
>>>>>>> 915fef792b7169a0c634dca13309c00526be6516
              onClick={() => setActiveTab("completed")}
            >
              Completed
            </button>
          </div>
<<<<<<< HEAD

          <div className="quizSearch">
            <input placeholder="Search..." />
            <span className="quizSearchIcon">🔍</span>
          </div>
        </div>

        {/* Grid */}
        <div className="quizGrid">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} {...quiz} onClick={() => handleQuizClick(quiz)} />
=======
          <div className="quizListSearch">
            <input placeholder="Search..." />
            <span className="quizListSearchIcon">🔍</span>
          </div>
        </div>

        {/* Quiz Grid */}
        <div className="quizListGrid">
          {quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              {...quiz}
              onClick={() => handleQuizClick(quiz)}
            />
>>>>>>> 915fef792b7169a0c634dca13309c00526be6516
          ))}
        </div>
      </div>
    </div>
  );
}
