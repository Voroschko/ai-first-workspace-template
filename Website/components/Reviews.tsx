export default function Reviews() {
  const reviews = [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Мария К.',
      },
      datePublished: '2024-01-15',
      reviewBody: 'До Go Offer я полгода рассылала резюме и получала 1-2 ответа в неделю. На программе мне помогли сфокусироваться на правильных ролях, переписали резюме под рынок США и запустили массовые подачи. За первые 6 недель у меня было 18 интервью и 2 оффера. Особенно зашла подготовка к скринингам и четкая структура ответов.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
      },
      itemReviewed: {
        '@type': 'Service',
        name: 'Go Offer Career Services',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Alex P.',
      },
      datePublished: '2024-02-20',
      reviewBody: 'Понравилось, что здесь нет магии, только система. Мы вместе разобрали мою воронку, усилили LinkedIn, запустили аутрич рекрутерам и полностью поменяли подход к интервью. В итоге за 3 месяца я ушел из токсичной среды в компанию с ростом компенсации почти на 35 %.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
      },
      itemReviewed: {
        '@type': 'Service',
        name: 'Go Offer Career Services',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Иван Л.',
      },
      datePublished: '2024-03-10',
      reviewBody: 'Сам я застрял на этапе "много подач - мало движений". Ребята сделали нормальную стратегию, выделили несколько целевых треков и настроили автоподачи. Плюс, мок-интервью очень помогли убрать нервяк. Сейчас работаю в продуктовой компании, где давно хотел оказаться.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
      },
      itemReviewed: {
        '@type': 'Service',
        name: 'Go Offer Career Services',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Ольга С.',
      },
      datePublished: '2024-04-05',
      reviewBody: 'Для меня ключевым было ощущение, что я не одна. Постоянная поддержка, разборы, чаты с другими ребятами. Понравилось, что честно говорят, где рынок "молчит", а где надо менять стратегию. Оффер получила на 4-м месяце поиска.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 4.8,
        bestRating: 5,
      },
      itemReviewed: {
        '@type': 'Service',
        name: 'Go Offer Career Services',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Dmitry R.',
      },
      datePublished: '2024-05-12',
      reviewBody: 'С Go Offer я наконец-то понял, чем вообще отличается поиск работы в США от привычной модели. Вместе ушли от "рандомных откликов" к конкретной воронке: линки, рефералки, таргетированные подачи, аналитика. Интервью стало настолько много, что пришлось выбирать.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
      },
      itemReviewed: {
        '@type': 'Service',
        name: 'Go Offer Career Services',
      },
    },
  ]

  const aggregateRating = {
    '@type': 'AggregateRating',
    ratingValue: '4.96',
    reviewCount: reviews.length,
    bestRating: '5',
    worstRating: '1',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviews) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRating) }}
      />
    </>
  )
}


