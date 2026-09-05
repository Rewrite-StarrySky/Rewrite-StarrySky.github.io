import React, { useState } from "react";
import { Award, Layers, Check, ExternalLink, Filter } from "lucide-react";
import { cvData } from "../../data/cvData";

export default function ResearchView() {
  const { researchProjects } = cvData;
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects", count: researchProjects.length },
    {
      id: "LLM Security",
      label: "LLM Security & Red-Teaming",
      count: researchProjects.filter((p) => p.category === "LLM Security").length,
    },
    {
      id: "5G & Systems",
      label: "5G & Systems Benchmarking",
      count: researchProjects.filter((p) => p.category === "5G & Systems").length,
    },
    {
      id: "Data Science & ML",
      label: "Data Science & AI Analytics",
      count: researchProjects.filter((p) => p.category === "Data Science & ML").length,
    },
    {
      id: "Software Engineering",
      label: "Software & Database Systems",
      count: researchProjects.filter((p) => p.category === "Software Engineering").length,
    },
  ];

  const displayedProjects =
    selectedCategory === "all"
      ? researchProjects
      : researchProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="academic-view-content">
      <div className="content-column-left">
        <div className="section-title-box">
          <h2 className="academic-heading">Research Projects & Systems (研究與專案系統)</h2>
          <div className="cardinal-underline" />
        </div>

        {/* Project Category Filter Pills */}
        <div className="materials-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-tab-pill ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        <div className="projects-academic-list">
          {displayedProjects.map((proj) => (
            <article key={proj.id} className="project-academic-entry">
              <div className="project-entry-top">
                <h3 className="project-entry-title">{proj.title}</h3>
                {proj.titleEn && (
                  <p className="project-entry-title-en">
                    <em>{proj.titleEn}</em>
                  </p>
                )}
              </div>

              <div className="project-entry-meta">
                <span className="project-period-tag">{proj.period}</span>
                <span className="project-role-tag">Role: {proj.role}</span>
                {proj.section && <span className="project-section-tag">{proj.section}</span>}
                <span className="project-category-tag">{proj.category}</span>
              </div>

              {proj.honors && (
                <div className="project-honor-alert">
                  <Award size={15} className="honor-icon" />
                  <strong>Honor / Recognition: </strong> {proj.honors}
                </div>
              )}

              <p className="project-abstract-text">{proj.summary}</p>

              <div className="project-key-findings">
                <strong>Technical Highlights & System Evaluation:</strong>
                <ul className="project-findings-list">
                  {proj.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech-line">
                <strong>Environment & Technologies: </strong>
                <span>{proj.techStack.join(" · ")}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="content-column-right">
        <div className="sidebar-widget">
          <h3 className="sidebar-widget-title">RESEARCH SUMMARY</h3>
          <ul className="sidebar-stats-list">
            <li
              className={`sidebar-stat-item ${selectedCategory === "all" ? "active-stat" : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              <span className="stat-bullet-icon">🔬</span>
              <span className="stat-label">All Projects ({researchProjects.length})</span>
            </li>
            <li
              className={`sidebar-stat-item ${selectedCategory === "LLM Security" ? "active-stat" : ""}`}
              onClick={() => setSelectedCategory("LLM Security")}
            >
              <span className="stat-bullet-icon">🛡️</span>
              <span className="stat-label">LLM Red-Teaming (1)</span>
            </li>
            <li
              className={`sidebar-stat-item ${selectedCategory === "5G & Systems" ? "active-stat" : ""}`}
              onClick={() => setSelectedCategory("5G & Systems")}
            >
              <span className="stat-bullet-icon">🌐</span>
              <span className="stat-label">5G & Benchmarking (3)</span>
            </li>
            <li
              className={`sidebar-stat-item ${selectedCategory === "Data Science & ML" ? "active-stat" : ""}`}
              onClick={() => setSelectedCategory("Data Science & ML")}
            >
              <span className="stat-bullet-icon">📊</span>
              <span className="stat-label">Data Science & AI (3)</span>
            </li>
            <li
              className={`sidebar-stat-item ${selectedCategory === "Software Engineering" ? "active-stat" : ""}`}
              onClick={() => setSelectedCategory("Software Engineering")}
            >
              <span className="stat-bullet-icon">💻</span>
              <span className="stat-label">Full-Stack & Database (2)</span>
            </li>
          </ul>
        </div>

        <div className="sidebar-widget topics-widget">
          <h3 className="sidebar-widget-title">SYSTEMS & ARCHITECTURE</h3>
          <div className="topic-pills-container">
            {[
              "PyTorch",
              "Transformers",
              "BERT",
              "FastAPI",
              "Docker",
              "Open5GS",
              "srsRAN",
              "Wireshark",
              "sysbench",
              "MySQL",
              "yfinance",
              "OOP Design",
              "R Language",
            ].map((tech, idx) => (
              <span key={idx} className="topic-pill static-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
