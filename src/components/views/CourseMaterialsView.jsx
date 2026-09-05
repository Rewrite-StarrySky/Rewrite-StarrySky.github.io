import React, { useState } from "react";
import {
  BookOpen,
  FileText,
  Code2,
  ExternalLink,
  Layers,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Download,
  GraduationCap,
  ShieldAlert,
  Info,
} from "lucide-react";
import { cvData } from "../../data/cvData";

export default function CourseMaterialsView() {
  const { teachingMaterials } = cvData;
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedModules, setExpandedModules] = useState({
    "db-courseware": true,
    "llm-security-handbook": true,
  });

  const categories = [
    { id: "all", label: "All Materials" },
    { id: "Database & Backend", label: "Database & Backend" },
    { id: "LLM Security & AI", label: "LLM Security & AI" },
    { id: "5G & Systems", label: "5G & Systems" },
    { id: "Data Science & NLP", label: "Data Science & NLP" },
  ];

  const toggleExpand = (id) => {
    setExpandedModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredMaterials =
    selectedCategory === "all"
      ? teachingMaterials
      : teachingMaterials.filter((m) => m.category === selectedCategory);

  const getResourceIcon = (type) => {
    switch (type) {
      case "slides":
        return <FileText size={13} className="resource-icon" />;
      case "lab":
        return <BookOpen size={13} className="resource-icon" />;
      case "code":
        return <Code2 size={13} className="resource-icon" />;
      default:
        return <ExternalLink size={13} className="resource-icon" />;
    }
  };

  return (
    <div className="academic-view-content">
      {/* Left Column: Course Materials List */}
      <div className="content-column-left">
        <div className="section-title-box">
          <h2 className="academic-heading">Course Materials & Teaching Resources (教材與教學資源)</h2>
          <div className="cardinal-underline" />
        </div>

        {/* Filter Pills */}
        <div className="materials-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-tab-pill ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Materials Cards List */}
        <div className="materials-academic-list">
          {filteredMaterials.map((mat) => {
            const isExpanded = !!expandedModules[mat.id];

            return (
              <article key={mat.id} className="material-academic-entry">
                <div className="material-entry-top">
                  <h3 className="material-entry-title">{mat.title}</h3>
                  {mat.titleEn && (
                    <p className="material-entry-title-en">
                      <em>{mat.titleEn}</em>
                    </p>
                  )}
                </div>

                <div className="material-entry-meta">
                  <span className="material-meta-course">
                    <GraduationCap size={13} className="inline-icon" /> {mat.course}
                  </span>
                  <span className="material-meta-term">{mat.term}</span>
                  <span className="material-role-badge">{mat.role}</span>
                  <span className="material-category-badge">{mat.category}</span>
                </div>

                <p className="material-summary-text">{mat.summary}</p>

                {/* Modules & Syllabus Toggle */}
                <div className="material-modules-wrap">
                  <button
                    type="button"
                    className="modules-toggle-btn"
                    onClick={() => toggleExpand(mat.id)}
                  >
                    {isExpanded ? (
                      <ChevronDown size={14} className="toggle-icon" />
                    ) : (
                      <ChevronRight size={14} className="toggle-icon" />
                    )}
                    <span>Syllabus & Key Modules ({mat.modules?.length || 0} 單元章節)</span>
                  </button>

                  {isExpanded && (
                    <ul className="material-module-list">
                      {mat.modules.map((mod, i) => (
                        <li key={i} className="module-list-item">
                          <span className="module-bullet-dot">▪</span>
                          <span className="module-text">{mod}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Downloadable / Accessible Resources */}
                <div className="material-resources-block">
                  <strong className="resources-label">Available Resources: </strong>
                  <div className="resource-buttons-group">
                    {mat.resources.map((res, rIdx) => (
                      <a
                        key={rIdx}
                        href={res.link}
                        target={res.link !== "#" ? "_blank" : "_self"}
                        rel="noreferrer"
                        className={`resource-action-btn ${res.link === "#" ? "placeholder-btn" : ""}`}
                        title={res.link === "#" ? "講義資源備索 / 即將上線" : res.label}
                      >
                        {getResourceIcon(res.type)}
                        <span>{res.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Tags Line */}
                <div className="material-tags-row">
                  {mat.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="material-tag-item">
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Right Column: Teaching Overview & License */}
      <aside className="content-column-right">
        <div className="sidebar-widget">
          <h3 className="sidebar-widget-title">MATERIALS SUMMARY</h3>
          <ul className="sidebar-stats-list">
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">📚</span>
              <span className="stat-label">Total Courseware ({teachingMaterials.length})</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">💾</span>
              <span className="stat-label">Database & Backend (1)</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">🛡️</span>
              <span className="stat-label">LLM Red-Teaming (1)</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">📡</span>
              <span className="stat-label">5G Networking Labs (1)</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">📊</span>
              <span className="stat-label">SRL / Big Data (1)</span>
            </li>
          </ul>
        </div>

        {/* Open Educational Resources (OER) License Notice */}
        <div className="sidebar-widget open-license-widget">
          <h3 className="sidebar-widget-title">OPEN EDUCATION LICENSE</h3>
          <div className="license-info-box">
            <p className="license-desc">
              All teaching slides, lab manuals, and code samples are developed for academic and non-commercial educational purposes.
            </p>
            <div className="license-badge-pill">
              <span>Creative Commons CC BY-NC-SA 4.0</span>
            </div>
            <p className="license-subtext">
              歡迎學術研究、課程實習與自主學習引用，非商業用途請註明出處。
            </p>
          </div>
        </div>

        {/* Quick Contact for Materials */}
        <div className="sidebar-widget">
          <h3 className="sidebar-widget-title">INQUIRIES & REPRODUCIBILITY</h3>
          <p className="sidebar-widget-sub">
            如需教學投影片完整原始檔、實習環境映像檔或跨校教學交流合作，歡迎來信洽詢：
          </p>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${cvData.profile.email}&su=Course%20Materials%20Inquiry`}
            target="_blank"
            rel="noreferrer"
            className="sidebar-action-btn"
          >
            Request Materials via Gmail
          </a>
        </div>
      </aside>
    </div>
  );
}
