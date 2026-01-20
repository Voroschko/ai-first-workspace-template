import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6 text-foreground">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 text-foreground">
            Страница не найдена
          </h2>
          <p className="text-lg md:text-xl text-muted mb-8">
            К сожалению, запрашиваемая страница не существует или была перемещена.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-purple-dark transition-colors duration-300 uppercase text-xs font-light tracking-wide"
            >
              На главную
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-border/50 transition-colors duration-300 uppercase text-xs font-light tracking-wide"
            >
              Услуги
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
