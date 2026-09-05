import React from "react";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Trophy,
  Medal,
  CheckCircle,
  FileCheck,
  Star,
} from "lucide-react";
import { cvData } from "../data/cvData";

export default function EducationAwards() {
  const { education, awards } = cvData;

  const getAwardIcon = (title, level) => {
    if (title.includes("銀獎") || title.includes("第二名")) return Trophy;
    if (title.includes("優秀論文") || title.includes("Best")) return Star;
    if (level === "National") return Medal;
    return Award;
  };

  return (
    <section id="education" className="section-block">
      <div className="section-header">
        <div className="section-title-wrap">
          <div className="section-icon-pill">
            <GraduationCap size={20} />
          </div>
          <div>
            <h2 className="section-title">Education & Honors</h2>
            <p className="section-subtitle">
              學歷背景、學術表現與國內外競賽獲獎紀錄
            </p>
          </div>
        </div>
      </div>

      <div className="edu-awards-grid">
        {/* Education Card */}
        <div className="edu-column">
          <div className="column-header">
            <GraduationCap size={18} className="column-icon" />
            <h3 className="column-title">Education 學歷背景</h3>
          </div>

          {education.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="edu-card-top">
                <div>
                  <h4 className="edu-school">{edu.school}</h4>
                  <p className="edu-school-en">{edu.schoolEn}</p>
                </div>
                <div className="edu-period-badge">
                  <Calendar size={13} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="edu-degree-line">
                <span className="degree-title">{edu.degree}</span>
              </div>

              {/* GPA & Rank Highlight Box */}
              <div className="edu-stats-highlight">
                <div className="stat-pill-group">
                  <div className="stat-pill">
                    <span className="stat-pill-title">GPA</span>
                    <span className="stat-pill-val">{edu.gpa.split("(")[0]}</span>
                  </div>
                  <div className="stat-pill">
                    <span className="stat-pill-title">學系排名</span>
                    <span className="stat-pill-val">9 / 54</span>
                  </div>
                </div>
              </div>

              {/* Education Highlights */}
              <div className="edu-details-list">
                <h5 className="edu-subheading">學術歷程與修課：</h5>
                <ul>
                  {edu.highlights.map((item, hIdx) => (
                    <li key={hIdx}>
                      <CheckCircle size={14} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Honors Column */}
        <div className="awards-column">
          <div className="column-header">
            <Trophy size={18} className="column-icon gold" />
            <h3 className="column-title">Honors & Competitions 獲獎榮譽</h3>
          </div>

          <div className="awards-list">
            {awards.map((awd, idx) => {
              const Icon = getAwardIcon(awd.title, awd.level);
              const isMajor =
                awd.title.includes("銀獎") ||
                awd.title.includes("第二名") ||
                awd.title.includes("優秀論文");

              return (
                <div
                  key={idx}
                  className={`award-item-card ${isMajor ? "award-major-card" : ""}`}
                >
                  <div className="award-icon-box">
                    <Icon size={18} className={isMajor ? "icon-gold" : "icon-cyan"} />
                  </div>
                  <div className="award-info">
                    <div className="award-meta-row">
                      <span className="award-year">{awd.year}</span>
                      <span className="award-level-badge">{awd.level}</span>
                      {awd.role && (
                        <span className="award-role-badge">{awd.role}</span>
                      )}
                    </div>
                    <h4 className="award-title">{awd.title}</h4>
                    <p className="award-issuer">頒發單位：{awd.issuer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
