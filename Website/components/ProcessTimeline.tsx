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
      'Первые 500+ подач ассистентами',
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

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<number>(1)
  const [progress, setProgress] = useState<number>(0)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Анимация прогресса
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
        active: 'bg-purple-500/20 border-purple-500/50',
        inactive: 'bg-background/70 border-border/30'
      },
      blue: {
        active: 'bg-blue-500/20 border-blue-500/50',
        inactive: 'bg-background/70 border-border/30'
      },
      green: {
        active: 'bg-green-500/20 border-green-500/50',
        inactive: 'bg-background/70 border-border/30'
      },
      pink: {
        active: 'bg-pink-500/20 border-pink-500/50',
        inactive: 'bg-background/70 border-border/30'
      },
      yellow: {
        active: 'bg-yellow-500/20 border-yellow-500/50',
        inactive: 'bg-background/70 border-border/30'
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
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
              <span className="text-foreground">Этапы </span>
              <span className="gradient-text">программы</span>
            </h2>
            <p className="text-base text-muted max-w-2xl mx-auto font-light">
              Пошаговый план на 3 месяца до получения оффера
            </p>
          </div>
        </ScrollReveal>

        <div ref={timelineRef} className="max-w-5xl mx-auto">
          {/* Timeline линия */}
          <div className="relative hidden md:block mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 via-green-500/20 via-pink-500/20 to-yellow-500/20 transform -translate-y-1/2"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 via-green-500 via-pink-500 to-yellow-500 transform -translate-y-1/2 transition-all duration-1000"
              style={{ width: `${progress}%` }}
            ></div>
            
            {/* Точки на timeline */}
            {timelineSteps.map((step, index) => {
              const position = (index / (timelineSteps.length - 1)) * 100
              const isActive = progress >= position
              
              return (
                  <div
                    key={step.id}
                    className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-500"
                    style={{ left: `${position}%` }}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? `${getProgressColor(step.color)} scale-125 shadow-lg` 
                        : 'bg-background border-border/50'
                    }`}>
                      {isActive && (
                        <div className={`w-full h-full rounded-full ${getProgressColor(step.color)} animate-pulse`}></div>
                      )}
                    </div>
                  </div>
              )
            })}
          </div>

          {/* Карточки этапов */}
          <div className="space-y-6">
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
                    <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/30 via-blue-500/30 via-green-500/30 via-pink-500/30 to-yellow-500/30">
                      {isPast && (
                        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-blue-500 via-green-500 via-pink-500 to-yellow-500 transition-all duration-500" style={{ height: '100%' }}></div>
                      )}
                    </div>

                    <div className={`relative ml-0 md:ml-0 rounded-xl border backdrop-blur-sm transition-all duration-500 ${
                      getColorClasses(step.color, isActive)
                    } ${isActive ? 'shadow-2xl' : 'shadow-lg'}`}>
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          {/* Иконка и номер */}
                          <div className="flex-shrink-0">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                              isActive 
                                ? 'bg-background/80 scale-110' 
                                : 'bg-background/70'
                            }`}>
                              <Icon name={step.icon} size={28} className={getIconColor(step.color)} />
                            </div>
                            <div className={`mt-2 text-xs font-medium text-center transition-colors ${
                              isActive ? 'text-foreground' : 'text-muted'
                            }`}>
                              {step.week}
                            </div>
                          </div>

                          {/* Контент */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className={`text-xl font-medium mb-1 transition-colors ${
                                  isActive ? 'text-foreground' : 'text-foreground'
                                }`}>
                                  {step.title}
                                </h3>
                                <p className="text-sm text-muted font-light">
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
                              <div className="mt-4 pt-4 border-t border-border/30 animate-fade-in">
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

          {/* Статистика внизу */}
          <ScrollReveal animation="fade-in" delay={500}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background/30 rounded-xl border border-border/30 backdrop-blur-sm">
                <div className="text-4xl font-light text-accent mb-2">3</div>
                <div className="text-sm text-muted font-light">Месяца до оффера</div>
                <div className="text-xs text-muted font-light mt-1">для 68% клиентов</div>
              </div>
              <div className="text-center p-6 bg-background/30 rounded-xl border border-border/30 backdrop-blur-sm">
                <div className="text-4xl font-light text-accent mb-2">2500+</div>
                <div className="text-sm text-muted font-light">Подач ассистентами</div>
                <div className="text-xs text-muted font-light mt-1">в тарифе Take All+</div>
              </div>
              <div className="text-center p-6 bg-background/30 rounded-xl border border-border/30 backdrop-blur-sm">
                <div className="text-4xl font-light text-accent mb-2">6</div>
                <div className="text-sm text-muted font-light">Месяцев поддержки</div>
                <div className="text-xs text-muted font-light mt-1">доступ к Hub</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

