# 個人學術個人履歷網站架構與文字設定手冊 (ARCHITECTURE.md)

本文件完整記錄本個人學術網站（基於 Stanford Profiles 學術機構風格）的**架構設計**、**文字資料來源**、**字體與排版樣式設定**以及**後續維護修改指引**。

---

## 目錄

1. [專案技術棧與整體概覽](#1-專案技術棧與整體概覽)
2. [目錄與檔案結構詳解](#2-目錄與檔案結構詳解)
3. [文字與內容設定中心（資料在哪裡修改？）](#3-文字與內容設定中心資料在哪裡修改)
4. [字體大小與排版樣式設定（字體樣式在哪裡設定？）](#4-字體大小與排版樣式設定字體樣式在哪裡設定)
5. [組件階層與分頁導覽架構](#5-組件階層與分頁導覽架構)
6. [7 大學術分頁視圖詳解](#6-7-大學術分頁視圖詳解)
7. [SEO 與學術結構化資料設定](#7-seo-與學術結構化資料設定)
8. [常見內容維護操作指南](#8-常見內容維護操作指南)

---

## 1. 專案技術棧與整體概覽

- **核心框架**：React 18 / 19 + Vite 7
- **樣式技術**：原生 Vanilla CSS（透過 CSS Custom Properties 建構 Stanford Profiles 設計系統）
- **圖示庫**：`lucide-react`（學術圖示：BookOpen, FileText, Quote, Award, Sparkles 等）
- **設計語彙**：Stanford Profiles Academic Design System
  - 主色調：史丹佛 Cardinal Red（`#8C1515`）搭配典雅中性紙質灰（`#fbfbfa`, `#f4f4f2`）
  - 字體族：Source Sans 3（正文）、Source Serif 4（學術襯線）、JetBrains Mono（等寬程式碼）、Noto Sans TC（中文黑體）
- **單頁架構 (SPA)**：狀態驅動 Tab 切換，兼具極速切換與無刷新響應。

---

## 2. 目錄與檔案結構詳解

```text
MyWeb/
├── index.html                     # 網站 HTML 骨架、Google 字型引入、SEO、學術 JSON-LD
├── vite.config.js                 # Vite 打包配置
├── package.json                   # 專案依賴與腳本 (npm run dev, npm run build)
├── ARCHITECTURE.md                # 網站架構與文字設定手冊（本文件）
├── README.md                      # GitHub 倉庫說明
│
├── public/                        # 靜態資源
│   ├── profile.jpg                # 個人真實證件照片（高解析度裁切優化版）
│   └── favicon.svg                # 網站圖示
│
└── src/                           # 原始碼目錄
    ├── main.jsx                   # React 進入點，掛載 App 至 #root
    ├── App.jsx                    # 頂層主版面控制器（管理分頁狀態、Modal 與排版骨架）
    ├── index.css                  # 全域設計系統 Token、字型變數、顏色定義、Reset
    ├── App.css                    # 核心組件樣式、Stanford 兩欄式排版、條目樣式與斷行規則
    │
    ├── data/                      # 📊 資料層（單一真實數據來源）
    │   └── cvData.js              # 全站個人資料、動態、論文、專案、經歷、獲獎、教材全集
    │
    └── components/                # 🧩 視圖組件層
        ├── StanfordTopBar.jsx     # 頂部 Cardinal 紅色學術導覽條與搜尋列
        ├── ProfileHero.jsx        # 個人首頁橫幅（照片、中英姓名、現職頭銜、聯繫按鈕）
        ├── AcademicTabs.jsx       # 7 大學術分頁水平切換按鈕組
        ├── StanfordFooter.jsx     # 頁尾機構版權宣告與校園聯絡資訊
        ├── BibtexModal.jsx        # 學術 BibTeX 引用彈出視窗（含一鍵複製）
        ├── Icons.jsx              # 自訂 SVG 圖示集
        │
        ├── views/                 # 📄 7 大學術分頁（渲染 cvData.js）
        │   ├── PublicationsView.jsx   # 學術發表（主推 Stanford Profiles 格式 + 4 大精煉條目）
        │   ├── BioView.jsx            # 個人自傳、研究領域概覽、現職所屬側邊欄
        │   ├── ResearchView.jsx       # 深度研究與實作專案（系統架構、效能評測）
        │   ├── ExperienceView.jsx     # 實習與工程經歷（系微公司、智合天下）
        │   ├── EducationView.jsx      # 學歷背景、全系排名、競賽獎項
        │   ├── TeachingServiceView.jsx# 教學服務、TA 助教、學術會議活動
        │   └── CourseMaterialsView.jsx# 課程教材、簡報投影片與展示資料
        │
        └── (歷史/備用組件)         # 保留供參考之模組化組件
            ├── Hero.jsx
            ├── Navbar.jsx
            ├── Publications.jsx
            ├── ResearchProjects.jsx
            ├── Experience.jsx
            ├── EducationAwards.jsx
            └── SkillsActivities.jsx
```

---

## 3. 文字與內容設定中心（資料在哪裡修改？）

全站 **95% 以上的所有文字與履歷內容** 都集中在單一檔案，修改資料時不需要改動 JSX 模板代碼：

### 🎯 核心文字資料庫：[`src/data/cvData.js`](file:///home/cosmiel/MyWeb/src/data/cvData.js)

`cvData.js` 導出 `cvData` 物件，包含以下完整欄位模組：

| 物件鍵名 | 中文意義 | 對應展示分頁 / 位置 | 包含內容 |
| :--- | :--- | :--- | :--- |
| `profile` | 個人基本資料 | 全站頁首、頁尾、Bio | 中英文姓名（`nameZh`, `nameEn: "HONG-WEI CIOU"`）、職稱、學校系所、GPA、全系排名、Email、社交連結、5 大研究興趣、概括統計 |
| `news` | 最新動態 | Bio 側邊欄、各處最新快報 | 論文發表、成果展獲獎、研究所錄取等時間軸動態 |
| `publications` | 學術論文著作 | Publications 分頁 | 4 篇論文完整資訊（標題、作者列表 `["邱泓崴 (HONG-WEI CIOU)"]`、研討會名稱、年份、4 大項目：Problem、Method、Results、Contribution、BibTeX 引用等） |
| `researchProjects`| 深度研究專案 | Research 分頁 | 具身智能、LLM 安全防禦、5G 網路、影音推薦平台等專案細節、架構與成果 |
| `experience` | 實習與工作經歷 | Experience 分頁 | **系微公司** (Insyde) 工程研發部實習生、**智合天下科技** (moc i) 系統服務處助理工程師 |
| `education` | 學歷歷程 | Education 分頁 | 國立陽明交通大學智能所碩士、國立臺中教育大學資工學士（含 GPA 3.67、系排 9/54） |
| `awards` | 榮譽與獲獎 | Education 分頁 | ITAC 最佳論文獎、教育部大數據銀獎、六校成果展第二名、校內競賽與TA肯定等 |
| `activities` | 學術服務與活動 | Teaching 分頁 | 資料庫 TA、東海大學量子交流、GDSC NTCU、資安白帽社、金盾獎參賽等 |
| `skills` | 技能樹 | 全站側邊欄 | 專業領域、程式語言 (Python, C++, JS, SQL, R)、框架工具 (PyTorch, AnyLogic, React, Docker, Linux 等) |
| `teachingMaterials`| 教學與展示教材 | Course Materials 分頁 | 5G 簡報、LLM 防禦論文投影片、課程講義、展示成果 PDF 與連結 |

### 📌 其他特定靜態文字所在位置：
- **網站標題與 SEO 描述**：[`index.html`](file:///home/cosmiel/MyWeb/index.html)（第 13-35 行）
- **頂部搜尋框與導覽字樣**：[`src/components/StanfordTopBar.jsx`](file:///home/cosmiel/MyWeb/src/components/StanfordTopBar.jsx)
- **自傳故事段落文字**：[`src/components/views/BioView.jsx`](file:///home/cosmiel/MyWeb/src/components/views/BioView.jsx)（第 73-100 行）
- **頁尾版權與機構名稱**：[`src/components/StanfordFooter.jsx`](file:///home/cosmiel/MyWeb/src/components/StanfordFooter.jsx)

---

## 4. 字體大小與排版樣式設定（字體樣式在哪裡設定？）

樣式與字級設定採兩層式結構：

### 1️⃣ 全域設計 Token：[`src/index.css`](file:///home/cosmiel/MyWeb/src/index.css)

定義了 CSS 變數（Design Tokens），控制全站共用色彩、字型族與基本元素：

```css
:root {
  /* 品牌色彩 */
  --cardinal-red: #8C1515;       /* 史丹佛 Cardinal 紅 */
  --bg-page: #fbfbfa;            /* 學術紙張底色 */
  --text-dark: #2e2d29;          /* 主標題沉穩墨黑 */
  --text-body: #3b3a36;          /* 正文深灰 */
  --text-muted: #5e5d59;         /* 次要資訊柔和灰 */

  /* 字型設定 */
  --font-serif: "Source Serif 4", "Noto Serif TC", Georgia, serif;
  --font-sans: "Source Sans 3", "Noto Sans TC", -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", Menlo, Consolas, monospace;
}
```

### 2️⃣ 模組與條目字級設定：[`src/App.css`](file:///home/cosmiel/MyWeb/src/App.css)

所有組件的字型大小（`font-size`）、行距（`line-height`）與字重（`font-weight`）均在此設定。以下列出最常調整的核心條目位置：

#### A. 論文標題與中英文平衡樣式（約第 440-465 行）：
```css
/* 論文標題行（中文標題基準） */
.entry-title-line {
  font-size: 16.5px;             /* 中文論文標題基準大小 */
  line-height: 1.55;
  color: var(--text-dark);
}

.entry-title-bold {
  font-weight: 700;
  color: #1a1918;
}

/* 英文論文專屬字級光學補償（讓英文標題與中文視覺完全等大） */
.entry-title-bold.en-paper-title {
  font-size: 17.5px;             /* 彌補拉丁字母小寫 x-height 偏小的問題 */
  font-weight: 750;
  letter-spacing: -0.01em;
}

/* 研討會斜體名稱（獨立第二行） */
.entry-venue-line {
  margin: 3px 0 5px 0;
  line-height: 1.45;
}

.entry-venue-italic {
  font-style: italic;
  font-weight: 600;
  color: #63615c;
  font-size: 14px;
}

/* 英文副標題（若有） */
.entry-title-en {
  font-size: 13.5px;
  color: var(--text-muted);
  margin-top: 2px;
}

/* 作者列 */
.entry-authors-line {
  font-size: 14px;
  color: var(--text-muted);
  margin-top: 4px;
  line-height: 1.45;
}

/* 本人姓名加粗底線高亮 */
.author-highlight {
  color: #000000;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 2px;
}
```

#### B. 其他分頁標題字級對照表：
- **分頁大標題（All Publications, Research Projects 等）**：`.academic-heading` ➔ **`21px`**
- **研究專案標題**：`.project-entry-title` ➔ **`17px`**（約第 841 行）
- **實習職務標題**：`.exp-role-title` ➔ **`16px`**（約第 973 行）
- **學位名稱標題**：`.edu-degree-line` ➔ **`16px`**（約第 1120 行）
- **自傳正文**：`.bio-narrative-box` ➔ **`15px`**（行高 1.7，約第 673 行）
- **論文 4 大結構條目 (Problem/Method/Results/Contribution)**：`.abstract-row` ➔ **`13.5px`**（約第 538 行）

---

## 5. 組件階層與分頁導覽架構

網站採用頂層集中狀態路由模式，在 [`src/App.jsx`](file:///home/cosmiel/MyWeb/src/App.jsx) 中管理：

```text
App.jsx (頂層版面控制器)
 ├── StanfordTopBar.jsx         (頂部 Cardinal 紅條、校名與搜尋框)
 ├── ProfileHero.jsx            (個人首頁橫幅、證件照、中英姓名與現職頭銜)
 ├── AcademicTabs.jsx           (7 大水平分頁按鈕群)
 ├── main.main-academic-layout  (兩欄式主容器，依 activeTab 渲染對應 View)
 │    ├── PublicationsView.jsx  (activeTab === 'publications' 預設)
 │    ├── BioView.jsx           (activeTab === 'bio')
 │    ├── ResearchView.jsx      (activeTab === 'research')
 │    ├── ExperienceView.jsx    (activeTab === 'experience')
 │    ├── EducationView.jsx     (activeTab === 'education')
 │    ├── CourseMaterialsView.jsx (activeTab === 'materials')
 │    └── TeachingServiceView.jsx (activeTab === 'teaching')
 ├── StanfordFooter.jsx         (頁尾機構版權宣告)
 └── BibtexModal.jsx            (當點選 View BibTeX 時彈出的浮動視窗)
```

---

## 6. 7 大學術分頁視圖詳解

所有分頁皆位於 `src/components/views/`，採標準 Stanford 兩欄排版（左側 `content-column-left` 展示主要條目、右側 `content-column-right` 展示分類統計或機構側邊欄）：

1. **PublicationsView.jsx (學術論文)**：
   - 支援依研究主題標籤過濾（篩選器）。
   - 標題與研討會遵循 Stanford Profiles 標準行內排版，英文長標題配備 `en-paper-title` 字級等大補償。
   - 每篇論文支援點擊展開 **More**：呈現 PDF、GitHub、BibTeX 複製按鈕，以及精煉的 4 大項目（Research Problem, Methodology, Key Results, Contribution）。
2. **BioView.jsx (個人自傳)**：
   - 呈現自我介紹段落，以及整合「系微公司」與「智合天下科技」之實習經歷敘述。
   - 列出 5 大核心研究興趣卡片與 Current Affiliation 側邊欄。
3. **ResearchView.jsx (專案研究)**：
   - 收錄具身智能與混線韌性、Prompt Injection 攻防、BERT 分類器、AI SRL 學習行為、5G 網路切片等深度專案。
4. **ExperienceView.jsx (經歷)**：
   - 頂端展示「系微公司 (Insyde) 工程研發部實習生」，接續「智合天下科技 (moc i) 軟體助理工程師」。
   - 右側側邊欄展示合作企業機構清單。
5. **EducationView.jsx (學歷與獲獎)**：
   - 展示 NYCU 智能所碩士與 NTCU 資工學士（純淨系排 `9 / 54`）。
   - 完整時間軸列出 6 項以上競賽、獎學金與論文大獎。
6. **TeachingServiceView.jsx (教學與服務)**：
   - TA 助教、活動組織、學術交流與研討會參與紀錄。
7. **CourseMaterialsView.jsx (課程教材)**：
   - 論文簡報投影片、課程講義教材下載與線上閱讀清單。

---

## 7. SEO 與學術結構化資料設定

檔案位於 [`index.html`](file:///home/cosmiel/MyWeb/index.html)：

- **標準 HTML5 Meta**：Title、Description、Keywords、Robots、Canonical URL。
- **Open Graph & Twitter Cards**：社群平台分享預覽卡片。
- **Google Academic Schema.org (JSON-LD)**：
  - 類型：`Person`
  - 姓名：`邱泓崴 (HONG-WEI CIOU)`
  - 所屬機構：國立陽明交通大學、國立臺中教育大學
  - 身分標籤：Computer Science Researcher, AI & Cybersecurity Engineer

---

## 8. 常見內容維護操作指南

### Q1: 如何新增一篇新的論文？
1. 開啟 [`src/data/cvData.js`](file:///home/cosmiel/MyWeb/src/data/cvData.js)，找到 `publications` 陣列。
2. 在陣列最前方新增一個物件：
   ```javascript
   {
     id: "my-new-paper-2026",
     title: "論文標題",
     titleEn: "English Title (若主標題為中文)",
     authors: ["邱泓崴 (HONG-WEI CIOU)"],
     myRole: "第一作者 (First Author)",
     venue: "研討會簡稱",
     venueFull: "研討會完整全名",
     year: "2026",
     category: "分類名稱",
     tags: ["標籤1", "標籤2"],
     badges: ["第一作者 (First Author)"],
     problem: "研究問題...",
     method: "研究方法...",
     results: "實驗成果...",
     contribution: "主要貢獻...",
     links: {
       pdf: "https://...",
       code: "https://...",
       bibtex: `@inproceedings{...}`
     }
   }
   ```
3. 存檔後 Vite 開發伺服器即會自動熱重載更新！

### Q2: 如何調整全站論文或專案的標題字級？
- 開啟 [`src/App.css`](file:///home/cosmiel/MyWeb/src/App.css)：
  - 修改 `.entry-title-line` 裡的 `font-size` 可調整論文標題大小。
  - 修改 `.entry-title-bold.en-paper-title` 裡的 `font-size` 可調整英文論文的補償字級。
  - 修改 `.project-entry-title` 裡的 `font-size` 可調整研究專案標題大小。

### Q3: 如何修改個人聯絡方式或照片？
- **聯絡資訊**：至 [`src/data/cvData.js`](file:///home/cosmiel/MyWeb/src/data/cvData.js) 的 `profile` 物件修改 `email`, `github`, `linkedin`, `location` 等欄位。
- **照片更換**：將新照片命名為 `profile.jpg`，直接覆蓋放置於 [`public/profile.jpg`](file:///home/cosmiel/MyWeb/public/profile.jpg) 即可。

---

*文件建立時間：2026 年 9 月*  
*維護者：邱泓崴 (HONG-WEI CIOU)*
