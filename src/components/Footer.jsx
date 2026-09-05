import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { cvData } from "../data/cvData";

export default function Footer() {
  const { profile } = cvData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="academic-footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-name">{profile.nameZh} · {profile.nameEn}</span>
            <p className="footer-desc">
              Computer Science Researcher · Dept. of CSIE, National Taichung University of Education
            </p>
          </div>

          <div className="footer-social-links">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
              target="_blank"
              rel="noreferrer"
              title="Email via Gmail"
            >
              <Mail size={16} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" title="GitHub">
              <GithubIcon size={16} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {profile.nameEn} ({profile.nameZh}). All rights reserved.
          </p>
          <p className="footer-meta">
            Designed for Academic Excellence & Reproducibility · Built with React & Vite
          </p>
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            title="Back to Top"
          >
            <ArrowUp size={14} />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
