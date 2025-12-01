import RequestButton from "./request-button"

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-[#003d82] mb-12 text-center">料金</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-[#f8f9fa] to-white p-8 rounded-lg border border-gray-200 relative">
            <div className="absolute -top-4 left-6 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow">
              今だけ無料！
            </div>
            <h4 className="text-xl font-bold text-[#003d82] mb-2">スタンダード</h4>
            <p className="text-gray-600 mb-6 font-bold">
              <span className="text-red-500">期間限定！</span> 基本的な動画分析が今だけ無料で体験できます。
            </p>
            <div className="mb-6">
              <p className="text-3xl font-bold text-[#003d82] flex items-center gap-3">
                <span className="line-through text-gray-400">¥1,500</span>
                <span className="text-red-500 px-3 py-1 rounded text-lg font-bold">無料</span>
                <span className="text-lg text-gray-600">/回</span>
              </p>
            </div>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                動画分析レポート
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                4営業日以内に配信
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#003d82] to-[#0052a3] p-8 rounded-lg border-2 border-[#003d82] text-white relative">
            <div className="absolute -top-4 left-6 bg-[#22c55e] text-[#FFFFFF] px-4 py-1 rounded-full text-sm font-bold">
              おすすめ
            </div>
            <h4 className="text-xl font-bold mb-2">プレミアム</h4>
            <p className="text-blue-100 mb-6">動画分析 + フォローアップ</p>
            <div className="mb-6">
              <p className="text-3xl font-bold">
                ¥2,500<span className="text-lg text-blue-100">/回</span>
              </p>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                動画分析レポート
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                3営業日以内に配信
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                フォローアップ相談
              </li>
            </ul>
          </div>
        </div>
        <RequestButton />
      </div>
    </section>
  )
}