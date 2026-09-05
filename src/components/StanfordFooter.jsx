import React from "react";
import { cvData } from "../data/cvData";

export default function StanfordFooter() {
  const { profile } = cvData;

  return (
    <footer className="stanford-footer-wrap">
      <div className="footer-inner">
        <div className="footer-top-row">
          <div className="footer-brand-academic">
            <span className="footer-uni-name">{profile.institution}</span>
            <span className="footer-sub-name">{profile.institutionEn}</span>
          </div>
          <div className="footer-contact-text">
            <span>Contact: <a href={`mailto:${profile.email}`}>{profile.email}</a></span>
            <span className="footer-pipe">|</span>
            <span>Location: {profile.location}</span>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright-text">
            © {new Date().getFullYear()} {profile.nameEn} ({profile.nameZh}). Academic Profile & Curriculum Vitae.
          </p>
          <div className="footer-links-row">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <span className="footer-pipe">·</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
