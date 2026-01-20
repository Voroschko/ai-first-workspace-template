import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Блог | Go Offer - Поиск работы в США',
  description: 'Актуальные статьи о поиске работы в США, подготовке к интервью, карьерных стратегиях и успешных кейсах трудоустройства.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
