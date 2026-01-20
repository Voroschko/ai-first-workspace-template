'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ScrollReveal from '@/components/ScrollReveal'
import AnimatedStars from '@/components/AnimatedStars'

export default function JobSearchUSA2026Page() {
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
                      <span className="text-foreground">Поиск работы в США стал сложнее: </span>
                      <span className="gradient-text">реальная картина рынка труда 2025-2026</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted font-light leading-relaxed">
                      …и почему привычные методы поиска работы в Америке перестали давать результат
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="max-w-4xl mx-auto prose prose-invert">
                <ScrollReveal animation="fade-in" delay={200}>
                  <div className="space-y-6 text-foreground/85 font-light leading-relaxed">
                    <p className="text-base md:text-lg">
                      Рынок труда в США для IT-специалистов, Digital-маркетологов и профессионалов EdTech изменился кардинально. Если вы живете в Штатах с H1B визой, Green Card или EAD и отправляете десятки резюме без ответа – вы не одиноки.
                    </p>
                    <p className="text-base md:text-lg">
                      Рассказываем, что реально происходит с поиском работы в США в 2026 году и почему так сложно найти работу в Америке даже с разрешением на работу.
                    </p>
                    <p className="text-base md:text-lg">
                      В новом видео разбираем актуальную ситуацию на американском рынке труда:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-base md:text-lg">
                      <li>от 500 до 6000 кандидатов на одну вакансию: почему шансы упали в разы</li>
                      <li>как ATS и AI-фильтры отсеивают до 75% резюме</li>
                      <li>почему LinkedIn и Indeed стали жёстче</li>
                      <li>ghost jobs и тишина после откликов</li>
                      <li>где рынок сжимается, а где, наоборот, есть рост</li>
                      <li>и что мы в Go Offer сделали, чтобы наши менти продолжали получать офферы</li>
                    </ul>
                    <p className="text-base md:text-lg">
                      С реальными цифрами, экспериментами и кейсами изнутри американского job market.
                    </p>
                    <p className="text-base md:text-lg">
                      Если вы легально работаете в США и чувствуете, что делаете всё правильно — оптимизировали LinkedIn профиль, персонализируете cover letters, ходите на networking events — но job offers нет, это видео закроет многие вопросы.
                    </p>
                    <div className="my-8 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl">
                      <p className="text-lg font-medium text-foreground mb-4">
                        Смотреть видео ➡️
                      </p>
                      <a
                        href="https://youtu.be/GkmniVezNCw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <span>https://youtu.be/GkmniVezNCw</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    <p className="text-base md:text-lg">
                      А в конце видео найдете конкретные action steps, если хотите сдвинуться с места в поиске работы в Штатах 🤫
                    </p>
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
