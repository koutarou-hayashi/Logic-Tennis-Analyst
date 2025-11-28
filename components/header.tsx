export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white">
            <a href="#" className="text-gray-600 hover:text-[#003d82] transition">
              <img src="/lta-apple-icon.png" alt="LTA" className="w-10 h-10 object-contain" />
            </a>
          </div>
          <h1 className="text-xl font-bold text-[#003d82]">Logic Tennis Analyst</h1>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#service" className="text-gray-600 hover:text-[#003d82] transition">
            サービス
          </a>
          <a href="#process" className="text-gray-600 hover:text-[#003d82] transition">
            流れ
          </a>
          <a href="#profile" className="text-gray-600 hover:text-[#003d82] transition">
            提供者
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-[#003d82] transition">
            料金
          </a>
        </nav>
      </div>
    </header>
  )
}
