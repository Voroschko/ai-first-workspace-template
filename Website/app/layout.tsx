import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://go-offer.us'),
  title: {
    default: 'Go Offer - Level Up Your Career: AI-Powered Job Search',
    template: '%s | Go Offer',
  },
  description: 'Go Offer помогает специалистам в США структурировать поиск работы, масштабировать отклики и дойти до оффера с помощью команды экспертов и AI-инструментов.',
  keywords: [
    'job search',
    'career services',
    'resume building',
    'LinkedIn optimization',
    'job search automation',
    'mock interviews',
    'career strategy',
    'offer negotiation',
    'AI job search',
    'career coaching',
    'USA job search',
    'job search help',
  ],
  authors: [{ name: 'Go Offer' }],
  creator: 'Go Offer',
  publisher: 'Go Offer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://go-offer.us',
    siteName: 'Go Offer',
    title: 'Go Offer - карьерное сопровождение и поиск работы в США',
    description: 'Структурируем поиск работы, масштабируем отклики, готовим к интервью и помогаем дойти до оффера с помощью команды экспертов и AI-инструментов.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Go Offer - AI-Powered Job Search',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Go Offer - карьерное сопровождение и поиск работы в США',
    description: 'Структурируем поиск работы, масштабируем отклики, готовим к интервью и помогаем дойти до оффера с помощью команды экспертов и AI-инструментов.',
    images: ['/images/og-image.jpg'],
    creator: '@GoOfferUS',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Добавьте ваши коды верификации здесь после получения из Google Search Console и Яндекс.Вебмастер
    // google: 'ВАШ_УНИКАЛЬНЫЙ_КОД_ИЗ_GSC',
    // yandex: 'ВАШ_УНИКАЛЬНЫЙ_КОД_ИЗ_ЯНДЕКС_ВЕБМАСТЕР',
  },
  alternates: {
    canonical: 'https://go-offer.us',
    languages: {
      'en-US': 'https://go-offer.us',
      'ru-RU': 'https://go-offer.us/ru',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://go-offer.us" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/android-chrome-192x192.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#9333ea" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="dns-prefetch" href="https://go-offer.us" />
        <link rel="preconnect" href="https://go-offer.us" crossOrigin="anonymous" />
      </head>
      <body className="text-foreground relative">{children}</body>
    </html>
  )
}