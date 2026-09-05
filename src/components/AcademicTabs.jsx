import React from "react";

export default function AcademicTabs({ activeTab, onSelectTab }) {
  const tabs = [
    { id: "publications", label: "PUBLICATIONS" },
    { id: "bio", label: "BIO" },
    { id: "research", label: "RESEARCH & PROJECTS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "education", label: "EDUCATION & HONORS" },
    { id: "materials", label: "COURSE MATERIALS" },
    { id: "teaching", label: "TEACHING & SERVICE" },
  ];

  return (
    <nav className="academic-tabs-bar" aria-label="Profile navigation">
      <div className="tabs-container">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              className={`tab-button ${isActive ? "active" : ""}`}
              onClick={() => onSelectTab(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
