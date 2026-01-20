'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedStars from '@/components/AnimatedStars'

const StepBadge = ({ value }: { value: string }) => (
  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-purple-500/50 bg-purple-500/20 text-sm font-medium text-foreground">
    {value}
  </span>
)

const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

export default function HowToFindJobUSAPage() {
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
                    <span className="inline-block text-xs text-purple-500 font-light uppercase tracking-wide mb-4">
                      #секретыоффера
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                      <span className="text-foreground">Эффективная стратегия поиска работы в США: </span>
                      <span className="gradient-text">что делать, когда job search выматывает, а оффера нет</span>
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
                      Искать работу в Штатах – это то еще испытание, правда? 😅
                    </p>
                    <p className="text-base md:text-lg">
                      Откликаешься-откликаешься, а результата нет. А под конец года так и вовсе руки опускаются. В такие моменты важно не «больше стараться», а выстроить правильную стратегию поиска.
                    </p>
                    <p className="text-base md:text-lg">
                      Вот как мы работаем в Go Offer 😎👇
                    </p>

                    {/* Step 1 */}
                    <div className="bg-background/50 rounded-xl p-6 md:p-8 border border-border/50 backdrop-blur-sm">
                      <div className="flex items-start gap-4 mb-4">
                        <StepBadge value="1️⃣" />
                        <h2 className="text-2xl md:text-3xl font-light text-foreground">Стратегия</h2>
                      </div>
                      <p className="text-base md:text-lg ml-12">
                        Начинаем со сканирования твоей ситуации: опыт, цели, достижения/неудачи, рынок. На этом этапе становится понятно, какая стратегия подойдёт именно тебе. Ведь каждый случай уникален.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-background/50 rounded-xl p-6 md:p-8 border border-border/50 backdrop-blur-sm">
                      <div className="flex items-start gap-4 mb-4">
                        <StepBadge value="2️⃣" />
                        <h2 className="text-2xl md:text-3xl font-light text-foreground">Упаковка опыта</h2>
                      </div>
                      <p className="text-base md:text-lg ml-12 mb-4">
                        Мы упаковываем твой опыт так, чтобы его заметили компании в США. Так, чтобы ATS тебя не отсеял, а рекрутер сразу понял, что искал именно тебя.
                      </p>
                      <p className="text-base md:text-lg ml-12 mb-4">
                        Адаптируем твой профессиональный опыт под ожидания US employers:
                      </p>
                      <ul className="space-y-2 ml-12">
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>ATS-friendly resume — проходит автоматические фильтры Applicant Tracking Systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>US resume format — структура, keywords, quantifiable achievements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>LinkedIn profile optimization — headline, about section, experience с правильными keywords</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Cover letter templates — персонализированные под разные роли и компании</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>GitHub/Portfolio – презентация для tech positions</span>
                        </li>
                      </ul>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-background/50 rounded-xl p-6 md:p-8 border border-border/50 backdrop-blur-sm">
                      <div className="flex items-start gap-4 mb-4">
                        <StepBadge value="3️⃣" />
                        <h2 className="text-2xl md:text-3xl font-light text-foreground">Автоматизация</h2>
                      </div>
                      <p className="text-base md:text-lg ml-12 mb-4">
                        Один отклик в день не работает. Мы подключаем AI-инструменты и автоматизацию, чтобы масштабировать поиск без выгорания и ручной рутины. Ну согласись, сделать 500 разных резюме и разослать их самому — это нереально 🤯
                      </p>
                      <ul className="space-y-2 ml-12">
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400">📌</span>
                          <span>AI-powered resume customization — адаптация резюме под каждую вакансию</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400">📌</span>
                          <span>Automated job application tools — легальная автоматизация для масштаба</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400">📌</span>
                          <span>Job search platforms optimization — LinkedIn, Indeed, Glassdoor, AngelList</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400">📌</span>
                          <span>Company research automation — быстрый анализ potential employers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-purple-400">📌</span>
                          <span>Email outreach templates — для direct applications и networking</span>
                        </li>
                      </ul>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-background/50 rounded-xl p-6 md:p-8 border border-border/50 backdrop-blur-sm">
                      <div className="flex items-start gap-4 mb-4">
                        <StepBadge value="4️⃣" />
                        <h2 className="text-2xl md:text-3xl font-light text-foreground">Подготовка к интервью</h2>
                      </div>
                      <p className="text-base md:text-lg ml-12 mb-4">
                        Когда появляются звонки, важно быть к ним готовым. Мы работаем с реальными вопросами, сценариями и тренируем ответы, чтобы ты не шёл на интервью вслепую.
                      </p>
                      <p className="text-base md:text-lg ml-12 mb-4">
                        Когда появляются звонки от US recruiters, важно говорить на их языке:
                      </p>
                      <ul className="space-y-2 ml-12">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400">🎯</span>
                          <span>Behavioral interviews — метод STAR (Situation, Task, Action, Result)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400">🎯</span>
                          <span>Technical interviews — coding challenges, system design для IT roles</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400">🎯</span>
                          <span>Cultural fit assessment — понимание US workplace culture</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400">🎯</span>
                          <span>Salary negotiation in USA — как обсуждать compensation package</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400">🎯</span>
                          <span>Mock interviews — практика с реальными вопросами от FAANG и startups</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-400">🎯</span>
                          <span>Virtual interview best practices — освещение, background, communication</span>
                        </li>
                      </ul>
                    </div>

                    {/* Step 5 */}
                    <div className="bg-background/50 rounded-xl p-6 md:p-8 border border-border/50 backdrop-blur-sm">
                      <div className="flex items-start gap-4 mb-4">
                        <StepBadge value="5️⃣" />
                        <h2 className="text-2xl md:text-3xl font-light text-foreground">Поддержка до результата</h2>
                      </div>
                      <p className="text-base md:text-lg ml-12">
                        Ты не остаёшься один. За тобой команда, менторы и сопровождение на всём пути до оффера.
                      </p>
                      <p className="text-base md:text-lg ml-12 mt-4">
                        Вот так, кирпичик за кирпичиком, мы выстраиваем тебе путь в компанию мечты 🧩
                      </p>
                    </div>

                    {/* CTA Section */}
                    <div className="my-12 p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl">
                      <h3 className="text-2xl font-light text-foreground mb-4">
                        Готовы начать эффективный поиск работы в США? 🤔
                      </h3>
                      <p className="text-base md:text-lg mb-6">
                        Запишитесь на бесплатную карьерную консультацию с экспертом Go Offer!
                      </p>
                      <p className="text-sm text-muted mb-6">
                        📌 За одну career consultation session вы:
                      </p>
                      <ul className="space-y-2 mb-6 ml-4">
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Проанализируете текущую job search strategy и найдете bottlenecks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Получите feedback на ваше resume и LinkedIn profile</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Поймете, где теряются opportunities — в applications, interviews или networking</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Разработаете actionable plan под специфику US job market и вашего immigration status</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckIcon />
                          <span>Узнаете realistic timeline до первого job offer</span>
                        </li>
                      </ul>
                      <p className="text-sm text-muted mb-4">
                        Количество бесплатных консультаций ограничено.
                      </p>
                      <a
                        href="https://cal.com/team/go-offer/career-consultation?utm_source=website&utm_campaign=blog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
                      >
                        <span>Забронировать career consultation</span>
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
