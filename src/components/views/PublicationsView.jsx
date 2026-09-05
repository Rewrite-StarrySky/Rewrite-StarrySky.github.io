import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Copy,
  Check,
  FileText,
  Quote,
  Layers,
  Award,
  ShieldCheck,
  BarChart,
} from "lucide-react";
import { cvData } from "../../data/cvData";

export default function PublicationsView({ onOpenBibtex }) {
  const [expandedItems, setExpandedItems] = useState({ "itac-2026": true });
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [filterType, setFilterType] = useState("all");

  const toggleItem = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const allTopics = [
    "Humanoid Robots",
    "Human-Robot Collaboration",
    "VLA Cognitive Failure",
    "Agent-Based Modeling (ABM)",
    "Discrete Event Simulation (DES)",
    "System Resilience",
    "LLM Security",
    "Prompt Injection Defense",
    "Automated Red-Teaming",
    "BERT Classifier",
    "SRL Theory & COPES",
    "AI Learning Analytics",
  ];

  // Filter logic
  let displayedPubs = cvData.publications;
  if (filterType === "hrc") {
    displayedPubs = displayedPubs.filter((p) => p.category === "Robotics & Embodied AI");
  } else if (filterType === "llm") {
    displayedPubs = displayedPubs.filter((p) => p.category === "LLM Security");
  } else if (filterType === "srl") {
    displayedPubs = displayedPubs.filter((p) => p.category === "AI Learning Analytics");
  } else if (filterType === "award") {
    displayedPubs = displayedPubs.filter((p) =>
      p.badges?.some((b) => b.includes("優秀") || b.includes("Best") || b.includes("最佳"))
    );
  }

  if (selectedTopic) {
    displayedPubs = displayedPubs.filter((p) =>
      p.tags?.some((t) => t.toLowerCase().includes(selectedTopic.toLowerCase()))
    );
  }

  const renderAuthors = (authors) => {
    return authors.map((author, idx) => {
      const isMe =
        author.includes("HONG WEI CIOU") ||
        author.includes("HONG-WEI CIOU") ||
        author.includes("Hong-Wei Ciou") ||
        author.includes("Ciou, Hong-Wei") ||
        author.includes("HUNG-WEI CHIU") ||
        author.includes("Hong-Wei Chiu") ||
        author.includes("Hung-Wei Chiu") ||
        author.includes("Chiu, Hung-Wei") ||
        author.includes("邱泓崴");
      return (
        <span key={idx}>
          {isMe ? (
            <strong className="author-highlight">{author}</strong>
          ) : (
            <span>{author}</span>
          )}
          {idx < authors.length - 1 && <span>, </span>}
        </span>
      );
    });
  };

  return (
    <div className="academic-view-content">
      {/* Left Column: Publications List */}
      <div className="content-column-left">
        <div className="section-title-box">
          <h2 className="academic-heading">All Publications</h2>
          <div className="cardinal-underline" />
        </div>

        {selectedTopic && (
          <div className="active-topic-filter-notice">
            <span>Filtered by topic: <strong>{selectedTopic}</strong></span>
            <button
              type="button"
              className="clear-filter-btn"
              onClick={() => setSelectedTopic(null)}
            >
              Show all
            </button>
          </div>
        )}

        <div className="publications-citation-list">
          {displayedPubs.map((pub) => {
            const isExpanded = !!expandedItems[pub.id];

            return (
              <article key={pub.id} className="publication-entry">
                {/* Title */}
                {/* Title & Inline PDF Badge */}
                <div className="entry-title-line">
                  <span className={`entry-title-bold ${pub.id === "itac-2026" ? "en-paper-title" : ""}`}>
                    {pub.title}
                  </span>
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
                </div>

                {/* English Subtitle if available */}
                {pub.titleEn && pub.titleEn !== pub.title && (
                  <div className="entry-title-en">
                    <em>{pub.titleEn}</em>
                  </div>
                )}

                {/* Venue Line (Cleanly on its own second line) */}
                <div className="entry-venue-line">
                  <span className="entry-venue-italic">
                    {pub.venue} — {pub.venueFull}
                  </span>
                </div>

                {/* Date & Citation Reference */}
                <div className="entry-citation-meta">
                  <span>{pub.year}; {pub.venue}</span>
                  {pub.badges?.some((b) => b.includes("優秀") || b.includes("Best") || b.includes("最佳")) && (
                    <span className="entry-award-badge">
                      {pub.badges.find((b) => b.includes("優秀") || b.includes("Best") || b.includes("最佳"))}
                    </span>
                  )}
                  <span className="entry-role-badge">【{pub.myRole}】</span>
                </div>

                {/* ▶ More / ▼ More Expander Link */}
                <div className="entry-more-toggle">
                  <button
                    type="button"
                    className="more-button"
                    onClick={() => toggleItem(pub.id)}
                  >
                    {isExpanded ? (
                      <ChevronDown size={14} className="more-icon" />
                    ) : (
                      <ChevronRight size={14} className="more-icon" />
                    )}
                    <span>More</span>
                  </button>
                </div>

                {/* Expanded Details Panel */}
                {isExpanded && (
                  <div className="entry-expanded-details">
                    <div className="details-links-group">
                      {pub.links?.code && (
                        <a
                          href={pub.links.code}
                          target="_blank"
                          rel="noreferrer"
                          className="detail-action-link"
                        >
                          <ExternalLink size={13} className="detail-icon" />
                          <span>View code & testbed platform on GitHub</span>
                        </a>
                      )}

                      <button
                        type="button"
                        className="detail-action-link bibtex-copy-trigger"
                        onClick={() => onOpenBibtex(pub)}
                      >
                        <Quote size={13} className="detail-icon" />
                        <span>View and Copy BibTeX citation</span>
                      </button>
                    </div>

                    {/* Academic Abstract & Quantitative Highlights */}
                    <div className="abstract-card">
                      <div className="abstract-row">
                        <strong>Research Problem: </strong>
                        <span>{pub.problem}</span>
                      </div>
                      <div className="abstract-row">
                        <strong>Methodology & Architecture: </strong>
                        <span>{pub.method}</span>
                      </div>
                      <div className="abstract-row result-emphasis">
                        <strong>Key Quantitative Results: </strong>
                        <span>{pub.results}</span>
                      </div>
                      <div className="abstract-row">
                        <strong>Contribution: </strong>
                        <span>{pub.contribution}</span>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* Right Column: Counts & Topics Pills (Exact Stanford Profiles Style) */}
      <aside className="content-column-right">
        {/* Publications Breakdown Box */}
        <div className="sidebar-widget">
          <h3 className="sidebar-widget-title">
            PUBLICATIONS ({cvData.publications.length})
          </h3>
          <ul className="sidebar-stats-list">
            <li
              className={`sidebar-stat-item ${filterType === "all" ? "active-stat" : ""}`}
              onClick={() => {
                setFilterType("all");
                setSelectedTopic(null);
              }}
            >
              <span className="stat-bullet-icon">📑</span>
              <span className="stat-label">All Publications ({cvData.publications.length})</span>
            </li>
            <li
              className={`sidebar-stat-item ${filterType === "award" ? "active-stat" : ""}`}
              onClick={() => setFilterType("award")}
            >
              <span className="stat-bullet-icon">⭐</span>
              <span className="stat-label">
                Award-Winning Papers ({cvData.publications.filter((p) => p.badges?.some((b) => b.includes("優秀") || b.includes("Best") || b.includes("最佳"))).length})
              </span>
            </li>
            <li
              className={`sidebar-stat-item ${filterType === "hrc" ? "active-stat" : ""}`}
              onClick={() => setFilterType("hrc")}
            >
              <span className="stat-bullet-icon">🤖</span>
              <span className="stat-label">
                Robotics & Embodied AI ({cvData.publications.filter((p) => p.category === "Robotics & Embodied AI").length})
              </span>
            </li>
            <li
              className={`sidebar-stat-item ${filterType === "llm" ? "active-stat" : ""}`}
              onClick={() => setFilterType("llm")}
            >
              <span className="stat-bullet-icon">🛡️</span>
              <span className="stat-label">
                LLM Security & Defense ({cvData.publications.filter((p) => p.category === "LLM Security").length})
              </span>
            </li>
            <li
              className={`sidebar-stat-item ${filterType === "srl" ? "active-stat" : ""}`}
              onClick={() => setFilterType("srl")}
            >
              <span className="stat-bullet-icon">📊</span>
              <span className="stat-label">
                AI Learning Analytics & SRL ({cvData.publications.filter((p) => p.category === "AI Learning Analytics").length})
              </span>
            </li>
          </ul>
        </div>

        {/* Publication Topics For This Person */}
        <div className="sidebar-widget topics-widget">
          <h3 className="sidebar-widget-title">
            PUBLICATION TOPICS FOR THIS PERSON
          </h3>
          <div className="topic-pills-container">
            {allTopics.map((topic, idx) => {
              const isSelected = selectedTopic === topic;
              return (
                <button
                  key={idx}
                  type="button"
                  className={`topic-pill ${isSelected ? "active-topic" : ""}`}
                  onClick={() => setSelectedTopic(isSelected ? null : topic)}
                >
                  {topic}
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
}
