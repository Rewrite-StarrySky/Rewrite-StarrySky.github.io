import React from "react";
import {
  Mail,
  GraduationCap,
  Shield,
  Zap,
  BarChart3,
  Network,
  Award,
  Sparkles,
  ExternalLink,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, ScholarIcon } from "./Icons";
import { cvData } from "../data/cvData";

export default function Hero() {
  const { profile, news } = cvData;

  const getBadgeIcon = (topic) => {
    if (topic.includes("Security")) return Shield;
    if (topic.includes("Defense") || topic.includes("Classifier")) return Zap;
    if (topic.includes("Analytics") || topic.includes("Behavior")) return BarChart3;
    if (topic.includes("5G") || topic.includes("Systems")) return Network;
    return Sparkles;
  };

  return (
    <section id="about" className="hero-section">
      <div className="hero-grid">
        {/* Left: Bio, Identity & Actions */}
        <div className="hero-profile-card">
          {/* Status Indicator */}
          <div className="status-badge">
            <span className="pulsing-dot" />
            <span className="status-text">{profile.statusBadge}</span>
          </div>

          {/* Name & Academic Title */}
          <div className="profile-names">
            <h1 className="hero-name-zh">
              {profile.nameZh}
              <span className="hero-name-en">{profile.nameEn}</span>
            </h1>
            <p className="hero-academic-title">
              {profile.titleZh}
              <span className="title-separator">·</span>
              <span className="title-en">{profile.titleEn}</span>
            </p>
          </div>

          {/* Affiliation & Academic Stats */}
          <div className="affiliation-box">
            <div className="affiliation-item">
              <GraduationCap size={16} className="affiliation-icon" />
              <span>
                <strong>{profile.institution}</strong> ({profile.period})
              </span>
            </div>
            <div className="affiliation-meta">
              <span className="meta-badge">GPA: {profile.gpa}</span>
              <span className="meta-badge">系排: {profile.rank}</span>
              <span className="meta-badge">{profile.location}</span>
            </div>
          </div>

          {/* Bio statement */}
          <p className="hero-bio">{profile.summary}</p>

          {/* Action Links Bar */}
          <div className="hero-actions">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
              target="_blank"
              rel="noreferrer"
              className="action-pill primary-action"
              title="Send Email via Gmail"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="action-pill secondary-action"
              title="GitHub Profile"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="action-pill secondary-action"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>


          </div>

          {/* Research Interest Tags */}
          <div className="research-focus-container">
            <div className="focus-header">
              <Sparkles size={15} className="focus-header-icon" />
              <span>Core Research Focus 核心研究領域</span>
            </div>
            <div className="focus-tags-grid">
              {profile.researchInterests.map((interest, idx) => {
                const Icon = getBadgeIcon(interest.topic);
                return (
                  <div key={idx} className="focus-tag-card">
                    <div className="tag-card-header">
                      <Icon size={14} className="tag-icon" />
                      <span className="tag-title">{interest.topic}</span>
                    </div>
                    <p className="tag-desc">{interest.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Key Quantitative Highlights & Recent News */}
        <div className="hero-sidebar">
          {/* Research Metric Counters */}
          <div className="metrics-grid">
            {profile.stats.map((st, i) => (
              <div key={i} className="metric-card">
                <div className="metric-value">{st.value}</div>
                <div className="metric-label">{st.label}</div>
                <div className="metric-sub">{st.sub}</div>
              </div>
            ))}
          </div>

          {/* News & Academic Updates Feed */}
          <div className="news-card">
            <div className="news-header">
              <div className="news-title-wrap">
                <Award size={18} className="news-icon" />
                <h3>Recent Highlights & News</h3>
              </div>
              <span className="news-badge-count">{news.length} updates</span>
            </div>

            <div className="news-list">
              {news.map((item, idx) => (
                <div key={idx} className="news-item">
                  <div className="news-item-left">
                    <span className="news-date">{item.date}</span>
                    <span className={`news-tag tag-${item.badge.toLowerCase()}`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="news-content">{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Academic Navigation Jump */}
          <div className="quick-jump-card">
            <span className="quick-jump-title">Quick Explore:</span>
            <div className="quick-jump-links">
              <a href="#publications" className="quick-jump-pill">
                <BookOpen size={13} />
                <span>Publications (3)</span>
              </a>
              <a href="#research" className="quick-jump-pill">
                <Zap size={13} />
                <span>Featured Projects</span>
              </a>
              <a href="#experience" className="quick-jump-pill">
                <ChevronRight size={13} />
                <span>Industry WMS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
