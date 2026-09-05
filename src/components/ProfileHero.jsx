import React from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { cvData } from "../data/cvData";

export default function ProfileHero() {
  const { profile } = cvData;

  return (
    <div className="profile-banner">
      <div className="profile-banner-inner">
        {/* Left: Square Profile Headshot */}
        <div className="profile-photo-container">
          <img
            src="/profile.jpg"
            alt={`${profile.nameEn} (${profile.nameZh})`}
            className="profile-photo"
          />
        </div>

        {/* Middle: Name and Formal Academic Titles */}
        <div className="profile-info-container">
          <h1 className="profile-name">
            {profile.nameEn} <span className="profile-name-zh">{profile.nameZh}</span>
          </h1>

          <div className="profile-titles-list">
            <p className="title-line">
              RESEARCHER IN COMPUTER SCIENCE & INTELLIGENT SYSTEMS
            </p>
            <p className="institution-zh-line">
              國立陽明交通大學 電腦科學系 智能系統研究所
            </p>
            <p className="title-line institution-line">
              {profile.institutionEn.toUpperCase()}, TAIWAN
            </p>
            <p className="discipline-line">
              專業領域：{profile.domains ? profile.domains.join(" · ") : "資訊安全 · AI · 數據分析 · 軟體開發 · 專案管理"}
            </p>
          </div>
        </div>

        {/* Right: Academic Action Buttons (Stanford Fei-Fei Li Profile Style) */}
        <div className="profile-action-links">

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noreferrer"
            className="action-link-item"
            title="Compose Email in Gmail"
          >
            <Mail size={15} className="action-icon" />
            <span>EMAIL PROFILE</span>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="action-link-item"
            title="GitHub Repository"
          >
            <GithubIcon size={15} className="action-icon" />
            <span>GITHUB</span>
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="action-link-item"
            title="LinkedIn Profile"
          >
            <LinkedinIcon size={15} className="action-icon" />
            <span>LINKEDIN</span>
          </a>
        </div>
      </div>
    </div>
  );
}
