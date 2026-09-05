import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  GraduationCap,
  FileText,
  Briefcase,
  Award,
  BookOpen,
  Layers,
  Wrench,
  Sparkles,
} from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "about", label: "About", icon: GraduationCap },
    { id: "publications", label: "Publications", icon: BookOpen },
    { id: "research", label: "Research", icon: Layers },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education & Awards", icon: Award },
    { id: "skills", label: "Skills & Service", icon: Wrench },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = navLinks.map((link) =>
        document.getElementById(link.id)
      );

      const scrollPosition = window.scrollY + 140;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`nav-header ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-container">
        {/* Brand / Academic Initials */}
        <a
          href="#about"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("about");
          }}
        >
          <div className="nav-avatar-pill">
            <span className="brand-initials">HC</span>
            <span className="brand-dot" />
          </div>
          <div className="brand-text">
            <span className="brand-name">邱泓崴</span>
            <span className="brand-subtitle">Hong-Wei Ciou</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="desktop-nav">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                <Icon size={15} className="nav-icon" />
                <span>{item.label}</span>
                {isActive && <span className="active-pill" />}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          <button
            type="button"
            className="action-btn theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun size={17} className="icon-sun" />
            ) : (
              <Moon size={17} className="icon-moon" />
            )}
          </button>


          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="action-btn mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-card">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  className={`mobile-nav-item ${isActive ? "active" : ""}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
