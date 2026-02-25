import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import "../styles/assignmentDetail.css";

export default function AssignmentDetailCompleted() {
  const navigate = useNavigate();
  const { assignmentId } = useParams();

  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ===============================
     FETCH ASSIGNMENT (BACKEND READY)
  =============================== */

  useEffect(() => {
    // MOCK BACKEND RESPONSE (remove later)
    const mockAssignment = {
      id: assignmentId,
      subject: "Subject Name",
      assignmentNo: "Assignment No. X",
      teacher: "Miss Ruatfeli",
      assignedAt: "21 Jan 2026",
      dueDate: "24 Jan 2026",
      title: "Biology chapter 1",
      description: "Answer all the questions on the attached file",
      attachmentName: "Science biology assignment [file name]",

      // completed assignments always have a submission
      submission: {
        submittedAt: "2026-01-22T19:00:00",
        fileUrl: "https://server/file.pdf",
        fileName: "Science biology assignment [file name]",
      },
    };

    // REAL API (uncomment later):
    // const res = await fetch(`/api/assignments/${assignmentId}`);
    // const mockAssignment = await res.json();

    setAssignment(mockAssignment);
    setLoading(false);
  }, [assignmentId]);

  /* ===============================
     HANDLERS
  =============================== */

  const handleOpenFile = () => {
    // Replace with: window.open(assignment.submission.fileUrl, "_blank");
    alert("Open file from backend URL");
  };

  /* ===============================
     DATE FORMATTERS
  =============================== */

  const formatSubmittedTop = (isoString) => {
    if (!isoString) return "";
    const d = new Date(isoString);
    const date = d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const time = d.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return `Submitted: ${date} ( ${time} )`;
  };

  const formatSmallDate = (isoString) => {
    if (!isoString) return "";
    return new Date(isoString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) return <div>Loading...</div>;

  /* ===============================
     UI
  =============================== */

  return (
    <div className="assignmentDetailPage">
      {/* Back button — above the header box */}
      <button className="assignmentDetailBack" onClick={() => navigate(-1)}>
        &lt; Back
      </button>

      {/* Header box with PageHeader */}
      <div className="assignmentDetailHeaderBox">
        <PageHeader title={assignment.subject} />
      </div>

      {/* Body box */}
      <div className="assignmentDetailBodyBox">
        {/* Light grey assignment container */}
        <div className="assignmentDetailContent">
          {/* LEFT: Assignment information */}
          <div className="assignmentDetailLeft">
            <div className="assignmentTitleRow">
              <h3 className="assignmentDetailTitle">{assignment.assignmentNo}</h3>
              <p className="submittedTopText">
                {formatSubmittedTop(assignment.submission.submittedAt)}
              </p>
            </div>

            <p className="assignmentDetailMeta">
              {assignment.teacher} - {assignment.assignedAt}
            </p>
            <p className="assignmentDetailDue">Due Date: {assignment.dueDate}</p>

            <div className="assignmentDetailDivider"></div>

            <p className="assignmentDetailLabel">Title: {assignment.title}</p>
            <p className="assignmentDetailDesc">
              Description: {assignment.description}
            </p>

            {/* Attached file strip */}
            <div className="fileStrip">
              <div className="fileStripIcon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9L9 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9Z"
                    stroke="#444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 3V9H3"
                    stroke="#444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="fileStripName">{assignment.attachmentName}</div>
            </div>
          </div>

          {/* RIGHT: Your Work card */}
          <div className="assignmentDetailRight">
            <div className="yourWorkTop">
              <h4 className="assignmentDetailWorkTitle">Your Work</h4>
              <span className="yourWorkDate">
                {formatSmallDate(assignment.submission.submittedAt)}
              </span>
            </div>

            <button className="openFileBtn" onClick={handleOpenFile}>
              [Open File]
            </button>

            <button className="submittedBtn" disabled>
              Submitted
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
