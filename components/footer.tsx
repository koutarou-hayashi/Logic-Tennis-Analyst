export default function Footer() {
  return (
    <footer className="bg-[#003d82] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white">
                <a href="#" className="hover:text-white transition">
                  <img src="/lta-apple-icon.png" alt="LTA" className="w-10 h-10 rounded-lg object-contain" />
                </a>
              </div>
              <h3 className="text-lg font-bold">Logic Tennis Analyst</h3>
            </div>
            <p className="text-blue-100 text-sm">テニス経験と論理的分析で、あなたのテニスを次のレベルへ</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">リンク</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>
                <a href="#service" className="hover:text-white transition">
                  サービス
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition">
                  流れ
                </a>
              </li>
              <li>
                <a href="#profile" className="hover:text-white transition">
                  提供者
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">
                  料金
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">お問い合わせ</h4>
            <p className="text-blue-100 text-sm">
              ご質問やご不明な点は、
              <br />
              お気軽にお問い合わせください
            </p>
          </div>
        </div>
        <div className="border-t border-blue-400 pt-8">
          <p className="text-center text-blue-100 text-sm">© 2025 Logic Tennis Analyst. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
