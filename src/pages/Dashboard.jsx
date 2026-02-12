import { useState } from "react";
import SessionCard from "../components/SessionCard";
import AssignmentCard from "../components/AssignmentCard";
import NotificationCard from "../components/NotificationCard";
import DropdownMenu from "../components/DropdownMenu";
import TopSliderTabs from "../components/TopSliderTabs";
import "../styles/dashboard.css";

export default function Dashboard() {
  /* ------------------ MOBILE TAB STATE ------------------ */
  const [activeTab, setActiveTab] = useState("sessions");

  /* ------------------ COMMON STATE ------------------ */
  const [showAllSessions, setShowAllSessions] = useState(false);
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
    currMonth === 0
      ? (setCurrMonth(11), setCurrYear(y => y - 1))
      : setCurrMonth(m => m - 1);
  };

  const goToNextMonth = () => {
    currMonth === 11
      ? (setCurrMonth(0), setCurrYear(y => y + 1))
      : setCurrMonth(m => m + 1);
  };

  const parseScheduleDate = (dateStr) => {
    const [d, m, y] = dateStr.split(" ")[0].split("/");
    return new Date(y, m - 1, d);
  };

  /* ------------------ DATA ------------------ */
  const sessions = [
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
  ];

  const collapsedSessions = sessions.slice(0, 3);

  const assignments = [
    { title: "Mathematics chapter 1 algebra", teacher: "Sir Zothana", due: "23/01/2026 (Fri)" },
  ];

  const quizzes = [
  {
    id: "1",
    title: "Science chapter 1 Biology",
    teacher: "Miss Ruaifeli",
    due: "23/01/2026 (Fri)",
  },
];


  const notifications = [
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
  ];

  const schedule = [
    {
      date: "23/01/2026 (Fri)",
      title: "Live Session",
      subject: "Mathematics",
      time: "3:00 – 4:00 PM",
      type: "Live Sessions",
    },
  ];

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
                {showAllSessions ? "˄" : "˅"}
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
              <span onClick={goToPrevMonth}>◀</span>

              <div className="calendarHeader__mid">
                <select value={currMonth} onChange={(e) => setCurrMonth(+e.target.value)}>
                  {months.map((m, i) => (
                    <option key={m} value={i}>{m.substring(0, 3)}</option>
                  ))}
                </select>

                <select value={currYear} onChange={(e) => setCurrYear(+e.target.value)}>
                  {years.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <span onClick={goToNextMonth}>▶</span>
            </div>

            <div className="calendarGrid">
              {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => (
                <div key={d} className="calDayName">{d}</div>
              ))}

              {Array.from({ length: startOffset }).map((_, i) => (
                <div key={i} className="calDate empty" />
              ))}

              {Array.from({ length: daysInMonth }, (_, i) => {
                const dateObj = new Date(currYear, currMonth, i + 1);
                return (
                  <div
                    key={i}
                    className={`calDate ${
                      dateObj.toDateString() === today.toDateString() ? "calToday" : ""
                    }`}
                  >
                    {i + 1}
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
                <h3>Assignment</h3>
                {assignments.map((a, i) => (
                  <AssignmentCard key={i} {...a} />
                ))}
              </div>

              <div className="whiteCard">
                <h3>Quiz</h3>
                {quizzes.map((q, i) => (
                  <AssignmentCard key={i} {...q} />
                ))}
              </div>
            </div>

            <div className="whiteCard">
              <div className="cardHeader">
                <h3>Notification</h3>
                <DropdownMenu value={notificationFilter} onChange={setNotificationFilter} />
              </div>

              {filteredNotifications.map((n, i) => (
                <NotificationCard key={i} {...n} />
              ))}
            </div>

            <div className="whiteCard">
              <div className="cardHeader">
                <h3>Schedule</h3>
                <DropdownMenu value={scheduleFilter} onChange={setScheduleFilter} />
              </div>

              {filteredScheduleDesktop.map((s, i) => (
                <div key={i} className="scheduleItem">
                  <p>{s.title}</p>
                  <p>{s.subject}</p>
                  <p>{s.time}</p>
                </div>
              ))}
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
