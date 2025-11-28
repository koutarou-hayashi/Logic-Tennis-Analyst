import type React from "react"
// <CHANGE> Updated metadata for Logic Tennis Analyst
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Logic Tennis Analyst | テニス動画分析サービス",
  description:
    "テニス経験20年とシステムエンジニアの論理的思考を融合させた、オンライン動画分析&フィードバックサービス。あなたのテニスフォームをデータで数値化し、最短で上達へ導きます。",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/lta-favicon-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/lta-favicon-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/lta-apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
