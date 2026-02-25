import { useNavigate, useParams } from "react-router-dom";
import "../styles/quiz.css";

export default function QuizPending() {
  const navigate = useNavigate();
  const { subjectId, quizId } = useParams();
  // SWAP WITH BACKEND: fetch quiz info by quizId
  const quizData = {
    subject: "Subject Name",
    quizId: "Quiz ID",
    teacher: "Teacher's Name",
    dueDate: "21 Feb 26",
    questions: "N",
    duration: "30 minutes",
  };

  const handleStartQuiz = () => {
    navigate(`/subjects/quiz/${subjectId}/active/${quizId}`);
  };

  return (
    <div className="quizPendingPage">
      {/* Back button — above header box */}
      <button className="quizBackHeader" onClick={() => navigate(-1)}>
        &lt; Back
      </button>

      {/* Header box */}
      <div className="quizPendingHeaderBox">
        <h2 className="quizPendingHeaderTitle">{quizData.subject}</h2>
        <div className="quizSearch">
          <input placeholder="Search..." />
          <span className="quizSearchIcon">🔍</span>
        </div>
      </div>

      {/* Body box */}
      <div className="quizPendingBodyBox">
        <div className="quizPendingContent">
          <div className="quizPendingCard">
            <p className="quizPendingCardId">{quizData.quizId}</p>
            <p className="quizPendingCardTeacher">{quizData.teacher}</p>
            <p className="quizPendingCardDue">Due Date - {quizData.dueDate}</p>
            <div className="quizPendingCardSpacer" />
            <p className="quizPendingCardQuestions">{quizData.questions} Questions</p>
            <p className="quizPendingCardDuration">Duration: {quizData.duration}</p>
          </div>

          <button className="quizPendingStartBtn" onClick={handleStartQuiz}>
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
