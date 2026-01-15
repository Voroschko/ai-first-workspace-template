'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function CoursesPage() {
  const upcomingEvents = [
    {
      date: '3 февраля в 18:00 по Нью-Йорку',
      title: 'Резюме и LinkedIn для рынка США: онлайн-практикум с live разбором и ATS-тестом твоего профиля',
      description: 'Раскроем алгоритмы, которые отсеивают 90% кандидатов, и покажем, как их обойти. Реальные инструменты рекрутеров • разбор ваших резюме в прямом эфире.',
      type: 'live',
    },
  ]

  const courses = [
    {
      type: 'Интенсив',
      typeColor: 'border-purple-500',
      title: 'Поиск работы в США',
      description: 'Комплексный курс по поиску работы в США с практическими инструментами и стратегиями',
      image: '/images/courses/job-search.jpg',
    },
    {
      type: 'Открытый эфир',
      typeColor: 'border-green-500',
      title: 'Карьерная стратегия',
      description: 'Живые эфиры с экспертами о построении карьеры и поиске работы',
      image: '/images/courses/career-strategy.jpg',
    },
    {
      type: 'Открытый эфир',
      typeColor: 'border-green-500',
      title: 'Твой путь к job offer в США в 2026 году: как перейти от отказов к интервью',
      description: 'Практические советы и стратегии для успешного прохождения интервью',
      image: '/images/courses/interview-prep.jpg',
    },
  ]

  return (
    <>
      <Header />
      <Breadcrumbs />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal animation="fade-in">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                  <span className="text-foreground">Бесплатные </span>
                  <span className="gradient-text">курсы</span>
                </h1>
                <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto font-light">
                  Получите доступ к бесплатным материалам и онлайн-практикумам от команды Go Offer
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Ближайшие эфиры */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal animation="fade-in">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight">
                  <span className="text-foreground">Ближайшие </span>
                  <span className="gradient-text">эфиры</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <ScrollReveal key={index} animation="slide-up" delay={index * 100}>
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-2xl p-6 md:p-8 border border-purple-500/20 backdrop-blur-sm">
                    <div className="mb-4">
                      <p className="text-sm text-muted font-light mb-2">{event.date}</p>
                      <h3 className="text-xl md:text-2xl font-medium text-foreground mb-4 leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-base text-muted font-light leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    <a
                      href="https://cal.com/team/go-offer/career-consultation?traffic_source=Website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-purple-500/50 px-6 py-3 text-sm font-light text-foreground hover:bg-purple-500/10 hover:border-purple-500 transition-all uppercase tracking-wide rounded-lg"
                    >
                      Принять участие
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Бесплатное обучение */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal animation="fade-in">
              <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-tight">
                <span className="text-foreground">Бесплатное обучение от команды </span>
                <span className="gradient-text">Go Offer</span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {courses.map((course, index) => (
                <ScrollReveal key={index} animation="slide-up" delay={index * 100}>
                  <div className="bg-background/50 rounded-2xl overflow-hidden border border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                    {/* Image placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center">
                      <div className="text-muted text-sm font-light">Изображение курса</div>
                    </div>

                    <div className="p-6">
                      {/* Type badge */}
                      <div className={`inline-block border ${course.typeColor} px-3 py-1 rounded-full mb-4`}>
                        <span className="text-xs font-light text-foreground uppercase tracking-wide">
                          {course.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-medium text-foreground mb-3 leading-tight">
                        {course.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted font-light mb-6 leading-relaxed">
                        {course.description}
                      </p>

                      {/* Button */}
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 bg-foreground/90 text-background px-5 py-2.5 rounded-lg text-sm font-light hover:bg-foreground transition-colors uppercase tracking-wide"
                      >
                        Подробнее
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
