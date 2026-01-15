'use client'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular' | 'card'
  width?: string | number
  height?: string | number
  lines?: number
}

export default function Skeleton({
  className = '',
  variant = 'rectangular',
  width,
  height,
  lines = 1,
}: SkeletonProps) {
  const baseClasses = 'bg-gradient-to-r from-border/20 via-border/40 to-border/20 bg-[length:200%_100%] animate-shimmer'

  const variantClasses = {
    text: 'rounded h-4',
    circular: 'rounded-full',
    rectangular: 'rounded',
    card: 'rounded-lg',
  }

  const style: React.CSSProperties = {}
  if (width) style.width = typeof width === 'number' ? `${width}px` : width
  if (height) style.height = typeof height === 'number' ? `${height}px` : height

  if (variant === 'text' && lines > 1) {
    return (
      <div className={className}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${variantClasses.text} mb-2 ${
              index === lines - 1 ? 'w-3/4' : 'w-full'
            }`}
            style={index === 0 && width ? { width } : undefined}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    />
  )
}

// Предустановленные skeleton компоненты для разных случаев
export function SkeletonCard() {
  return (
    <div className="border border-border/30 p-5 md:p-6 rounded-lg backdrop-blur-md bg-background/20">
      <Skeleton variant="rectangular" height={24} className="mb-3 w-3/4" />
      <Skeleton variant="text" lines={2} className="mb-4" />
      <Skeleton variant="text" lines={1} className="w-1/2" />
    </div>
  )
}

export function SkeletonServiceCard() {
  return (
    <div className="border-b border-border pb-6 md:pb-8">
      <div className="flex items-start gap-3 md:gap-4">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1">
          <Skeleton variant="rectangular" height={24} className="mb-3 w-2/3" />
          <Skeleton variant="text" lines={2} />
        </div>
      </div>
    </div>
  )
}

export function SkeletonPricingCard() {
  return (
    <div className="relative rounded-2xl border border-border/50 backdrop-blur-sm shadow-2xl p-5 md:p-6 h-full flex flex-col">
      <Skeleton variant="rectangular" height={80} className="mb-4 w-full" />
      <Skeleton variant="rectangular" height={32} className="mb-2 w-1/2" />
      <Skeleton variant="rectangular" height={20} className="mb-6 w-1/3" />
      <div className="mb-5 md:mb-6 flex-grow">
        <Skeleton variant="rectangular" height={16} className="mb-4 w-1/4" />
        <div className="space-y-2 md:space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-start">
              <Skeleton variant="circular" width={16} height={16} className="mr-2 mt-1" />
              <Skeleton variant="text" lines={1} className="flex-1" />
            </div>
          ))}
        </div>
      </div>
      <Skeleton variant="rectangular" height={40} className="w-full" />
    </div>
  )
}

export function SkeletonStatCard() {
  return (
    <div className="text-center border-b border-border pb-6 md:pb-8">
      <Skeleton variant="rectangular" height={48} className="mb-3 md:mb-4 w-24 mx-auto" />
      <Skeleton variant="text" lines={1} className="w-32 mx-auto" />
    </div>
  )
}

export function SkeletonCaseCard() {
  return (
    <div className="border border-border/30 p-5 md:p-6 rounded-lg backdrop-blur-md bg-background/20">
      <Skeleton variant="rectangular" height={20} className="mb-2 w-1/4" />
      <Skeleton variant="rectangular" height={24} className="mb-3 w-3/4" />
      <Skeleton variant="text" lines={3} className="mb-4" />
      <div className="flex gap-2">
        <Skeleton variant="rectangular" height={24} className="w-20 rounded-full" />
        <Skeleton variant="rectangular" height={24} className="w-24 rounded-full" />
      </div>
    </div>
  )
}
