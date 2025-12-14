import { useEffect, useState } from "react";
import "./App.css";

const sections = [
  { id: "summary", label: "Profile" },
  { id: "publications", label: "Publications" },
  { id: "research", label: "Research" },
  { id: "internship", label: "Internship" },
  { id: "projects", label: "Projects" },
  { id: "activities", label: "Activities" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "awards", label: "Awards" },
];

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="container">
      {/* NAV */}
      <nav className="nav card">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.label}
          </a>
        ))}
        <div className="right">
          <button
            className="btn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title="Toggle theme"
          >
            🌙 / ☀️
          </button>
          <button className="btn" onClick={() => window.print()}>
            Print PDF
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        {/* Left */}
        <div className="card hero-left">
          <div className="title">
            <h1>
              邱泓崴 <span className="en">Hong-Wei Ciou</span>
            </h1>
          </div>

          <div className="subtitle">
            資訊安全 · AI · 數據分析 · 軟體開發 · 專案管理
          </div>

          <div className="chips">
            <div className="chip">國立臺中教育大學 資訊工程學系（2021–2025）</div>
            <div className="chip">LLM Security / Prompt Injection Defense</div>
            <div className="chip">SRL & AI Learning Behavior Analytics</div>
            <div className="chip">5G / Edge / Systems</div>
          </div>

          <div className="actions">
            <a className="primary" href="mailto:acs111851@gm.ntcu.edu.tw">
              Email
            </a>

            {/* 你要連 profile 就留這個；要連 repo 就換成 /Rewrite-StarrySky.github.io */}
            <a
              href="https://github.com/Rewrite-StarrySky"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/HongWei-Ciou/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://rewrite-starrysky.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </div>

          <p className="small" style={{ marginTop: 14 }}>
            我是邱泓崴，習慣以原理拆解問題，擅長將研究想法實作落地；常在專題擔任發表者或隊長帶領成員完成項目，
            熱衷投入研究、研討會與專題競賽，持續探索資訊技術與研究。
          </p>
        </div>

        {/* Right */}
        <div className="hero-right">
          <div className="card">
            <section>
              <h2>
                <span className="dot" /> Focus
              </h2>
              <div className="badges">
                <span className="badge">LLM Security</span>
                <span className="badge">Prompt Injection / Jailbreak</span>
                <span className="badge">Automated Red-Teaming</span>
                <span className="badge">SRL / COPES Analytics</span>
                <span className="badge">5G / Edge Systems</span>
              </div>
            </section>
          </div>

          <div className="card">
            <section>
              <h2>
                <span className="dot" /> Highlights
              </h2>
              <ul>
                <li>
                  TANET & NCS（第一作者）：Prompt Injection 防禦，ASR 降至 3%，CDASR 75%
                </li>
                <li>自動化 Prompt Injection 測試平台（跨模型/多策略）</li>
                <li>教育大數據微學程學生專題競賽：隊長，獲銀獎</li>
                <li>畢業專題：中小型語言模型 Prompt Injection 攻防全景分析（系上第二名/優良評分獎）</li>
              </ul>
            </section>
          </div>
        </div>
      </header>

      {/* Profile Summary */}
      <section id="summary" className="card">
        <h2>
          <span className="dot" /> Profile Summary
        </h2>
        <div className="list">
          <div className="item">
            <div className="meta">
              專業領域：資訊安全、AI、數據分析、軟體開發、專案管理
            </div>
          </div>
          <div className="item">
            <ul>
              <li>以原理拆解問題，重視可重現的實驗流程與可部署的系統化成果</li>
              <li>擅長將研究想法實作成系統/平台，並進行跨模型/多策略量化評估</li>
              <li>常擔任隊長或發表者，負責整合需求、分工落地與成果呈現</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="card">
        <h2>
          <span className="dot" /> Publications
        </h2>

        <div className="list">
          <div className="item">
            <div className="row">
              <span className="strong">
                低成本可部署之輕量級分類器：中小型語言模型 Prompt Injection 防禦效能分析
              </span>
              <span>2025</span>
            </div>
            <div className="meta">第一作者｜TANET & NCS</div>
            <ul>
              <li>
                Problem：中小型語言模型易受 Prompt Injection 攻擊，缺少低成本可部署前線防禦
              </li>
              <li>
                Method/Role：建置並自訓練 BERT classifier，驗證作為 LLM 第一線防禦可行性
              </li>
              <li>Result：ASR 降至 3%；CDASR 75%</li>
              <li>Contribution：系統設計、分類器訓練、跨模型/多攻擊策略實驗與分析</li>
            </ul>
          </div>

          <div className="item">
            <div className="row">
              <span className="strong">
                Prompt Injection 自動化測試系統實作與中小規模 LLM 防禦分析
              </span>
              <span>2025</span>
            </div>
            <div className="meta">第二作者｜DLT 數位生活科技研討會</div>
            <ul>
              <li>Problem：缺乏可重現的大規模 Prompt Injection 自動化測試流程</li>
              <li>Method/Role：自建自動化越獄攻擊測試平台，模擬多樣策略並量化防禦效能</li>
              <li>Result：提供可快速測試中小型 LLM 防護能力的研究工具（平台化貢獻）</li>
              <li>Contribution：平台架構設計、攻擊流程整合、跨模型防禦效能量化分析</li>
            </ul>
          </div>

          <div className="item">
            <div className="row">
              <span className="strong">
                基於自我調整學習理論之 AI 互動行為分析：學習場域差異與專注力關聯之探討
              </span>
              <span>2025</span>
            </div>
            <div className="meta">第一作者｜自主學習節暨數位學習行為研討會｜獲優秀論文</div>
            <ul>
              <li>Problem：不同學習場域下 AI 互動行為對成效影響尚未被系統性量化</li>
              <li>Method/Role：以 SRL/COPES 理論建模，分析學生專注力與 AI 互動行為差異</li>
              <li>Result：提供數位化學習環境與 AI 系統「場域適性化」設計依據</li>
              <li>Contribution：理論建模、資料處理、SRL/attention 指標量化與統計分析</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Experience */}
      <section id="research" className="card">
        <h2>
          <span className="dot" /> Research Experience
        </h2>

        <div className="timeline">
          <div className="item t-item">
            <div className="row">
              <span className="strong">Graduation Project</span>
              <span>2025</span>
            </div>
            <div className="meta">
              中小型語言模型 Prompt Injection 攻防全景分析：從自動化測試到低成本輕量級防禦實踐（系上第二名／系統優良評分獎）
            </div>
            <ul>
              <li>研究攻擊者如何設計 Prompt Injection 手法，分析在不同模型架構間的有害程度</li>
              <li>從小型腳本擴展到大規模自動化管道，評估模型防護機制弱點</li>
              <li>提出優化方法與低成本防禦架構</li>
            </ul>
          </div>

          <div className="item t-item">
            <div className="row">
              <span className="strong">Big Data / Edu-Data Project（隊長｜獲銀獎）</span>
              <span>2025</span>
            </div>
            <div className="meta">
              THSD 計畫與 e 度（AI 學習夥伴）互動行為對學生自主學習成效表現關聯分析
            </div>
            <ul>
              <li>以 COPES 理論模型建構分析框架，利用 NLP 技術進行 LLM 標記</li>
              <li>分析不同場域學生自主學習情況差異，提供數據支持與參考依據</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Internship */}
      <section id="internship" className="card">
        <h2>
          <span className="dot" /> Internship Experience
        </h2>

        <div className="item">
          <div className="row">
            <span className="strong">智合天下科技｜系統服務處｜軟體助理工程師</span>
            <span>2024/07–09</span>
          </div>
          <div className="meta">Domain：智慧物流 / 自動化倉儲 / IoT 系統</div>
          <ul>
            <li>參與大型物流系統開發維護與版本協作（Git / Mantis 缺陷管理）</li>
            <li>依規格書進行資料庫新增/修改、後端邏輯撰寫、測試部署支援</li>
            <li>
              Projects/Clients：億代富（醫療用品倉儲）、日翊（全家物流）、統昶（統一 7-11 物流）
            </li>
            <li>協助屈臣氏物流中心系統測試，理解不同場域物流需求差異</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="card">
        <h2>
          <span className="dot" /> Selected Projects
        </h2>

        <div className="one-col">
          <div className="item">
            <div className="row">
              <span className="strong">5G Internet Experimental Teaching Program with NUK</span>
              <span>2024–2025</span>
            </div>
            <ul>
              <li>VirtualBox + Ubuntu VM 建置 EPC/eNB/UE（srsLTE / srsRAN / Open5GS）</li>
              <li>Wireshark 觀測封包行為、UE 連線流程與資源配置</li>
              <li>建置 MBMS 串流情境並調參量測傳輸效能與延遲</li>
            </ul>
          </div>

          <div className="item">
            <div className="row">
              <span className="strong">5G Edge Computing Study</span>
              <span>2024–2025</span>
            </div>
            <ul>
              <li>比較 Cloud vs Edge + 5G 之低延遲、高頻寬、資料在地化優勢</li>
              <li>分析 UPF/Private Network 部署選項成效與限制</li>
            </ul>
          </div>

          <div className="item">
            <div className="row">
              <span className="strong">Performance Comparison: Docker Containers vs Virtual Machines</span>
              <span>2024</span>
            </div>
            <ul>
              <li>sysbench 基準測試 CPU/Memory/Disk/Matrix</li>
              <li>結果：Docker 多數運算與 I/O 指標優於 VM</li>
              <li>使用 Python 視覺化（雷達圖、時間序列）呈現比較</li>
            </ul>
          </div>

          <div className="item">
            <div className="row">
              <span className="strong">Tag-based Search & Recommendation Video Platform</span>
              <span>2024</span>
            </div>
            <ul>
              <li>ReactJS 前端 + Node.js/Python/PHP 後端 + MySQL</li>
              <li>負責專案企劃、API 與推薦/分類算法實作、系統整合</li>
              <li>完成標籤管理、標籤搜尋推薦、收藏、播放、帳號系統等模組</li>
            </ul>
          </div>

          <div className="item">
            <div className="row">
              <span className="strong">Monte Carlo Simulation for Stock Price Analysis</span>
              <span>2024</span>
            </div>
            <ul>
              <li>以 yfinance 取得股價資料，模擬 100 條未來路徑</li>
              <li>視覺化股價分布直方圖／風險機率評估</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="card">
        <h2>
          <span className="dot" /> Academic Activities / Service
        </h2>
        <div className="list">
          <div className="item">
            <div className="row">
              <span className="strong">Teaching Assistant（助理小老師）— Database Programming</span>
              <span>2024/02–06</span>
            </div>
            <ul>
              <li>協助與東海大學量子計算機器學習自動化開發期中成果交流與會議進行</li>
            </ul>
          </div>
          <div className="item">
            <div className="meta">
              參與：Google Developer Student Clubs (GDSC) NTCU、NTCU 資安白帽社、EAGE AI 研討會等
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="card">
        <h2>
          <span className="dot" /> Skills
        </h2>

        <div className="list">
          <div className="item">
            <div className="row">
              <span className="strong">Programming</span>
            </div>
            <div className="meta">Python, C/C++, SQL, JavaScript, PHP, R</div>
          </div>

          <div className="item">
            <div className="row">
              <span className="strong">Frameworks / Tools</span>
            </div>
            <div className="meta">
              ReactJS, Node.js, MySQL, Git/GitLab, Docker, VirtualBox, Linux
            </div>
          </div>

          <div className="item">
            <div className="row">
              <span className="strong">Research Tools</span>
            </div>
            <div className="meta">
              Wireshark, sysbench, LLM evaluation pipelines, NLP-based behavior coding
            </div>
          </div>

          <div className="item">
            <div className="row">
              <span className="strong">Strengths</span>
            </div>
            <ul>
              <li>獨立研究能力與快速原型實作</li>
              <li>系統建置 + 量化實驗評估</li>
              <li>安全/攻防導向的 red-teaming mindset</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="card">
        <h2>
          <span className="dot" /> Education
        </h2>
        <div className="item">
          <div className="row">
            <span className="strong">國立臺中教育大學 資訊工程學系</span>
            <span>2021–2025</span>
          </div>
          <div className="meta">系排 9/54｜GPA 3.67 / 4.3</div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="card">
        <h2>
          <span className="dot" /> Awards & Competitions
        </h2>
        <ul>
          <li>教育部教育大數據微學程計畫學生專題成果競賽：隊長，獲銀獎（2025）</li>
          <li>系上專題競賽第二名（A）／系主任獎／系統評分優良作品獎（2025）</li>
          <li>NCPC 全國大專電腦程式技能競賽：初賽解出 3 題晉級決賽（2024）</li>
          <li>參與資訊安全金盾獎（2024）</li>
          <li>教育大數據六校聯合成果展（2025）</li>
          <li>獲鼎新電腦校園全端開發工程師證照</li>
        </ul>
      </section>

      <footer>Last updated 2025 · Built with Vite + React · © Hong-Wei Ciou</footer>
    </div>
  );
}
