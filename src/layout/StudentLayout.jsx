import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../styles/studentLayout.css";

export default function StudentLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedRight: (eventData) => {
      // Agar sidebar open hai to swipe ignore
      if (menuOpen) return;

      // Edge swipe only
      if (eventData.initial[0] < 40) {
        if (window.history.length > 1) {
          navigate(-1);
        } else {
          navigate("/"); // fallback page
        }
      }
    },
    delta: 80,
    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  return (
    <div className="studentLayout" {...handlers}>
      
      {/* Overlay (Mobile only) */}
      {menuOpen && (
        <div
          className="mobileOverlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`studentLayout__sidebar ${
          menuOpen ? "showSidebar" : ""
        }`}
      >
        <Sidebar />
      </div>

      {/* Right Section */}
      <div className="studentLayout__right">
        <Header
          toggleMenu={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        />
        <div className="studentLayout__page">
          <Outlet />
        </div>
      </div>
    </div>
  );
}