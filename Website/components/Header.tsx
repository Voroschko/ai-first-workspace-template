'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-light tracking-wide uppercase group">
              <span className="text-foreground">Go </span>
              <span className="gradient-text group-hover:animate-pulse">Offer</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a href="/services" className="text-sm font-light text-muted hover:text-accent transition-colors uppercase tracking-wide">
              Услуги
            </a>
            <a href="#pricing" className="text-sm font-light text-muted hover:text-blue-600 transition-colors uppercase tracking-wide">
              Тарифы
            </a>
            <a href="#about" className="text-sm font-light text-muted hover:text-pink-600 transition-colors uppercase tracking-wide">
              О нас
            </a>
            <a href="#contact" className="text-sm font-light text-muted hover:text-cyan-600 transition-colors uppercase tracking-wide">
              Контакты
            </a>
            <a
              href="https://cal.com/team/go-offer/career-consultation?traffic_source=Website"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-500 px-5 md:px-6 py-2 text-xs md:text-sm font-light text-accent hover:bg-purple-500 hover:border-purple-600 hover:text-white transition-all uppercase tracking-wide hover-purple-glow group relative overflow-hidden"
            >
              <span className="relative z-10">Заказать консультацию</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5 text-foreground"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-6">
              <a
                href="/services"
                className="text-sm font-light text-muted hover:text-accent transition-colors uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#pricing"
                className="text-sm font-light text-muted hover:text-blue-600 transition-colors uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Тарифы
              </a>
              <a
                href="#about"
                className="text-sm font-light text-muted hover:text-pink-600 transition-colors uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-sm font-light text-muted hover:text-cyan-600 transition-colors uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </a>
              <a
                href="https://cal.com/team/go-offer/career-consultation?traffic_source=Website"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-500 px-6 py-2.5 md:py-3 text-xs md:text-sm font-light text-accent hover:bg-purple-500 hover:border-purple-600 hover:text-white transition-all uppercase tracking-wide text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Заказать консультацию
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
