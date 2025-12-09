import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedStars from '@/components/AnimatedStars'

export default function TestPage() {
  return (
    <main className="relative">
      <AnimatedStars />
      <div className="relative z-10">
        <Header />
        
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight animate-fade-in">
                <span className="text-foreground">Тестовая страница </span>
                <span className="gradient-text">работает!</span>
              </h1>
              <p className="text-lg text-muted mb-8 font-light animate-fade-in animation-delay-200">
                Если вы видите это, значит Next.js работает правильно.
              </p>
              <a 
                href="/"
                className="border border-purple-500 px-10 py-4 text-sm font-light text-accent hover:bg-purple-500 hover:border-purple-600 hover:text-white transition-all uppercase tracking-wide hover-purple-glow inline-block group relative overflow-hidden"
              >
                <span className="relative z-10">← Вернуться на главную</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
