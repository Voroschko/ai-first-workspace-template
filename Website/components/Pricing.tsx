'use client'

import Image from 'next/image'
import PromoTimer from './PromoTimer'
import ScrollReveal from './ScrollReveal'
import BenefitCalculator from './BenefitCalculator'

export default function Pricing() {
  const plans = [
    {
      name: 'Take All',
      price: '$2850',
      monthly: '$119/мес',
      image: '/images/tariffs/take-all.svg',
      features: [
        'Hub for 6 months + easy apply',
        'Check-ups/calls with a coach - 1',
        'Follow Up (correspondence) - no',
        'Outreach (mailings) - 1 Month',
        'Access for 6 months',
        'Curator mail parsing',
        'Strategic session with a mentor',
        'Resume - with verification by a mentor',
        'LinkedIn - session with a mentor',
        'Mock 2 OR 0',
        'Assist Serves 0 or 300 Serves (Assist Week)',
      ],
      popular: false,
    },
    {
      name: 'Take All +',
      price: '$4950',
      monthly: '$206/мес',
      image: '/images/tariffs/take-all-plus.svg',
      features: [
        'Hub for 6 months + easy and long apply',
        'Check-ups/calls with a coach - 6',
        'Follow Up (correspondence) - 2 Months',
        'Outreach (mailings) - 2 Months',
        'Access for 6 months',
        'Curator mail parsing',
        'Strategic session with a mentor',
        'Summary - by mentors',
        'LinkedIn - session with a mentor',
        'Mock 4',
        'Assist serves - 2500',
      ],
      popular: true,
    },
    {
      name: 'VIP',
      price: '$7750',
      monthly: '$322/мес',
      image: '/images/tariffs/vip.svg',
      features: [
        'Check-ups/calls with a coach - 12',
        '+ 12 months (for independent submissions) easy and long apply',
        'Follow Up (correspondence) - 4 Months',
        'Outreach (mailings) - 4 Months',
        'Access for 6 months',
        'Curator mail parsing',
        'Strat session with a mentor',
        'Change of strategy - unlimited',
        'Summary - by mentors',
        'LinkedIn - by the efforts of mentors',
        'Mock 8',
        'Assist serves - 5000',
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-10 md:py-12 border-t border-border relative section-bg-5">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/8 rounded-full blur-3xl animate-float animation-delay-4000" style={{ transform: 'translate(-50%, -50%)' }}></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-3 md:mb-4 tracking-tight">
              <span className="text-foreground">Тарифы и </span>
              <span className="gradient-text">цены</span>
            </h2>
            <p className="text-base md:text-lg text-muted max-w-xl mx-auto font-light mb-2 md:mb-3">
              Выберите план, который подходит именно вам
            </p>
            <p className="text-sm text-muted font-light">
              Доступна рассрочка от $71/месяц. Свяжитесь с нами: friend@go-offer.us
            </p>
          </div>
        </ScrollReveal>

        {/* Промо-таймер с акцией */}
        <ScrollReveal animation="fade-in" delay={200}>
          <div className="max-w-4xl mx-auto mb-8 md:mb-10">
            <PromoTimer />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto mb-8 md:mb-10">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} animation="slide-up" delay={index * 150}>
              <div
                className={`relative rounded-2xl border transition-all duration-500 hover:scale-[1.02] group h-full flex flex-col ${
                plan.popular
                  ? 'border-purple-500/50 backdrop-blur-sm shadow-2xl shadow-purple-500/20 hover:border-purple-400 hover:shadow-purple-500/30 overflow-visible'
                  : 'border-border/50 backdrop-blur-sm hover:border-blue-500/50 hover:shadow-xl overflow-hidden'
              }`}
              style={{ 
                animationDelay: `${index * 0.15}s`,
                background: plan.popular 
                  ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.08) 0%, rgba(126, 34, 206, 0.05) 100%)'
                  : index === 0
                  ? 'linear-gradient(135deg, rgba(37, 99, 235, 0.06) 0%, rgba(8, 145, 178, 0.04) 100%)'
                  : 'linear-gradient(135deg, rgba(219, 39, 119, 0.06) 0%, rgba(124, 58, 237, 0.04) 100%)'
              }}
            >
              {/* Популярный бейдж */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="px-4 py-1 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-light uppercase tracking-wide rounded-full shadow-lg">
                    Популярный
                  </span>
                </div>
              )}

              <div className={`p-5 md:p-6 flex flex-col flex-grow ${plan.popular ? 'pt-7 md:pt-8' : ''}`}>
                {/* Изображение тарифа */}
                <div className="mb-3 md:mb-4 flex justify-center animate-fade-in" style={{ animationDelay: `${index * 0.15 + 0.1}s` }}>
                  <div className={`relative transition-transform duration-500 group-hover:scale-110 ${
                    plan.popular ? 'drop-shadow-[0_0_20px_rgba(147,51,234,0.4)]' : 'drop-shadow-lg'
                  }`} style={{ width: '80px', height: '80px' }}>
                    <Image 
                      src={plan.image} 
                      alt={`${plan.name} тариф`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Заголовок тарифа */}
                <div className="mb-4 md:mb-5 pb-3 md:pb-4 border-b border-border/30">
                  <h3 className={`text-xl md:text-2xl font-light mb-2 md:mb-3 uppercase tracking-wide ${plan.popular ? 'gradient-text' : 'text-foreground'}`}>
                    {plan.name}
                  </h3>
                  
                  {/* Цены */}
                  <div className="mb-2">
                    <span className={`text-3xl md:text-4xl lg:text-5xl font-light tracking-tight ${plan.popular ? 'text-accent' : 'text-foreground'} group-hover:scale-110 transition-transform duration-500 inline-block`}>
                      {plan.monthly.split('/')[0]}
                      <span className="text-lg md:text-xl lg:text-2xl text-muted font-light">/мес</span>
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-muted font-light">
                      или <span className="text-foreground font-normal">{plan.price}</span>
                    </p>
                    <p className="text-xs text-muted font-light">
                      Рассрочка доступна
                    </p>
                  </div>
                </div>

                {/* Список функций */}
                <div className="mb-5 md:mb-6 flex-grow">
                  <h4 className="text-xs font-light uppercase tracking-wide text-foreground mb-3 md:mb-4">
                    Что входит:
                  </h4>
                  <ul className="space-y-2 md:space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start group/item">
                        <span className={`mr-2 text-xs mt-1 flex-shrink-0 ${plan.popular ? 'text-purple-400' : 'text-blue-400'}`}>
                          ✓
                        </span>
                        <span className="text-xs text-muted font-light leading-relaxed group-hover/item:text-foreground transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Кнопка выбора */}
                <div className="mt-auto pt-5 md:pt-6 border-t border-border/30">
                  <a
                    href="https://cal.com/team/go-offer/career-consultation?traffic_source=Website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center border py-2.5 md:py-3 px-4 md:px-5 text-xs font-light transition-all uppercase tracking-wide group/btn relative overflow-hidden ${
                      plan.popular
                        ? 'border-purple-500 text-accent hover:bg-purple-500 hover:border-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-500/50'
                        : 'border-border text-muted hover:text-blue-600 hover:border-blue-500 hover:bg-blue-500/10'
                    }`}
                  >
                    <span className="relative z-10 leading-tight">Подобрать звонок с специалистом</span>
                    {plan.popular && (
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                    )}
                  </a>
                </div>
              </div>

              {/* Декоративные элементы для популярного тарифа */}
              {plan.popular && (
                <>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/8 rounded-full blur-2xl -z-10"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-400/10 rounded-full blur-xl -z-10"></div>
                </>
              )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Интерактивный калькулятор выгоды */}
        <div className="mb-8 md:mb-10">
          <BenefitCalculator />
        </div>

        <div className="text-center border-t border-border pt-8 md:pt-10 mb-8 md:mb-10">
          <p className="text-sm text-muted mb-3 md:mb-4 font-light">
            Нужна помощь с выбором плана или у вас есть вопросы?
          </p>
          <a
            href="mailto:friend@go-offer.us"
            className="text-sm text-foreground hover:underline font-light uppercase tracking-wide"
          >
            Свяжитесь с нами: friend@go-offer.us
          </a>
        </div>

      </div>
    </section>
  )
}
