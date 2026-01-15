'use client'

import { Suspense } from 'react'
import { SkeletonCard, SkeletonServiceCard, SkeletonPricingCard, SkeletonStatCard, SkeletonCaseCard } from './Skeleton'

interface LoadingWrapperProps {
  children: React.ReactNode
  variant?: 'card' | 'service' | 'pricing' | 'stat' | 'case' | 'default'
  count?: number
}

export default function LoadingWrapper({ children, variant = 'default', count = 1 }: LoadingWrapperProps) {
  const getSkeleton = () => {
    switch (variant) {
      case 'card':
        return Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)
      case 'service':
        return Array.from({ length: count }).map((_, i) => <SkeletonServiceCard key={i} />)
      case 'pricing':
        return Array.from({ length: count }).map((_, i) => <SkeletonPricingCard key={i} />)
      case 'stat':
        return Array.from({ length: count }).map((_, i) => <SkeletonStatCard key={i} />)
      case 'case':
        return Array.from({ length: count }).map((_, i) => <SkeletonCaseCard key={i} />)
      default:
        return <div className="animate-pulse">Загрузка...</div>
    }
  }

  return (
    <Suspense fallback={
      <div className={variant === 'pricing' ? 'grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto' : variant === 'service' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto' : variant === 'stat' ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto' : ''}>
        {getSkeleton()}
      </div>
    }>
      {children}
    </Suspense>
  )
}
