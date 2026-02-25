import { useNavigate } from "react-router-dom";
import "../styles/liveSessionDetail.css";

export default function LiveSessionDetail() {
  const navigate = useNavigate();
  // TODO: const { subjectId, sessionId } = useParams(); — wire up when fetching real session data
  return (
    <div className="liveSessionDetailPage">
      {/* Back button - outside the header box, above it */}
      <button className="liveSessionBackBtn" onClick={() => navigate(-1)}>
        &lt; Back
      </button>

      {/* Header box - fixed, does not scroll */}
      <div className="liveSessionDetailHeaderBox">
        <h2 className="liveSessionTitle">Subject Name #Session ID</h2>
      </div>

      {/* Body box - scrolls */}
      <div className="liveSessionDetailBodyBox">
        {/* Video Box */}
        <div className="liveSessionVideoBox"></div>

        {/* Bottom info row */}
        <div className="liveSessionInfoRow">
          {/* Left info */}
          <div className="liveSessionLeftInfo">
            <p className="infoText">
              [Title] "Linear Equations"
            </p>

            <div className="byBox">
              <p className="byText">By:</p>
              <p className="byName">Sir Zodina</p>
            </div>
          </div>

          {/* Right info */}
          <div className="liveSessionRightInfo">
            <p className="dateText">22 Jan 2026</p>
            <p className="timeText">Wednesday, 1:00 pm (IST)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
