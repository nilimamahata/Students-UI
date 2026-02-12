import { useEffect, useRef, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import "../styles/header.css";

export default function Header({ toggleMenu, menuOpen }) {
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
      
      {/*  Hamburger (Mobile Only) */}
      <div className="header__hamburger" onClick={toggleMenu}>
        {menuOpen ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
      </div>

      <div className="header__left">
        <h3 className="header__title">Dashboard</h3>
        
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
