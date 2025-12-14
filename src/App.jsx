import { useEffect, useState } from "react";
import "./App.css";

const sections = [
  { id: "interests", label: "Research" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Publications" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "awards", label: "Awards" },
  { id: "skills", label: "Skills" },
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
            LLM Security · Prompt Injection Defense · Automated Red-Teaming · SRL
            Analytics · 5G/Edge Systems
          </div>

          <div className="chips">
            <div className="chip">National Taichung University of Education</div>
            <div className="chip">B.S. CSE (Expected 2025)</div>
            <div className="chip">GDSC NTCU</div>
            <div className="chip">White-Hat Security Club</div>
          </div>

          <div className="actions">

            <a className="primary" href="mailto:acs111851@gm.ntcu.edu.tw">
              Email
            </a>
            <a
              href="https://github.com/Rewrite-StarrySky"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="http://www.linkedin.com/in/HongWei-Ciou"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <p className="small" style={{ marginTop: 14 }}>
            我專注於大型語言模型安全、Prompt Injection / Jailbreak 攻防與自動化測試平台，
            同時投入 SRL AI互動行為分析與 5G/Edge 網路系統研究。
          </p>
        </div>

        {/* Right stacked (NO GPA card) */}
        <div className="hero-right">
          <div className="card">
            <section>
              <h2>
                <span className="dot" /> Primary Domains
              </h2>
              <div className="badges">
                <span className="badge">LLM Security</span>
                <span className="badge">Prompt Injection Defense</span>
                <span className="badge">Automated Red-Teaming</span>
                <span className="badge">SRL Analytics</span>
                <span className="badge">5G Private Networks</span>
                <span className="badge">Edge Computing</span>
              </div>
            </section>
          </div>

          <div className="card">
            <section>
              <h2>
                <span className="dot" /> Highlights
              </h2>
              <ul>
                <li>1st-author @ TANET & NCS 2025 — Prompt Injection Defense</li>
                <li>Automated Jailbreak / Red-Teaming Platform (Cross-model)</li>
                <li>SRL + AI interaction behavior analytics @ Edu-data</li>
                <li>5G Private Network / MBMS / Edge Computing experiments</li>
              </ul>

              <div className="badges" style={{ marginTop: 10 }}>
                <span className="badge">ASR 3%</span>
                <span className="badge">CDASR 75%</span>
                <span className="badge">BERT Front-line Defense</span>
              </div>
            </section>
          </div>
        </div>
      </header>

      {/* Research Interests */}
      <section id="interests" className="card">
        <h2>
          <span className="dot" /> Research Interests
        </h2>
        <div className="badges">
          <span className="badge">Large Language Model (LLM) Security</span>
          <span className="badge">
            Prompt Injection / Jailbreak Attacks & Defenses
          </span>
          <span className="badge">
            Automated Red-Teaming & Evaluation Systems
          </span>
          <span className="badge">
            Self-Regulated Learning (SRL) & AI Learning Behavior Analytics
          </span>
          <span className="badge">
            Networking Systems · 5G Private Networks · MBMS · Edge Computing
          </span>
        </div>
      </section>

      {/* Education (NO GPA / Rank) */}
      <section id="education" className="card">
        <h2>
          <span className="dot" /> Education
        </h2>
        <div className="item">
          <div className="row">
            <span>國立臺中教育大學 · 資訊工程學系</span>
            <span>2021 – 2025 (expected)</span>
          </div>
          <div className="meta">B.S. in Computer Science and Engineering</div>
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
                Low-Cost Deployable Lightweight Classifier for Prompt Injection
                Defense in Small-to-Mid Scale LLMs
              </span>
              <span>2025</span>
            </div>
            <div className="meta">TANET & NCS · 1st author</div>
            <ul>
              <li>以消費級硬體可訓練/部署的 BERT classifier 作為 LLM 第一線防禦</li>
              <li>ASR 平均降至 3%；CDASR 75%</li>
              <li>系統設計、分類器訓練、跨模型/多攻擊策略實驗分析</li>
            </ul>
          </div>

          <div className="item">
            <div className="row">
              <span className="strong">
                Automated Prompt Injection Testing System and Defense Analysis
                for Small-to-Mid Scale LLMs
              </span>
              <span>2025</span>
            </div>
            <div className="meta">DLC / DLT · 2nd author</div>
            <ul>
              <li>自動化越獄測試平台，隨機 FLAG 模擬敏感資訊</li>
              <li>平台架構、攻擊流程整合、跨模型防禦效能量化分析</li>
            </ul>
          </div>

          <div className="item">
            <div className="row">
              <span className="strong">
                AI Interaction Behavior Analysis Based on SRL: Effects of Learning
                Context and Attention
              </span>
              <span>2025</span>
            </div>
            <div className="meta">
              自主學習節暨數位學習行為與成效分析研討會 · 1st author
            </div>
            <ul>
              <li>以 Pintrich SRL / COPES 建立 codebook</li>
              <li>NLP 量化學生 AI 互動行為與專注力</li>
              <li>理論建模、資料處理、指標量化與統計分析</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Experience */}
      <section id="experience" className="card">
        <h2>
          <span className="dot" /> Research Experience
        </h2>

        <div className="timeline">
          <div className="item t-item">
            <div className="row">
              <span>Undergraduate Thesis / Graduation Project</span>
              <span>2025</span>
            </div>
            <div className="meta">
              Cross-Model and Cross-Scale Automated Jailbreak Attacks for LLMs
            </div>
            <ul>
              <li>建置自動化越獄攻擊 pipeline（小型腳本 → 大規模自動化）</li>
              <li>比較不同架構/規模 LLM 的安全性影響</li>
              <li>分析成功案例語態/關鍵字定位突破點</li>
              <li>彙整跨模型攻防數據並提出第一線防護策略</li>
            </ul>
          </div>

          <div className="item t-item">
            <div className="row">
              <span>Big Data Research Project</span>
              <span>2025</span>
            </div>
            <div className="meta">
              SRL Score, Learning Time & Academic Performance (Edu-Data)
            </div>
            <ul>
              <li>Data：因材網平台對話紀錄、使用時數與前後測成績</li>
              <li>方法：相關分析、中介模型、Python 視覺化</li>
              <li>使用時數 → SRL 顯著正向；SRL → 數學成績正向預測</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects (one per row) */}
      <section id="projects" className="card">
        <h2>
          <span className="dot" /> Selected Projects
        </h2>

        <div className="one-col">
          <div className="item">
            <div className="row">
              <span>Low-cost LLM Prompt Injection Defense with BERT Classifier</span>
              <span>2024–2025</span>
            </div>
            <ul>
              <li>RTX3050 / i7-12650 訓練輕量化 BERT 分類器</li>
              <li>Llama / Gemma / Qwen 攻擊前後對照評估</li>
              <li>量化 ASR / CDASR 驗證可部署前線防禦</li>
            </ul>
          </div>

          <div className="item">
            <div className="row">
              <span>Automated Prompt Injection Red-Teaming Platform</span>
              <span>2025</span>
            </div>
            <ul>
              <li>隨機 FLAG 作敏感資訊標的，模擬多類 Jailbreak 策略</li>
              <li>支援跨模型、跨策略批量測試與量化</li>
            </ul>
          </div>

          <div className="item">
            <div className="row">
              <span>5G Internet Experimental Teaching Program with NKU</span>
              <span>2024–2025</span>
            </div>
            <ul>
              <li>Ubuntu VM 建 EPC/eNB/UE（srsRAN / Open5GS）</li>
              <li>Wireshark 觀測封包/連線流程</li>
              <li>MBMS 串流調參與效能量測</li>
            </ul>
          </div>

          <div className="item">
            <div className="row">
              <span>Docker Containers vs Virtual Machines Performance Study</span>
              <span>2024</span>
            </div>
            <ul>
              <li>sysbench 基準測試 CPU/Memory/Disk/Matrix</li>
              <li>Docker 多數指標優於 VM</li>
              <li>Python 視覺化對照</li>
            </ul>
          </div>

          <div className="item">
            <div className="row">
              <span>Tag-based Search & Recommendation Video Platform</span>
              <span>2024</span>
            </div>
            <ul>
              <li>ReactJS 前端 + Node/Python/PHP 後端 + MySQL</li>
              <li>標籤搜尋與推薦/分類算法、系統整合</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="card">
        <h2>
          <span className="dot" /> Awards & Competitions
        </h2>
        <ul>
          <li>NCPC 初賽解出 3 題晉級決賽（2024）</li>
          <li>2025 教育大數據微學程六校聯合成果展參與</li>
          <li>2025 大教育微學程 14 校聯合競賽參與</li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" className="card">
        <h2>
          <span className="dot" /> Skills
        </h2>

        <div className="list">
          <div className="item">
            <div className="row">
              <span>Programming</span>
            </div>
            <div className="meta">Python, C/C++, SQL, JavaScript, PHP</div>
          </div>

          <div className="item">
            <div className="row">
              <span>Frameworks / Tools</span>
            </div>
            <div className="meta">
              ReactJS, Node.js, MySQL, Git/GitLab, Docker, VirtualBox, Linux
            </div>
          </div>

          <div className="item">
            <div className="row">
              <span>Research Tools</span>
            </div>
            <div className="meta">
              Wireshark, sysbench, LLM evaluation pipelines, NLP-based behavior
              coding
            </div>
          </div>

          <div className="item">
            <div className="row">
              <span>Strengths</span>
            </div>
            <ul>
              <li>自主研究與快速原型實作</li>
              <li>系統建置 + 量化實驗評估</li>
              <li>安全/攻防導向的 red-teaming mindset</li>
            </ul>
          </div>
        </div>
      </section>

      <footer>
        Last updated 2025 · Built with Vite + React · © Hong-Wei Ciou
      </footer>
    </div>
  );
}
