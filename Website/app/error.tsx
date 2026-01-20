'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Логирование ошибки в консоль для отладки
    console.error('Application error:', error)
  }, [error])

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-foreground">
            Что-то пошло не так
          </h1>
          <p className="text-lg md:text-xl text-muted mb-8">
            Произошла ошибка при загрузке страницы. Пожалуйста, попробуйте обновить страницу или вернуться на главную.
          </p>
          {error.digest && (
            <p className="text-sm text-muted mb-8 font-mono">
              Error ID: {error.digest}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-purple-dark transition-colors duration-300 uppercase text-xs font-light tracking-wide"
            >
              Попробовать снова
            </button>
            <Link
              href="/"
              className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-border/50 transition-colors duration-300 uppercase text-xs font-light tracking-wide"
            >
              На главную
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
