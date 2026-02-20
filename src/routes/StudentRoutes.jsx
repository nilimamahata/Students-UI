import { Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import ChangePassword from "../pages/ChangePassword";
import Subjects from "../pages/Subjects";
import SubjectDetails from "../pages/SubjectDetails";
import SubjectsAssignments from "../pages/SubjectsAssignments";
import AssignmentDetail from "../pages/AssignmentDetail";
import SubjectsQuiz from "../pages/SubjectsQuiz";
import QuizList from "../pages/QuizList";
import QuizDetail from "../pages/QuizDetail";
import QuizResult from "../pages/QuizResult";
import SubjectsRecordings from "../pages/SubjectsRecordings";
import RecordingsList from "../pages/RecordingsList";
import RecordingDetail from "../pages/RecordingDetail";
import SubjectsStudyMaterial from "../pages/SubjectsStudyMaterial";
import StudyMaterialList from "../pages/StudyMaterialList";
import LiveSessions from "../pages/LiveSessions";
import LiveSessionDetail from "../pages/LiveSessionDetail";
import Quiz from "../pages/Quiz";

export default function StudentRoutes() {
  return (
    <>
      <Route index element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="change-password" element={<ChangePassword />} />

      <Route path="subjects" element={<Subjects />} />
      <Route path="subjects/:id" element={<SubjectDetails />} />
      <Route path="subjects/assignments" element={<SubjectsAssignments />} />
      <Route path="subjects/assignments/:tab" element={<SubjectsAssignments />} />
      <Route path="subjects/assignments/detail/:id" element={<AssignmentDetail />} />
      <Route path="subjects/quiz" element={<SubjectsQuiz />} />
      <Route path="subjects/quiz/:subjectId" element={<QuizList />} />
      <Route path="subjects/quiz/:subjectId/take/:quizId" element={<QuizDetail />} />
      <Route path="subjects/quiz/:subjectId/result/:quizId" element={<QuizResult />} />
      <Route path="subjects/recordings" element={<SubjectsRecordings />} />
      <Route path="subjects/recordings/:id" element={<RecordingsList />} />
      <Route path="subjects/recordings/:id/video/:videoId" element={<RecordingDetail />} />
      <Route path="subjects/study-material" element={<SubjectsStudyMaterial />} />
      <Route path="subjects/study-material/:id" element={<StudyMaterialList />} />

      <Route path="live-sessions" element={<LiveSessions />} />
      <Route path="live-sessions/:id" element={<LiveSessionDetail />} />
      <Route path="quiz" element={<Quiz />} />

      <Route path="*" element={<h2 style={{ padding: "2rem" }}>404 — Page not found</h2>} />
    </>
  );
}
