import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const data = await request.json();

  // 送信先メールアドレス（ここをあなたのアドレスに変更してください）
  const toEmail = "logic.tennis.analyst.info@gmail.com"

  // nodemailerの設定（Gmail例。環境変数で管理推奨）
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  // メール本文生成
  const mailText = Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n")

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: toEmail,
      subject: "新規申込フォーム受信",
      text: mailText,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 })
  }
}
