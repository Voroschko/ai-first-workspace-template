import ScrollReveal from './ScrollReveal'

export default function Benefits() {
  const benefits = [
    {
      title: 'Это не обучение. Это партнерство',
      description: 'Мы не продаем тебе курс и не исчезаем. Мы работаем с тобой плечом к плечу 6 месяцев — столько, сколько нужно для результата.',
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      title: 'Люди + технологии = результат',
      description: 'Опытные менторы знают, как работает рынок. AI обрабатывает сотни вакансий в день. Вместе они создают машину по поиску работы.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Живая стратегия',
      description: 'Мы не следуем жесткому плану. Мы адаптируемся под твой опыт, цели и возможности с учетом текущих реалий рынка.',
      gradient: 'from-pink-500 to-purple-500',
    },
    {
      title: 'Команда экспертов',
      description: 'Личный куратор отслеживает твой прогресс ежедневно. Прямой доступ к менторам в рабочем чате. Регулярные чекапы и корректировка тактики.',
      gradient: 'from-cyan-500 to-blue-500',
    },
  ]

  return (
    <section className="py-16 md:py-20 border-t border-border relative section-bg-2">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl animate-float animation-delay-3000"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 tracking-tight">
              <span className="text-foreground">Почему мы — </span>
              <span className="gradient-text">не как все</span>
            </h2>
            <p className="text-base md:text-lg text-muted max-w-xl mx-auto font-light">
              Это не курс. Это команда профессионалов, которая работает на твой результат
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto items-stretch">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} animation="slide-in-left" delay={index * 150}>
              <div className="h-full border-b border-border pb-8 md:pb-10 lg:pb-12 group hover:border-gradient transition-all duration-500 hover:scale-[1.02] flex flex-col">
                <h3 className="text-xl md:text-2xl font-light mb-4 md:mb-5 lg:mb-6 tracking-wide uppercase relative">
                  <span className={`bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                    {benefit.title}
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${benefit.gradient} w-0 group-hover:w-full transition-all duration-500`}></span>
                </h3>
                <p className="text-sm md:text-base text-muted font-light leading-relaxed flex-1">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
