import React from "react";
import { GraduationCap, Trophy, Award, Calendar, MapPin } from "lucide-react";
import { cvData } from "../../data/cvData";

export default function EducationView() {
  const { education, awards } = cvData;

  return (
    <div className="academic-view-content">
      <div className="content-column-left">
        {/* Education Section */}
        <div className="section-title-box">
          <h2 className="academic-heading">Education (學歷歷程)</h2>
          <div className="cardinal-underline" />
        </div>

        <div className="education-academic-list">
          {education.map((edu, idx) => (
            <article key={idx} className="education-academic-entry">
              <div className="edu-header-row">
                <div>
                  <h3 className="edu-school-name">{edu.school}</h3>
                  <p className="edu-school-name-en">{edu.schoolEn}</p>
                </div>
                {edu.status && (
                  <span className={`edu-status-pill ${edu.status.includes("在學") ? "active-status" : ""}`}>
                    {edu.status}
                  </span>
                )}
              </div>

              <div className="edu-degree-text">
                <strong>{edu.degree}</strong> ({edu.period})
              </div>

              <div className="edu-standing-box">
                {edu.gpa && (
                  <span className="standing-badge">
                    GPA: <strong>{edu.gpa}</strong>
                  </span>
                )}
                {edu.rank && (
                  <span className="standing-badge">
                    Class Rank: <strong>{edu.rank}</strong>
                  </span>
                )}
                <span className="standing-badge">
                  <MapPin size={12} className="inline-icon" /> {edu.location}
                </span>
              </div>

              <div className="edu-curriculum-list">
                <strong>Academic Focus & Highlights:</strong>
                <ul>
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Honors & Awards Section */}
        <div className="section-title-box sub-heading-box">
          <h2 className="academic-heading">Honors, Awards & Competitions (榮譽與競賽獲獎)</h2>
          <div className="cardinal-underline" />
        </div>

        <div className="awards-academic-list">
          {awards.map((awd, idx) => (
            <div key={idx} className="award-academic-row">
              <div className="award-year-col">{awd.year}</div>
              <div className="award-content-col">
                <div className="award-name-line">
                  <strong className="award-name-text">{awd.title}</strong>
                  {awd.role && <span className="award-role-pill">[{awd.role}]</span>}
                </div>
                <div className="award-issuer-text">
                  Issued by: {awd.issuer} · Level: {awd.level}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="content-column-right">
        <div className="sidebar-widget">
          <h3 className="sidebar-widget-title">ACADEMIC STANDING</h3>
          <ul className="sidebar-stats-list">
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">🎓</span>
              <span className="stat-label">陽明交大 智能系統研究所 (碩士在學)</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">🎓</span>
              <span className="stat-label">臺中教育大學 資訊工程學系 (學士畢業)</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">📊</span>
              <span className="stat-label">學士學業 GPA: 3.67 / 4.3</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">📈</span>
              <span className="stat-label">學士系排名：第 9 名 / 54 人</span>
            </li>
            <li className="sidebar-stat-item">
              <span className="stat-bullet-icon">🏅</span>
              <span className="stat-label">競賽與論文榮譽獲獎：{awards.length} 項</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
