export default function ProfileSection() {
  return (
    <section id="profile" className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#f8f9fa]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-[#003d82] mb-12 text-center">提供者プロフィール</h3>
        <div className="bg-white p-8 sm:p-12 rounded-lg border border-gray-200">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="w-24 h-24 bg-gradient-to-br from-[#003d82] to-[#0052a3] rounded-full flex-shrink-0">
              <img
                src="/lta-apple-icon.png"
                alt="Profile Picture"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>
            <div className="flex-grow">
              <h4 className="text-2xl font-bold text-[#003d82] mb-4">Logic Tennis Analyst</h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#22c55e] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>テニス経験：</strong>テニス歴20年、体育会経験の実践的知識と技術
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#22c55e] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>システムエンジニア経験：</strong>フルスタックでのエンジニア経験6年
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#22c55e] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>教育背景：</strong>情報系大学卒のデータ分析
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                テニスへの深い理解と、システムエンジニアとしての論理的・数値的分析能力を融合させることで、
                他にはない高度な動画分析を実現します。あなたのテニスの本当の課題を、データで解き明かします。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
