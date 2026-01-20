'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedStars from '@/components/AnimatedStars'

const CrossIcon = () => (
  <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

export default function PMInterviewSTARPage() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <main className="min-h-screen bg-background relative">
        <AnimatedStars />
        <div className="relative z-20">
          {/* Hero Section */}
          <section className="py-16 md:py-20 border-b border-border">
            <div className="container mx-auto px-6 lg:px-8">
              <ScrollReveal animation="fade-in">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-block text-xs text-purple-500 font-light uppercase tracking-wide">
                        #STARкейсы
                      </span>
                      <span className="inline-block text-xs text-blue-500 font-light uppercase tracking-wide">
                        #ProductManagerInterviews
                      </span>
                      <span className="inline-block text-xs text-cyan-500 font-light uppercase tracking-wide">
                        #USJobSearch
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                      <span className="text-foreground">Product Manager Interview USA: </span>
                      <span className="gradient-text">Как отвечать на вопрос о disagreement с engineers</span>
                    </h1>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <ScrollReveal animation="fade-in" delay={200}>
                  <div className="space-y-8 text-foreground/85 font-light leading-relaxed">
                    <p className="text-base md:text-lg">
                      👋 Привет! На связи Полина, career mentor в Go Offer со специализацией на PM roles.
                    </p>
                    <p className="text-base md:text-lg">
                      Один из самых challenging вопросов для Product Manager interview в США звучит так:
                    </p>
                    <div className="bg-background/50 rounded-xl p-6 md:p-8 border border-purple-500/30 backdrop-blur-sm">
                      <p className="text-xl md:text-2xl font-medium text-foreground italic">
                        &quot;Tell me about a time when you disagreed with engineers on a technical decision.&quot;
                      </p>
                    </div>
                    <p className="text-base md:text-lg">
                      Именно на нём «сыпятся» даже опытные кандидаты с strong background в product management.
                    </p>
                    <p className="text-base md:text-lg">
                      Этот вопрос проверяет критически важные PM competencies:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-base md:text-lg">
                      <li>Cross-functional collaboration</li>
                      <li>Technical judgment</li>
                      <li>Stakeholder management</li>
                      <li>Data-driven decision making</li>
                      <li>Leadership без formal authority</li>
                    </ul>

                    {/* Weak Answer Section */}
                    <div className="bg-rose-500/10 rounded-xl p-6 md:p-8 border border-rose-500/30 backdrop-blur-sm">
                      <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4 flex items-center gap-2">
                        <CrossIcon />
                        <span>Типичный weak answer, который снижает шансы на job offer</span>
                      </h2>
                      <p className="text-base md:text-lg mb-4">
                        Вот реальный ответ кандидата на PM interview:
                      </p>
                      <div className="bg-background/50 rounded-lg p-4 mb-4 border border-rose-500/20">
                        <p className="text-base md:text-lg italic">
                          &quot;Engineers wanted to migrate to microservices. I thought it was a bad idea because it would take too long. I insisted we keep the monolith, we shipped the product faster — which was important for the business.&quot;
                        </p>
                      </div>
                      <p className="text-base md:text-lg mb-4">
                        На первый взгляд звучит reasonable.
                      </p>
                      <p className="text-base md:text-lg mb-4">
                        Но для американского hiring manager здесь immediate red flags 🚩:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <CrossIcon />
                          <span>Lack of collaboration — PM звучит как человек, который dismissed engineering concerns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CrossIcon />
                          <span>No data-driven approach — только opinion, нет metrics или analysis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CrossIcon />
                          <span>&quot;Me vs them&quot; mentality — отсутствие team player attitude</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CrossIcon />
                          <span>Decision made in vacuum — нет evidence of stakeholder alignment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CrossIcon />
                          <span>Missing business context — не articulated actual business impact</span>
                        </li>
                      </ul>
                      <p className="text-base md:text-lg mt-4">
                        И рекрутер думает не про business results: &quot;This PM would create friction in the team. Not a culture fit.&quot;
                      </p>
                      <p className="text-base md:text-lg font-medium mt-4">
                        Result: Даже при strong technical background — это no hire или weak hire signal.
                      </p>
                    </div>

                    {/* Strong Answer Section */}
                    <div className="bg-emerald-500/10 rounded-xl p-6 md:p-8 border border-emerald-500/30 backdrop-blur-sm">
                      <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6">
                        А теперь — та же история, но в версии, которая продаёт кандидата, а не пугает.
                      </h2>
                      <p className="text-base md:text-lg mb-6">
                        ⬇️Доработанный STAR-кейс
                      </p>

                      {/* STAR Breakdown */}
                      <div className="space-y-6">
                        <div className="bg-background/50 rounded-lg p-4 border border-emerald-500/20">
                          <h3 className="text-lg font-medium text-emerald-400 mb-2">🔵S — Situation</h3>
                          <p className="text-base md:text-lg">
                            «В финтех-стартапе мы выросли с 10K до 100K транзакций в день за 6 месяцев. Rails-монолит начал замедляться в часы пик. Инженерная команда предложила 4-месячную миграцию на микросервисы, чтобы решить проблему масштабирования».
                          </p>
                        </div>

                        <div className="bg-background/50 rounded-lg p-4 border border-emerald-500/20">
                          <h3 className="text-lg font-medium text-emerald-400 mb-2">🔵T — Task</h3>
                          <p className="text-base md:text-lg">
                            «Как PM, мне нужно было принять решение: идти в долгую техническую миграцию или выполнить дорожную карту Q4 с критичными фичами для корпоративного клиента с контрактом на $2M в год».
                          </p>
                        </div>

                        <div className="bg-background/50 rounded-lg p-4 border border-emerald-500/20">
                          <h3 className="text-lg font-medium text-emerald-400 mb-2">🔵A — Actions</h3>
                          <p className="text-base md:text-lg mb-3">
                            «Вместо того чтобы сразу сказать &quot;нет&quot;, я начал с совместного разбора:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                            <li>попросил показать реальные узкие места (80% замедлений шли от одного отчёта в БД);</li>
                            <li>уточнил прогноз масштабирования (критическая точка — ~300K транзакций, через ~9 месяцев);</li>
                            <li>обсудил бизнес-риски потери клиента при срыве сроков.</li>
                          </ul>
                          <p className="text-base md:text-lg mb-3">
                            Мы вместе нашли компромисс:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                            <li>краткосрочно: оптимизация БД + кэширование (2 недели);</li>
                            <li>среднесрочно: вынесли отчётность в отдельный микросервис;</li>
                            <li>долгосрочно: вернулись к вопросу полной миграции с реальными данными.</li>
                          </ul>
                          <p className="text-base md:text-lg">
                            Важно: финальный план презентовал техлид — это было общее решение, а не &quot;приказ PM&quot;.»
                          </p>
                        </div>

                        <div className="bg-background/50 rounded-lg p-4 border border-emerald-500/20">
                          <h3 className="text-lg font-medium text-emerald-400 mb-2">🔵R — Result</h3>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>замедления снизились на 75% за 2 недели</li>
                            <li>ключевые фичи выпустили вовремя → сделка сохранена</li>
                            <li>архитектура масштабируется до 500K транзакций без полной миграции</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-background/50 rounded-lg border border-emerald-500/20">
                        <h3 className="text-lg font-medium text-foreground mb-2">🎯 Ключевой вывод для интервью:</h3>
                        <p className="text-base md:text-lg mb-3">
                          Разногласия с инженерами — это не про «кто победил».
                        </p>
                        <p className="text-base md:text-lg mb-3">
                          Это про способность:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>понять технические риски,</li>
                          <li>добавить бизнес-контекст,</li>
                          <li>найти решение, которое работает для обеих сторон.</li>
                        </ul>
                        <p className="text-base md:text-lg mt-3">
                          Именно такие ответы рекрутеры помечают как strong signal.
                        </p>
                      </div>
                    </div>

                    {/* Key Takeaways */}
                    <div className="bg-blue-500/10 rounded-xl p-6 md:p-8 border border-blue-500/30 backdrop-blur-sm">
                      <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4">
                        Американские hiring managers ищут:
                      </h2>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Evidence of partnership with engineering, не command-and-control</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Structured thinking и problem-solving approach</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Ability to articulate technical concepts (даже если вы не engineer)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Business impact focus with metrics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Team player mentality в cross-functional environment</span>
                        </li>
                      </ul>
                    </div>

                    {/* CTA Section */}
                    <div className="my-12 p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl">
                      <h3 className="text-2xl font-light text-foreground mb-4">
                        Готовишься к Product Manager interview в США?
                      </h3>
                      <p className="text-base md:text-lg mb-6">
                        Если ты в поиске и чувствуешь, что опыт есть, а оффера нет — на консультации мы смотрим не на ответы, а на стратегию поиска целиком: позиционирование, рынок и точки, где теряется конверсия.
                      </p>
                      <a
                        href="https://cal.com/team/go-offer/career-consultation?utm_source=website&utm_campaign=blog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
                      >
                        <span>Записаться на бесплатную career consultation</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
