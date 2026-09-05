import React, { useState } from "react";
import {
  BookOpen,
  FileText,
  Quote,
  Code,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Award,
  Sparkles,
  Check,
  Filter,
} from "lucide-react";
import { cvData } from "../data/cvData";

export default function Publications({ onOpenBibtex }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedPaper, setExpandedPaper] = useState("tanet-2025"); // default expand top paper

  const categories = ["All", "LLM Security", "AI Learning Analytics"];

  const filteredPubs =
    selectedCategory === "All"
      ? cvData.publications
      : cvData.publications.filter((p) => p.category === selectedCategory);

  const toggleExpand = (id) => {
    setExpandedPaper(expandedPaper === id ? null : id);
  };

  // Helper to format authors list and highlight Hong-Wei Ciou
  const renderAuthors = (authors) => {
    return authors.map((author, idx) => {
      const isMe =
        author.includes("Hong-Wei Ciou") ||
        author.includes("Ciou, Hong-Wei") ||
        author.includes("HONG WEI CIOU") ||
        author.includes("HONG-WEI CIOU") ||
        author.includes("邱泓崴");
      return (
        <span key={idx}>
          {isMe ? (
            <strong className="author-highlight">{author}</strong>
          ) : (
            <span className="author-name">{author}</span>
          )}
          {idx < authors.length - 1 && <span className="author-sep">, </span>}
        </span>
      );
    });
  };

  return (
    <section id="publications" className="section-block">
      <div className="section-header">
        <div className="section-title-wrap">
          <div className="section-icon-pill">
            <BookOpen size={20} />
          </div>
          <div>
            <h2 className="section-title">
              Publications & Papers
              <span className="section-count">({cvData.publications.length})</span>
            </h2>
            <p className="section-subtitle">
              研討會與學術論文成果 · 專注於 LLM 攻擊防禦評估、自動化測試平台與 AI 學習行為建模
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="filter-tab-bar">
          <Filter size={14} className="filter-icon" />
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
              {cat !== "All" && (
                <span className="filter-count">
                  {cvData.publications.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Publications List */}
      <div className="publications-list">
        {filteredPubs.map((pub) => {
          const isExpanded = expandedPaper === pub.id;

          return (
            <article key={pub.id} className="publication-card">
              {/* Card Meta & Badges */}
              <div className="pub-card-top">
                <div className="pub-badges-left">
                  <span className="pub-year-badge">{pub.year}</span>
                  <span className="pub-venue-badge">{pub.venue}</span>
                  <span className="pub-role-badge">{pub.myRole}</span>
                </div>

                {pub.badges && (
                  <div className="pub-badges-right">
                    {pub.badges.map((b, i) => (
                      <span
                        key={i}
                        className={`pub-honor-badge ${
                          b.includes("優秀") || b.includes("Best") ? "award-gold" : ""
                        }`}
                      >
                        {b.includes("優秀") || b.includes("Best") ? (
                          <Award size={13} className="inline-icon" />
                        ) : null}
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Titles */}
              <div className="pub-titles">
                <h3 className={`pub-title-zh ${pub.id === "itac-2026" ? "en-paper-title" : ""}`}>
                  {pub.title}
                  {pub.links?.pdf && pub.links.pdf !== "#" && (
                    <a
                      href={pub.links.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="pdf-inline-badge"
                      title={`點擊查閱論文 PDF: ${pub.title}`}
                    >
                      PDF
                    </a>
                  )}
                </h3>
                {pub.titleEn && <p className="pub-title-en">{pub.titleEn}</p>}
              </div>

              <div className="pub-venue-full">
                <em>{pub.venue} — {pub.venueFull}</em>
              </div>

              {/* Tags */}
              {pub.tags && (
                <div className="pub-tags-row">
                  {pub.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="pub-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="pub-actions-row">
                <button
                  type="button"
                  className="pub-action-btn bibtex-btn"
                  onClick={() => onOpenBibtex(pub)}
                  title="View and copy BibTeX citation"
                >
                  <Quote size={14} />
                  <span>BibTeX</span>
                </button>

                {pub.links?.code && (
                  <a
                    href={pub.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="pub-action-btn"
                    title="View Code or Platform Repository"
                  >
                    <Code size={14} />
                    <span>Code / Platform</span>
                  </a>
                )}

                {pub.links?.pdf && pub.links.pdf !== "#" && (
                  <a
                    href={pub.links.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="pub-action-btn"
                    title="Download Paper PDF"
                  >
                    <FileText size={14} />
                    <span>PDF</span>
                  </a>
                )}

                <button
                  type="button"
                  className={`pub-action-btn expand-btn ${isExpanded ? "active" : ""}`}
                  onClick={() => toggleExpand(pub.id)}
                  title={isExpanded ? "Collapse abstract" : "Expand abstract and research metrics"}
                >
                  <span>{isExpanded ? "收合研究細節" : "研究脈絡與量化指標"}</span>
                  {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
              </div>

              {/* Collapsible Research Details Drawer */}
              {isExpanded && (
                <div className="pub-drawer-content">
                  <div className="drawer-grid">
                    <div className="drawer-item">
                      <div className="drawer-item-title">
                        <span className="drawer-dot red" />
                        <strong>研究問題 (Problem):</strong>
                      </div>
                      <p className="drawer-text">{pub.problem}</p>
                    </div>

                    <div className="drawer-item">
                      <div className="drawer-item-title">
                        <span className="drawer-dot blue" />
                        <strong>方法架構 (Method & Role):</strong>
                      </div>
                      <p className="drawer-text">{pub.method}</p>
                    </div>

                    <div className="drawer-item highlight-result">
                      <div className="drawer-item-title">
                        <span className="drawer-dot green" />
                        <strong>關鍵量化成果 (Key Results):</strong>
                      </div>
                      <p className="drawer-text result-emphasis">{pub.results}</p>
                    </div>

                    <div className="drawer-item">
                      <div className="drawer-item-title">
                        <span className="drawer-dot purple" />
                        <strong>主要貢獻 (Contribution):</strong>
                      </div>
                      <p className="drawer-text">{pub.contribution}</p>
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
