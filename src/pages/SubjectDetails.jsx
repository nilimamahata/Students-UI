import { useNavigate } from "react-router-dom";
import "../styles/subjectDetails.css";

export default function SubjectDetails() {
  const navigate = useNavigate();

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
        <h1 className="subjectNameTitle">Subject Name</h1>

        {/* MAIN GRID: Teacher (big) + Recordings (small) */}
        <div className="topGrid">
          {/* Teacher card BIG */}
          <div className="teacherDetailsCard">
            <div className="teacherLeft">
              <h3 className="teacherName">Ms. Ruatfeli</h3>

              <div className="teacherInfoGrid">
                <div className="teacherInfoRow">
                  <span className="label">Subjects:</span>
                  <span className="value">Maths & Science</span>
                </div>

                <div className="teacherInfoRow">
                  <span className="label">Qualification:</span>
                  <span className="value">M.Sc</span>
                </div>

                <div className="teacherInfoRow">
                  <span className="label">Role:</span>
                  <span className="value">Teaching/Lo pu tu</span>
                </div>

                <div className="teacherInfoRow">
                  <span className="label">Rating:</span>
                  <span className="value">TBA Letter</span>
                </div>

                <div className="teacherInfoRow">
                  <span className="label">About:</span>
                  <span className="value">-</span>
                </div>
              </div>
            </div>

            <div className="teacherRight">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
                alt="Ms. Ruaifeli"
                className="teacherPhoto"
              />
            </div>
          </div>

          {/* Recordings card small */}
          <div className="miniStatCard">
            <h3 className="miniStatTitle">Session Recordings</h3>
            <div className="miniStatNumber">12</div>
            <div className="miniStatText">Recordings</div>
          </div>
        </div>

        {/* SECOND GRID: Upcoming sessions + Study materials */}
        <div className="secondGrid">
          {/* Upcoming Live Sessions wide */}
          <div className="liveSessionsCard">
            <h3 className="cardTitleMain">Upcoming Live Sessions</h3>

            <div className="sessionsGridInside">
              <div className="sessionItem">
                <h4 className="sessionItemTitle">Cell Division & Mitosis</h4>
                <p className="sessionItemText">Thursday, 28 Jan</p>
                <p className="sessionItemText">10:00 am – 12:00 pm</p>
              </div>

              <div className="sessionItem">
                <h4 className="sessionItemTitle">Cell Division & Mitosis</h4>
                <p className="sessionItemText">Thursday, 28 Jan</p>
                <p className="sessionItemText">10:00 am – 12:00 pm</p>
              </div>

              <div className="sessionItem">
                <h4 className="sessionItemTitle">Cell Division & Mitosis</h4>
                <p className="sessionItemText">Thursday, 28 Jan</p>
                <p className="sessionItemText">10:00 am – 12:00 pm</p>
              </div>

              <div className="sessionItem">
                <h4 className="sessionItemTitle">Cell Division & Mitosis</h4>
                <p className="sessionItemText">Thursday, 28 Jan</p>
                <p className="sessionItemText">10:00 am – 12:00 pm</p>
              </div>
            </div>
          </div>

          {/* Study materials small */}
          <div className="miniStatCard">
            <h3 className="miniStatTitle">Study Materials</h3>
            <div className="miniStatNumber">8</div>
            <div className="miniStatText">Documents</div>
          </div>
        </div>

        {/* Bottom grid: Assignments + Quiz */}
        <div className="bottomGrid">
          <div className="assignQuizCard">
            <h2 className="assignQuizCardTitle">Assignments</h2>

            <div className="metricsRow">
              <div className="metricCol">
                <div className="metricNum blueBig">4</div>
                <div className="metricText">Pending</div>
              </div>

              <div className="metricCol">
                <div className="metricNum blueBig">12</div>
                <div className="metricText">Completed</div>
              </div>

              <div className="metricCol">
                <div className="metricNum blueBig">16</div>
                <div className="metricText">Total</div>
              </div>
            </div>
          </div>

          <div className="assignQuizCard">
            <h2 className="assignQuizCardTitle">Quiz</h2>

            <div className="metricsRow">
              <div className="metricCol">
                <div className="metricNum blueBig">6</div>
                <div className="metricText">Pending</div>
              </div>

              <div className="metricCol">
                <div className="metricNum blueBig">8</div>
                <div className="metricText">Completed</div>
              </div>

              <div className="metricCol">
                <div className="metricNum blueBig">14</div>
                <div className="metricText">Total</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
