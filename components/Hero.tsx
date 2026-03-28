'use client'

import { useEffect, useState } from 'react'

const BAR_COUNT = 50

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="hero">
      {/* Gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Animated waveform */}
      <div className="hero-waveform" aria-hidden="true">
        {Array.from({ length: BAR_COUNT }).map((_, i) => (
          <div
            key={i}
            className="waveform-bar"
            style={
              {
                '--delay': `${i * 0.06}s`,
                '--duration': `${1.0 + Math.sin(i * 0.3) * 0.5}s`,
                '--height': `${20 + Math.sin(i * 0.4) * 30 + Math.cos(i * 0.7) * 15}%`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Hero content */}
      <div className={`hero-content ${mounted ? 'hero-visible' : ''}`}>
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          实时同声传译桌面应用
        </div>

        <h1 className="hero-title">
          Trans<span className="text-gradient">Echo</span>
        </h1>

        <p className="hero-subtitle">所听即所译</p>

        <p className="hero-desc">
          配合腾讯会议 / Zoom / Teams，打开即用
          <br />
          跨语言会议和通话的实时同声传译助手
        </p>

        <div className="hero-actions">
          <a href="#download" className="btn btn-primary">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            免费下载
          </a>
          <a
            href="https://github.com/wxkingstar/TransEcho"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            查看源码
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>

        <div className="hero-platforms">
          <span className="platform-pill">macOS 14+</span>
          <span className="platform-pill">Windows 10+</span>
          <span className="platform-pill">MIT 开源</span>
        </div>
      </div>
    </section>
  )
}
