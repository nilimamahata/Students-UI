import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import "../styles/liveSessionList.css";

export default function LiveSessionList() {
  const navigate = useNavigate();
  const { subjectId } = useParams();
  const [sessions, setSessions] = useState([]);

  // Mock data — replace with API call using subjectId
  useEffect(() => {
    setSessions([
      { id: 1, subject: "Subject Name", topic: "Title/Topic", teacher: "Teacher's Name", date: "Date", timing: "Session Timing" },
      { id: 2, subject: "Subject Name", topic: "Title/Topic", teacher: "Teacher's Name", date: "Date", timing: "Session Timing" },
      { id: 3, subject: "Subject Name", topic: "Title/Topic", teacher: "Teacher's Name", date: "Date", timing: "Session Timing" },
      { id: 4, subject: "Subject Name", topic: "Title/Topic", teacher: "Teacher's Name", date: "Date", timing: "Session Timing" },
      { id: 5, subject: "Subject Name", topic: "Title/Topic", teacher: "Teacher's Name", date: "Date", timing: "Session Timing" },
      { id: 6, subject: "Subject Name", topic: "Title/Topic", teacher: "Teacher's Name", date: "Date", timing: "Session Timing" },
    ]);
  }, [subjectId]);

  return (
    <div className="liveListPage">
      {/* Back button */}
      <button className="liveListBack" onClick={() => navigate(-1)}>
        &lt; Back
      </button>

      {/* Header box */}
      <div className="liveListHeaderBox">
        <PageHeader title="[Subject Name] - Live Sessions" />
      </div>

      {/* Body box */}
      <div className="liveListBodyBox">
        <div className="liveListGrid">
          {sessions.map((s) => (
            <div
              key={s.id}
              className="liveListCard"
              onClick={() => navigate(`/live-sessions/${subjectId}/session/${s.id}`)}
            >
              <div className="liveListCardTop">
                <p className="liveListCardSubject">{s.subject}</p>
                <p className="liveListCardTopic">{s.topic}</p>
              </div>

              <p className="liveListCardTeacher">{s.teacher}</p>

              <div className="liveListCardBottom">
                <p className="liveListCardDate">{s.date}</p>
                <p className="liveListCardTiming">{s.timing}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
