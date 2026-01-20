'use client'

import { useState } from 'react'
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

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      purple: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/40',
        text: 'text-purple-400',
        icon: 'text-purple-400'
      },
      blue: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/40',
        text: 'text-blue-400',
        icon: 'text-blue-400'
      },
      green: {
        bg: 'bg-green-500/10',
        border: 'border-green-500/40',
        text: 'text-green-400',
        icon: 'text-green-400'
      },
      pink: {
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/40',
        text: 'text-pink-400',
        icon: 'text-pink-400'
      },
      yellow: {
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/40',
        text: 'text-yellow-400',
        icon: 'text-yellow-400'
      }
    }
    return colors[color] || colors.purple
  }

  return (
    <section id="process" className="py-10 md:py-12 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-light mb-2 md:mb-3 tracking-tight">
              <span className="text-foreground">Как мы </span>
              <span className="gradient-text">работаем</span>
            </h2>
            <p className="text-sm md:text-base text-muted max-w-2xl mx-auto font-light">
              Пошаговый процесс от стратегии до получения оффера за 3 месяца
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          {/* Карточки этапов */}
          <div className="space-y-3 md:space-y-4">
            {timelineSteps.map((step, index) => {
              const isActive = activeStep === step.id
              const colorClasses = getColorClasses(step.color)
              
              return (
                <ScrollReveal key={step.id} animation="slide-up" delay={index * 100}>
                  <div
                    className={`relative rounded-xl border backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? `${colorClasses.bg} ${colorClasses.border} shadow-lg scale-[1.01]` 
                        : 'bg-background/80 border-border/40 hover:border-border/60 hover:bg-background/90'
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div className="p-4 md:p-5">
                      <div className="flex items-start gap-4">
                        {/* Иконка */}
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                            isActive 
                              ? `${colorClasses.border} ${colorClasses.bg}` 
                              : 'border-border/40 bg-background/70'
                          }`}>
                            <Icon name={step.icon} size={24} className={isActive ? colorClasses.icon : 'text-muted'} />
                          </div>
                          <div className={`mt-2 text-xs font-medium text-center transition-colors ${
                            isActive ? 'text-foreground' : 'text-muted'
                          }`}>
                            {step.week}
                          </div>
                        </div>

                        {/* Контент */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className={`text-lg md:text-xl font-medium mb-1 transition-colors ${
                                isActive ? 'text-foreground' : 'text-foreground'
                              }`}>
                                {step.title}
                              </h3>
                              <p className="text-sm text-muted font-light">
                                {step.description}
                              </p>
                            </div>
                            <div className={`ml-4 text-xs font-medium px-2.5 py-1 rounded-full transition-all ${
                              isActive 
                                ? `${colorClasses.bg} ${colorClasses.text}` 
                                : 'bg-background/80 text-muted'
                            }`}>
                              Этап {step.id}
                            </div>
                          </div>

                          {/* Активности */}
                          {isActive && (
                            <div className="mt-4 pt-4 border-t border-border/30 animate-fade-in">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                {step.activities.map((activity, activityIndex) => (
                                  <div key={activityIndex} className="flex items-start gap-2">
                                    <span className={`mt-0.5 flex-shrink-0 ${colorClasses.text}`}>
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                    </span>
                                    <span className="text-sm text-foreground/80 font-light">{activity}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Стрелка */}
                        <div className={`flex-shrink-0 transition-transform duration-300 ${
                          isActive ? 'rotate-90' : ''
                        }`}>
                          <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Статистика */}
          <ScrollReveal animation="fade-in" delay={500}>
            <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              <div className="text-center p-4 md:p-5 bg-background/70 rounded-xl border border-border/30 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-light text-accent mb-1">68%</div>
                <div className="text-xs md:text-sm text-muted font-light">Получают оффер за 3 месяца</div>
              </div>
              <div className="text-center p-4 md:p-5 bg-background/70 rounded-xl border border-border/30 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-light text-accent mb-1">+28.4%</div>
                <div className="text-xs md:text-sm text-muted font-light">Выше среднего по рынку</div>
              </div>
              <div className="text-center p-4 md:p-5 bg-background/70 rounded-xl border border-border/30 backdrop-blur-sm">
                <div className="text-2xl md:text-3xl font-light text-accent mb-1">20+</div>
                <div className="text-xs md:text-sm text-muted font-light">Часов экономии в неделю</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
