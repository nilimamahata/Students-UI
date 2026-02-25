import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AssignmentPendingCard from "../components/AssignmentPendingCard";
import AssignmentCompletedCard from "../components/AssignmentCompletedCard";
import "../styles/assignmentPending.css";

export default function SubjectsAssignments() {
  const navigate = useNavigate();
  const { tab } = useParams();
  const [activeTab, setActiveTab] = useState(tab || "pending");
  useEffect(() => {
  if (tab) {
    setActiveTab(tab);
  }
}, [tab]);

  // State for data (future backend data)
  const [pendingData, setPendingData] = useState([]);
  const [completedData, setCompletedData] = useState([]);

  // Mock data (simulates backend response)
  useEffect(() => {
    const mockPendingData = [
    { id: 1, title: "Asgn./Quiz - X", teacher: "Teacher Name", deadline: "Date & Time (Deadline)" },
    { id: 2, title: "Asgn./Quiz - X", teacher: "Teacher Name", deadline: "Date & Time (Deadline)" },
    { id: 3, title: "Asgn./Quiz - X", teacher: "Teacher Name", deadline: "Date & Time (Deadline)" },
    { id: 4, title: "Asgn./Quiz - X", teacher: "Teacher Name", deadline: "Date & Time (Deadline)" },
    { id: 5, title: "Asgn./Quiz - X", teacher: "Teacher Name", deadline: "Date & Time (Deadline)" },
    { id: 6, title: "Asgn./Quiz - X", teacher: "Teacher Name", deadline: "Date & Time (Deadline)" },
    { id: 7, title: "Asgn./Quiz - X", teacher: "Teacher Name", deadline: "Date & Time (Deadline)" },
  ];

    const mockCompletedData = [
      { id: 1, title: "Asgn./Quiz - X", teacher: "Teacher Name", completedDate: "Date & Time (Completed)" },
      { id: 2, title: "Asgn./Quiz - X", teacher: "Teacher Name", completedDate: "Date & Time (Completed)" },
      { id: 3, title: "Asgn./Quiz - X", teacher: "Teacher Name", completedDate: "Date & Time (Completed)" },
      { id: 4, title: "Asgn./Quiz - X", teacher: "Teacher Name", completedDate: "Date & Time (Completed)" },
      { id: 5, title: "Asgn./Quiz - X", teacher: "Teacher Name", completedDate: "Date & Time (Completed)" },
    ];

    setPendingData(mockPendingData);
    setCompletedData(mockCompletedData);
  }, []);

{/*   // example for backend //

  useEffect(() => {
  fetch("/api/subjects-assignments")
    .then((res) => res.json())
    .then((data) => {
      setPendingData(data.pending);
      setCompletedData(data.completed);
    });
}, []);

*/}

  return (
    <div className="assignmentPage">
      {/* Back button — outside the header box, above it */}
      <button className="assignmentBack" onClick={() => navigate(-1)}>
        &lt; Back
      </button>

      {/* Header box — fixed, does not scroll */}
      <div className="assignmentHeaderBox">
        {/* Top row: title | search */}
        <div className="assignmentHeaderRow">
          <h2 className="assignmentSubjectTitle">Subject Name</h2>
          <div className="assignmentSearch">
            <input placeholder="Search..." />
            <span className="assignmentSearchIcon">🔍</span>
          </div>
        </div>

        {/* Tabs — attached to bottom of header */}
        <div className="assignmentTabs">
          <button
            className={`assignmentTab ${activeTab === "pending" ? "assignmentTab--active" : ""}`}
            onClick={() => setActiveTab("pending")}
          >
            Pending
          </button>
          <button
            className={`assignmentTab ${activeTab === "completed" ? "assignmentTab--active" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Body box — scrolls */}
      <div className="assignmentBodyBox">
        <div className="assignmentGrid">
          {activeTab === "pending" &&
            pendingData.map((item) => (
              <AssignmentPendingCard key={item.id} {...item} />
            ))}
          {activeTab === "completed" &&
            completedData.map((item) => (
              <AssignmentCompletedCard key={item.id} {...item} />
            ))}
        </div>
      </div>
    </div>
  );
}
