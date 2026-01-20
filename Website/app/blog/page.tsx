'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  date: string
  readTime: string
  image?: string
}

const blogPosts: BlogPost[] = [
  {
    slug: 'job-search-usa-2026-market-trends',
    title: 'Поиск работы в США 2026: Что изменилось на рынке труда',
    description: 'Актуальная ситуация на рынке труда США в 2025-2026. Почему резюме не проходят ATS-фильтры и как получить job offer в Америке.',
    category: '#секретыоффера',
    date: '2026-01-15',
    readTime: '8 мин',
  },
  {
    slug: 'how-to-find-job-in-usa-5-steps',
    title: 'Как найти работу в США: 5 шагов для успешного job search в Америке',
    description: 'Пошаговая стратегия поиска работы в США для IT-специалистов с H1B, Green Card, EAD. От оптимизации резюме до получения job offer в американских компаниях.',
    category: '#секретыоффера',
    date: '2026-01-10',
    readTime: '10 мин',
  },
  {
    slug: 'product-manager-interview-disagreement-engineers-star-method',
    title: 'Product Manager Interview USA: Как отвечать на вопрос о disagreement с engineers',
    description: 'Реальный пример STAR-ответа для PM interview в США. Как правильно рассказать о disagreement с инженерами и получить strong hire signal от американских рекрутеров.',
    category: '#STARкейсы',
    date: '2026-01-05',
    readTime: '12 мин',
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="container mx-auto px-6 lg:px-8">
            <ScrollReveal animation="fade-in">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                  <span className="text-foreground">Блог </span>
                  <span className="gradient-text">Go Offer</span>
                </h1>
                <p className="text-lg md:text-xl text-muted font-light leading-relaxed">
                  Актуальные статьи о поиске работы в США, подготовке к интервью и карьерных стратегиях
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {blogPosts.map((post, index) => (
                  <ScrollReveal key={post.slug} animation="slide-up" delay={index * 100}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block bg-background/80 rounded-2xl p-6 md:p-8 border border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg backdrop-blur-sm h-full flex flex-col"
                    >
                      <div className="mb-4">
                        <span className="inline-block text-xs text-purple-500 font-light uppercase tracking-wide mb-3">
                          {post.category}
                        </span>
                        <h2 className="text-xl md:text-2xl font-medium text-foreground mb-3 group-hover:text-purple-500 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-sm text-muted font-light leading-relaxed mb-4">
                          {post.description}
                        </p>
                      </div>
                      <div className="mt-auto pt-4 border-t border-border/30 flex items-center justify-between text-xs text-muted font-light">
                        <span suppressHydrationWarning>{new Date(post.date).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <span>{post.readTime} чтения</span>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
