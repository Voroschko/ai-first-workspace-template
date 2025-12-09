export default function Hero() {
  return (
    <section className="relative min-h-[33vh] py-12 md:py-16 flex items-center justify-center overflow-hidden">
      {/* Цветные градиенты на фоне */}
      <div className="absolute inset-0 opacity-50 scale-[0.5] origin-center">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-subtle-glow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-subtle-glow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/15 rounded-full blur-2xl animate-subtle-glow animation-delay-4000 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-3/4 right-1/3 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-subtle-glow animation-delay-3000"></div>
      </div>
      <div className="container mx-auto p-0 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-2 md:mb-3 leading-tight tracking-tight animate-fade-in">
            <span className="text-foreground">Level Up Your </span>
            <span className="gradient-text">Career</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-accent mb-2 md:mb-3 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in animation-delay-200">
            AI-Powered Job Search
          </p>
          <p className="text-base md:text-lg text-muted mb-2 md:mb-3 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in animation-delay-300">
            Поиск работы — это <span className="text-accent font-normal">не просто рассылка резюме</span>. Это стратегическая операция, где каждое действие влияет на результат.
          </p>
          
          <div className="border-t border-b border-purple-500/50 py-2 md:py-3 mb-2 md:mb-3 max-w-xl mx-auto animate-scale-in animation-delay-400 hover:border-purple-400 transition-all">
            <div className="space-y-1.5 md:space-y-2 text-left">
              <p className="text-sm md:text-base text-muted font-light animate-slide-in-left animation-delay-500">
                <span className="text-accent font-normal">Около 68%</span> находят работу — за 3 месяца, <span className="text-accent font-normal">94% — к 6-му месяцу</span>
              </p>
              <p className="text-sm md:text-base text-muted font-light animate-slide-in-left animation-delay-600">
                <span className="text-accent font-normal">В 5-15 раз больше</span> релевантных откликов от работодателей
              </p>
              <p className="text-sm md:text-base text-muted font-light animate-slide-in-left animation-delay-600">
                <span className="text-accent font-normal">Оффер на ~28.4% выше</span> среднего по рынку
              </p>
            </div>
          </div>

          <p className="text-sm md:text-base text-muted mb-2 md:mb-3 max-w-xl mx-auto font-light animate-fade-in animation-delay-400">
            Это не курс. Это команда профессионалов, которая работает на твой результат 6 месяцев подряд.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center animate-fade-in animation-delay-500">
            <a
              href="#pricing"
              className="border border-purple-500 px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm font-light text-accent hover:bg-purple-500 hover:border-purple-600 hover:text-white transition-all uppercase tracking-wide hover-purple-glow group relative overflow-hidden"
            >
              <span className="relative z-10">Посмотреть тарифы</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </a>
            <a
              href="/services"
              className="border border-border px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm font-light text-muted hover:text-accent hover:border-purple-500/50 transition-all uppercase tracking-wide"
            >
              Наши услуги
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
