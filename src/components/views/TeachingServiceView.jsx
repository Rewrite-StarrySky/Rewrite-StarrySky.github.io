import React from "react";
import { Users, BookOpen, ShieldCheck, Terminal, Server, CheckCircle2 } from "lucide-react";
import { cvData } from "../../data/cvData";

export default function TeachingServiceView() {
  const { activities, skills } = cvData;

  return (
    <div className="academic-view-content">
      <div className="content-column-left">
        <div className="section-title-box">
          <h2 className="academic-heading">Teaching & Academic Service (教學、服務與學術活動)</h2>
          <div className="cardinal-underline" />
        </div>

        <div className="teaching-activities-list">
          {activities.map((act, idx) => (
            <article key={idx} className="teaching-activity-entry">
              <div className="activity-entry-title">
                <strong>{act.title}</strong>
                <span className="activity-period-label">{act.period}</span>
              </div>
              <p className="activity-org-label">{act.organization}</p>
              <p className="activity-desc-text">{act.description}</p>
            </article>
          ))}
        </div>

        {/* Technical Competencies Matrix */}
        <div className="section-title-box sub-heading-box">
          <h2 className="academic-heading">Technical Arsenal & Core Strengths (技術工具與核心能力)</h2>
          <div className="cardinal-underline" />
        </div>

        <div className="skills-academic-table">
          <div className="skill-table-row">
            <div className="skill-table-header">Programming Languages:</div>
            <div className="skill-table-content">
              {skills.programming ? skills.programming.join(", ") : ""}
            </div>
          </div>
          <div className="skill-table-row">
            <div className="skill-table-header">Frameworks & Tools:</div>
            <div className="skill-table-content">
              {skills.frameworks ? skills.frameworks.join(", ") : ""}
            </div>
          </div>
          <div className="skill-table-row">
            <div className="skill-table-header">Research Tools & Systems:</div>
            <div className="skill-table-content">
              {skills.researchTools ? skills.researchTools.join(", ") : ""}
            </div>
          </div>
          <div className="skill-table-row">
            <div className="skill-table-header">Core Strengths:</div>
            <div className="skill-table-content">
              <ul className="skills-strength-list">
                {skills.strengths?.map((str, sIdx) => (
                  <li key={sIdx} className="strength-item">
                    <CheckCircle2 size={13} className="inline-icon text-cardinal" />
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <aside className="content-column-right">
        <div className="sidebar-widget">
          <h3 className="sidebar-widget-title">SERVICE ROLES</h3>
          <ul className="sidebar-stats-list">
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">🧑‍🏫</span>
              <span className="stat-label">Teaching Assistant (資料庫程式設計)</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">⚛️</span>
              <span className="stat-label">東海大學量子計算成果交流</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">📜</span>
              <span className="stat-label">鼎新電腦全端開發工程師證照</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">👥</span>
              <span className="stat-label">GDSC NTCU Member</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">🛡️</span>
              <span className="stat-label">NTCU 資安白帽社 Club Member</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">🌐</span>
              <span className="stat-label">EAGE AI 研討會 (2025)</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
