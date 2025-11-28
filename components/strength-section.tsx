export default function StrengthSection() {
  const strengths = [
    {
      icon: "🎾",
      title: "テニス経験20年",
      description: "プロレベルの実践的知識と直感",
    },
    {
      icon: "📊",
      title: "データ分析",
      description: "システムエンジニアの知識を活かした論理的・数値的分析",
    },
    {
      icon: "🧠",
      title: "科学的アプローチ",
      description: "経験と論理の融合で最適な改善策を提案",
    },
  ]

  return (
    <section id="service" className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-[#003d82] mb-4 text-center">
          なぜLogic Tennis Analystが選ばれるのか？
        </h3>
        <p className="text-center text-gray-600 mb-12 text-lg">テニス経験と技術的分析の唯一無二の組み合わせ</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition text-center"
            >
              <div className="text-5xl mb-4 flex justify-center">{strength.icon}</div>
              <h4 className="text-xl font-bold text-[#003d82] mb-3">{strength.title}</h4>
              <p className="text-gray-600">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
