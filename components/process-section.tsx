export default function ProcessSection() {
  const steps = [
    {
      icon: "📤",
      title: "動画を送る",
      description: "あなたのテニスプレーの動画のリンクを送る",
    },
    {
      icon: "📊",
      title: "論理的に分析",
      description: "フォーム・動きをデータで数値化、問題点を特定",
    },
    {
      icon: "📋",
      title: "詳細レポート",
      description: "改善策を含む詳細な分析レポートをお届け",
    },
  ]

  return (
    <section id="process" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-[#003d82] mb-12 text-center">サービスの流れ</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {/* Step card */}
              <div className="text-center w-full px-4">
                <div className="inline-block w-20 h-20 bg-[#22c55e] text-white rounded-full flex items-center justify-center mb-6 text-4xl shadow-md">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-[#003d82] mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Arrow connector (visible only on md and up, between steps) */}
              {index < steps.length - 1 && (
                <>
                  {/* Desktop arrow (horizontal) */}
                  <div className="hidden md:flex absolute top-10 left-1/2 w-full items-center justify-end pointer-events-none">
                    <svg
                      className="w-8 h-8 text-[#22c55e] -translate-x-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </div>

                  {/* Mobile arrow (vertical) */}
                  <div className="md:hidden flex justify-center py-4">
                    <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
