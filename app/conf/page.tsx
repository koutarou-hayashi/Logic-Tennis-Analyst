"use client"

import { useEffect } from "react"

const ConfPage = () => {
  useEffect(() => {
    // localStorageからフォーム内容取得し、メール送信APIへPOST
    const sendMail = async () => {
      const saved = localStorage.getItem("lt_request_form")
      if (saved) {
        try {
          await fetch("/api/send-mail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: saved
          })
          localStorage.removeItem("lt_request_form")
        } catch (err) {
          // 送信失敗時は何もしない（必要なら通知可）
        }
      }
    }
    sendMail()
    const timer = setTimeout(() => {
      window.location.href = "/"
    }, 3000)
    return () => clearTimeout(timer)
  }, [])
  return (
    <main className="max-w-lg mx-auto py-20 px-4 text-center">
      <h1 className="text-2xl font-bold mb-6">決済が完了しました</h1>
      <p className="text-lg">ご利用ありがとうございます！<br />分析結果は後日メールでご連絡します。</p>
      <p className="mt-8 text-sm text-gray-500">3秒後にトップページへ自動で戻ります。</p>
    </main>
  )
}

export default ConfPage