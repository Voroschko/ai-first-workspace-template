import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedStars from '@/components/AnimatedStars'

interface PageLayoutProps {
  children: React.ReactNode
}

/**
 * Единый layout для всех страниц проекта
 * Обеспечивает единообразный стиль: темный фон, анимированные частицы, Header и Footer
 */
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="relative">
      <AnimatedStars />
      <div className="relative z-10">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  )
}



