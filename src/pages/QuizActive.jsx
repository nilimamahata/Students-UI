import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/quiz.css";

export default function QuizActive() {
  const navigate = useNavigate();
  const { subjectId, quizId } = useParams();

  // SWAP WITH BACKEND: fetch quiz questions by quizId
  const quizData = {
    subject: "Subject Name",
    title: "[Quiz ID]",
    teacher: "Miss Ruatfeli",
    dateCreated: "21 Jan 2026",
    dueDate: "24 Jan 2026",
    questions: [
      {
        id: 1,
        question: "What is . . .",
        options: ["answer 1", "answer 2", "answer 3", "answer 4"],
      },
      {
        id: 2,
        question: "What is . . .",
        options: ["answer 1", "answer 2", "answer 3", "answer 4"],
      },
      {
        id: 3,
        question: "What is . . .",
        options: ["answer 1", "answer 2", "answer 3", "answer 4"],
      },
      {
        id: 4,
        question: "What is . . .",
        options: ["answer 1", "answer 2", "answer 3", "answer 4"],
      },
      {
        id: 5,
        question: "What is . . .",
        options: ["answer 1", "answer 2", "answer 3", "answer 4"],
      },
    ],
  };

  const [answers, setAnswers] = useState({});

  const handleSelect = (questionId, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  // SWAP WITH BACKEND: submit answers then navigate to result
  const handleSubmit = () => {
    navigate(`/subjects/quiz/${subjectId}/result/${quizId}`);
  };

  return (
    <div className="quizActivePage">
      {/* Back button — above header box */}
      <button className="quizBackHeader" onClick={() => navigate(-1)}>
        &lt; Back
      </button>

      {/* Header box */}
      <div className="quizActiveHeaderBox">
        <h2 className="quizPendingHeaderTitle">{quizData.subject}</h2>
        <div className="quizSearch">
          <input placeholder="Search..." />
          <span className="quizSearchIcon">🔍</span>
        </div>
      </div>

      {/* Body box */}
      <div className="quizActiveBodyBox">
        {/* Quiz info */}
        <div className="quizDetailInfo">
          <h3 className="quizDetailInfoTitle">{quizData.title}</h3>
          <p className="quizDetailInfoMeta">
            {quizData.teacher} – {quizData.dateCreated}
          </p>
          <p className="quizDetailInfoDue">Due Date: {quizData.dueDate}</p>
        </div>

        {/* Questions */}
        <div className="quizDetailQuestions">
          {quizData.questions.map((q, index) => (
            <div key={q.id} className="quizDetailQuestion">
              <p className="quizDetailQuestionText">
                {index + 1}. {q.question}
              </p>
              <div className="quizDetailOptions">
                {q.options.map((option, optIndex) => (
                  <label
                    key={optIndex}
                    className={`quizDetailOption ${
                      answers[q.id] === optIndex
                        ? "quizDetailOption--selected"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      checked={answers[q.id] === optIndex}
                      onChange={() => handleSelect(q.id, optIndex)}
                    />
                    <span className="quizDetailOptionRadio"></span>
                    <span className="quizDetailOptionText">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit button */}
        <div className="quizDetailSubmitWrap">
          <button className="quizDetailSubmit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
