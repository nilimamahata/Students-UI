import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/subjectDetails.css";

export default function SubjectDetails() {
  const navigate = useNavigate();
  const { subjectId } = useParams(); // future backend id

  /* ===============================
     STATE
  =============================== */
  const [subjectDetails, setSubjectDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ===============================
     FETCH SUBJECT DETAILS (BACKEND READY)
  =============================== */
  useEffect(() => {
    // MOCK BACKEND RESPONSE (remove later)
    const mockSubjectDetails = {
      name: "Subject Name",
      teacher: {
        name: "Ms. Ruatfeli",
        subjects: "Maths & Science",
        qualification: "M.Sc",
        role: "Teaching/Lo pu tu",
        rating: "TBA Letter",
        about: "-",
        photo:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      },
      recordingsCount: 12,
      upcomingSessions: [
        {
          title: "Cell Division & Mitosis",
          date: "Thursday, 28 Jan",
          time: "10:00 am – 12:00 pm",
        },
        {
          title: "Genetics Basics",
          date: "Friday, 29 Jan",
          time: "11:00 am – 1:00 pm",
        },
        {
          title: "Photosynthesis",
          date: "Monday, 1 Feb",
          time: "9:00 am – 11:00 am",
        },
        {
          title: "Human Anatomy",
          date: "Wednesday, 3 Feb",
          time: "10:00 am – 12:00 pm",
        },
      ],
      studyMaterialsCount: 8,
      assignments: {
        pending: 4,
        completed: 12,
        total: 16,
      },
      quizzes: {
        pending: 6,
        completed: 8,
        total: 14,
      },
    };

    /*
    // REAL BACKEND (use later)
    fetch(`/api/subjects/${subjectId}`)
      .then((res) => res.json())
      .then((data) => setSubjectDetails(data))
      .finally(() => setLoading(false));
    */

    setSubjectDetails(mockSubjectDetails);
    setLoading(false);
  }, [subjectId]);

  if (loading) return <div>Loading...</div>;
  if (!subjectDetails) return <div>No data found</div>;

  /* ===============================
     UI
  =============================== */
  return (
    <div className="subjectDetailsPage">
      <div className="subjectDetailsBox">
        {/* Top bar inside the white container */}
        <div className="subjectDetailsTop">
          <button className="backBtn" onClick={() => navigate(-1)}>
            &larr; Back
          </button>
        </div>

        {/* Title */}
        <h1 className="subjectNameTitle">{subjectDetails.name}</h1>

        {/* MAIN GRID: Teacher (big) + Recordings (small) */}
        <div className="topGrid">
          {/* Teacher card BIG */}
          <div className="teacherDetailsCard">
            <div className="teacherLeft">
              <h3 className="teacherName">{subjectDetails.teacher?.name}</h3>

              <div className="teacherInfoGrid">
                <div className="teacherInfoRow">
                  <span className="label">Subjects:</span>
                  <span className="value">{subjectDetails.teacher?.subjects}</span>
                </div>

                <div className="teacherInfoRow">
                  <span className="label">Qualification:</span>
                  <span className="value">{subjectDetails.teacher?.qualification}</span>
                </div>

                <div className="teacherInfoRow">
                  <span className="label">Role:</span>
                  <span className="value">{subjectDetails.teacher?.role}</span>
                </div>

                <div className="teacherInfoRow">
                  <span className="label">Rating:</span>
                  <span className="value">{subjectDetails.teacher?.rating}</span>
                </div>

                <div className="teacherInfoRow">
                  <span className="label">About:</span>
                  <span className="value">{subjectDetails.teacher?.about}</span>
                </div>
              </div>
            </div>

            <div className="teacherRight">
              <img
                src={subjectDetails.teacher?.photo}
                alt={subjectDetails.teacher?.name}
                className="teacherPhoto"
              />
            </div>
          </div>

          {/* Recordings card small */}
          <div className="miniStatCard" 
           onClick={() => navigate(`/subjects/recordings/${subjectId}`)}
           style={{ cursor: "pointer" }}>
            <h3 className="miniStatTitle">Session Recordings</h3>
            <div className="miniStatNumber">{subjectDetails.recordingsCount}</div>
            <div className="miniStatText">Recordings</div>
          </div>
        </div>

        {/* SECOND GRID: Upcoming sessions + Study materials */}
        <div className="secondGrid">
          {/* Upcoming Live Sessions wide */}
          <div className="liveSessionsCard">
            <h3 className="cardTitleMain">Upcoming Live Sessions</h3>

            <div className="sessionsGridInside">
              {subjectDetails.upcomingSessions.map((session, index) => (
                <div className="sessionItem" key={index}>
                  <h4 className="sessionItemTitle">{session.title}</h4>
                  <p className="sessionItemText">{session.date}</p>
                  <p className="sessionItemText">{session.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Study materials small */}
          <div className="miniStatCard"
            onClick={() => navigate(`/subjects/study-material/${subjectId}`)}
            style={{ cursor: "pointer" }} >
            <h3 className="miniStatTitle">Study Materials</h3>
            <div className="miniStatNumber">{subjectDetails.studyMaterialsCount}</div>
            <div className="miniStatText">Documents</div>
          </div>
        </div>

        {/* Bottom grid: Assignments + Quiz */}
        <div className="bottomGrid">
          <div className="assignQuizCard">
  <h2 className="assignQuizCardTitle">Assignments</h2>

  <div className="metricsRow">

    <div
      className="metricCol"
      onClick={() => navigate("/subjects/assignments/pending")}
    >
      <div className="metricNum blueBig">
        {subjectDetails.assignments.pending}
      </div>
      <div className="metricText">Pending</div>
    </div>

    <div
      className="metricCol"
      onClick={() => navigate("/subjects/assignments/completed")}
    >
      <div className="metricNum blueBig">
        {subjectDetails.assignments.completed}
      </div>
      <div className="metricText">Completed</div>
    </div>

    <div className="metricCol">
      <div className="metricNum blueBig">
        {subjectDetails.assignments.total}
      </div>
      <div className="metricText">Total</div>
    </div>

  </div>
</div>

          <div className="assignQuizCard">
  <h2 className="assignQuizCardTitle">Quiz</h2>

  <div className="metricsRow">

    <div
      className="metricCol"
      onClick={() => navigate(`/subjects/quiz/${subjectId}?tab=pending`)}
    >
      <div className="metricNum blueBig">
        {subjectDetails.quizzes.pending}
      </div>
      <div className="metricText">Pending</div>
    </div>

    <div
      className="metricCol"
      onClick={() => navigate(`/subjects/quiz/${subjectId}?tab=completed`)}
    >
      <div className="metricNum blueBig">
        {subjectDetails.quizzes.completed}
      </div>
      <div className="metricText">Completed</div>
    </div>

    <div className="metricCol">
      <div className="metricNum blueBig">
        {subjectDetails.quizzes.total}
      </div>
      <div className="metricText">Total</div>
    </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
