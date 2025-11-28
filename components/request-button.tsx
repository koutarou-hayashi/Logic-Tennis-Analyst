import React from "react"

export default function RequestButton() {
    // モーダルの状態管理
    const [open, setOpen] = React.useState(false)
    const [selectedPlan, setSelectedPlan] = React.useState<string | null>(null)
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        shot: "",
        history: "",
        level: "",
        selfEval: "",
        racket: "",
        expectation: "",
        source: [] as string[],
        videoLink: ""
    })
    const [step, setStep] = React.useState<'form' | 'payment'>('form')

    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
        setSelectedPlan(null)
        setStep('form')
        setForm({
            name: "",
            email: "",
            shot: "",
            history: "",
            level: "",
            selfEval: "",
            racket: "",
            expectation: "",
            source: [],
            videoLink: ""
        })
    }

    const handleSelectPlan = (plan: string) => {
        setSelectedPlan(plan)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        if (name === "source" && type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked
            setForm(prev => {
                if (checked) {
                    return { ...prev, source: [...prev.source, value] }
                } else {
                    return { ...prev, source: prev.source.filter(v => v !== value) }
                }
            })
        } else {
            setForm({ ...form, [name]: value })
        }
    }


    const handleNext = (e: React.FormEvent) => {
        e.preventDefault()
        // フォーム内容をlocalStorageに保存
        try {
            localStorage.setItem("lt_request_form", JSON.stringify({ ...form, plan: selectedPlan }))
            setStep('payment')
        } catch (err) {
            alert("フォームデータの保存に失敗しました。")
        }
    }

    return (
        <>
            <div className="text-center">
                <button
                    type="button"
                    className="inline-block px-8 py-4 bg-[#003d82] text-white font-semibold rounded-lg hover:bg-[#0052a3] transition shadow-lg hover:shadow-xl text-lg"
                    onClick={handleOpen}
                >
                    今すぐ分析を申し込む
                </button>
            </div>
            {/* モーダル */}
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                    onClick={handleClose}
                >
                    <div
                        className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full relative"
                        style={{ maxHeight: '80vh', overflowY: 'auto' }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                            onClick={handleClose}
                            aria-label="閉じる"
                        >
                            ×
                        </button>
                        {!selectedPlan ? (
                            <>
                                <h4 className="text-xl font-bold text-[#003d82] mb-4 text-center">プランを選択してください</h4>
                                <div className="space-y-4 mb-6">
                                    <button
                                        className="w-full px-4 py-3 rounded-lg border font-semibold transition bg-gray-100 text-[#003d82]"
                                        onClick={() => handleSelectPlan("standard")}
                                    >
                                        スタンダード（¥1,500/回）
                                    </button>
                                    <button
                                        className="w-full px-4 py-3 rounded-lg border font-semibold transition bg-gray-100 text-[#003d82]"
                                        onClick={() => handleSelectPlan("premium")}
                                    >
                                        プレミアム（¥2,500/回）
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h4 className="text-xl font-bold text-[#003d82] mb-4 text-center">{selectedPlan === "standard" ? "スタンダード" : "プレミアム"}プランお申し込みフォーム</h4>
                                {step === 'form' ? (
                                    <form className="space-y-4" onSubmit={handleNext}>
                                        <div>
                                            <label className="block font-semibold mb-1">氏名</label>
                                            <input name="name" type="text" required className="w-full border rounded px-3 py-2" value={form.name} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className="block font-semibold mb-1">メールアドレス</label>
                                            <input name="email" type="email" required className="w-full border rounded px-3 py-2" value={form.email} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className="block font-semibold mb-1">動画の共有リンク（必須）</label>
                                            <input
                                                name="videoLink"
                                                type="url"
                                                required
                                                placeholder="GoogleドライブやDropbox等の共有リンクを貼り付けてください"
                                                className="w-full border rounded px-3 py-2"
                                                value={form.videoLink}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-semibold mb-1">分析対象ショット</label>
                                            <input name="shot" type="text" required className="w-full border rounded px-3 py-2" value={form.shot} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className="block font-semibold mb-1">テニス歴</label>
                                            <div className="flex flex-wrap gap-4">
                                                {['1年未満', '1〜3年', '3〜5年', '5〜10年', '10年以上'].map(opt => (
                                                    <label key={opt} className="flex items-center gap-1">
                                                        <input
                                                            type="radio"
                                                            name="history"
                                                            value={opt}
                                                            checked={form.history === opt}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                        {opt}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block font-semibold mb-1">プレーレベル</label>
                                            <div className="flex flex-wrap gap-4">
                                                {['初心者', '初級', '中級', '上級', '大会出場経験あり'].map(opt => (
                                                    <label key={opt} className="flex items-center gap-1">
                                                        <input
                                                            type="radio"
                                                            name="level"
                                                            value={opt}
                                                            checked={form.level === opt}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                        {opt}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block font-semibold mb-1">自己評価と具体的な悩み</label>
                                            <textarea name="selfEval" required className="w-full border rounded px-3 py-2" value={form.selfEval} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className="block font-semibold mb-1">使用ラケット、ガット</label>
                                            <input name="racket" type="text" className="w-full border rounded px-3 py-2" value={form.racket} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className="block font-semibold mb-1">レポートに期待すること</label>
                                            <textarea name="expectation" className="w-full border rounded px-3 py-2" value={form.expectation} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label className="block font-semibold mb-1">サービスをどこで知ったか</label>
                                            <div className="flex flex-wrap gap-4">
                                                {['Google検索', 'SNS', '知人の紹介', 'Web広告', 'ブログ・記事', 'その他'].map(opt => (
                                                    <label key={opt} className="flex items-center gap-1">
                                                        <input
                                                            type="checkbox"
                                                            name="source"
                                                            value={opt}
                                                            checked={form.source.includes(opt)}
                                                            onChange={handleChange}
                                                        />
                                                        {opt}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full px-4 py-3 rounded-lg font-bold bg-[#22c55e] text-[#FFFFFF] mt-4"
                                        >
                                            申し込み
                                        </button>
                                    </form>
                                    ) : (
                                        <div className="py-8 text-center">
                                            <h5 className="text-lg font-bold mb-6 text-[#003d82]">決済方法を選択してください</h5>
                                            <div className="flex flex-col gap-6 items-center">
                                                <a
                                                    href={selectedPlan === "premium" ? "https://square.link/u/gmHUleyY" : "https://square.link/u/wWXNwq6e"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full max-w-xs px-6 py-4 rounded-lg border-2 border-[#003d82] bg-white text-[#003d82] font-bold text-lg flex items-center justify-center gap-3 shadow hover:bg-blue-50 transition"
                                                >
                                                    <span>クレジットカード / GooglePay</span>
                                                </a>
                                                {/* <a
                                                    href={selectedPlan === "premium" ? "https://your-paypay-payment-link-premium" : "https://your-paypay-payment-link-standard"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full max-w-xs px-6 py-4 rounded-lg border-2 border-[#22c55e] bg-white text-[#22c55e] font-bold text-lg flex items-center justify-center gap-3 shadow hover:bg-green-50 transition"
                                                >
                                                    <span>PayPay</span>
                                                    <img src="/paypay.svg" alt="PayPay" className="h-6" />
                                                </a> */}
                                            </div>
                                        </div>
                                    )}
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}