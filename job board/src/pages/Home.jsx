import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Home() {
  const jobs = [
    {
      id: 1,
      title: "Backend Developer",
      company: "TCS",
      location: "Bangalore",
      type: "Internship",
      salary: "25k/month",
      level: "Intern",
      posted: "1 day ago",
      tags: ["Node.js", "MongoDB"],
      description:
        "Work on backend APIs, database integration, and build scalable services.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Infosys",
      location: "Hyderabad",
      type: "Full Time",
      salary: "6 LPA",
      level: "Fresher",
      posted: "2 days ago",
      tags: ["React", "CSS", "JavaScript"],
      description:
        "Build responsive UI screens, integrate APIs, and improve UX performance.",
    },
    {
      id: 3,
      title: "Java Developer",
      company: "Wipro",
      location: "Chennai",
      type: "Full Time",
      salary: "5.5 LPA",
      level: "Fresher",
      posted: "3 days ago",
      tags: ["Java", "Spring Boot"],
      description:
        "Develop backend systems using Java and Spring Boot with database support.",
    },
    {
      id: 4,
      title: "Data Analyst",
      company: "Accenture",
      location: "Pune",
      type: "Internship",
      salary: "20k/month",
      level: "Intern",
      posted: "5 days ago",
      tags: ["Excel", "SQL", "PowerBI"],
      description:
        "Analyze data, create dashboards, and help teams with business insights.",
    },
    {
      id: 5,
      title: "Full Stack Developer",
      company: "Capgemini",
      location: "Mumbai",
      type: "Full Time",
      salary: "7 LPA",
      level: "Fresher",
      posted: "1 week ago",
      tags: ["React", "Node.js", "MongoDB"],
      description:
        "Work on both frontend and backend development, build APIs and UI screens.",
    },
    {
      id: 6,
      title: "Python Developer",
      company: "Tech Mahindra",
      location: "Noida",
      type: "Full Time",
      salary: "6.2 LPA",
      level: "Fresher",
      posted: "4 days ago",
      tags: ["Python", "Django", "REST API"],
      description:
        "Develop web applications using Django, handle backend logic and APIs.",
    },
    {
      id: 7,
      title: "UI/UX Designer",
      company: "Zoho",
      location: "Chennai",
      type: "Full Time",
      salary: "5 LPA",
      level: "Fresher",
      posted: "2 days ago",
      tags: ["Figma", "Wireframes", "Prototyping"],
      description:
        "Design user-friendly interfaces, create wireframes, and improve user experience.",
    },
    {
      id: 8,
      title: "Cloud Engineer",
      company: "Amazon AWS",
      location: "Hyderabad",
      type: "Full Time",
      salary: "10 LPA",
      level: "Fresher",
      posted: "6 days ago",
      tags: ["AWS", "EC2", "S3"],
      description:
        "Work on cloud infrastructure, deploy applications and manage AWS services.",
    },
    {
      id: 9,
      title: "Cyber Security Analyst",
      company: "HCL",
      location: "Bangalore",
      type: "Full Time",
      salary: "7.5 LPA",
      level: "Fresher",
      posted: "3 days ago",
      tags: ["Networking", "Security", "SOC"],
      description:
        "Monitor security logs, detect threats, and work on security incident handling.",
    },
    {
      id: 10,
      title: "Machine Learning Engineer",
      company: "Google",
      location: "Pune",
      type: "Internship",
      salary: "40k/month",
      level: "Intern",
      posted: "1 day ago",
      tags: ["Python", "ML", "TensorFlow"],
      description:
        "Build ML models, work on datasets, and improve prediction accuracy.",
    },
    {
      id: 11,
      title: "DevOps Engineer",
      company: "IBM",
      location: "Bangalore",
      type: "Full Time",
      salary: "8 LPA",
      level: "Fresher",
      posted: "5 days ago",
      tags: ["Docker", "CI/CD", "Linux"],
      description:
        "Automate deployments, manage servers, and build CI/CD pipelines.",
    },
    {
      id: 12,
      title: "Android Developer",
      company: "Samsung",
      location: "Delhi",
      type: "Full Time",
      salary: "7 LPA",
      level: "Fresher",
      posted: "2 weeks ago",
      tags: ["Java", "Kotlin", "Android Studio"],
      description:
        "Develop Android apps, implement UI screens and connect backend APIs.",
    },
  ];

  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("All");
  const [sort, setSort] = useState("Latest");
  const [saved, setSaved] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  function toggleSave(id) {
    if (saved.includes(id)) {
      setSaved(saved.filter((x) => x !== id));
    } else {
      setSaved([...saved, id]);
    }
  }

  const filteredJobs = useMemo(() => {
    let list = [...jobs];

    if (jobType !== "All") {
      list = list.filter((j) => j.type === jobType);
    }

    if (search.trim() !== "") {
      const s = search.toLowerCase();
      list = list.filter(
        (j) =>
          j.title.toLowerCase().includes(s) ||
          j.company.toLowerCase().includes(s) ||
          j.location.toLowerCase().includes(s)
      );
    }

    if (sort === "Company") {
      list.sort((a, b) => a.company.localeCompare(b.company));
    }

    return list;
  }, [jobs, search, jobType, sort]);

  return (
    <div className="page">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="brand">
          <span className="dot"></span>
          <h2>HireHub</h2>
        </div>

        <div className="navLinks">
          <Link className="linkBtn" to="/login">
            Login
          </Link>
          <Link className="linkBtn primaryLink" to="/signup">
            Signup
          </Link>

          <div className="savedBadge">
            ⭐ Saved: <b>{saved.length}</b>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="heroBox">
          <h1>
            Find Your Dream Job <span className="rocket">🚀</span>
          </h1>
          <p>
            Search jobs, view details, apply easily and save your favorite jobs.
          </p>

          <div className="controls">
            <input
              type="text"
              placeholder="Search by title, company, location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
              <option value="All">All</option>
              <option value="Internship">Internship</option>
              <option value="Full Time">Full Time</option>
            </select>

            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="Latest">Latest</option>
              <option value="Company">Company</option>
            </select>
          </div>
        </div>
      </header>

      {/* MAIN FULL SCREEN LAYOUT */}
      <main className="layout">
        {/* LEFT SIDE JOB LIST */}
        <section className="leftSide">
          <div className="topRow">
            <h3>Available Jobs</h3>
            <span className="count">{filteredJobs.length} jobs found</span>
          </div>

          <div className="grid">
            {filteredJobs.map((job) => (
              <div className="card" key={job.id}>
                <div className="cardTop">
                  <div>
                    <h4>{job.title}</h4>
                    <p className="company">{job.company}</p>
                    <p className="posted">🕒 {job.posted}</p>
                  </div>

                  <button
                    className={saved.includes(job.id) ? "saveBtn active" : "saveBtn"}
                    onClick={() => toggleSave(job.id)}
                  >
                    ⭐
                  </button>
                </div>

                <div className="meta">
                  <span>📍 {job.location}</span>
                  <span>💼 {job.type}</span>
                </div>

                <div className="meta2">
                  <span>💰 {job.salary}</span>
                  <span>🎯 {job.level}</span>
                </div>

                <div className="tags">
                  {job.tags.map((tag, i) => (
                    <span className="tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="btnRow">
                  <button className="btn ghost" onClick={() => setSelectedJob(job)}>
                    View Details
                  </button>
                  <button className="btn primary" onClick={() => alert("Applied Successfully ✅")}>
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RIGHT SIDE SAVED JOBS */}
        <aside className="rightSide">
          <h3 className="sideTitle">⭐ Saved Jobs</h3>

          {saved.length === 0 ? (
            <p className="sideEmpty">No saved jobs yet</p>
          ) : (
            saved.map((id) => {
              const job = jobs.find((j) => j.id === id);
              return (
                <div className="sideCard" key={id}>
                  <h4>{job.title}</h4>
                  <p>{job.company}</p>
                  <button className="btn ghost" onClick={() => setSelectedJob(job)}>
                    View
                  </button>
                </div>
              );
            })
          )}
        </aside>
      </main>

      {/* POPUP MODAL */}
      {selectedJob && (
        <div className="modalBg" onClick={() => setSelectedJob(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedJob.title}</h2>
            <p className="modalCompany">{selectedJob.company}</p>
            <p className="modalDesc">{selectedJob.description}</p>

            <div className="modalMeta">
              <span>📍 {selectedJob.location}</span>
              <span>💼 {selectedJob.type}</span>
              <span>💰 {selectedJob.salary}</span>
            </div>

            <button className="btn primary full" onClick={() => setSelectedJob(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
