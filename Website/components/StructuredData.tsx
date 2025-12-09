export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Go Offer',
    description: 'Go Offer - это карьерное сопровождение и экосистема сервисов для специалистов, которые уже находятся в США и хотят быстрее выйти на новый оффер. Мы соединяем экспертизу карьерных стратегов, рекрутеров из топовых компаний и AI-инструменты, чтобы превратить хаотичный поиск работы в управляемый и предсказуемый процесс.',
    url: 'https://go-offer.us',
    logo: 'https://go-offer.us/images/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'friend@go-offer.us',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Russian'],
    },
    sameAs: [
      'https://t.me/go_offer_support',
      'https://www.youtube.com/@GoOfferUS',
    ],
    foundingDate: '2020',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '100+',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Career Counseling and Job Search Services',
    provider: {
      '@type': 'Organization',
      name: 'Go Offer',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    description: 'Professional career services including AI-powered job search automation, resume optimization, LinkedIn strategy, interview preparation, and offer negotiation.',
    offers: [
      {
        '@type': 'Offer',
        name: 'Take All',
        price: '2850',
        priceCurrency: 'USD',
        description: 'Hub for 6 months + easy apply, strategic session with mentor, resume and LinkedIn optimization',
      },
      {
        '@type': 'Offer',
        name: 'Take All +',
        price: '4950',
        priceCurrency: 'USD',
        description: 'Enhanced package with 6 check-ups, 2 months follow-up and outreach, 4 mock interviews',
      },
      {
        '@type': 'Offer',
        name: 'VIP',
        price: '7750',
        priceCurrency: 'USD',
        description: 'Premium package with 12 check-ups, 4 months follow-up and outreach, 8 mock interviews, unlimited strategy changes',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Кому подходит Go Offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Go Offer подходит специалистам, которые уже находятся в США или легально могут здесь работать и хотят ускорить поиск работы. Чаще всего к нам приходят IT-специалисты, аналитики, продакт- и проект-менеджеры, маркетологи и другие knowledge workers. Если у тебя есть релевантный опыт, но поиск буксует, мало откликов, нет интервью или ты застрял на одном из этапов, мы поможем выстроить стратегию и масштабировать воронку.',
        },
      },
      {
        '@type': 'Question',
        name: 'Чем вы отличаетесь от карьерного коуча или курсов по резюме?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Классический карьерный коуч дает советы и периодически встречается с клиентом, а курсы по резюме ограничиваются разбором одного документа. Go Offer - это экосистема, где под одной «крышей» есть стратегия, доработка резюме и LinkedIn, массовые подачи, аутрич рекрутерам, мок-интервью, поддержка психолога и помощь с торгом за оффер. Мы берем на себя не только консультации, но и значительную часть операционки: анализ вакансий, настройку инструментов, аналитку воронки.',
        },
      },
      {
        '@type': 'Question',
        name: 'Сколько времени обычно занимает выход на оффер?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Срок сильно зависит от твоего уровня, ниши и текущей ситуации на рынке. По нашей статистике, около 40% клиентов получают оффер за первые 2 месяца активного поиска, около 70% - в течение 4 месяцев, и большинство, кто соблюдает план и поддерживает нужный уровень активности, выходит на новый оффер за 6 месяцев.',
        },
      },
      {
        '@type': 'Question',
        name: 'Что такое массовые подачи и почему это важно?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Массовые подачи - это системный поток релевантных откликов на вакансии, когда каждый день уходят десятки заявок в нужные компании. При конкуренции в сотни и тысячи кандидатов на позицию, единичные отклики не дают стабильного результата. Мы помогаем настроить автоаппликацию и умные фильтры, чтобы масштабировать количество подач без потери качества.',
        },
      },
      {
        '@type': 'Question',
        name: 'Вы работаете только с IT-специалистами?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Основная часть наших клиентов - из IT и смежных сфер: разработка, DevOps, аналитика, продукт, проектное управление, дизайн, маркетинг. Но мы также работаем с профессионалами из других направлений, если их компетенции могут быть востребованы на рынке США и есть понятная стратегия.',
        },
      },
      {
        '@type': 'Question',
        name: 'Можно ли совмещать программу с full-time работой?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, большинство наших клиентов совмещает участие в программе с текущей занятостью. Мы выстраиваем процессы так, чтобы основная часть рутины была автоматизирована или делегирована ассистентам. От тебя нужны регулярные слоты времени на модули, созвоны и подготовку к интервью.',
        },
      },
      {
        '@type': 'Question',
        name: 'Как устроено взаимодействие с командой Go Offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'После онбординга у тебя появляется понятная дорожная карта: какие шаги мы делаем в ближайшие недели и как будем мерить прогресс. С тобой работают сразу несколько специалистов: карьерный стратег, рекрутер(ы), ассистенты по подачам, менторы по интервью. Часть коммуникации идет в удобных тебе мессенджерах и внутри платформы, часть - на созвонах.',
        },
      },
      {
        '@type': 'Question',
        name: 'Есть ли гарантия оффера?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Мы не даем гарантию результата в формате «стопроцентный оффер за N дней» - это было бы нечестно по отношению к клиентам. На что мы действительно можем опираться - это четко выстроенный процесс, масштаб воронки, системная работа с откликами и поддержка на каждом этапе.',
        },
      },
      {
        '@type': 'Question',
        name: 'Можно ли оплачивать в рассрочку или частями?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, для части продуктов доступна гибкая система оплаты и рассрочки через партнеров и внутренние планы. Мы понимаем, что поиск работы - финансово чувствительная тема, поэтому стараемся сделать вход в программу комфортнее.',
        },
      },
      {
        '@type': 'Question',
        name: 'Как понять, подойдет ли мне Go Offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Лучший способ - прийти на бесплатный диагностический созвон. На нем мы внимательно разбираем твою ситуацию: опыт, цели, текущие попытки поиска, визовую историю, ограничения по локации и семейным обстоятельствам. Если видим, что можем помочь - предлагаем варианты работы и честно проговариваем риски, сроки и ожидания.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}