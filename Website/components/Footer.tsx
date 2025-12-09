export default function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border py-12 md:py-16 relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10">
          <div className="animate-fade-in">
            <h3 className="text-xl font-light mb-6 uppercase tracking-wide">
              <span className="text-foreground">Go </span>
              <span className="gradient-text">Offer</span>
            </h3>
            <p className="text-sm text-gray-300 font-light">
              Level Up Your Career: AI-Powered Job Search
            </p>
          </div>
          <div className="animate-fade-in animation-delay-200">
            <h4 className="text-sm font-light mb-6 text-foreground uppercase tracking-wide">Навигация</h4>
            <ul className="space-y-4">
              <li>
                <a href="/services" className="text-sm text-gray-300 hover:text-purple-300 transition-colors font-light uppercase tracking-wide">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-gray-300 hover:text-blue-300 transition-colors font-light uppercase tracking-wide">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-300 hover:text-pink-300 transition-colors font-light uppercase tracking-wide">
                  О нас
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-300 hover:text-cyan-300 transition-colors font-light uppercase tracking-wide">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in animation-delay-300">
            <h4 className="text-sm font-light mb-6 text-foreground uppercase tracking-wide">Контакты</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li>
                <span className="text-muted">Почта:</span>{' '}
                <a href="mailto:friend@go-offer.us" className="hover:text-purple-300 transition-colors">
                  friend@go-offer.us
                </a>
              </li>
              <li>
                <span className="text-muted">TG:</span>{' '}
                <a href="https://t.me/go_offer_support" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                  @go_offer_support
                </a>
              </li>
              <li>
                <span className="text-muted">YouTube:</span>{' '}
                <a href="https://www.youtube.com/@GoOfferUS/videos" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">
                  Go Offer
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center animate-fade-in animation-delay-400">
          <p className="text-xs text-gray-400 font-light">&copy; {new Date().getFullYear()} Go Offer. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
