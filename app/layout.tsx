import type { Metadata } from 'next'
import { Unbounded, Noto_Sans_SC, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  weight: ['400', '700', '900'],
  display: 'swap',
})

const notoSans = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  weight: ['400', '500', '700'],
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TransEcho — 实时同声传译',
  description: '捕获系统音频，实时翻译字幕 + 语音同传。macOS + Windows 跨平台桌面应用，基于豆包大模型，开源免费。',
  keywords: ['同声传译', '实时翻译', 'TransEcho', '字幕翻译', '语音翻译', 'Tauri', 'Rust'],
  openGraph: {
    title: 'TransEcho — 实时同声传译',
    description: '捕获系统音频，实时翻译字幕 + 语音同传。跨平台桌面应用，开源免费。',
    type: 'website',
    url: 'https://transecho.kingstar.xin',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TransEcho — 实时同声传译',
    description: '捕获系统音频，实时翻译字幕 + 语音同传',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="zh-CN"
      className={`${unbounded.variable} ${notoSans.variable} ${jetbrains.variable}`}
    >
      <body>
        {children}
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  )
}
