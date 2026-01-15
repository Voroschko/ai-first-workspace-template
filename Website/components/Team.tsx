'use client'

import Image from 'next/image'
import { useState, useEffect, useRef, useMemo } from 'react'
import ScrollReveal from './ScrollReveal'

interface TeamMember {
  name: string
  role: string
  description: string
  image: string
  details: string[]
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: 'ANNA',
      role: 'Founder',
      description: 'Helps candidates stand out and secure their dream roles with cutting-edge insights',
      image: '/images/team/anna.jpg',
      details: [
        'Klaviyo, Yandex, TikTok, HSE',
        '9+ years mentoring',
        '4000+ hours of consultations',
        'Guest lecturer',
      ],
    },
    {
      name: 'KIRILL',
      role: 'Head of Mentors',
      description: 'Leverages AI to streamline job searches and expand market visibility',
      image: '/images/team/kirill.jpg',
      details: [
        'Extraordinary visa holder (USA, Britain)',
      ],
    },
    {
      name: 'MIKE',
      role: 'Head of Marketing',
      description: 'Crafts impactful career content and tools for job seekers',
      image: '/images/team/mike.jpg',
      details: [
        '12+ years in IT',
        'Founded 4 startups',
        'Ycombinator Corrily (YC W21)',
        'Yandex',
        '8+ years in marketing',
        'Produced 200+ webinars',
        'Wrote over 1000 offers',
      ],
    },
    {
      name: 'KATHERINE',
      role: 'Lead Project Manager',
      description: 'Ensures seamless learning experiences and tool integration for clients',
      image: '/images/team/katherine.jpg',
      details: [
        '5+ years managing IT projects',
        '90+ hours of coaching sessions',
        'Speaker of the Center for Entrepreneurship Development',
        'Invited lecturer at universities',
      ],
    },
    {
      name: 'POLINA',
      role: 'Career Success Manager',
      description: 'Helps craft job search strategies, optimizes LinkedIn profiles, and supports candidates throughout their career journey',
      image: '/images/team/polina.jpg',
      details: [
        '5+ years in marketing',
        '7000+ interviews',
        'Placed 500+ candidates in jobs',
      ],
    },
    {
      name: 'VICTORIA',
      role: 'Career Success Manager',
      description: 'Guides candidates through the job search process, tracking progress and ensuring success every step of the way',
      image: '/images/team/victoria.jpg',
      details: [
        '4+ years in HR',
      ],
    },
    {
      name: 'MARIA',
      role: 'Mentor',
      description: 'Provides expert guidance on breaking into top-tier MAANG companies',
      image: '/images/team/maria.jpg',
      details: [
        'IOS Developer - Meta',
        'ex-Yandex',
        'ex-Sber',
      ],
    },
    {
      name: 'SOPHIA',
      role: 'Mentor',
      description: 'Specializes in behavioral, technical, and personal fit interviews',
      image: '/images/team/sophia.jpg',
      details: [
        'IT Digital Strategy Manager - BCG',
        'ex-Accenture',
        'ex-Big4',
      ],
    },
    {
      name: 'EUGENE',
      role: 'Mentor',
      description: 'Assists candidates in landing roles at top-tier US banks',
      image: '/images/team/eugene.jpg',
      details: [
        'FullStack Developer JP Morgan Chase',
        'ex-Sberbank',
        'ex-Yandex',
      ],
    },
    {
      name: 'CHRISTINA',
      role: 'Social Media Manager',
      description: 'Keeps social platforms engaging and informative',
      image: '/images/team/christina.jpg',
      details: [
        'Founder and director of SMM agency',
        'Experience more than 5 years',
        'More than 20 different niches',
      ],
    },
    {
      name: 'ARINA',
      role: 'Mentor',
      description: 'Expert career guidance and mentorship',
      image: '/images/team/arina.jpg',
      details: [
        'Skolkovo',
        'Moscow Innovation Agency',
        'InvestFuture',
        'ProductStar',
        '5+ years of career mentoring',
      ],
    },
    {
      name: 'DARIA',
      role: 'Mentor',
      description: 'Designing business processes, creating educational products in EdTech, hiring and managing agile teams',
      image: '/images/team/daria.jpg',
      details: [
        'International tech mentor helping professionals navigate global markets and industry transitions',
      ],
    },
    {
      name: 'JULIA',
      role: 'Content Director',
      description: 'Crafts educational content for faster and easier learning',
      image: '/images/team/julia.jpg',
      details: [
        '8+ years experience',
        'Managed team of 40+ authors',
        '4 published books',
      ],
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  // Определяем количество карточек в зависимости от размера экрана
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1)
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  const maxIndex = useMemo(() => Math.max(0, teamMembers.length - cardsPerView), [teamMembers.length, cardsPerView])

  // Автоматическая прокрутка
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIdx = Math.max(0, teamMembers.length - cardsPerView)
        return prev >= maxIdx ? 0 : prev + 1
      })
    }, 5000)

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [cardsPerView, teamMembers.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)))
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIdx = Math.max(0, teamMembers.length - cardsPerView)
        return prev >= maxIdx ? 0 : prev + 1
      })
    }, 5000)
  }

  const goToPrevious = () => {
    goToSlide(currentIndex - 1)
  }

  const goToNext = () => {
    goToSlide(currentIndex + 1)
  }

  return (
    <section id="about" className="py-16 md:py-20 border-t border-border relative section-bg-1">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Заголовок секции */}
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3 md:mb-4 tracking-tight">
              <span className="text-foreground">Together, we&apos;re here to </span>
              <span className="gradient-text">help you land your dream job</span>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-2xl mx-auto font-light">
              Команда профессионалов, которая работает на твой результат
            </p>
          </div>
        </ScrollReveal>

        {/* Карусель участников команды */}
        <div className="relative max-w-7xl mx-auto">
          {/* Кнопки навигации */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full border border-border/50 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-purple-500/50 ${
              currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
            }`}
            aria-label="Предыдущий слайд"
          >
            <svg
              className="w-3 h-3 text-foreground"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full border border-border/50 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-purple-500/50 ${
              currentIndex >= maxIndex ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
            }`}
            aria-label="Следующий слайд"
          >
            <svg
              className="w-3 h-3 text-foreground"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Контейнер карусели */}
          <div className="overflow-hidden mx-6 md:mx-8">
            <div
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                transition: 'transform 0.5s ease-in-out',
                width: '100%',
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  style={{ 
                    width: `${100 / cardsPerView}%`,
                    minWidth: `${100 / cardsPerView}%`,
                    maxWidth: `${100 / cardsPerView}%`,
                    flexShrink: 0,
                    flexGrow: 0,
                    paddingLeft: '0.5rem',
                    paddingRight: '0.5rem',
                    boxSizing: 'border-box',
                  }}
                >
                  <div className="group relative rounded-xl border border-border/50 bg-white/2 backdrop-blur-sm hover:border-purple-500/50 hover:bg-white/5 transition-all duration-500 overflow-hidden h-full w-full flex">
                    {/* Изображение участника */}
                    <div className="relative w-1/2 flex-shrink-0 overflow-hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                      <div className="w-full h-full relative">
                        <Image
                          src={member.image}
                          alt={`${member.name} - ${member.role}`}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          unoptimized
                        />
                        {/* Заглушка, если изображение не загрузилось */}
                        <div className="placeholder hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                          <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-purple-500/30 mx-auto mb-2 flex items-center justify-center">
                              <span className="text-2xl font-light text-white">
                                {member.name.charAt(0)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Информация об участнике */}
                    <div className="w-1/2 p-3 md:p-4 flex flex-col">
                      <div className="mb-2 md:mb-2.5">
                        <h3 className="text-sm md:text-base font-light uppercase tracking-wide text-foreground mb-0.5 md:mb-1">
                          {member.name}
                        </h3>
                        <p className="text-xs text-accent font-light uppercase tracking-wide">
                          {member.role}
                        </p>
                      </div>

                      <p className="text-xs text-muted font-light mb-2 md:mb-2.5 leading-relaxed">
                        {member.description}
                      </p>

                      {/* Детали */}
                      {member.details.length > 0 && (
                        <ul className="space-y-1">
                          {member.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="text-[10px] text-muted font-light flex items-start">
                              <span className="text-purple-400 mr-1 mt-0.5">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Декоративный элемент при наведении */}
                    <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-xl transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Индикаторы (точки) */}
          <div className="flex justify-center gap-1 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 border border-white/20 ${
                  currentIndex === index
                    ? 'w-4 bg-purple-500 border-purple-400'
                    : 'w-1.5 bg-white/40 hover:bg-purple-500/70 hover:border-purple-400/50'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



