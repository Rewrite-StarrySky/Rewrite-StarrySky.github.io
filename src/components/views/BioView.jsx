import React from "react";
import { Mail, MapPin, Building, GraduationCap, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../Icons";
import { cvData } from "../../data/cvData";

export default function BioView({ onNavigateTab }) {
  const { profile, news } = cvData;

  return (
    <div className="academic-view-content">
      {/* Left Column: Biography & Focus */}
      <div className="content-column-left">
        <div className="section-title-box">
          <h2 className="academic-heading">Biography</h2>
          <div className="cardinal-underline" />
        </div>

        <div className="bio-narrative-box">
          <div className="bio-quote-box">
            <p className="bio-quote-text">
              「{profile.summary}」
            </p>
            <div className="bio-domains-row">
              <span className="domains-label">專業領域：</span>
              {profile.domains?.map((domain, dIdx) => (
                <span key={dIdx} className="domain-chip">
                  {domain}
                </span>
              ))}
            </div>
          </div>

          <p className="bio-paragraph">
            <strong>{profile.nameZh} ({profile.nameEn})</strong> 現就讀於<strong>國立陽明交通大學 電腦科學系 智能系統研究所</strong>碩士班，學士畢業於<strong>國立臺中教育大學 資訊工程學系</strong>（GPA: 3.67 / 4.3，系排名: 9/54）。在各項專題研究與競賽中經常擔任發表者或隊長帶領成員實作項目，研究成果多次發表於國內外學術研討會並榮獲國際研討會最佳論文獎（ITAC 2026）、教育部全國大數據競賽銀獎、畢業專題第二名與研討會優秀論文獎。
          </p>
          <p className="bio-paragraph">
            核心研究聚焦於<strong>具身智能與人形機器人混線系統韌性（Humanoid Robotics & HRC Resilience）</strong>、<strong>大型語言模型安全（LLM Security / Automated Red-Teaming）</strong>、<strong>Prompt Injection 攻防全景與輕量級分類器防禦架構</strong>、<strong>基於自我調整學習理論（SRL）之 AI 互動行為數據分析</strong>，以及 <strong>5G 邊緣運算與虛擬化系統效能評測</strong>。
          </p>
          <p className="bio-paragraph">
            在工業與軟體工程實務上，曾於<strong>系微公司（Insyde Software）</strong>工程研發部擔任實習生參與系統韌體研發實務，並曾於<strong>智合天下科技（moc i）</strong>系統服務處擔任軟體助理工程師，深度參與大型自動化倉儲與物流系統（WMS / IoT）開發維護與版本協作（Git / Mantis），支援統一 7-ELEVEn、全家 FamilyMart、億代富與屈臣氏物流中心等大型客戶的系統測試與資料庫邏輯。
          </p>
        </div>

        {/* Current Research Focus */}
        <div className="section-title-box sub-heading-box">
          <h3 className="academic-subheading">Current Research Interests</h3>
          <div className="cardinal-underline" />
        </div>

        <div className="research-focus-list">
          {profile.researchInterests.map((item, idx) => (
            <div key={idx} className="focus-item-card">
              <h4 className="focus-item-title">{item.topic}</h4>
              <p className="focus-item-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Recent Highlights */}
        <div className="section-title-box sub-heading-box">
          <h3 className="academic-subheading">Recent Highlights & News</h3>
          <div className="cardinal-underline" />
        </div>

        <ul className="academic-bullet-list">
          {news.map((item, idx) => (
            <li key={idx} className="academic-bullet-item">
              <span className="bullet-date">[{item.date}]</span>{" "}
              <span className="bullet-text">{item.content}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column: Contact & Affiliations */}
      <aside className="content-column-right">
        <div className="sidebar-widget">
          <h3 className="sidebar-widget-title">CONTACT & AFFILIATIONS</h3>
          <div className="sidebar-contact-list">
            <div className="sidebar-contact-item">
              <Building size={15} className="sidebar-icon" />
              <div>
                <strong>Current Affiliation:</strong>
                <p>{profile.institution}</p>
                <p className="text-light">{profile.institutionEn}</p>
              </div>
            </div>

            <div className="sidebar-contact-item">
              <GraduationCap size={15} className="sidebar-icon" />
              <div>
                <strong>Academic Standing:</strong>
                <p>GPA: {profile.gpa}</p>
                <p>Class Rank: {profile.rank}</p>
              </div>
            </div>

            <div className="sidebar-contact-item">
              <Mail size={15} className="sidebar-icon" />
              <div>
                <strong>Email:</strong>
                <p>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
              </div>
            </div>

            <div className="sidebar-contact-item">
              <MapPin size={15} className="sidebar-icon" />
              <div>
                <strong>Location:</strong>
                <p>{profile.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Links Widget */}
        <div className="sidebar-widget">
          <h3 className="sidebar-widget-title">ACADEMIC PROFILES</h3>
          <ul className="sidebar-links-list">
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GithubIcon size={14} className="inline-icon" /> GitHub Repository
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon size={14} className="inline-icon" /> LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
