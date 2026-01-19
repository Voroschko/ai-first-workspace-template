'use client'

import { useState, useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'
import Icon from './Icon'

interface TimelineStep {
  id: number
  week: string
  title: string
  description: string
  activities: string[]
  icon: string
  color: string
}

const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    week: 'Неделя 1',
    title: 'Стратегия и подготовка',
    description: 'Закладываем фундамент для успешного поиска работы',
    activities: [
      'Стратегическая сессия с ментором',
      'Анализ опыта и карьерных целей',
      'Разработка персональной стратегии',
      'Онбординг в систему Go Offer'
    ],
    icon: 'target',
    color: 'purple'
  },
  {
    id: 2,
    week: 'Неделя 2',
    title: 'Оптимизация профиля',
    description: 'Создаем продающие материалы для поиска работы',
    activities: [
      'Оптимизация резюме (ATS-friendly)',
      'Верификация резюме ментором',
      'Оптимизация LinkedIn профиля',
      'Обучение нетворкингу'
    ],
    icon: 'resume',
    color: 'blue'
  },
  {
    id: 3,
    week: 'Неделя 3-4',
    title: 'Активный поиск',
    description: 'Запускаем автоматизацию и начинаем активные подачи',
    activities: [
      'Запуск Hub для поиска работы',
      'Easy Apply автоматизация',
      '2500+ подач ассистентами',
      'Парсинг писем куратором',
      'Первые отклики от работодателей'
    ],
    icon: 'rocket',
    color: 'green'
  },
  {
    id: 4,
    week: 'Неделя 5-6',
    title: 'Интервью и переговоры',
    description: 'Проходим собеседования и ведем переговоры',
    activities: [
      'Mock интервью с экспертами',
      'Подготовка к техническим интервью',
      'Прохождение реальных интервью',
      'Переговоры о зарплате',
      'Получение офферов'
    ],
    icon: 'microphone',
    color: 'pink'
  },
  {
    id: 5,
    week: 'Неделя 7-12',
    title: 'Успешное трудоустройство',
    description: '68% клиентов получают оффер в течение 3 месяцев',
    activities: [
      'Выбор лучшего оффера',
      'Финальные переговоры',
      'Подписание контракта',
      'Оффер на 28.4% выше рынка',
      'Успешное начало работы'
    ],
    icon: 'celebration',
    color: 'yellow'
  }
]

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(1)
  const [progress, setProgress] = useState<number>(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 2000
            const startTime = Date.now()
            
            const animate = () => {
              const elapsed = Date.now() - startTime
              const progressValue = Math.min((elapsed / duration) * 100, 100)
              setProgress(progressValue)
              
              if (progressValue < 100) {
                requestAnimationFrame(animate)
              }
            }
            
            animate()
          }
        })
      },
      { threshold: 0.3 }
    )

    const currentRef = timelineRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors: Record<string, { active: string; inactive: string }> = {
      purple: {
        active: 'bg-background/95 border-purple-500/60',
        inactive: 'bg-background/90 border-border/40'
      },
      blue: {
        active: 'bg-background/95 border-blue-500/60',
        inactive: 'bg-background/90 border-border/40'
      },
      green: {
        active: 'bg-background/95 border-green-500/60',
        inactive: 'bg-background/90 border-border/40'
      },
      pink: {
        active: 'bg-background/95 border-pink-500/60',
        inactive: 'bg-background/90 border-border/40'
      },
      yellow: {
        active: 'bg-background/95 border-yellow-500/60',
        inactive: 'bg-background/90 border-border/40'
      }
    }
    const colorConfig = colors[color] || colors.purple
    return isActive ? colorConfig.active : colorConfig.inactive
  }

  const getProgressColor = (color: string) => {
    const colors: Record<string, string> = {
      purple: 'bg-purple-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      pink: 'bg-pink-500',
      yellow: 'bg-yellow-500'
    }
    return colors[color] || colors.purple
  }

  const getTextColor = (color: string) => {
    const colors: Record<string, string> = {
      purple: 'text-purple-400',
      blue: 'text-blue-400',
      green: 'text-green-400',
      pink: 'text-pink-400',
      yellow: 'text-yellow-400'
    }
    return colors[color] || colors.purple
  }

  const getIconColor = (color: string) => {
    const colors: Record<string, string> = {
      purple: 'text-purple-400',
      blue: 'text-blue-400',
      green: 'text-green-400',
      pink: 'text-pink-400',
      yellow: 'text-yellow-400'
    }
    return colors[color] || colors.purple
  }

  return (
    <section id="process" className="py-16 md:py-20 border-t border-border relative overflow-hidden section-bg-3">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-4xl md:text-5xl font-light mb-3 md:mb-4 tracking-tight">
              <span className="text-foreground">Как мы </span>
              <span className="gradient-text">работаем</span>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-2xl mx-auto font-light">
              Пошаговый процесс от стратегии до получения оффера за 3 месяца
            </p>
          </div>
        </ScrollReveal>

        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Timeline линия */}
          <div className="relative hidden md:block mb-10">
            <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-wide text-foreground/70">
              <span>Прогресс</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="relative h-2 rounded-full bg-border/30">
              <div 
                className="absolute left-0 top-0 h-2 rounded-full bg-foreground/70 transition-all duration-700"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            {/* Точки на timeline */}
            {timelineSteps.map((step, index) => {
              const position = (index / (timelineSteps.length - 1)) * 100
              const isActive = progress >= position
              
              return (
                <div
                  key={step.id}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-500"
                  style={{ left: `${position}%` }}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className={`w-3 h-3 rounded-full border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-foreground border-foreground/60 scale-110' 
                      : 'bg-background border-border/50'
                  }`}></div>
                </div>
              )
            })}
          </div>

          {/* Карточки этапов */}
          <div className="relative z-10 space-y-3 md:space-y-4">
            {timelineSteps.map((step, index) => {
              const isActive = activeStep === step.id
              const isPast = activeStep > step.id
              
              return (
                <ScrollReveal key={step.id} animation="slide-up" delay={index * 100}>
                  <div
                    className={`relative cursor-pointer transition-all duration-500 ${
                      isActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    {/* Мобильная timeline линия */}
                    <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/30 via-blue-500/30 via-green-500/30 via-pink-500/30 to-yellow-500/30 z-0">
                      {isPast && (
                        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-blue-500 via-green-500 via-pink-500 to-yellow-500 transition-all duration-500" style={{ height: '100%' }}></div>
                      )}
                    </div>

                    <div className={`relative z-10 ml-0 md:ml-0 rounded-xl border backdrop-blur-md transition-all duration-500 ${
                      getColorClasses(step.color, isActive)
                    } ${isActive ? 'shadow-2xl' : 'shadow-lg'}`}>
                      <div className="absolute inset-0 rounded-xl bg-background/95"></div>
                      <div className="relative z-10 p-4 md:p-5">
                        <div className="flex items-start gap-3 md:gap-4">
                          {/* Иконка и номер */}
                          <div className="flex-shrink-0">
                            <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                              isActive 
                                ? 'bg-background/50 scale-110' 
                                : 'bg-background/30'
                            }`}>
                              <Icon name={step.icon} size={20} className={`${getIconColor(step.color)}`} />
                            </div>
                            <div className={`mt-1 md:mt-1.5 text-xs font-medium text-center transition-colors ${
                              isActive ? 'text-foreground' : 'text-muted'
                            }`}>
                              {step.week}
                            </div>
                          </div>

                          {/* Контент */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className={`text-base md:text-lg font-medium mb-1 transition-colors ${
                                  isActive ? 'text-foreground' : 'text-foreground'
                                }`}>
                                  {step.title}
                                </h3>
                                <p className="text-xs md:text-sm text-muted font-light">
                                  {step.description}
                                </p>
                              </div>
                              <div className={`text-xs font-medium px-2 py-1 rounded transition-all ${
                                isActive 
                                  ? `${getProgressColor(step.color)}/20 ${getTextColor(step.color)}` 
                                  : 'bg-background/50 text-muted'
                              }`}>
                              Этап {step.id}
                            </div>
                            </div>

                            {/* Активности */}
                            {isActive && (
                              <div className="mt-3 pt-3 border-t border-border/30 animate-fade-in">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {step.activities.map((activity, activityIndex) => (
                                    <div key={activityIndex} className="flex items-start text-sm">
                                      <span className={`mr-2 mt-0.5 flex-shrink-0 ${getIconColor(step.color)}`}>
                                        ✓
                                      </span>
                                      <span className="text-muted font-light">{activity}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Стрелка */}
                          <div className={`flex-shrink-0 transition-transform duration-500 ${
                            isActive ? 'rotate-90' : ''
                          }`}>
                            <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Декоративный элемент */}
                      {isActive && (
                        <div className={`absolute inset-0 rounded-xl ${getProgressColor(step.color)}/5 -z-10 animate-pulse`}></div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Статистика */}
          <ScrollReveal animation="fade-in" delay={500}>
            <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center p-4 md:p-5 bg-background/30 rounded-xl border border-border/30 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-light text-accent mb-2">68%</div>
                <div className="text-xs md:text-sm text-muted font-light">Получают оффер за 3 месяца</div>
              </div>
              <div className="text-center p-4 md:p-5 bg-background/30 rounded-xl border border-border/30 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-light text-accent mb-2">+28.4%</div>
                <div className="text-xs md:text-sm text-muted font-light">Выше среднего по рынку</div>
              </div>
              <div className="text-center p-4 md:p-5 bg-background/30 rounded-xl border border-border/30 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-light text-accent mb-2">20+</div>
                <div className="text-xs md:text-sm text-muted font-light">Часов экономии в неделю</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

