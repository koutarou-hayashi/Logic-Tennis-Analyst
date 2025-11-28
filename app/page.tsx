"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import StrengthSection from "@/components/strength-section"
import ProcessSection from "@/components/process-section"
import ProfileSection from "@/components/profile-section"
import PricingSection from "@/components/pricing-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <StrengthSection />
      <ProcessSection />
      <ProfileSection />
      <PricingSection />
      <Footer />
    </div>
  )
}
