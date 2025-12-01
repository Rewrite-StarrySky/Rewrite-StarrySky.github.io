export default function App() {
  return (
    <main style={{minHeight:'100vh', fontFamily:'system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans"'}}>
      <section style={{maxWidth:900, margin:'0 auto', padding:'48px 16px'}}>
        <h1 style={{fontSize:32, fontWeight:800}}>邱泓崴</h1>
        <p style={{color:'#475569', marginTop:8}}>資工 / AI / 資安 / 系統</p>

        <div style={{marginTop:24}}>
          <h2 style={{fontWeight:700}}>30 秒亮點</h2>
          <ul style={{marginLeft:20, lineHeight:1.9}}>
            <li>LLM 攻防分類器：ASR ~3%、CDASR ~75%（多模型）</li>
            <li>自動化攻擊評測平台：支援 N×M，一鍵輸出報表</li>
            <li>論文：TANET & NCS（一作）、DLT（二作）</li>
          </ul>
        </div>

        <div style={{marginTop:24, lineHeight:1.9}}>
          <h2 style={{fontWeight:700}}>連結</h2>
          <p>GitHub：<a href="https://github.com/你的帳號" target="_blank">github.com/你的帳號</a></p>
          <p>履歷 PDF：<a href="/resume.pdf" target="_blank">/resume.pdf</a></p>
        </div>
      </section>
    </main>
  )
}
