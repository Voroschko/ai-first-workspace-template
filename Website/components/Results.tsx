'use client'

import { useState, useEffect } from 'react'
import ScrollReveal from './ScrollReveal'
import AnimatedCounter from './AnimatedCounter'

function DetailedStatsCarousel() {
  const stats = [
    {
      number: '2 000–12 000',
      title: 'подач за цикл работы',
      description: 'Масштаб, который невозможно обеспечить вручную. Автоматизация + команда.',
      color: 'purple',
    },
    {
      number: '500–2 500',
      title: 'коннектов с рекрутерами',
      description: 'Сильный личный бренд на LinkedIn и аутрич, который действительно отвечает.',
      color: 'blue',
    },
    {
      number: '20–200',
      title: 'интервью за 2–6 месяцев',
      description: 'Наши выпускники выходят на интервью почти каждый день. Максимальный зафиксированный результат - 9 интервью за сутки.',
      color: 'pink',
    },
    {
      number: 'От 1 до 5',
      title: 'офферов за цикл',
      description: 'Часть клиентов получает несколько предложений и ведёт торги.',
      color: 'cyan',
    },
    {
      number: '+15–40%',
      title: 'повышение компенсации',
      description: 'Благодаря подготовке, правильной стратегии переговоров и торгам за оффер.',
      color: 'violet',
    },
    {
      number: 'В 3–5 раз',
      title: 'сокращение срока поиска',
      description: 'За счет системного подхода, объёма попыток и подготовки.',
      color: 'purple',
    },
    {
      number: '90%',
      title: 'доходят до финальных этапов',
      description: 'Благодаря гибриду: масштаб + еженедельная корректировка стратегии + подготовка к интервью.',
      color: 'blue',
    },
    {
      number: '900+',
      title: 'человек в активном сообществе',
      description: 'Опыт, инсайты, постоянная поддержка менторов и коллег.',
      color: 'pink',
    },
    {
      number: '100+',
      title: 'специалистов в команде',
      description: 'Ассистенты, рекрутеры, карьерные стратеги, менторы из Google, TikTok, FinTech, HR.',
      color: 'cyan',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const colorMap = {
    purple: { text: 'text-purple-600', border: 'border-purple-500/40' },
    blue: { text: 'text-blue-600', border: 'border-blue-500/40' },
    pink: { text: 'text-pink-600', border: 'border-pink-500/40' },
    cyan: { text: 'text-cyan-600', border: 'border-cyan-500/40' },
    violet: { text: 'text-violet-600', border: 'border-violet-500/40' },
  }

  const totalItems = stats.length
  // Максимальный индекс для предотвращения пустых блоков
  // На мобильных: 1 карточка, maxIndex = totalItems - 1
  // На планшетах: 2 карточки, maxIndex = totalItems - 2  
  // На десктопе: 3 карточки, maxIndex = totalItems - 3
  // Используем минимальное значение для безопасности
  const maxIndex = Math.max(0, totalItems - 3)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // Если достигли максимума, возвращаемся к началу
        if (prev >= maxIndex) {
          return 0
        }
        return prev + 1
      })
    }, 4000) // Меняем карточку каждые 4 секунды

    return () => clearInterval(interval)
  }, [maxIndex])

  // Вычисляем смещение: на десктопе показываем 3 карточки (33.33% каждая)
  // На планшетах 2 карточки (50% каждая), на мобильных 1 (100%)
  const offset = currentIndex * 33.333

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${offset}%)`,
          }}
        >
          {stats.map((stat, index) => {
            const colors = colorMap[stat.color as keyof typeof colorMap]
            return (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
              >
                <div className={`border border-border/30 p-5 md:p-6 rounded-lg backdrop-blur-md bg-background/20 hover:${colors.border} transition-all duration-300 group h-full relative z-10`}>
                  <div className={`text-2xl md:text-3xl font-light ${colors.text} mb-2 md:mb-3 tracking-tight group-hover:scale-110 transition-transform`}>
                    {(() => {
                      // Парсим число из строки для анимации
                      const numMatch = stat.number.match(/(\d+(?:\.\d+)?)/)
                      if (numMatch) {
                        const num = parseFloat(numMatch[1])
                        const prefix = stat.number.startsWith('От') ? 'От ' : stat.number.startsWith('В') ? 'В ' : stat.number.startsWith('+') ? '+' : ''
                        const suffix = stat.number.includes('%') ? '%' : stat.number.includes('x') ? 'x' : stat.number.includes('–') ? stat.number.split(/\d/).pop() : ''
                        
                        if (stat.number.includes('–')) {
                          // Для диапазонов типа "2 000–12 000"
                          return stat.number
                        }
                        
                        return (
                          <AnimatedCounter
                            end={num}
                            prefix={prefix}
                            suffix={suffix}
                            duration={2000}
                          />
                        )
                      }
                      return stat.number
                    })()}
                  </div>
                  <p className="text-xs md:text-sm text-foreground font-light mb-2 uppercase tracking-wide">
                    {stat.title}
                  </p>
                  <p className="text-xs text-muted font-light leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Индикаторы */}
      <div className="flex justify-center gap-2 mt-6 md:mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 border border-white/20 ${
              index === currentIndex
                ? 'w-9 bg-purple-500 border-purple-400'
                : 'w-2.5 bg-white/40 hover:bg-purple-500/70 hover:border-purple-400/50'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Results() {
  const results = [
    {
      number: 1100,
      suffix: '+',
      label: 'Клиентов по всему миру',
      color: 'purple',
      isAnimated: true,
    },
    {
      number: '5-15x',
      label: 'Больше релевантных откликов',
      color: 'blue',
      isAnimated: false,
    },
    {
      number: 5,
      suffix: 'x',
      label: 'Больше приглашений на интервью',
      color: 'pink',
      isAnimated: true,
    },
    {
      number: 94,
      suffix: '%',
      label: 'Находят работу к 6-му месяцу',
      color: 'cyan',
      isAnimated: true,
    },
    {
      number: 68,
      suffix: '%',
      label: 'Находят работу за 3 месяца',
      color: 'cyan',
      isAnimated: true,
    },
    {
      number: 28.4,
      prefix: '~',
      suffix: '%',
      label: 'Оффер выше среднего по рынку',
      color: 'violet',
      isAnimated: true,
      decimals: 1,
    },
  ]

  const companies = [
    'TikTok',
    'Microsoft',
    'Meta',
    'Amazon',
    'Capital One',
    'Walt Disney',
    'Sony',
    'EPAM',
    'Google',
    'OpenAI',
  ]

  const colorClasses = {
    purple: 'text-purple-600',
    blue: 'text-blue-600',
    pink: 'text-pink-600',
    cyan: 'text-cyan-600',
    violet: 'text-violet-600',
  }

  return (
    <section className="py-16 md:py-20 border-t border-border relative section-bg-4">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-float" style={{ transform: 'translate(-50%, -50%)' }}></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-pink-500/8 rounded-full blur-3xl animate-float animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 tracking-tight">
              <span className="text-foreground">Результаты в </span>
              <span className="gradient-text">цифрах</span>
            </h2>
            <p className="text-base md:text-lg text-muted max-w-xl mx-auto font-light mb-6 md:mb-8">
              Это не обещания, это статистика наших выпускников
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto mb-10 md:mb-12">
          {results.map((result, index) => (
            <ScrollReveal key={index} animation="scale-in" delay={index * 100}>
              <div className="text-center border-b border-border pb-6 md:pb-8 group hover:border-opacity-50 transition-all duration-500 hover:scale-110">
                <div className={`text-3xl md:text-4xl lg:text-5xl font-light mb-3 md:mb-4 tracking-tight transition-all duration-500 ${colorClasses[result.color as keyof typeof colorClasses]} group-hover:scale-110`}>
                  {result.number}
                </div>
                <p className="text-xs text-muted font-light uppercase tracking-wide leading-relaxed group-hover:text-foreground transition-colors">{result.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Детальная статистика - Карусель */}
        <ScrollReveal animation="fade-in" delay={400}>
          <div className="max-w-6xl mx-auto mb-12 md:mb-16">
            <p className="text-center text-muted text-sm font-light mb-8 md:mb-10 lg:mb-12 leading-relaxed">
              Мы собрали данные по сотням клиентов, которые прошли программу Go Offer и активно работали по системе. Вот что они получают на практике:
            </p>
            
            <DetailedStatsCarousel />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in" delay={600}>
          <div className="text-center border-t border-b border-border py-12 md:py-16">
            <h3 className="text-lg md:text-xl font-light mb-8 md:mb-10 lg:mb-12 uppercase tracking-wide">
              <span className="text-foreground">Компании, которые </span>
              <span className="gradient-text">интервьюируют наших кандидатов</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="text-sm text-muted font-light uppercase tracking-wide hover:text-purple-600 hover:scale-110 transition-all duration-300 cursor-default"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-in" delay={800}>
          <p className="text-center text-muted text-xs mt-8 md:mt-12 font-light">
            *На основе самоотчетов участников. Индивидуальные результаты могут отличаться.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
