import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Reveal from '@/components/Reveal'
import Image from 'next/image'

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 10v3a2 2 0 002 2h2l3.5 3.5A.5.5 0 0010.5 18V6a.5.5 0 00-.85-.35L6 9H4a2 2 0 00-2 2z" />
        <path d="M15.54 8.46a5 5 0 010 7.07" />
        <path d="M19.07 4.93a10 10 0 010 14.14" />
      </svg>
    ),
    title: '系统音频捕获',
    desc: '无需虚拟声卡，直接捕获任意应用的音频输出',
    detail: 'ScreenCaptureKit · WASAPI',
    accent: 'cyan' as const,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: '实时同声传译',
    desc: '基于豆包同传大模型 2.0，毫秒级延迟翻译',
    detail: '字幕 + 语音双通道输出',
    accent: 'amber' as const,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: '8 种语言',
    desc: '覆盖主流语种，满足日常跨语言沟通需求',
    detail: '中 · 英 · 日 · 德 · 法 · 西 · 葡 · 印尼',
    accent: 'cyan' as const,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: '智能省流',
    desc: '静默 60 秒自动暂停 API，语音恢复秒级重连',
    detail: '静默暂停 · 自动重连 · 节省 tokens',
    accent: 'amber' as const,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: '原生性能',
    desc: 'Rust + Tauri 构建，极致轻量高效',
    detail: 'CPU < 5% · 内存 < 50MB',
    accent: 'cyan' as const,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: '开源免费',
    desc: 'MIT 协议，代码完全公开，社区驱动迭代',
    detail: 'GitHub · Issues · Contributions',
    accent: 'amber' as const,
  },
]

const useCases = [
  {
    emoji: '💼',
    title: '跨语言会议',
    desc: '与海外同事或客户开会，实时同声传译，沟通零障碍',
    apps: ['腾讯会议', 'Zoom', 'Teams', 'Meet'],
  },
  {
    emoji: '📞',
    title: '跨国电话 / 语音',
    desc: '接听外语电话或语音消息，实时翻译对方说的每一句话',
    apps: ['电话', 'WhatsApp', 'Skype'],
  },
  {
    emoji: '📺',
    title: '海外直播 / 视频',
    desc: '观看 YouTube、Twitch 等海外内容，实时生成翻译字幕',
    apps: ['YouTube', 'Twitch', 'niconico'],
  },
  {
    emoji: '📚',
    title: '语言学习',
    desc: '听外语播客或看视频时双语对照，沉浸式提升听力',
    apps: ['Podcast', 'Coursera', 'TED'],
  },
]

const languages = [
  '中文', 'English', '日本語', 'Deutsch',
  'Français', 'Español', 'Português', 'Indonesian',
]

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* ── Statement ── */}
      <section className="statement-section">
        <Reveal>
          <p className="statement-lead">
            跨语言会议，不应该成为沟通的障碍
          </p>
          <p className="statement-sub">
            <span className="nowrap-desktop">打开 TransEcho，配合 <span className="highlight">腾讯会议 / Zoom / Teams</span> 即可使用</span>
            <br />
            无需配置，开箱即用的同声传译
          </p>
        </Reveal>
      </section>

      <div className="divider" />

      {/* ── Features ── */}
      <section id="features" className="section">
        <Reveal>
          <p className="section-label">Features</p>
          <h2 className="section-title">
            为什么选择 <span className="text-gradient-cyan">TransEcho</span>
          </h2>
          <p className="section-desc">
            不只是翻译工具，而是你的实时语言桥梁
          </p>
        </Reveal>

        <div className="features-grid">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className={`feature-card ${f.accent === 'amber' ? 'accent-amber' : ''}`}>
                <div className={`feature-icon feature-icon-${f.accent}`}>
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <span className="feature-detail">{f.detail}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Languages ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal>
          <div className="lang-grid">
            {languages.map((lang) => (
              <span key={lang} className="lang-pill">{lang}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="divider" />

      {/* ── Screenshot Showcase ── */}
      <section className="showcase">
        <Reveal>
          <p className="section-label" style={{ marginBottom: 24 }}>Live Demo</p>
          <div className="app-frame">
            <div className="app-frame-header">
              <span className="frame-dot frame-dot-red" />
              <span className="frame-dot frame-dot-yellow" />
              <span className="frame-dot frame-dot-green" />
            </div>
            <Image
              src="/screenshot.png"
              alt="TransEcho 实时翻译日语到中文的截图"
              width={480}
              height={640}
              quality={95}
              priority={false}
            />
          </div>
        </Reveal>
        <Reveal delay={200}>
          <p style={{ marginTop: 24, color: 'var(--fg-muted)', fontSize: '0.85rem' }}>
            日本語 → 中文 · 实时同声传译
          </p>
        </Reveal>
      </section>

      <div className="divider" />

      {/* ── How It Works ── */}
      <section className="section">
        <Reveal>
          <p className="section-label">Get Started</p>
          <h2 className="section-title">三步开始</h2>
          <p className="section-desc">
            简单配置，即刻体验实时同声传译
          </p>
        </Reveal>

        <div className="steps-container">
          <Reveal delay={0}>
            <div className="step-card">
              <div className="step-num step-num-1">1</div>
              <div>
                <h3>下载安装</h3>
                <p>选择你的平台，下载安装包<br />macOS (.dmg) 或 Windows (.msi)</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="step-card">
              <div className="step-num step-num-2">2</div>
              <div>
                <h3>配置 API</h3>
                <p>
                  注册火山引擎，获取 API 密钥
                </p>
                <span className="step-note">新用户赠送 100 万免费 tokens</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="step-card">
              <div className="step-num step-num-3">3</div>
              <div>
                <h3>一键启动</h3>
                <p>选择语言对，点击&ldquo;开始同传&rdquo;<br />实时翻译即刻呈现</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      {/* ── Use Cases ── */}
      <section id="use-cases" className="section">
        <Reveal>
          <p className="section-label">Use Cases</p>
          <h2 className="section-title">适用场景</h2>
          <p className="section-desc">
            无论是工作、学习还是娱乐，TransEcho 都能帮到你
          </p>
        </Reveal>

        <div className="cases-grid">
          {useCases.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="case-card">
                <div className="case-icon">{c.emoji}</div>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="case-apps">
                    {c.apps.map((app) => (
                      <span key={app} className="case-app">{app}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── Tech Stack ── */}
      <section className="section" style={{ textAlign: 'center' }}>
        <Reveal>
          <p className="section-label">Built With</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            现代技术栈驱动
          </h2>
          <div className="tech-row">
            {['Rust', 'Tauri 2.x', 'Svelte 5', 'Tokio', 'Protobuf', 'WebSocket', 'Doubao LLM'].map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="divider" />

      {/* ── Download CTA ── */}
      <section id="download" className="download-section">
        <Reveal>
          <p className="section-label">Download</p>
          <h2 className="section-title">
            立即<span className="text-gradient">体验</span>
          </h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            免费下载，开始你的实时同声传译之旅
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="download-buttons">
            <a
              href="https://github.com/wxkingstar/TransEcho/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              <div className="download-btn-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>
              <div className="download-btn-text">
                <div className="label">Download for</div>
                <div className="platform">macOS</div>
              </div>
            </a>

            <a
              href="https://github.com/wxkingstar/TransEcho/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              <div className="download-btn-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5.548l8.038-1.093v7.756H3V5.548zm0 12.904l8.038 1.093v-7.545H3v6.452zm8.962 1.212L21 21v-8.998h-9.038v7.662zM12.962 4.34L21 3.26v8.742h-9.038V4.34z" />
                </svg>
              </div>
              <div className="download-btn-text">
                <div className="label">Download for</div>
                <div className="platform">Windows</div>
              </div>
            </a>
          </div>

          <p className="download-note">
            或从{' '}
            <a
              href="https://github.com/wxkingstar/TransEcho/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Releases
            </a>
            {' '}获取所有版本
          </p>
        </Reveal>
      </section>

      {/* ── Open Source Banner ── */}
      <section className="oss-banner">
        <Reveal>
          <div className="oss-inner">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            <div className="oss-text">
              <h3>100% 开源 · MIT 协议</h3>
              <p>
                欢迎 Star、Fork、提交 Issue 和 PR —{' '}
                <a
                  href="https://github.com/wxkingstar/TransEcho"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--cyan)' }}
                >
                  github.com/wxkingstar/TransEcho
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Image src="/icon.png" alt="" width={20} height={20} style={{ borderRadius: 4 }} />
            TransEcho
          </div>
          <div className="footer-links">
            <a href="https://github.com/wxkingstar/TransEcho" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://github.com/wxkingstar/TransEcho/blob/main/README.md" target="_blank" rel="noopener noreferrer">文档</a>
            <a href="https://github.com/wxkingstar/TransEcho/issues" target="_blank" rel="noopener noreferrer">问题反馈</a>
            <a href="https://github.com/wxkingstar/TransEcho/releases" target="_blank" rel="noopener noreferrer">版本发布</a>
          </div>
          <div className="footer-copy">
            MIT License &copy; 2026 wangxin
          </div>
        </div>
      </footer>
    </>
  )
}
