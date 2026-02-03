import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/assignmentDetail.css";

export default function AssignmentDetail() {
  const navigate = useNavigate();
<<<<<<< HEAD

  // BEFORE submit
  const [uploadedFile, setUploadedFile] = useState(null);

  // AFTER submit
  const [isSubmitted, setIsSubmitted] = useState(false);

  // submission time (for display)
  const [submittedAt, setSubmittedAt] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
=======
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
>>>>>>> 915fef792b7169a0c634dca13309c00526be6516
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleSubmit = () => {
<<<<<<< HEAD
    if (!uploadedFile) return;

    // UI state 
    const now = new Date();
    setSubmittedAt(now);
    setIsSubmitted(true);
  };

  const handleOpenFile = () => {
    if (!uploadedFile) return;
    alert(`Opening file: ${uploadedFile.name}`);
  };

  const formatSubmittedTop = (dateObj) => {
    if (!dateObj) return "";
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const d = dateObj.toLocaleDateString("en-GB", options);
    const t = dateObj.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return `Submitted: ${d} / ${t}`;
  };

  const formatSmallDate = (dateObj) => {
    if (!dateObj) return "";
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return dateObj.toLocaleDateString("en-GB", options);
=======
    if (uploadedFile) {
      alert(`Assignment submitted with file: ${uploadedFile.name}`);
      // Handle actual submission logic here
    } else {
      alert("Please upload a file first");
    }
>>>>>>> 915fef792b7169a0c634dca13309c00526be6516
  };

  return (
    <div className="assignmentDetailPage">
<<<<<<< HEAD
      {/*Top fixed bar inside page */}
      <div className="assignmentTopBar">
        <button className="assignmentBack" onClick={() => navigate(-1)}>
          &lt; Back
        </button>
      </div>

      {/* Main white container */}
      <div className="assignmentDetailBox">
        {/* Subject + Search row */}
        <div className="assignmentDetailHeader">
          <h2 className="assignmentDetailSubject">Subject Name</h2>

=======
      <div className="assignmentDetailBox">
        {/* Back Button */}
        <button className="assignmentBack" onClick={() => navigate(-1)}>
          &lt; Back
        </button>

        {/* Subject Title and Search */}
        <div className="assignmentDetailHeader">
          <h2 className="assignmentDetailSubject">Subject Name</h2>
>>>>>>> 915fef792b7169a0c634dca13309c00526be6516
          <div className="assignmentSearch">
            <input placeholder="Search..." />
            <span className="assignmentSearchIcon">🔍</span>
          </div>
        </div>

<<<<<<< HEAD
        {/* Light grey assignment container */}
        <div className="assignmentDetailContent">
          {/* LEFT: Assignment information */}
          <div className="assignmentDetailLeft">
            <div className="assignmentTitleRow">
              <h3 className="assignmentDetailTitle">Assignment No. X</h3>

              {/*shown only after submit */}
              {isSubmitted && (
                <p className="submittedTopText">
                  {formatSubmittedTop(submittedAt)}
                </p>
              )}
            </div>

            <p className="assignmentDetailMeta">Miss Ruaifeli - 21 Jan 2026</p>
=======
        {/* Assignment Content */}
        <div className="assignmentDetailContent">
          {/* Left Section - Assignment Info */}
          <div className="assignmentDetailLeft">
            <h3 className="assignmentDetailTitle">Assignment No. X</h3>
            <p className="assignmentDetailMeta">
              Miss Ruatfeli - 21 Jan 2026
            </p>
>>>>>>> 915fef792b7169a0c634dca13309c00526be6516
            <p className="assignmentDetailDue">Due Date: 24 Jan 2026</p>

            <div className="assignmentDetailDivider"></div>

            <p className="assignmentDetailLabel">Title: Biology chapter 1</p>
            <p className="assignmentDetailDesc">
              Description: Answer all the questions on the attached file
            </p>

<<<<<<< HEAD
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
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="#444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2V8H20"
                    stroke="#444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="fileStripName">
                Science biology assignment [file name]
              </div>
            </div>
          </div>

          {/* RIGHT: Your Work card */}
          <div className="assignmentDetailRight">
            <div className="yourWorkTop">
              <h4 className="assignmentDetailWorkTitle">Your Work</h4>

              {/*after submit small date on right */}
              {isSubmitted && (
                <span className="yourWorkDate">{formatSmallDate(submittedAt)}</span>
              )}
            </div>

            {/* BEFORE SUBMIT */}
            {!isSubmitted && (
              <>
                <label className="assignmentDetailUploadBtn">
                  <input type="file" onChange={handleFileUpload} hidden />
                  [Upload File]
                </label>

                <button
                  className="assignmentDetailSubmitBtn"
                  onClick={handleSubmit}
                  disabled={!uploadedFile}
                >
                  Submit
                </button>
              </>
            )}

            {/* AFTER SUBMIT */}
            {isSubmitted && (
              <>
                <button className="openFileBtn" onClick={handleOpenFile}>
                  [Open File]
                </button>

                <button className="submittedBtn" disabled>
                  Submitted
                </button>
              </>
            )}
=======
            <div className="assignmentDetailDivider"></div>

            {/* Attached File */}
            <div className="assignmentDetailFile">
              <div className="assignmentDetailFileIcon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="assignmentDetailFileName">
                Science biology assignment [file name]
              </span>
            </div>

            <div className="assignmentDetailDivider"></div>
          </div>

          {/* Right Section - Your Work */}
          <div className="assignmentDetailRight">
            <h4 className="assignmentDetailWorkTitle">Your Work</h4>

            <label className="assignmentDetailUploadBtn">
              <input
                type="file"
                onChange={handleFileUpload}
                style={{ display: "none" }}
              />
              [Upload File]
            </label>

            {uploadedFile && (
              <p className="assignmentDetailUploadedFile">
                {uploadedFile.name}
              </p>
            )}

            <button className="assignmentDetailSubmitBtn" onClick={handleSubmit}>
              Submit
            </button>
>>>>>>> 915fef792b7169a0c634dca13309c00526be6516
          </div>
        </div>
      </div>
    </div>
  );
}
