import React from "react";
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  Database,
  GitBranch,
  Truck,
  Layers,
} from "lucide-react";
import { cvData } from "../data/cvData";

export default function Experience() {
  const { experience } = cvData;

  return (
    <section id="experience" className="section-block">
      <div className="section-header">
        <div className="section-title-wrap">
          <div className="section-icon-pill">
            <Briefcase size={20} />
          </div>
          <div>
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">
              產業界軟體工程與高併發自動化倉儲（WMS）實務經歷
            </p>
          </div>
        </div>
      </div>

      <div className="experience-timeline">
        {experience.map((exp, idx) => (
          <div key={idx} className="experience-card">
            {/* Top Bar */}
            <div className="exp-card-header">
              <div className="exp-title-area">
                <div className="company-line">
                  <Building2 size={18} className="company-icon" />
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="company-en">({exp.companyEn})</span>
                </div>
                <div className="role-dept-line">
                  <span className="role-title">{exp.role}</span>
                  <span className="dept-sep">·</span>
                  <span className="dept-title">{exp.dept}</span>
                </div>
              </div>

              <div className="exp-meta-right">
                <div className="exp-meta-item">
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                </div>
                <div className="exp-meta-item">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Domain Pill */}
            <div className="exp-domain-pill">
              <Truck size={14} className="inline-icon" />
              <span><strong>Domain: </strong>{exp.domain}</span>
            </div>

            {/* Summary */}
            <p className="exp-summary">{exp.summary}</p>

            {/* Responsibilities */}
            <div className="exp-responsibilities">
              <h4 className="exp-subheading">職責要項與專案成果：</h4>
              <ul className="exp-list">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx}>
                    <CheckCircle2 size={15} className="check-icon" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills & Tech tags */}
            <div className="exp-skills-row">
              <span className="exp-skills-label">Applied Technologies:</span>
              <div className="exp-skills-tags">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="exp-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
