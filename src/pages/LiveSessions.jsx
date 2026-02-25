import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import "../styles/liveSessions.css";

export default function LiveSessions() {
  const navigate = useNavigate();

  const sessions = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600",
      title: "Session Title/Topic",
      teacher: "Teacher Name",
      date: "Date & Time",
      status: "Live Indicator (Live now or Starts at 5:00 PM)",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600",
      title: "Session Title/Topic",
      teacher: "Teacher Name",
      date: "Date & Time",
      status: "Live Indicator (Live now or Starts at 5:00 PM)",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600",
      title: "Session Title/Topic",
      teacher: "Teacher Name",
      date: "Date & Time",
      status: "Live Indicator (Live now or Starts at 5:00 PM)",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
      title: "Session Title/Topic",
      teacher: "Teacher Name",
      date: "Date & Time",
      status: "Live Indicator (Live now or Starts at 5:00 PM)",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600",
      title: "Session Title/Topic",
      teacher: "Teacher Name",
      date: "Date & Time",
      status: "Live Indicator (Live now or Starts at 5:00 PM)",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
      title: "Session Title/Topic",
      teacher: "Teacher Name",
      date: "Date & Time",
      status: "Live Indicator (Live now or Starts at 5:00 PM)",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=600",
      title: "Session Title/Topic",
      teacher: "Teacher Name",
      date: "Date & Time",
      status: "Live Indicator (Live now or Starts at 5:00 PM)",
    },
  ];

  return (
    <div className="liveSessionsPage">


      {/* Header box */}
      <div className="liveSessionsHeaderBox">
        <PageHeader title="Live Sessions" />
      </div>

      {/* Body box */}
      <div className="liveSessionsBodyBox">
        {/* Sessions grid */}
        <div className="liveGrid">
          {sessions.map((s) => (
            <div
              key={s.id}
              className="liveCard"
              onClick={() => navigate(`/live-sessions/${s.id}`)}
            >
              <img src={s.image} alt={s.title} className="liveCardImg" />

              <div className="liveCardBody">
                <p className="liveCardText">{s.title}</p>
                <p className="liveCardText">{s.teacher}</p>
                <p className="liveCardText">{s.date}</p>
                <p className="liveCardText">{s.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
