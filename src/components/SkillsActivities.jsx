import React from "react";
import {
  Wrench,
  Users,
  Code2,
  Cpu,
  Terminal,
  Server,
  BookOpenCheck,
  Award,
  Calendar,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { cvData } from "../data/cvData";

export default function SkillsActivities() {
  const { skills, activities } = cvData;

  const skillSections = [
    {
      category: "AI & Security Research",
      icon: ShieldCheck,
      color: "cyan",
      items: skills.research,
    },
    {
      category: "Programming Languages",
      icon: Terminal,
      color: "indigo",
      items: skills.languages,
    },
    {
      category: "Frameworks & Dev Tooling",
      icon: Code2,
      color: "purple",
      items: skills.frameworks,
    },
    {
      category: "Systems & Networking",
      icon: Server,
      color: "emerald",
      items: skills.systems,
    },
    {
      category: "Research Methodologies",
      icon: BookOpenCheck,
      color: "amber",
      items: skills.methodologies,
    },
  ];

  return (
    <section id="skills" className="section-block">
      <div className="section-header">
        <div className="section-title-wrap">
          <div className="section-icon-pill">
            <Wrench size={20} />
          </div>
          <div>
            <h2 className="section-title">Skills & Academic Service</h2>
            <p className="section-subtitle">
              技術棧儲備、研究工具鏈與學術教學社群服務
            </p>
          </div>
        </div>
      </div>

      <div className="skills-service-grid">
        {/* Technical Arsenal */}
        <div className="skills-column">
          <div className="column-header">
            <Cpu size={18} className="column-icon" />
            <h3 className="column-title">Technical Skillset 專業技能矩陣</h3>
          </div>

          <div className="skills-card-group">
            {skillSections.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div key={idx} className="skill-category-box">
                  <div className="skill-cat-title">
                    <Icon size={16} className={`cat-icon cat-${sec.color}`} />
                    <span>{sec.category}</span>
                  </div>
                  <div className="skill-tags-flex">
                    {sec.items.map((item, sIdx) => (
                      <span key={sIdx} className={`skill-tag tag-theme-${sec.color}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Service & Community */}
        <div className="service-column">
          <div className="column-header">
            <Users size={18} className="column-icon" />
            <h3 className="column-title">Academic Service & Community 學術服務</h3>
          </div>

          <div className="activities-list">
            {activities.map((act, idx) => (
              <div key={idx} className="activity-card">
                <div className="activity-top">
                  <h4 className="activity-title">{act.title}</h4>
                  <span className="activity-period">
                    <Calendar size={12} />
                    {act.period}
                  </span>
                </div>
                <div className="activity-org">{act.organization}</div>
                <p className="activity-desc">{act.description}</p>
              </div>
            ))}
          </div>

          {/* Research Philosophy Quote */}
          <div className="philosophy-card">
            <div className="philosophy-header">
              <Sparkles size={16} className="sparkle-gold" />
              <span>Research Philosophy 研究核心理念</span>
            </div>
            <p className="philosophy-text">
              「以第一原理拆解複雜問題，以嚴謹可重現的自動化實驗評估模型邊界，並堅持將研究洞察轉化為高可靠、具部署價值的系統架構。」
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
