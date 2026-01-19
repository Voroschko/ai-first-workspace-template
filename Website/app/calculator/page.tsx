'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import BenefitCalculator from '@/components/BenefitCalculator'
import AnimatedStars from '@/components/AnimatedStars'
import StructuredData from '@/components/StructuredData'

export default function CalculatorPage() {
  return (
    <>
      <StructuredData />
      <main className="relative">
        <AnimatedStars />
        <div className="relative z-10">
          <Header />
          <Breadcrumbs />
          
          <section className="py-16 md:py-20 border-t border-border relative">
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float animation-delay-2000"></div>
            </div>
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
              <div className="text-center mb-12 md:mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 tracking-tight">
                  <span className="text-foreground">Калькулятор </span>
                  <span className="gradient-text">выгоды</span>
                </h1>
                <p className="text-base md:text-lg text-muted max-w-2xl mx-auto font-light">
                  Рассчитайте, сколько вы сэкономите и заработаете с Go Offer
                </p>
              </div>

              <BenefitCalculator />
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}
