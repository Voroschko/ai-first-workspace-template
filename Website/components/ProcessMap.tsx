'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import Icon from './Icon'

interface ProcessStep {
  id: number
  title: string
  description: string
  duration: string
  icon: string
  details: string[]
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'Стратегическая сессия',
    description: 'Разработка персональной карьерной стратегии с ментором',
    duration: 'Неделя 1',
    icon: 'target',
    details: [
      'Анализ опыта и целей',
      'Разработка персональной стратегии',
      'Онбординг в систему',
      'Стратегический фундамент'
    ]
  },
  {
    id: 2,
    title: 'Оптимизация резюме',
    description: 'Создание ATS-friendly резюме, которое проходит фильтры',
    duration: 'Неделя 1-2',
    icon: 'resume',
    details: [
      'Профессиональная упаковка',
      'ATS-оптимизация',
      'Персонализация на автопилоте',
      'Верификация ментором'
    ]
  },
  {
    id: 3,
    title: 'Оптимизация LinkedIn',
    description: 'Повышение видимости и открытие новых возможностей',
    duration: 'Неделя 2',
    icon: 'briefcase',
    details: [
      'Оптимизация профиля',
      'Обучение нетворкингу',
      'Стратегия взаимодействия с рекрутерами',
      'Повышение видимости'
    ]
  },
  {
    id: 4,
    title: 'Автоматизация поиска',
    description: 'AI-инструменты экономят 20+ часов в неделю',
    duration: 'Неделя 2-6',
    icon: 'robot',
    details: [
      'Hub для поиска работы',
      'Easy Apply автоматизация',
      '2500+ подач ассистентами',
      'Парсинг писем куратором'
    ]
  },
  {
    id: 5,
    title: 'Mock интервью',
    description: 'Практика с экспертами для уверенного прохождения',
    duration: 'Неделя 3-6',
    icon: 'microphone',
    details: [
      'Подготовка к интервью',
      'Практика с экспертами',
      'Обратная связь и улучшения',
      'Уверенность на собеседованиях'
    ]
  },
  {
    id: 6,
    title: 'Получение оффера',
    description: '68% получают оффер за 3 месяца',
    duration: 'Неделя 3-6',
    icon: 'celebration',
    details: [
      'Переговоры о зарплате',
      'Оффер на 28.4% выше рынка',
      'Поддержка на всех этапах',
      'Успешное трудоустройство'
    ]
  }
]

export default function ProcessMap() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section id="process" className="py-20 border-t border-border relative">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4 tracking-tight">
              <span className="text-foreground">Как мы </span>
              <span className="gradient-text">работаем</span>
            </h2>
            <p className="text-base text-muted max-w-2xl mx-auto font-light">
              Пошаговый процесс от стратегии до получения оффера
            </p>
          </div>
        </ScrollReveal>

        {/* Интерактивная карта процесса */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Линия соединения этапов */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 transform -translate-y-1/2 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse"></div>
            </div>

            {/* Этапы процесса */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-2 relative z-10">
              {processSteps.map((step, index) => (
                <ScrollReveal key={step.id} animation="fade-in" delay={index * 100}>
                  <div
                    className={`relative cursor-pointer group transition-all duration-300 ${
                      activeStep === step.id ? 'scale-105' : 'hover:scale-105'
                    }`}
                    onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  >
                    {/* Соединительная линия для мобильных */}
                    {index < processSteps.length - 1 && (
                      <div className="md:hidden absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-purple-500/30 to-transparent transform -translate-y-1/2 z-0"></div>
                    )}

                    {/* Карточка этапа */}
                    <div
                      className={`relative bg-background/40 backdrop-blur-sm rounded-xl border transition-all duration-300 p-4 h-full ${
                        activeStep === step.id
                          ? 'border-purple-500/50 shadow-lg shadow-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/5'
                          : 'border-border/30 hover:border-purple-500/30 hover:shadow-lg'
                      }`}
                    >
                      {/* Номер этапа */}
                      <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                        activeStep === step.id
                          ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                          : 'bg-background border-2 border-purple-500/30 text-foreground group-hover:bg-purple-500/20'
                      }`}>
                        {step.id}
                      </div>

                      {/* Иконка */}
                      <div className="w-16 h-16 mb-3 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-purple-400">
                        <Icon name={step.icon} size={64} className="text-current" />
                      </div>

                      {/* Заголовок */}
                      <h3 className={`text-sm font-medium mb-2 text-center transition-colors ${
                        activeStep === step.id ? 'text-accent' : 'text-foreground'
                      }`}>
                        {step.title}
                      </h3>

                      {/* Описание */}
                      <p className="text-xs text-muted font-light text-center mb-2 line-clamp-2">
                        {step.description}
                      </p>

                      {/* Длительность */}
                      <div className="text-xs text-purple-400/70 font-light text-center">
                        {step.duration}
                      </div>

                      {/* Детали при активации */}
                      {activeStep === step.id && (
                        <div className="mt-4 pt-4 border-t border-border/30 animate-fade-in">
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start text-xs text-muted font-light">
                                <span className="text-purple-400 mr-2 mt-0.5">✓</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Индикатор активности */}
                    {activeStep === step.id && (
                      <div className="absolute -inset-1 bg-purple-500/20 rounded-xl blur-lg -z-10 animate-pulse"></div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Статистика */}
          <ScrollReveal animation="fade-in" delay={600}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-background/70 rounded-xl border border-border/30 backdrop-blur-sm">
                <div className="text-3xl font-light text-accent mb-2">68%</div>
                <div className="text-sm text-muted font-light">Получают оффер за 3 месяца</div>
              </div>
              <div className="text-center p-6 bg-background/70 rounded-xl border border-border/30 backdrop-blur-sm">
                <div className="text-3xl font-light text-accent mb-2">+28.4%</div>
                <div className="text-sm text-muted font-light">Выше среднего по рынку</div>
              </div>
              <div className="text-center p-6 bg-background/70 rounded-xl border border-border/30 backdrop-blur-sm">
                <div className="text-3xl font-light text-accent mb-2">20+</div>
                <div className="text-sm text-muted font-light">Часов экономии в неделю</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

