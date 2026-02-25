import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/assignmentDetail.css";

export default function AssignmentDetail() {
  const navigate = useNavigate();
  const { assignmentId } = useParams();

  const [assignment, setAssignment] = useState(null);

  // answers: { [questionId]: value }
  const [answers, setAnswers] = useState({});

  // multiple files
  const [files, setFiles] = useState([]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedAt, setSubmittedAt] = useState(null);
  const [loading, setLoading] = useState(true);

  /* FETCH ASSIGNMENT (MOCK) */
  useEffect(() => {
    const mockAssignment = {
      id: assignmentId,
      subject: "Biology",
      assignmentNo: "Biology Assignment",
      teacher: "Miss Ruatfeli",
      assignedAt: "21 Jan 2026",
      dueDate: "24 Jan 2026",
      title: "Biology chapter 1",
      description: "Answer the following questions carefully.",
      attachmentName: "Science biology assignment.pdf",

      // NEW: questions from backend later
      questions: [
        { id: 1, type: "short", text: "Define photosynthesis." },
        { id: 2, type: "long", text: "Explain the process of respiration in detail." },
        {
          id: 3,
          type: "mcq",
          text: "Which organelle is responsible for energy production?",
          options: ["Nucleus", "Ribosome", "Chloroplast"],
        },
      ],

      submission: null,
    };

    setAssignment(mockAssignment);

    if (mockAssignment.submission) {
      setIsSubmitted(true);
      setSubmittedAt(new Date(mockAssignment.submission.submittedAt));
    }

    setLoading(false);
  }, [assignmentId]);

  /* ANSWERS */
  const setAnswer = (qid, value) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
  };

  /*  FILES: Add / Remove */
  const addFiles = (fileList) => {
    const incoming = Array.from(fileList || []);
    if (incoming.length === 0) return;

    setFiles((prev) => {
      // prevent duplicates by name+size
      const map = new Map(prev.map((f) => [`${f.name}_${f.size}`, f]));
      incoming.forEach((f) => map.set(`${f.name}_${f.size}`, f));
      return Array.from(map.values());
    });
  };

  const handleFileInput = (e) => {
    addFiles(e.target.files);
    e.target.value = ""; // allow re-select same file
  };

  const removeFile = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  // Drag & Drop
  const onDragOver = (e) => e.preventDefault();
  const onDrop = (e) => {
    e.preventDefault();
    addFiles(e.dataTransfer.files);
  };

  /* SUBMIT */
  const canSubmit = useMemo(() => {
    // basic rule: at least one answer OR at least one file
    const hasAnyAnswer = Object.values(answers).some((v) => String(v || "").trim().length > 0);
    const hasFiles = files.length > 0;
    return hasAnyAnswer || hasFiles;
  }, [answers, files]);

  const handleSubmit = async () => {
    if (!canSubmit) return;

    // Later: send answers + files to backend
    // Example:
    // const formData = new FormData();
    // formData.append("assignmentId", assignment.id);
    // formData.append("answers", JSON.stringify(answers));
    // files.forEach((f) => formData.append("files", f));
    // await fetch(`/api/assignments/${assignment.id}/submit`, { method: "POST", body: formData });

    setSubmittedAt(new Date());
    setIsSubmitted(true);
  };

  const handleOpenFile = () => {
    alert("Open submitted file(s) from backend URL");
  };

  const formatSmallDate = (dateObj) => {
    if (!dateObj) return "";
    return dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  if (loading || !assignment) return <div>Loading...</div>;

  return (
    <div className="assignmentDetailPage">
      {/* Top bar */}
      <div className="assignmentTopBar">
        <button className="assignmentBack" onClick={() => navigate(-1)}>
          &lt; Back
        </button>
      </div>

      {/* Main white container */}
      <div className="assignmentDetailBox">
        {/* Subject + Search row */}
        <div className="assignmentDetailHeader">
          <h2 className="assignmentDetailSubject">{assignment.subject}</h2>
          <div className="assignmentSearch">
            <input placeholder="Search..." />
            <span className="assignmentSearchIcon">🔍</span>
          </div>
        </div>

        {/* Grey container */}
        <div className="assignmentDetailContent">
          {/* LEFT */}
          <div className="assignmentDetailLeft">
            <div className="assignmentTitleRow">
              <h3 className="assignmentDetailTitle">{assignment.assignmentNo}</h3>

              <span className={`statusPill ${isSubmitted ? "statusPill--ok" : "statusPill--bad"}`}>
                {isSubmitted ? "Submitted ✓" : "Not Submitted ✕"}
              </span>
            </div>

            <p className="assignmentDetailMeta">
              {assignment.teacher} - {assignment.assignedAt}
            </p>
            <p className="assignmentDetailDue">Due Date: {assignment.dueDate}</p>

            <div className="assignmentDetailDivider"></div>

            <p className="assignmentDetailLabel">Questions</p>

            {/* Questions */}
            <div className="questionsWrap">
              {assignment.questions.map((q, idx) => (
                <div key={q.id} className="questionCardUI">
                  <div className="questionTopRow">
                    <span className="questionIndex">{idx + 1}.</span>
                    <span className="questionText">{q.text}</span>
                  </div>

                  {q.type === "short" && (
                    <input
                      className="answerInput"
                      placeholder="Write your answer..."
                      value={answers[q.id] || ""}
                      onChange={(e) => setAnswer(q.id, e.target.value)}
                      disabled={isSubmitted}
                    />
                  )}

                  {q.type === "long" && (
                    <textarea
                      className="answerTextarea"
                      placeholder="Write detailed answer..."
                      value={answers[q.id] || ""}
                      onChange={(e) => setAnswer(q.id, e.target.value)}
                      disabled={isSubmitted}
                    />
                  )}

                  {q.type === "mcq" && (
                    <div className="mcqWrap">
                      {q.options.map((opt) => (
                        <label key={opt} className="mcqItem">
                          <input
                            type="radio"
                            name={`q-${q.id}`}
                            value={opt}
                            checked={answers[q.id] === opt}
                            onChange={(e) => setAnswer(q.id, e.target.value)}
                            disabled={isSubmitted}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Optional attachments list  */}
            <div className="attachTitle">Attach Additional Files <span className="muted">(Optional)</span></div>
            <div className="attachList">
              {files.map((f, idx) => (
                <div key={`${f.name}_${f.size}`} className="attachRow">
                  <div className="attachLeft">
                    <span className="attachIcon">📎</span>
                    <span className="attachName">{f.name}</span>
                  </div>
                  {!isSubmitted && (
                    <button className="removeFileBtn" onClick={() => removeFile(idx)} aria-label="Remove file">
                      ✕
                    </button>
                  )}
                  {isSubmitted && <span className="okChip">✓</span>}
                </div>
              ))}
              {files.length === 0 && <div className="attachEmpty">No files attached.</div>}
            </div>
          </div>

          {/* RIGHT */}
          <div className="assignmentDetailRight">
            <div className="yourWorkTop">
              <h4 className="assignmentDetailWorkTitle">Questions</h4>
              {isSubmitted && <span className="yourWorkDate">{formatSmallDate(submittedAt)}</span>}
            </div>

            {/* Drop Zone */}
            {!isSubmitted && (
              <div className="dropZoneBox" onDragOver={onDragOver} onDrop={onDrop}>
                <p className="dropTitle">Drag & Drop files here</p>
                <p className="dropOr">or</p>
                <label className="browseBtn">
                  Browse Files
                  <input type="file" multiple hidden onChange={handleFileInput} />
                </label>
              </div>
            )}

            {/* Selected Files */}
            <div className="rightFileList">
              {files.map((f, idx) => (
                <div key={`${f.name}_${f.size}_r`} className="rightFileItem">
                  <div className="rightFileName">{f.name}</div>
                  {!isSubmitted && (
                    <button className="removeFileBtn" onClick={() => removeFile(idx)}>
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Submit */}
            {!isSubmitted ? (
              <button className="bigSubmitBtn" onClick={handleSubmit} disabled={!canSubmit}>
                Submit Assignment
              </button>
            ) : (
              <>
                <button className="openFileBtn" onClick={handleOpenFile}>
                  Open File(s)
                </button>
                <button className="submittedBtn" disabled>
                  Submitted
                </button>
              </>
            )}
          </div>
        </div>

        {/* Attached teacher file strip */}
        <div style={{ marginTop: 12 }}>
          <div className="fileStrip">
            <div className="fileStripIcon">
              <span style={{ fontSize: 16 }}>📄</span>
            </div>
            <div className="fileStripName">{assignment.attachmentName}</div>
          </div>
        </div>
      </div>
    </div>
  );
}