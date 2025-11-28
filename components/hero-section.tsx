import RequestButton from "./request-button"

export default function HeroSection() {
  return (
    <section
      className="bg-gradient-to-b from-[#f8f9fa] to-white py-16 sm:py-24 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/laver-cup.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#FFFFFF] mb-6 leading-tight">
            <span className="text-balance">
              経験と論理が導く。
              <br />
              あなたのテニスフォームの弱点をデータ化し、最短で上達へ
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#FFFFFF] mb-10 leading-relaxed max-w-2xl mx-auto">
            誰にも教わらなかったフォームの真実を、プロ目線の論理的分析でレポートします。
          </p>
          <RequestButton />
        </div>
      </div>
    </section>
  )
}
