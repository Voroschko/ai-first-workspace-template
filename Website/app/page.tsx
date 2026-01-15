import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'
import StructuredData from '@/components/StructuredData'
import { SkeletonServiceCard, SkeletonPricingCard, SkeletonStatCard } from '@/components/Skeleton'

// Динамические импорты для компонентов ниже fold (lazy loading)
const Process = dynamic(() => import('@/components/Process'), { 
  ssr: true,
  loading: () => <div className="py-16 md:py-20 border-t border-border"><div className="container mx-auto px-6 lg:px-8"><div className="max-w-4xl mx-auto space-y-8"><div className="h-8 bg-border/20 rounded animate-pulse w-3/4"></div><div className="h-4 bg-border/20 rounded animate-pulse w-full"></div><div className="h-4 bg-border/20 rounded animate-pulse w-5/6"></div></div></div></div>
})
const Results = dynamic(() => import('@/components/Results'), { 
  ssr: true,
  loading: () => (
    <section className="py-16 md:py-20 border-t border-border relative">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <div className="h-12 bg-border/20 rounded animate-pulse w-64 mx-auto mb-4"></div>
          <div className="h-6 bg-border/20 rounded animate-pulse w-96 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto mb-10 md:mb-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonStatCard key={i} />
          ))}
        </div>
      </div>
    </section>
  )
})
const Pricing = dynamic(() => import('@/components/Pricing'), { 
  ssr: true,
  loading: () => (
    <section className="py-10 md:py-12 border-t border-border relative">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <div className="h-12 bg-border/20 rounded animate-pulse w-64 mx-auto mb-4"></div>
          <div className="h-6 bg-border/20 rounded animate-pulse w-96 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto mb-8 md:mb-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonPricingCard key={i} />
          ))}
        </div>
      </div>
    </section>
  )
})
const Team = dynamic(() => import('@/components/Team'), { 
  ssr: true,
  loading: () => <div className="py-16 md:py-20 border-t border-border"><div className="container mx-auto px-6 lg:px-8"><div className="text-center mb-12"><div className="h-12 bg-border/20 rounded animate-pulse w-64 mx-auto mb-4"></div></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">{Array.from({ length: 4 }).map((_, i) => <div key={i} className="text-center"><div className="w-32 h-32 bg-border/20 rounded-full mx-auto mb-4 animate-pulse"></div><div className="h-6 bg-border/20 rounded animate-pulse w-3/4 mx-auto mb-2"></div><div className="h-4 bg-border/20 rounded animate-pulse w-1/2 mx-auto"></div></div>)}</div></div></div>
})
const FAQ = dynamic(() => import('@/components/FAQ'), { 
  ssr: true,
  loading: () => <div className="py-16 md:py-20 border-t border-border"><div className="container mx-auto px-6 lg:px-8"><div className="text-center mb-12"><div className="h-12 bg-border/20 rounded animate-pulse w-64 mx-auto mb-4"></div></div><div className="max-w-3xl mx-auto space-y-4">{Array.from({ length: 5 }).map((_, i) => <div key={i} className="border border-border/30 p-5 rounded-lg"><div className="h-6 bg-border/20 rounded animate-pulse w-3/4 mb-3"></div><div className="h-4 bg-border/20 rounded animate-pulse w-full"></div></div>)}</div></div></div>
})
const Footer = dynamic(() => import('@/components/Footer'), { 
  ssr: true,
  loading: () => <footer className="border-t border-border py-12"><div className="container mx-auto px-6 lg:px-8"><div className="h-6 bg-border/20 rounded animate-pulse w-48"></div></div></footer>
})
const AnimatedStars = dynamic(() => import('@/components/AnimatedStars'), { ssr: false })
const BackToTop = dynamic(() => import('@/components/BackToTop'), { ssr: false })
const Reviews = dynamic(() => import('@/components/Reviews'), { 
  ssr: true,
  loading: () => <div className="py-16 border-t border-border"><div className="container mx-auto px-6 lg:px-8"><div className="h-8 bg-border/20 rounded animate-pulse w-64 mx-auto"></div></div></div>
})

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
