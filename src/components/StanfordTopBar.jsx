import React from "react";
import { Search, ChevronDown } from "lucide-react";

export default function StanfordTopBar() {
  return (
    <header className="stanford-top-bar">
      <div className="top-bar-inner">
        {/* University Logo / Branding */}
        <div className="brand-wrap">
          <span className="brand-logo-text">NYCU</span>
          <span className="brand-divider">|</span>
          <span className="brand-profiles-text">Academic Profile</span>
        </div>

        {/* Search Bar Input (Academic Profile Style) */}
        <div className="search-container">
          <div className="search-input-box">
            <input
              type="text"
              placeholder="Search by name, research topic, keywords..."
              aria-label="Search profiles"
            />
            <Search size={17} className="search-icon" />
          </div>
        </div>

        {/* Action Links */}
        <nav className="top-nav-links">
          <span className="nav-item has-dropdown">
            BROWSE <ChevronDown size={14} className="dropdown-icon" />
          </span>
        </nav>
      </div>
    </header>
  );
}
