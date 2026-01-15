import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

export default function Services() {
  const services = [
    {
      title: 'Career Strategy',
      description: 'Разработка стратегии карьеры с учетом ваших целей и возможностей',
      color: 'purple',
    },
    {
      title: 'Resume Building',
      description: 'Создание резюме, которое проходит ATS-фильтры и привлекает внимание топовых компаний',
      color: 'blue',
    },
    {
      title: 'LinkedIn Optimization',
      description: 'Оптимизация профиля LinkedIn для повышения видимости и открытия новых возможностей',
      color: 'pink',
    },
    {
      title: 'Job Search Automation',
      description: 'Автоматизация поиска работы с помощью AI-инструментов. Экономия 20+ часов в неделю',
      color: 'cyan',
    },
    {
      title: 'Mock Interviews',
      description: 'Практика интервью с экспертами для уверенного прохождения собеседований',
      color: 'violet',
    },
    {
      title: 'Offer Negotiation',
      description: 'Научитесь вести переговоры как профессионал и увеличить предложение',
      color: 'purple',
    },
  ]

  const colorClasses = {
    purple: 'hover:border-purple-400/40 hover:bg-purple-500/4',
    blue: 'hover:border-blue-400/40 hover:bg-blue-500/4',
    pink: 'hover:border-pink-400/40 hover:bg-pink-500/4',
    cyan: 'hover:border-cyan-400/40 hover:bg-cyan-500/4',
    violet: 'hover:border-violet-400/40 hover:bg-violet-500/4',
  }

  return (
    <section id="services" className="py-16 md:py-20 border-t border-border relative section-bg-1">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/8 rounded-full blur-3xl animate-float animation-delay-4000" style={{ transform: 'translate(-50%, -50%)' }}></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 tracking-tight">
              <span className="text-foreground">Наши </span>
              <span className="gradient-text">услуги</span>
            </h2>
            <p className="text-base md:text-lg text-muted max-w-xl mx-auto font-light">
              Мы предлагаем профессиональные решения для вашей карьеры
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto mb-12 md:mb-16">
          {services.map((service, index) => (
            <ScrollReveal key={index} animation="slide-up" delay={index * 100}>
              <div className={`border-b border-border pb-6 md:pb-8 transition-all duration-500 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                <h3 className="text-lg md:text-xl font-light mb-3 md:mb-4 tracking-wide uppercase">
                  {service.title}
                </h3>
                <p className="text-sm text-muted font-light leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in" delay={600}>
          <div className="text-center">
            <Link
              href="/services"
              className="border border-purple-500 px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm font-light text-accent hover:bg-purple-500 hover:border-purple-600 hover:text-white transition-all uppercase tracking-wide hover-purple-glow inline-block group relative overflow-hidden"
            >
              <span className="relative z-10">Посмотреть все услуги</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
