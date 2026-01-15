'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Определяем активную страницу
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(path)
  }
  
  // Для якорных ссылок проверяем, находимся ли мы на главной странице
  const isAnchorActive = (anchor: string) => {
    if (pathname !== '/') return false
    // Можно добавить логику для определения видимой секции при скролле
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-light tracking-wide uppercase group">
              <span className="text-foreground">Go </span>
              <span className="gradient-text group-hover:animate-pulse">Offer</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <a 
              href="/services" 
              className={`text-xs font-light transition-all duration-300 uppercase tracking-wide relative group py-2 ${
                isActive('/services')
                  ? 'text-accent'
                  : 'text-muted hover:text-accent'
              }`}
            >
              Услуги
              <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            <a 
              href="#pricing" 
              className={`text-xs font-light transition-all duration-300 uppercase tracking-wide relative group py-2 ${
                isAnchorActive('#pricing')
                  ? 'text-blue-600'
                  : 'text-muted hover:text-blue-600'
              }`}
            >
              Тарифы
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                isAnchorActive('#pricing') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            <a 
              href="#about" 
              className={`text-xs font-light transition-all duration-300 uppercase tracking-wide relative group py-2 ${
                isAnchorActive('#about')
                  ? 'text-pink-600'
                  : 'text-muted hover:text-pink-600'
              }`}
            >
              О нас
              <span className={`absolute bottom-0 left-0 h-0.5 bg-pink-600 transition-all duration-300 ${
                isAnchorActive('#about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            <a 
              href="/cases" 
              className={`text-xs font-light transition-all duration-300 uppercase tracking-wide relative group py-2 ${
                isActive('/cases')
                  ? 'text-cyan-600'
                  : 'text-muted hover:text-cyan-600'
              }`}
            >
              Кейсы
              <span className={`absolute bottom-0 left-0 h-0.5 bg-cyan-600 transition-all duration-300 ${
                isActive('/cases') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
            <a 
              href="/courses" 
              className={`text-xs font-light transition-all duration-300 uppercase tracking-wide border px-3 py-1.5 rounded-md backdrop-blur-sm ${
                isActive('/courses')
                  ? 'text-foreground border-purple-500/50 bg-purple-500/5'
                  : 'text-foreground border-border/50 hover:border-purple-500/50 hover:bg-purple-500/5 hover:text-purple-500'
              }`}
            >
              Бесплатные курсы
            </a>
            <a
              href="https://cal.com/team/go-offer/career-consultation?traffic_source=Website"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-500/60 hover:border-purple-500 px-4 py-1.5 text-xs font-light text-accent hover:bg-purple-500 hover:text-white transition-all duration-300 uppercase tracking-wide rounded-md group relative overflow-hidden shadow-sm hover:shadow-purple-500/20"
            >
              <span className="relative z-10">Заказать консультацию</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-background/50 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5 text-foreground transition-transform duration-300"
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
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-3">
              <a
                href="/services"
                className={`text-xs font-light transition-all duration-300 uppercase tracking-wide py-2 px-2 rounded-md ${
                  isActive('/services')
                    ? 'text-accent bg-accent/5'
                    : 'text-muted hover:text-accent hover:bg-accent/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </a>
              <a
                href="#pricing"
                className={`text-xs font-light transition-all duration-300 uppercase tracking-wide py-2 px-2 rounded-md ${
                  isAnchorActive('#pricing')
                    ? 'text-blue-600 bg-blue-600/5'
                    : 'text-muted hover:text-blue-600 hover:bg-blue-600/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Тарифы
              </a>
              <a
                href="#about"
                className={`text-xs font-light transition-all duration-300 uppercase tracking-wide py-2 px-2 rounded-md ${
                  isAnchorActive('#about')
                    ? 'text-pink-600 bg-pink-600/5'
                    : 'text-muted hover:text-pink-600 hover:bg-pink-600/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </a>
              <a
                href="/cases"
                className={`text-xs font-light transition-all duration-300 uppercase tracking-wide py-2 px-2 rounded-md ${
                  isActive('/cases')
                    ? 'text-cyan-600 bg-cyan-600/5'
                    : 'text-muted hover:text-cyan-600 hover:bg-cyan-600/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Кейсы
              </a>
              <a
                href="/courses"
                className={`text-xs font-light transition-all duration-300 uppercase tracking-wide border px-3 py-2 rounded-md backdrop-blur-sm text-center ${
                  isActive('/courses')
                    ? 'text-foreground border-purple-500/50 bg-purple-500/5'
                    : 'text-foreground border-border/50 hover:border-purple-500/50 hover:bg-purple-500/5 hover:text-purple-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Бесплатные курсы
              </a>
              <a
                href="https://cal.com/team/go-offer/career-consultation?traffic_source=Website"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-500/60 hover:border-purple-500 px-4 py-2 text-xs font-light text-accent hover:bg-purple-500 hover:text-white transition-all duration-300 uppercase tracking-wide rounded-md text-center group relative overflow-hidden shadow-sm hover:shadow-purple-500/20"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Заказать консультацию</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
