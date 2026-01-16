'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedStars from '@/components/AnimatedStars'
import { MailIcon, TelegramIcon, InstagramIcon, YouTubeIcon, LocationIcon, ClockIcon, GlobeIcon } from '@/components/ContactIcons'

export default function ContactPage() {
  const contactItems = [
    {
      icon: MailIcon,
      label: 'Email',
      value: 'kirill@go-offer.us',
      href: 'mailto:kirill@go-offer.us',
      color: 'purple',
    },
    {
      icon: GlobeIcon,
      label: 'Website',
      value: 'www.go-offer.us',
      href: 'https://www.go-offer.us',
      color: 'blue',
    },
  ]

  const socialItems = [
    {
      icon: TelegramIcon,
      label: 'Telegram Community',
      value: '@go_offer_job_search',
      href: 'https://t.me/go_offer_job_search',
      color: 'cyan',
    },
    {
      icon: InstagramIcon,
      label: 'Instagram',
      value: '@go_offer',
      href: 'https://www.instagram.com/go_offer/',
      color: 'pink',
    },
    {
      icon: TelegramIcon,
      label: 'Telegram Support',
      value: '@go_offer_support',
      href: 'https://t.me/go_offer_support',
      color: 'blue',
    },
    {
      icon: YouTubeIcon,
      label: 'YouTube',
      value: 'Go Offer',
      href: 'https://www.youtube.com/@GoOfferUS/videos',
      color: 'red',
    },
  ]

  const colorClasses = {
    purple: 'text-purple-400 border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/50',
    blue: 'text-blue-400 border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 hover:border-blue-500/50',
    cyan: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-500/50',
    pink: 'text-pink-400 border-pink-500/30 bg-pink-500/5 hover:bg-pink-500/10 hover:border-pink-500/50',
    red: 'text-red-400 border-red-500/30 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/50',
    violet: 'text-violet-400 border-violet-500/30 bg-violet-500/5 hover:bg-violet-500/10 hover:border-violet-500/50',
  }

  return (
    <>
      <main className="relative">
        <AnimatedStars />
        <div className="relative z-10">
          <Header />
          <Breadcrumbs />
          
          <section className="py-16 md:py-20 border-t border-border relative">
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-float"></div>
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float animation-delay-2000"></div>
            </div>
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
              <ScrollReveal animation="fade-in">
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 tracking-tight">
                      <span className="text-foreground">Contact </span>
                      <span className="gradient-text">Information</span>
                    </h1>
                    <p className="text-base md:text-lg text-muted max-w-2xl mx-auto font-light">
                      Свяжитесь с нами любым удобным способом
                    </p>
                  </div>

                  {/* Company Address Card */}
                  <ScrollReveal animation="fade-in" delay={100}>
                    <div className="mb-8 p-8 md:p-10 border border-violet-500/20 rounded-2xl bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-blue-500/5 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:border-violet-500/30 transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 border border-violet-500/30">
                          <LocationIcon size={24} className="text-violet-400" />
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-light text-foreground mb-3 tracking-wide">
                            Go Offer, Inc.
                          </h3>
                          <p className="text-muted font-light leading-relaxed">
                            400 Claremont Ave<br />
                            Jersey City, NJ, 07304<br />
                            United States
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Contact Methods */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {contactItems.map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <ScrollReveal key={index} animation="slide-up" delay={200 + index * 100}>
                          <a
                            href={item.href}
                            className={`group block p-6 md:p-8 border rounded-xl backdrop-blur-sm transition-all duration-300 ${colorClasses[item.color as keyof typeof colorClasses]}`}
                          >
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                                <IconComponent size={24} className="text-current" />
                              </div>
                              <div className="flex-1">
                                <div className="text-xs uppercase tracking-wide text-muted font-light mb-1">{item.label}</div>
                                <div className="text-base md:text-lg font-light text-foreground group-hover:translate-x-1 transition-transform duration-300">
                                  {item.value}
                                </div>
                              </div>
                            </div>
                          </a>
                        </ScrollReveal>
                      )
                    })}
                  </div>

                  {/* Social Communities */}
                  <ScrollReveal animation="fade-in" delay={400}>
                    <div className="mb-8">
                      <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6 tracking-wide text-center">
                        <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                          Сообщества
                        </span>
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {socialItems.map((item, index) => {
                          const IconComponent = item.icon
                          return (
                            <ScrollReveal key={index} animation="slide-up" delay={500 + index * 100}>
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group block p-6 md:p-8 border rounded-xl backdrop-blur-sm transition-all duration-300 ${colorClasses[item.color as keyof typeof colorClasses]}`}
                              >
                                <div className="flex items-center gap-4">
                                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 border border-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                    <IconComponent size={28} className="text-current" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-xs uppercase tracking-wide text-muted font-light mb-1">{item.label}</div>
                                    <div className="text-base md:text-lg font-light text-foreground group-hover:translate-x-1 transition-transform duration-300">
                                      {item.value}
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </ScrollReveal>
                          )
                        })}
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Support Hours */}
                  <ScrollReveal animation="fade-in" delay={800}>
                    <div className="p-6 md:p-8 border border-purple-500/20 rounded-xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 backdrop-blur-sm">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                          <ClockIcon size={24} className="text-purple-400" />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-light text-foreground mb-2 tracking-wide">
                            Customer Support Hours
                          </h3>
                          <p className="text-muted font-light">
                            Monday - Friday: 9:00 AM - 6:00 PM EST
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
