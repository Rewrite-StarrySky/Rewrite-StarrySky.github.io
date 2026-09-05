import React, { useState } from "react";
import {
  Layers,
  Shield,
  Cpu,
  Server,
  Network,
  Award,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { cvData } from "../data/cvData";

export default function ResearchProjects() {
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", "LLM Security", "AI Data Science", "5G & Systems", "Systems & Benchmarking"];

  const filteredProjects =
    filterCategory === "All"
      ? cvData.researchProjects
      : cvData.researchProjects.filter(
          (p) => p.category === filterCategory || (filterCategory === "5G & Systems" && p.category.includes("5G"))
        );

  const getCategoryIcon = (category) => {
    if (category.includes("Security")) return Shield;
    if (category.includes("5G")) return Network;
    if (category.includes("Data")) return Cpu;
    return Server;
  };

  return (
    <section id="research" className="section-block">
      <div className="section-header">
        <div className="section-title-wrap">
          <div className="section-icon-pill">
            <Layers size={20} />
          </div>
          <div>
            <h2 className="section-title">
              Research & Selected Projects
              <span className="section-count">({cvData.researchProjects.length})</span>
            </h2>
            <p className="section-subtitle">
              核心研究專題、工程系統實踐與基準測試 · 強調高再現性與量化實證
            </p>
          </div>
        </div>

        {/* Project Filters */}
        <div className="filter-tab-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${filterCategory === cat ? "active" : ""}`}
              onClick={() => setFilterCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, idx) => {
          const Icon = getCategoryIcon(project.category);
          const isFeatured = idx === 0 || project.id === "llm-redteam-project";

          return (
            <div
              key={project.id}
              className={`project-card ${isFeatured ? "featured-project-card" : ""}`}
            >
              {/* Card Header */}
              <div className="project-card-header">
                <div className="project-meta-left">
                  <span className="project-role-badge">{project.role}</span>
                  <span className="project-period">{project.period}</span>
                </div>
                <div className="project-category-badge">
                  <Icon size={13} className="inline-icon" />
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Title & English */}
              <div className="project-title-area">
                <h3 className="project-title-zh">{project.title}</h3>
                {project.titleEn && (
                  <p className="project-title-en">{project.titleEn}</p>
                )}
              </div>

              {/* Honors & Awards Badge */}
              {project.honors && (
                <div className="project-honor-pill">
                  <Award size={14} className="honor-icon" />
                  <span>{project.honors}</span>
                </div>
              )}

              {/* Summary */}
              <p className="project-summary">{project.summary}</p>

              {/* Highlights List */}
              <div className="project-highlights">
                <h4 className="highlights-heading">關鍵技術突破與實作亮點：</h4>
                <ul className="highlights-list">
                  {project.highlights.map((point, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 size={14} className="check-icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="project-stack-row">
                <span className="stack-label">Tech Stack:</span>
                <div className="stack-badges">
                  {project.techStack.map((tech, sIdx) => (
                    <span key={sIdx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
