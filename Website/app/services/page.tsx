'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ServiceCard from '@/components/ServiceCard'
import AnimatedStars from '@/components/AnimatedStars'
import StructuredData from '@/components/StructuredData'
import Reviews from '@/components/Reviews'

export default function ServicesPage() {
  const services = [
    {
      title: 'Карьерная стратегия',
      icon: '🎯',
      description: 'Разработка карьерной стратегии с учетом твоих целей и рыночной реальности',
      module: 'Модуль 0-1: Стратегический фундамент',
      fullDescription:
        'Онбординг в систему, разработка персональной карьерной стратегии с ментором, анализ твоего опыта и целей. Регулярные чекапы и корректировка тактики в режиме реального времени. Мы не следуем жесткому плану — мы адаптируемся под твой опыт, цели и возможности с учетом текущих реалий рынка.',
      features: [
        'Стратегический фундамент (Модуль 0-1)',
        'Анализ опыта и целей',
        'Разработка персональной стратегии',
        'Регулярные чекапы и корректировка',
        'Ежемесячная корректировка стратегии на основе реальной обратной связи от рынка',
      ],
      notionLink: 'https://www.notion.so/Go-Offer-101329f89df280e9aff7cef0f0d8c439',
    },
    {
      title: 'Оптимизация резюме',
      icon: '📄',
      description: 'Профессиональная оптимизация резюме. Создание продающего резюме, которое проходит ATS-фильтры',
      module: 'Модуль 2-3: Профессиональная упаковка',
      fullDescription:
        'Ментор делает основную работу, ты согласовываешь и дорабатываешь под его руководством. Персонализация на автопилоте — AI адаптирует твое резюме под каждую вакансию, выделяя именно те навыки и достижения, которые ищет конкретный работодатель. Создание ATS-friendly резюме, которое проходит фильтры и привлекает внимание топовых компаний.',
      features: [
        'Профессиональная упаковка (Модуль 2-3)',
        'Создание ATS-friendly резюме',
        'Персонализация на автопилоте — AI адаптирует резюме под каждую вакансию',
        'Верификация ментором',
        'Оптимизация для прохождения фильтров',
      ],
      notionLink: 'https://www.notion.so/Go-Offer-101329f89df280e2be0dfcbf5d89ae8f',
    },
    {
      title: 'Профессиональная оптимизация LinkedIn',
      icon: '💼',
      description: 'Оптимизация LinkedIn профиля для повышения видимости. Обучение эффективному нетворкингу с рекрутерами',
      module: 'Модуль 2-3: Профессиональная упаковка',
      fullDescription:
        'Оптимизация профиля для повышения видимости и открытия новых возможностей. Обучение эффективному нетворкингу с рекрутерами в LinkedIn. Сессия с ментором для трансформации твоего LinkedIn присутствия. Расширение сети и построение значимых связей, которые ускоряют твою карьеру.',
      features: [
        'Оптимизация профиля',
        'Обучение нетворкингу',
        'Повышение видимости',
        'Сессия с ментором',
        'Расширение профессиональной сети',
      ],
      notionLink: 'https://www.notion.so/Go-Offer-LinkedIn-101329f89df280599bd8d5e12020819c',
    },
    {
      title: 'AI-powered автоматизация поиска работы',
      icon: '🤖',
      description: 'Автоматизация поиска и подачи заявок с помощью AI-инструментов. Экономия 20+ часов в неделю',
      module: 'Модуль 4: Запуск боевой машины',
      fullDescription:
        'Настройка автоматизации подач, онбординг в Go Offer HUB. Автоматизированные боты делают от 50 подач в день, пока ты занимаешься подготовкой к интервью. Аналитика рынка в реальном времени — ежедневная статистика по подачам, общему числу вакансий и релевантным предложениям дает четкое понимание рынка. Масштаб, недоступный человеку — ты не выбираешь между количеством и качеством, ты получаешь оба.',
      features: [
        'Настройка автоматизации подач (Модуль 4)',
        'Онбординг в Go Offer HUB',
        'Автоматизированные боты делают от 50 подач в день',
        'Аналитика рынка в реальном времени',
        'Ежедневная статистика по подачам',
        'Экономия 20+ часов в неделю',
      ],
      notionLink: 'https://www.notion.so/Go-Offer-AI-powered-6d29a5d5af114958af26c306b3bc82da',
    },
    {
      title: 'Помощь с массовой подачей заявок',
      icon: '📊',
      description: 'Масштаб, недоступный человеку. На тарифах ТА+ и VIP подачи делают ассистенты',
      fullDescription:
        'Минимум 20 подач в день, до 50 подач в день с автоматизацией. На тарифах ТА+ и VIP подачи делают ассистенты. Таргетированная подача с учетом твоих навыков и целей. Ты не выбираешь между количеством и качеством — ты получаешь оба.',
      features: [
        'Минимум 20 подач в день',
        'До 50 подач в день с автоматизацией',
        'Ассистенты на тарифах ТА+ и VIP',
        'Таргетированная подача',
        'Персонализация каждой заявки',
      ],
      notionLink: 'https://www.notion.so/Go-Offer-101329f89df2806e9cc2f56a9ab35549',
    },
    {
      title: 'Подготовка к скринингам и интервью',
      icon: '🎤',
      description: 'Системная подготовка к скринингам и интервью. Обучение общению с рекрутерами',
      module: 'Модуль 5-7: Мастерство интервью',
      fullDescription:
        'Подготовка self-pitch, отработка ответов на сложные вопросы на воркшопах. Еженедельные воркшопы по методу STAR. Разбор каждого интервью с AI-точностью — записываешь свои собеседования, а мы анализируем через AI и даем детальный фидбек: что сработало, где споткнулся, какие моменты нужно усилить перед следующим раундом. Обучение общению с рекрутерами для уверенного прохождения всех этапов.',
      features: [
        'Обучение общению с рекрутерами',
        'Подготовка self-pitch',
        'Отработка ответов на сложные вопросы',
        'Еженедельные воркшопы по методу STAR',
        'Разбор каждого интервью с AI-точностью',
        'Детальный фидбек и рекомендации',
      ],
      notionLink: 'https://www.notion.so/Go-Offer-45f0e60901954de588647d3d80e0bdf5',
    },
    {
      title: 'Мок-интервью',
      icon: '🎭',
      description: 'Практика интервью с экспертами для уверенного прохождения собеседований',
      module: 'Модуль 5-7: Мастерство интервью',
      fullDescription:
        '2+ мок-интервью с ментором (в зависимости от тарифа). Запись и анализ интервью. База интервью и разбор твоих интервью — записываем, анализируем, даем конкретные рекомендации по улучшению. Ты можешь учиться на чужих ошибках, видишь свои слепые зоны и закрываешь их до следующего собеседования. Практика с экспертами, специализирующимися на behavioral, technical и personal fit интервью.',
      features: [
        '2+ мок-интервью с ментором (в зависимости от тарифа)',
        'Запись и анализ интервью',
        'Конкретные рекомендации по улучшению',
        'База интервью для обучения',
        'Практика с экспертами',
        'Работа со слепыми зонами',
      ],
      notionLink: 'https://www.notion.so/Go-Offer-2a9329f89df280258a18fac4ec25c81e',
    },
    {
      title: 'Торги за оффер',
      icon: '💵',
      description: 'Техники переговоров для максимизации оффера. Оффер на ~28.4% выше среднего по рынку',
      module: 'Модуль 8-10: Финальная подготовка',
      fullDescription:
        'Техники переговоров по зарплате, стратегии работы с несколькими офферами, подготовка к выходу на новую позицию. Наши техники переговоров работают, когда ты уже получил предложение. Оффер на ~28.4% выше среднего по рынку — это не обещания, это результат наших выпускников.',
      features: [
        'Техники переговоров по зарплате',
        'Стратегии работы с несколькими офферами',
        'Оффер на ~28.4% выше среднего по рынку',
        'Подготовка к выходу на новую позицию',
        'Экспертное руководство по переговорам',
      ],
      notionLink: 'https://www.notion.so/Go-Offer-101329f89df280bc9c10f1dbca1bbe7d',
    },
    {
      title: 'Сессия с карьерным психологом',
      icon: '🧠',
      description: 'Поддержка на всех этапах поиска работы. Работа с мотивацией и уверенностью',
      fullDescription:
        'Работа с мотивацией, преодоление выгорания, уверенность в себе, психологическая поддержка. Помогаем оставаться уверенными и профессионально восстанавливаться после неудач. Поддержка на всех этапах поиска работы для поддержания мотивации и уверенности.',
      features: [
        'Работа с мотивацией',
        'Преодоление выгорания',
        'Уверенность в себе',
        'Психологическая поддержка',
        'Восстановление после неудач',
      ],
      notionLink: 'https://www.notion.so/Go-Offer-51f0607d45724c4597ecd03b7d3fe890',
    },
    {
      title: 'Поиск работы под ключ',
      icon: '🚀',
      description: 'Полный комплекс услуг — все вышеперечисленное в одном пакете',
      fullDescription:
        'Полный комплекс услуг — все вышеперечисленное в одном пакете. Команда экспертов работает 6 месяцев подряд. Личный куратор отслеживает твой прогресс ежедневно. Прямой доступ к менторам в рабочем чате. Регулярные чекапы и ежедневные отчеты. Это не курс — это партнерство, которое работает на твой результат.',
      features: [
        'Все услуги из списка',
        'Команда экспертов работает 6 месяцев',
        'Личный куратор',
        'Прямой доступ к менторам',
        'Регулярные чекапы',
        'Ежедневные отчеты',
        'Полная поддержка на всех этапах',
      ],
      notionLink: 'https://www.notion.so/Go-Offer-102329f89df280a58707d3388dd811b4',
    },
  ]

  const methodItems = [
    {
      title: 'Automation',
      description: 'Leverage AI-powered tools to streamline your job search. Save time and master strategies for lasting success.',
    },
    {
      title: 'Networking',
      description: 'Expand your network and build meaningful connections that accelerate your career. Gain support, motivation, and referrals.',
    },
    {
      title: 'Community',
      description: 'Join a supportive community to exchange insights, find motivation, and connect with like-minded professionals.',
    },
    {
      title: 'Expert Guidance',
      description: 'Access proven strategies from successful job seekers. Get tailored solutions to overcome hidden challenges.',
    },
  ]

  const companies = [
    'TikTok',
    'Microsoft',
    'Meta',
    'Amazon',
    'Capital One',
    'Walt Disney',
    'Sony',
    'EPAM',
    'Google',
    'OpenAI',
  ]

  return (
    <>
      <StructuredData />
      <Reviews />
      <main className="relative">
        <AnimatedStars />
        <div className="relative z-10">
          <Header />
          <Breadcrumbs />

      {/* Main Services - Expandable Cards */}
      <section className="py-10 border-t border-border relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight animate-fade-in">
              <span className="text-foreground">Все услуги </span>
              <span className="gradient-text">Go Offer</span>
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Кликните на любую услугу, чтобы развернуть и прочитать детальную информацию
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                icon={service.icon}
                description={service.description}
                module={service.module}
                fullDescription={service.fullDescription}
                features={service.features}
                notionLink={service.notionLink}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Program Modules */}
      <section className="py-10 border-t border-border relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight animate-fade-in">
              <span className="text-foreground">Программа обучения: от </span>
              <span className="gradient-text">стратегии до оффера</span>
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Структурированный путь к успеху за 6 месяцев
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-accent mb-3">
                Модуль 0-1: Стратегический фундамент
              </h3>
              <p className="text-muted">
                Онбординг в систему, разработка персональной карьерной стратегии с ментором, анализ твоего опыта и целей.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-accent mb-3">
                Модуль 2-3: Профессиональная упаковка
              </h3>
              <p className="text-muted">
                Создание продающего резюме и оптимизация LinkedIn профиля. Ментор делает основную работу, ты согласовываешь и дорабатываешь под его руководством.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-accent mb-3">
                Модуль 4: Запуск боевой машины
              </h3>
              <p className="text-muted">
                Настройка автоматизации подач, онбординг в Go Offer HUB. Старт активных подач — минимум 20 в день. На тарифах ТА+ и VIP подачи делают ассистенты.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-accent mb-3">
                Модуль 5-7: Мастерство интервью
              </h3>
              <p className="text-muted">
                Обучение общению с рекрутерами, подготовка self-pitch, отработка ответов на сложные вопросы на воркшопах. Включает 2+ мок-интервью с ментором (в зависимости от тарифа).
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-accent mb-3">
                Модуль 8-10: Финальная подготовка
              </h3>
              <p className="text-muted">
                Техники переговоров по зарплате, стратегии работы с несколькими офферами, подготовка к выходу на новую позицию.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-10 border-t border-border relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight animate-fade-in">
              <span className="text-foreground">Почему мы — </span>
              <span className="gradient-text">не как все</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-accent mb-3">
                Это не обучение. Это партнерство.
              </h3>
              <p className="text-muted text-sm">
                Мы не продаем тебе курс и не исчезаем. Мы работаем с тобой плечом к плечу 6 месяцев — столько, сколько нужно для результата.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-accent mb-3">
                Люди + технологии = результат
              </h3>
              <p className="text-muted text-sm">
                Опытные менторы знают, как работает рынок. AI обрабатывает сотни вакансий в день. Вместе они создают машину по поиску работы, которая работает на тебя.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-accent mb-3">Живая стратегия</h3>
              <p className="text-muted text-sm">
                Мы не следуем жесткому плану. Мы адаптируемся под твой опыт, цели и возможности с учетом текущий реалий рынка.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-accent mb-3">
                Закрытое сообщество победителей
              </h3>
              <p className="text-muted text-sm">
                Ты получаешь доступ к людям, которые уже прошли этот путь и работают в компаниях твоей мечты.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-accent mb-3">Реальная практика</h3>
              <p className="text-muted text-sm">
                Воркшопы каждую неделю — ты не просто учишь теорию, ты тренируешь ответы до автоматизма.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-accent mb-3">Команда экспертов</h3>
              <p className="text-muted text-sm">
                Личный куратор отслеживает твой прогресс ежедневно. Прямой доступ к менторам в рабочем чате. Регулярные чекапы и корректировка тактики.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Go Offer's Method */}
      <section className="py-10 border-t border-border relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight animate-fade-in">
              <span className="text-foreground">Go Offer&apos;s </span>
              <span className="gradient-text">Method</span>
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              What to Expect from the Program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {methodItems.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm hover:bg-purple-500/10 transition-all"
              >
                <h3 className="text-xl font-bold text-accent mb-3">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-10 border-t border-border relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight animate-fade-in">
              <span className="text-foreground">Результаты </span>
              <span className="gradient-text">программы</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            <div className="text-center p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm hover:bg-purple-500/10 transition-all">
              <div className="text-4xl mb-4">📈</div>
              <div className="text-3xl font-bold text-accent mb-2">1100+</div>
              <p className="text-muted text-sm">Клиентов по всему миру</p>
            </div>
            <div className="text-center p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm hover:bg-purple-500/10 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <div className="text-3xl font-bold text-accent mb-2">5-15x</div>
              <p className="text-muted text-sm">Больше релевантных откликов от работодателей*</p>
            </div>
            <div className="text-center p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm hover:bg-purple-500/10 transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <div className="text-3xl font-bold text-accent mb-2">5x</div>
              <p className="text-muted text-sm">Больше приглашений на интервью*</p>
            </div>
            <div className="text-center p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm hover:bg-purple-500/10 transition-all">
              <div className="text-4xl mb-4">💰</div>
              <div className="text-3xl font-bold text-accent mb-2">67%</div>
              <p className="text-muted text-sm">Клиентов находят работу мечты за 6 месяцев*</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <div className="inline-block p-6 rounded-2xl border border-purple-500 bg-purple-500/5 backdrop-blur-sm">
              <div className="text-4xl mb-4">💎</div>
              <div className="text-2xl font-bold text-accent mb-2">~28.4%</div>
              <p className="text-muted">Оффер выше среднего по рынку*</p>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mb-8">
            *На основе самоотчетов участников. Индивидуальные результаты могут отличаться.
          </p>

          {/* Companies */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Компании, которые интервьюируют наших кандидатов
            </h3>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-lg border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm text-muted hover:text-accent hover:border-purple-500 transition-all"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Inaction */}
      <section className="py-10 border-t border-border relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight animate-fade-in text-center">
              <span className="text-foreground">Цена </span>
              <span className="gradient-text">бездействия</span>
            </h2>
            <p className="text-xl text-muted mb-8 text-center">
              Каждый месяц неправильного поиска — это:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/30">
                <h3 className="text-xl font-bold text-red-500 mb-3">⏰ Потерянное время</h3>
                <p className="text-muted text-sm">
                  Месяцы превращаются в годы, пока ты методом проб и ошибок учишься тому, что мы уже знаем.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/30">
                <h3 className="text-xl font-bold text-red-500 mb-3">🚫 Упущенные возможности</h3>
                <p className="text-muted text-sm">
                  Вакансии в топовых компаниях закрываются быстро. Пока ты учишься, другие уже получают офферы.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/30">
                <h3 className="text-xl font-bold text-red-500 mb-3">💸 Заниженный оффер</h3>
                <p className="text-muted text-sm">
                  Без правильной подготовки ты соглашаешься на первое предложение — часто на 30-40% ниже того, что мог бы получить.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/30">
                <h3 className="text-xl font-bold text-red-500 mb-3">😔 Выгорание и разочарование</h3>
                <p className="text-muted text-sm">
                  Сотни отказов без понимания причин убивают мотивацию и уверенность в себе.
                </p>
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl border-2 border-purple-500 bg-purple-500/10">
              <p className="text-xl font-bold text-accent">
                Вопрос не в том, можешь ли ты найти работу самостоятельно. Вопрос в том, сколько времени, денег и нервов ты готов на это потратить.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 border-t border-border relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight animate-fade-in">
              <span className="text-foreground">Готовы начать свой путь к </span>
              <span className="gradient-text">успеху?</span>
            </h2>
            <p className="text-xl text-muted mb-8">
              Выберите план, который подходит именно вам
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#pricing"
                className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 purple-glow"
              >
                Посмотреть тарифы
              </a>
              <a
                href="/#contact"
                className="bg-transparent backdrop-blur-sm text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-500/5 transition-all duration-300 border-2 border-purple-500 hover:border-purple-600"
              >
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </main>
    </>
  )
}
