export default function ProblemSection() {
  const problems = [
    "練習しても上達が停滞してしまっている",
    "試合で同じミスを繰り返す原因が分からない",
    "コーチからの指摘が曖昧で、何を改善すればいいか分からない",
    "フォームの改善点を数値で知りたい",
    "限られた練習時間で効果を最大化したい",
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-[#003d82] mb-12 text-center">こんな悩みはありませんか？</h3>
        <div className="space-y-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#f8f9fa] to-white rounded-lg border border-gray-200 hover:border-[#22c55e] transition"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700 text-lg">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
