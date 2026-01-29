import SessionCard from "../components/SessionCard";
import AssignmentCard from "../components/AssignmentCard";
import NotificationCard from "../components/NotificationCard";
import "../styles/dashboard.css";

export default function Dashboard() {
  const sessions = [
    {
      img: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=400",
      subject: "Subject Name",
      topic: "Topic",
      teacher: "Teacher Name",
      dateTime: "Session date",
    },
    {
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400",
      subject: "Subject Name",
      topic: "Topic",
      teacher: "Teacher Name",
      dateTime: "Session date",
    },
    {
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400",
      subject: "Subject Name",
      topic: "Topic",
      teacher: "Teacher Name",
      dateTime: "Session date",
    },
  ];

  const assignments = [
    { title: "Mathematics chapter 1 algebra", teacher: "Zohra", due: "23/01/2026 (Fri)" },
    { title: "English chapter 1 Poem", teacher: "Mizuri", due: "22/01/2026 (Thu)" },
    { title: "Science chapter 2 Biology", teacher: "Mukuri", due: "21/01/2026 (Wed)" },
  ];

  const quizzes = [
    { title: "Science chapter 1 Biology", teacher: "Mukuri", due: "23/01/2026 (Friday)" },
    { title: "Mathematics chapter 1 Algebra", teacher: "Zohra", due: "22/01/2026 (Thursday)" },
  ];

  const notifications = [
    { title: "New Assignment updated", subject: "Mathematics chapter 1 algebra", teacher: "Teacher: Zohra", time: "Time: 3:00pm to 4:00pm" },
    { title: "New Live Session date updated", subject: "Mathematics chapter 1 algebra", teacher: "Teacher: Zohra", time: "Time: 1:00pm to 2:00pm" },
    { title: "New Quiz updated", subject: "Science chapter 2 Biology", teacher: "Teacher: Mukuri", time: "Time: 2:00pm to 3:00pm" },
  ];

  const todaySessions = [
    { date: "21/01/2026 (Wed)", title: "Live Session", subject: "Mathematics chapter 1 algebra", teacher: "Teacher: Zohra", time: "Time: 3:00pm to 4:00pm" },
    { date: "21/01/2026 (Wed)", title: "Quiz", subject: "Science chapter 1 Chemistry", teacher: "Teacher: Mizuri", time: "Time: 1:00pm to 2:00pm" },
    { date: "23/01/2026 (Fri)", title: "Assignment", subject: "Mathematics chapter 1 algebra", teacher: "Teacher: Zohra", time: "Due Date: 23/01/2026" },
  ];

  return (
    <div className="dashboard">

      {/* TOP GRID: sessions + calendar */}
      <div className="dashboardTop">
        <div className="dashboardTop__sessions">
          <div className="cardHeader">
            <h3>Upcoming Live Sessions</h3>
            <select className="smallSelect">
              <option>All</option>
            </select>
          </div>

          <div className="sessionsRow">
            {sessions.map((s, idx) => (
              <SessionCard key={idx} {...s} />
            ))}
          </div>
        </div>

        <div className="dashboardTop__calendar">
          <div className="calendarBox">
            <div className="calendarHeader">
              <span>◀</span>
              <div>
                <strong>Jan</strong> <span style={{ marginLeft: 10 }}>2026</span>
              </div>
              <span>▶</span>
            </div>

            <div className="calendarGrid">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                <div key={d} className="calDayName">{d}</div>
              ))}

              {Array.from({ length: 31 }, (_, i) => (
                <div key={i} className="calDate">{i + 1}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="dashboardBottom">

        {/* Assignment */}
        <div className="whiteCard">
          <div className="cardHeader">
            <h3>Assignment</h3>
            <select className="smallSelect">
              <option>All</option>
            </select>
          </div>

          <div className="listBody">
            {assignments.map((a, idx) => (
              <AssignmentCard key={idx} {...a} />
            ))}
          </div>
        </div>

        {/* Notification */}
        <div className="whiteCard">
          <div className="cardHeader">
            <h3>Notification</h3>
            <select className="smallSelect">
              <option>All</option>
            </select>
          </div>

          <div className="notifBody">
            {notifications.map((n, idx) => (
              <NotificationCard key={idx} {...n} />
            ))}
          </div>
        </div>

        {/* Live sessions list */}
        <div className="whiteCard">
          <div className="cardHeader">
            <h3>8 Jan 2026</h3>
            <select className="smallSelect">
              <option>All</option>
            </select>
          </div>

          <div className="listBody">
            {todaySessions.map((t, idx) => (
              <div key={idx} className="todayItem">
                <p className="todayItem__date">{t.date}</p>
                <p className="todayItem__title">{t.title}</p>
                <p className="todayItem__sub">{t.subject}</p>
                <p className="todayItem__sub">{t.teacher}</p>
                <p className="todayItem__sub">{t.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quiz (bottom left like design) */}
        <div className="whiteCard dashboardQuiz">
          <div className="cardHeader">
            <h3>Quiz</h3>
            <select className="smallSelect">
              <option>All</option>
            </select>
          </div>

          <div className="listBody">
            {quizzes.map((q, idx) => (
              <AssignmentCard key={idx} {...q} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
