import React from "react";
import { Building2, Calendar, MapPin, Truck } from "lucide-react";
import { cvData } from "../../data/cvData";

export default function ExperienceView() {
  const { experience } = cvData;

  return (
    <div className="academic-view-content">
      <div className="content-column-left">
        <div className="section-title-box">
          <h2 className="academic-heading">Professional & Industrial Experience</h2>
          <div className="cardinal-underline" />
        </div>

        <div className="experience-academic-list">
          {experience.map((exp, idx) => (
            <article key={idx} className="experience-academic-entry">
              <div className="exp-entry-header">
                <h3 className="exp-company-heading">
                  {exp.company} <span className="exp-company-sub">({exp.companyEn})</span>
                </h3>
                <div className="exp-role-line">
                  <strong>{exp.role}</strong> · <span>{exp.dept}</span>
                </div>
              </div>

              <div className="exp-meta-bar">
                <span>{exp.period}</span>
                <span>{exp.location}</span>
                <span className="exp-domain-badge">{exp.domain}</span>
              </div>

              <p className="exp-desc-paragraph">{exp.summary}</p>

              <div className="exp-responsibilities-block">
                <strong>Key Responsibilities & System Contributions:</strong>
                <ul className="exp-bullets-list">
                  {exp.responsibilities.map((item, rIdx) => (
                    <li key={rIdx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="exp-applied-skills">
                <strong>Applied Technologies: </strong>
                <span>{exp.skills.join(" · ")}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <aside className="content-column-right">
        <div className="sidebar-widget">
          <h3 className="sidebar-widget-title">COMPANIES & ORGANIZATIONS</h3>
          <ul className="sidebar-stats-list">
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">💻</span>
              <span className="stat-label">系微股份有限公司 (Insyde Software)</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">📦</span>
              <span className="stat-label">智合天下科技 (moc i Intelligence)</span>
            </li>
          </ul>
        </div>

        <div className="sidebar-widget" style={{ marginTop: "20px" }}>
          <h3 className="sidebar-widget-title">ENTERPRISE CLIENT SYSTEMS</h3>
          <ul className="sidebar-stats-list">
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">🏪</span>
              <span className="stat-label">統一 7-ELEVEn (統昶行銷物流)</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">🏪</span>
              <span className="stat-label">全家 FamilyMart (日翊文化物流)</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">💊</span>
              <span className="stat-label">屈臣氏 Watsons 台灣物流中心</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">🏥</span>
              <span className="stat-label">億代富 醫療耗材智能倉儲</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
