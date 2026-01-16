import { MailIcon, TelegramIcon, InstagramIcon, YouTubeIcon } from './ContactIcons'

export default function Footer() {
  const socialLinks = [
    {
      icon: MailIcon,
      href: 'mailto:friend@go-offer.us',
      label: 'Email',
      value: 'friend@go-offer.us',
      color: 'hover:text-purple-400',
    },
    {
      icon: TelegramIcon,
      href: 'https://t.me/go_offer_support',
      label: 'TG Support',
      value: '@go_offer_support',
      color: 'hover:text-blue-400',
    },
    {
      icon: TelegramIcon,
      href: 'https://t.me/go_offer_job_search',
      label: 'TG Community',
      value: '@go_offer_job_search',
      color: 'hover:text-cyan-400',
    },
    {
      icon: InstagramIcon,
      href: 'https://www.instagram.com/go_offer/',
      label: 'Instagram',
      value: '@go_offer',
      color: 'hover:text-pink-400',
    },
    {
      icon: YouTubeIcon,
      href: 'https://www.youtube.com/@GoOfferUS/videos',
      label: 'YouTube',
      value: 'Go Offer',
      color: 'hover:text-red-400',
    },
  ].sort((a, b) => {
    // Сортировка по общей длине текста (метка + значение) от самого длинного к короткому
    const lengthA = (a.label + ': ' + a.value).length
    const lengthB = (b.label + ': ' + b.value).length
    return lengthB - lengthA
  })

  return (
    <footer id="contact" className="bg-background border-t border-border py-12 md:py-16 relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10">
          <div className="animate-fade-in">
            <h3 className="text-xl font-light mb-6 uppercase tracking-wide">
              <span className="text-foreground">Go </span>
              <span className="gradient-text">Offer</span>
            </h3>
            <p className="text-sm text-muted font-light">
              Level Up Your Career: AI-Powered Job Search
            </p>
          </div>
          <div className="animate-fade-in animation-delay-200">
            <h4 className="text-sm font-light mb-6 text-foreground uppercase tracking-wide">Навигация</h4>
            <ul className="space-y-4">
              <li>
                <a href="/services" className="text-sm text-muted hover:text-purple-600 transition-colors font-light uppercase tracking-wide">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted hover:text-blue-600 transition-colors font-light uppercase tracking-wide">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-muted hover:text-pink-600 transition-colors font-light uppercase tracking-wide">
                  О нас
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted hover:text-cyan-600 transition-colors font-light uppercase tracking-wide">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in animation-delay-300">
            <h4 className="text-sm font-light mb-6 text-foreground uppercase tracking-wide">Контакты</h4>
            <ul className="space-y-3.5">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-3 text-sm text-muted font-light group transition-colors ${link.color}`}
                    >
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                        <IconComponent size={18} className="text-current" />
                      </div>
                      <div className="flex items-baseline gap-2 min-w-0">
                        <span className="text-xs uppercase tracking-wide opacity-70 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {link.label}:
                        </span>
                        <span className="text-sm font-light leading-relaxed group-hover:translate-x-0.5 transition-transform duration-300">
                          {link.value}
                        </span>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 animate-fade-in animation-delay-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted font-light">&copy; {new Date().getFullYear()} Go Offer. Все права защищены.</p>
            <div className="flex flex-wrap gap-4 justify-center text-xs">
              <a href="/privacy" className="text-muted hover:text-purple-600 transition-colors font-light uppercase tracking-wide">
                Privacy Policy
              </a>
              <span className="text-muted">•</span>
              <a href="/cookie" className="text-muted hover:text-blue-600 transition-colors font-light uppercase tracking-wide">
                Cookie Policy
              </a>
              <span className="text-muted">•</span>
              <a href="/termsconditions" className="text-muted hover:text-pink-600 transition-colors font-light uppercase tracking-wide">
                Terms & Conditions
              </a>
              <span className="text-muted">•</span>
              <a href="/contact" className="text-muted hover:text-cyan-600 transition-colors font-light uppercase tracking-wide">
                Contact Information
              </a>
              <span className="text-muted">•</span>
              <a href="/companydetails" className="text-muted hover:text-violet-600 transition-colors font-light uppercase tracking-wide">
                Company Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
