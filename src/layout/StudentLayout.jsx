import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/studentLayout.css";

export default function StudentLayout() {
  return (
    <div className="studentLayout">
      <Sidebar />

      <div className="studentLayout__right">
        <Header />
        <div className="studentLayout__page">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
