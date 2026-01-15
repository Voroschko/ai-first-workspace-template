'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: 'Кому подходит Go Offer?',
      answer: 'Go Offer подходит специалистам, которые уже находятся в США или легально могут здесь работать и хотят ускорить поиск работы. Чаще всего к нам приходят IT-специалисты, аналитики, продакт- и проект-менеджеры, маркетологи и другие knowledge workers. Если у тебя есть релевантный опыт, но поиск буксует, мало откликов, нет интервью или ты застрял на одном из этапов, мы поможем выстроить стратегию и масштабировать воронку. Важно, что мы не обещаем «волшебную кнопку», а работаем вместе с тобой: ты вкладываешься временем и энергией, мы даем систему, инструменты и поддержку.',
    },
    {
      question: 'Чем вы отличаетесь от карьерного коуча или курсов по резюме?',
      answer: 'Классический карьерный коуч дает советы и периодически встречается с клиентом, а курсы по резюме ограничиваются разбором одного документа. Go Offer - это экосистема, где под одной «крышей» есть стратегия, доработка резюме и LinkedIn, массовые подачи, аутрич рекрутерам, мок-интервью, поддержка психолога и помощь с торгом за оффер. Мы берем на себя не только консультации, но и значительную часть операционки: анализ вакансий, настройку инструментов, аналитку воронки. В итоге ты получаешь не разовый продукт, а работающую систему поиска работы, к которой можно вернуться при следующем карьерном повороте.',
    },
    {
      question: 'Сколько времени обычно занимает выход на оффер?',
      answer: 'Срок сильно зависит от твоего уровня, ниши и текущей ситуации на рынке. По нашей статистике, около 40% клиентов получают оффер за первые 2 месяца активного поиска, около 70% - в течение 4 месяцев, и большинство, кто соблюдает план и поддерживает нужный уровень активности, выходит на новый оффер за 6 месяцев. Наша задача - максимально сократить период неопределенности за счет увеличения количества релевантных подач, грамотной работы с рекрутерами и подготовки к интервью. Мы не можем гарантировать конкретную дату оффера, но можем показать, как каждый шаг влияет на воронку и результат.',
    },
    {
      question: 'Что такое массовые подачи и почему это важно?',
      answer: 'Массовые подачи - это системный поток релевантных откликов на вакансии, когда каждый день уходят десятки заявок в нужные компании. При конкуренции в сотни и тысячи кандидатов на позицию, единичные отклики не дают стабильного результата. Мы помогаем настроить автоаппликацию и умные фильтры, чтобы масштабировать количество подач без потери качества. Параллельно мы отслеживаем конверсии, корректируем стратегию и не даем воронке «заглохнуть». В результате ты получаешь больше шансов попасть в нужные процессы и быстрее доходишь до оффера.',
    },
    {
      question: 'Вы работаете только с IT-специалистами?',
      answer: 'Основная часть наших клиентов - из IT и смежных сфер: разработка, DevOps, аналитика, продукт, проектное управление, дизайн, маркетинг. Но мы также работаем с профессионалами из других направлений, если их компетенции могут быть востребованы на рынке США и есть понятная стратегия. На диагностическом созвоне мы честно оцениваем, насколько кейс жизнеспособен, какие есть риски и ожидания по срокам. Если мы не видим шансов дать адекватный результат, мы об этом прямо говорим.',
    },
    {
      question: 'Можно ли совмещать программу с full-time работой?',
      answer: 'Да, большинство наших клиентов совмещает участие в программе с текущей занятостью. Мы выстраиваем процессы так, чтобы основная часть рутины была автоматизирована или делегирована ассистентам. От тебя нужны регулярные слоты времени на модули, созвоны и подготовку к интервью. На старте мы помогаем спланировать нагрузку и выбрать комфортный темп, чтобы не выгореть и не бросить поиск работы на полпути.',
    },
    {
      question: 'Как устроено взаимодействие с командой Go Offer?',
      answer: 'После онбординга у тебя появляется понятная дорожная карта: какие шаги мы делаем в ближайшие недели и как будем мерить прогресс. С тобой работают сразу несколько специалистов: карьерный стратег, рекрутер(ы), ассистенты по подачам, менторы по интервью. Часть коммуникации идет в удобных тебе мессенджерах и внутри платформы, часть - на созвонах. Мы регулярно обновляем аналитику по воронке и вместе корректируем стратегию, если рынок или твои приоритеты меняются.',
    },
    {
      question: 'Есть ли гарантия оффера?',
      answer: 'Мы не даем гарантию результата в формате «стопроцентный оффер за N дней» - это было бы нечестно по отношению к клиентам. На что мы действительно можем опираться - это четко выстроенный процесс, масштаб воронки, системная работа с откликами и поддержка на каждом этапе. В договоре прописаны прозрачные условия, в каких случаях мы можем вернуть деньги и какие критерии активности ожидаем от клиента. Это делает сотрудничество понятным и безопасным для обеих сторон.',
    },
    {
      question: 'Можно ли оплачивать в рассрочку или частями?',
      answer: 'Да, для части продуктов доступна гибкая система оплаты и рассрочки через партнеров и внутренние планы. Мы понимаем, что поиск работы - финансово чувствительная тема, поэтому стараемся сделать вход в программу комфортнее. При этом структура платежей прозрачна: ты заранее знаешь, сколько и когда платишь, при каких условиях начисляется success fee и что происходит, если оффер не получен. Подробности обсуждаем индивидуально после оценки кейса.',
    },
    {
      question: 'Как понять, подойдет ли мне Go Offer?',
      answer: 'Лучший способ - прийти на бесплатный диагностический созвон. На нем мы внимательно разбираем твою ситуацию: опыт, цели, текущие попытки поиска, визовую историю, ограничения по локации и семейным обстоятельствам. Если видим, что можем помочь - предлагаем варианты работы и честно проговариваем риски, сроки и ожидания. Если нет - так и говорим, без навязчивых продаж. Наша репутация важнее, чем «продать любой ценой», поэтому мы беремся за те кейсы, где действительно можем добавить ценность.',
    },
  ]

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-20 border-t border-border relative section-bg-2">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-in">
          <div className="text-center mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 tracking-tight">
              <span className="text-foreground">Часто задаваемые </span>
              <span className="gradient-text">вопросы</span>
            </h2>
            <p className="text-base md:text-lg text-muted max-w-2xl mx-auto font-light">
              Ответы на самые популярные вопросы о Go Offer
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} animation="fade-in" delay={index * 30}>
              <div className={`border-l-2 ${
                index % 2 === 0 
                  ? 'border-purple-500/50 bg-purple-500/5' 
                  : 'border-blue-500/50 bg-blue-500/5'
              } rounded-r-lg pl-4 md:pl-5 pr-3 md:pr-4 py-3 md:py-4 group hover:border-opacity-100 transition-all duration-300`}>
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left flex items-start justify-between gap-3 md:gap-4"
                  aria-expanded={openIndex === index}
                >
                  <h3 className={`text-sm md:text-base font-light flex-1 transition-colors ${
                    index % 2 === 0 ? 'text-foreground group-hover:text-purple-600' : 'text-foreground group-hover:text-blue-600'
                  }`}>
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 mt-1 transition-transform duration-300 ${
                      index % 2 === 0 ? 'text-purple-400' : 'text-blue-400'
                    } ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[1000px] opacity-100 mt-3 md:mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-xs md:text-sm text-muted font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in" delay={750}>
          <div className="text-center mt-12 md:mt-16">
            <p className="text-sm md:text-base text-muted mb-4 md:mb-6">
              Не нашли ответ на свой вопрос?
            </p>
            <a
              href="https://cal.com/team/go-offer/career-consultation?traffic_source=Website"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-500 px-8 md:px-10 py-3 md:py-4 text-xs md:text-sm font-light text-accent hover:bg-purple-500 hover:border-purple-600 hover:text-white transition-all uppercase tracking-wide hover-purple-glow inline-block group relative overflow-hidden"
            >
              <span className="relative z-10">Записаться на консультацию</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

