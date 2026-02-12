import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentLayout from "./layout/StudentLayout";
import StudentRoutes from "./routes/StudentRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentLayout />}>
          {StudentRoutes()}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
