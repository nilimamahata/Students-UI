import { useEffect, useRef, useState } from "react";
import "../styles/header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("Select Course");

  const dropdownRef = useRef(null);

  const courses = ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"];

  // close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSelect = (course) => {
    setSelectedCourse(course);
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="header__left">
        <h3 className="header__title">Welcome Back Student</h3>
        <p className="header__subtitle">Let’s learn something new today</p>
      </div>

      {/* CENTER dropdown */}
      <div className="header__courseWrap" ref={dropdownRef}>
        <button
          className="header__btn"
          onClick={() => setOpen((prev) => !prev)}
        >
          {selectedCourse}
        </button>

        {open && (
          <div className="header__dropdown">
            {courses.map((course) => (
              <div
                key={course}
                className="header__dropdownItem"
                onClick={() => handleSelect(course)}
              >
                {course}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="header__right">
        <div className="header__avatar">👤</div>
      </div>
    </header>
  );
}
