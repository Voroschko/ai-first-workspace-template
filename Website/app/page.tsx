import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'
import StructuredData from '@/components/StructuredData'

// Динамические импорты для компонентов ниже fold (lazy loading)
const Process = dynamic(() => import('@/components/Process'), { ssr: true })
const Results = dynamic(() => import('@/components/Results'), { ssr: true })
const Pricing = dynamic(() => import('@/components/Pricing'), { ssr: true })
const Team = dynamic(() => import('@/components/Team'), { ssr: true })
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: true })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true })
const AnimatedStars = dynamic(() => import('@/components/AnimatedStars'), { ssr: false })
const BackToTop = dynamic(() => import('@/components/BackToTop'), { ssr: false })
const Reviews = dynamic(() => import('@/components/Reviews'), { ssr: true })

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="relative">
        <AnimatedStars />
        <div className="relative z-10">
          <Header />
          <Hero />
          <Services />
          <Benefits />
          <Process />
          <Results />
          <Pricing />
          <Team />
          <FAQ />
          <Reviews />
          <Footer />
        </div>
        <BackToTop />
      </main>
    </>
  )
}
