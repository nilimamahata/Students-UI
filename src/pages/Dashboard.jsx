import { useState, useEffect } from "react";
import SessionCard from "../components/SessionCard";
import AssignmentCard from "../components/AssignmentCard";
import NotificationCard from "../components/NotificationCard";
import DropdownMenu from "../components/DropdownMenu";
import TopSliderTabs from "../components/TopSliderTabs";
import "../styles/dashboard.css";
import QuizCard from "../components/QuizCard";


export default function Dashboard() {
  /* ------------------ MOBILE TAB STATE ------------------ */
  const [activeTab, setActiveTab] = useState("sessions");

  /* ------------------ COMMON STATE ------------------ */
  const [showAllSessions, setShowAllSessions] = useState(false);
  const [showAssignments, setShowAssignments] = useState(true);
  const [showQuizzes, setShowQuizzes] = useState(true);
  const [notificationFilter, setNotificationFilter] = useState("All");
  const [scheduleFilter, setScheduleFilter] = useState("All");

  /* ------------------ CALENDAR STATE ------------------ */
  const today = new Date();
  const [currMonth, setCurrMonth] = useState(today.getMonth());
  const [currYear, setCurrYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today);

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const years = Array.from({ length: 81 }, (_, i) => 1970 + i);

  const daysInMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const firstDayIndex = new Date(currYear, currMonth, 1).getDay();
  const startOffset = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

  const goToPrevMonth = () => {
    if (currMonth === 0) {
      setCurrMonth(11);
      setCurrYear(currYear - 1);
    } else {
      setCurrMonth(currMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currMonth === 11) {
      setCurrMonth(0);
      setCurrYear(currYear + 1);
    } else {
      setCurrMonth(currMonth + 1);
    }
  };

  const parseScheduleDate = (dateStr) => {
    const [d, m, y] = dateStr.split(" ")[0].split("/");
    return new Date(y, m - 1, d);
  };

  /* ------------------ STATE FOR DATA (future backend) ------------------ */
  const [sessions, setSessions] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [schedule, setSchedule] = useState([]);

  // Mock data (simulates backend response)
  useEffect(() => {
    const mockSessions = [
      {
        id: "1",
        img: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=400",
        subject: "Subject Name",
        topic: "Session Title/Topic",
        teacher: "Teacher Name",
        dateTime: "Session date",
      },
      {
        id: "2",
        img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400",
        subject: "Subject Name",
        topic: "Session Title/Topic",
        teacher: "Teacher Name",
        dateTime: "Session date",
      },
      {
        id: "3",
        img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400",
        subject: "Subject Name",
        topic: "Session Title/Topic",
        teacher: "Teacher Name",
        dateTime: "Session date",
      },
      {
        id: "4",
        img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400",
        subject: "Subject Name",
        topic: "Session Title/Topic",
        teacher: "Teacher Name",
        dateTime: "Session date",
      },
      {
        id: "5",
        img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400",
        subject: "Subject Name",
        topic: "Session Title/Topic",
        teacher: "Teacher Name",
        dateTime: "Session date",
      },
      {
        id: "6",
        img: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=400",
        subject: "Subject Name",
        topic: "Session Title/Topic",
        teacher: "Teacher Name",
        dateTime: "Session date",
      },
    ];

    const mockAssignments = [
      { title: "Mathematics chapter 1 algebra", teacher: "Sir Zothana", due: "23/01/2026 (Fri)" },
      { title: "English chapter 1 Poem", teacher: "Miss Ruaifeli", due: "02/02/2026 (Tue)" },
      { title: "English chapter 1 Poem", teacher: "Miss Ruaifeli", due: "02/02/2026 (Tue)" },
    ];

    const mockQuizzes = [
      { id: "1", title: "Science chapter 1 Biology", teacher: "Miss Ruaifeli", due: "23/01/2026 (Friday)" },
      { id: "2", title: "Science chapter 1 Biology", teacher: "Miss Ruaifeli", due: "23/01/2026 (Friday)" },
    ];

    const mockNotifications = [
      {
        title: "New Assignment updated",
        subject: "Mathematics chapter 1 algebra",
        teacher: "Teacher: Sir Zothana",
        time: "Due Date: 23/01/2026 (Fri)",
        type: "Assignments",
      },
      {
        title: "New Live Session date updated",
        subject: "Mathematics chapter 1 algebra",
        teacher: "Teacher: Sir Zothana",
        time: "Time: 1:00pm to 2:00pm",
        type: "Live Sessions",
      },
      {
        title: "New Quiz updated",
        subject: "Science chapter 1 Biology",
        teacher: "Teacher: Miss Ruaifeli",
        time: "Time: 1:00pm to 2:00pm",
        type: "Quiz",
      },
      {
        title: "New Assignment updated",
        subject: "Mathematics chapter 1 algebra",
        teacher: "Teacher: Sir Zothana",
        time: "Due Date: 23/01/2026 (Fri)",
        type: "Assignments",
      },
    ];

    const mockSchedule = [
      {
        date: "21/01/2026 (Wed)",
        title: "Live Session",
        subject: "Mathematics chapter 1 algebra",
        teacher: "Teacher: Sir Zothana",
        time: "Time: 3:00pm to 4:00pm",
        type: "Live Sessions",
      },
      {
        date: "21/01/2026 (Wed)",
        title: "Due Assignments",
        subject: "Mathematics chapter 1 algebra",
        teacher: "Teacher: Sir Zothana",
        time: "Due Date: 23/01/2026",
        type: "Assignments",
      },
      {
        date: "21/01/2026 (Wed)",
        title: "Quiz",
        subject: "Science chapter 1 Chemistry",
        teacher: "Teacher: Miss Ruaifeli",
        time: "Time: 10:00am to 12:00pm",
        type: "Quiz",
      },
      {
        date: "23/01/2026 (Fri)",
        title: "Due Assignments",
        subject: "Mathematics chapter 1 algebra",
        teacher: "Teacher: Sir Zothana",
        time: "Due Date: 23/01/2026",
        type: "Assignments",
      },
      {
        date: "29/01/2026 (Thu)",
        title: "Live Session",
        subject: "Science chapter 1 Biology",
        teacher: "Teacher: Sir Zothana",
        time: "Time: 2:00pm to 3:00pm",
        type: "Live Sessions",
      },
    ];

    setSessions(mockSessions);
    setAssignments(mockAssignments);
    setQuizzes(mockQuizzes);
    setNotifications(mockNotifications);
    setSchedule(mockSchedule);
  }, []);

{/*   // example for backend //

  useEffect(() => {
  fetch("/api/dashboard")
    .then((res) => res.json())
    .then((data) => {
      setSessions(data.sessions);
      setAssignments(data.assignments);
      setQuizzes(data.quizzes);
      setNotifications(data.notifications);
      setSchedule(data.schedule);
    });
}, []);

*/}

  const collapsedSessions = sessions.slice(0, 3);

  const filteredNotifications =
    notificationFilter === "All"
      ? notifications
      : notifications.filter(n => n.type === notificationFilter);

  const filteredScheduleDesktop =
    scheduleFilter === "All"
      ? schedule
      : schedule.filter(s => s.type === scheduleFilter);

  const filteredScheduleMobile = schedule.filter(item => {
    const itemDate = parseScheduleDate(item.date);
    return itemDate.toDateString() === selectedDate.toDateString();
  });

  return (
    <div className="dashExact">

      {/*  MOBILE TOP SLIDER */}
      <div className="mobileOnly">
        <TopSliderTabs active={activeTab} setActive={setActiveTab} />
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="desktopOnly">

        {/* TOP SECTION */}
        <div className="dashExact__top">
          <div className="whiteCard">
            <div className="cardHeader">
              <h3>Upcoming Live Sessions</h3>
              <button
                className="arrowBtn"
                onClick={() => setShowAllSessions(!showAllSessions)}
              >
                <span className={`arrowBtn__chevron ${showAllSessions ? "arrowBtn__chevron--up" : ""}`}>
                  <svg width="14" height="10" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>

            <div className={showAllSessions ? "sessionsGridExpanded" : "sessionsGridCollapsed"}>
              {(showAllSessions ? sessions : collapsedSessions).map((s, i) => (
                <SessionCard key={i} {...s} />
              ))}
            </div>
          </div>

          {/* CALENDAR */}
          <div className="calendarBox">
            <div className="calendarHeader">
              <span style={{ cursor: "pointer" }} onClick={goToPrevMonth}>◀</span>

              <div className="calendarHeader__mid">
                <select className="calendarSelect" value={currMonth} onChange={(e) => setCurrMonth(parseInt(e.target.value))}>
                  {months.map((m, i) => (
                    <option key={m} value={i}>{m.substring(0, 3)}</option>
                  ))}
                </select>

                <select className="calendarSelect" value={currYear} onChange={(e) => setCurrYear(parseInt(e.target.value))}>
                  {years.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <span style={{ cursor: "pointer" }} onClick={goToNextMonth}>▶</span>
            </div>

            <div className="calendarGrid">
              {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => (
                <div key={d} className="calDayName">{d}</div>
              ))}

              {Array.from({ length: startOffset }).map((_, i) => (
                <div key={`empty-${i}`} className="calDate" style={{ visibility: "hidden" }}></div>
              ))}

              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1;
                const isToday =
                  day === today.getDate() &&
                  currMonth === today.getMonth() &&
                  currYear === today.getFullYear();

                return (
                  <div key={day} className={`calDate ${isToday ? "calToday" : ""}`}>
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        {!showAllSessions && (
          <div className="dashExact__bottom">

            <div className="dashExact__leftCol">
              <div className="whiteCard">
                <div
                  className="cardHeader cardHeader--clickable"
                  onClick={() => setShowAssignments(!showAssignments)}
                >
                  <h3>Assignment</h3>
                  <button className="arrowBtn">
                    <span className={`arrowBtn__chevron ${showAssignments ? "arrowBtn__chevron--up" : ""}`}>
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </div>

                {showAssignments && (
                  <div className="listBody">
                    {assignments.map((a, i) => (
                      <AssignmentCard key={i} {...a} />
                    ))}
                  </div>
                )}
              </div>

              <div className="whiteCard">
                <div
                  className="cardHeader cardHeader--clickable"
                  onClick={() => setShowQuizzes(!showQuizzes)}
                >
                  <h3>Quiz</h3>
                  <button className="arrowBtn">
                    <span className={`arrowBtn__chevron ${showQuizzes ? "arrowBtn__chevron--up" : ""}`}>
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </div>

                {showQuizzes && (
                  <div className="listBody">
                    {quizzes.map((q, i) => (
                      <AssignmentCard key={i} {...q} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="whiteCard">
              <div className="cardHeader">
                <h3>Notification</h3>
                <DropdownMenu value={notificationFilter} onChange={setNotificationFilter} />
              </div>

              <div className="notifBody">
                {filteredNotifications.map((n, i) => (
                  <NotificationCard key={i} {...n} />
                ))}
              </div>
            </div>

            <div className="whiteCard">
              <div className="cardHeader">
                <h3>Schedule</h3>
                <DropdownMenu value={scheduleFilter} onChange={setScheduleFilter} />
              </div>

              <div className="scheduleList">
                {filteredScheduleDesktop.map((s, i) => (
                  <div key={i} className="scheduleItem">
                    <p className="scheduleDate">{s.date}</p>
                    <p className="scheduleTitle">{s.title}</p>
                    <p className="scheduleSub">{s.subject}</p>
                    <p className="scheduleSub">{s.teacher}</p>
                    <p className="scheduleSub">{s.time}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>

      {/* ================= MOBILE ================= */}
      <div className="mobileOnly">

        {activeTab === "sessions" &&
          sessions.map((s, i) => <SessionCard key={i} {...s} />)}

        {activeTab === "assign" &&
          assignments.map((a, i) => <AssignmentCard key={i} {...a} />)}

        {activeTab === "quiz" &&
          quizzes.map((q, i) => <AssignmentCard key={i} {...q} />)}

        {activeTab === "notify" &&
          notifications.map((n, i) => <NotificationCard key={i} {...n} />)}

        {activeTab === "calendar" && (
          <>
            <div className="calendarBox">
              <div className="calendarHeader">
                <span onClick={goToPrevMonth}>◀</span>
                <strong>{months[currMonth]} {currYear}</strong>
                <span onClick={goToNextMonth}>▶</span>
              </div>

              <div className="calendarGrid">
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const dateObj = new Date(currYear, currMonth, i + 1);
                  return (
                    <div
                      key={i}
                      className={`calDate ${
                        dateObj.toDateString() === selectedDate.toDateString()
                          ? "calSelected"
                          : ""
                      }`}
                      onClick={() => setSelectedDate(dateObj)}
                    >
                      {i + 1}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="whiteCard">
              {filteredScheduleMobile.length === 0
                ? <p className="emptyState">No events</p>
                : filteredScheduleMobile.map((item, i) => (
                    <div key={i} className="scheduleItem">
                      <p>{item.title}</p>
                      <p>{item.subject}</p>
                      <p>{item.time}</p>
                    </div>
                  ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
