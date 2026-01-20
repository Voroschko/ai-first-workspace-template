'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  
  // Определяем breadcrumbs в зависимости от пути
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      { label: 'Главная', href: '/' }
    ]
    
    if (!pathname) return items
    
    if (pathname === '/services') {
      items.push({ label: 'Услуги' })
    } else if (pathname === '/cases') {
      items.push({ label: 'Кейсы' })
    } else if (pathname === '/courses') {
      items.push({ label: 'Бесплатные курсы' })
    } else if (pathname === '/privacy') {
      items.push({ label: 'Privacy Policy' })
    } else if (pathname === '/cookie') {
      items.push({ label: 'Cookie Policy' })
    } else if (pathname === '/termsconditions') {
      items.push({ label: 'Terms & Conditions' })
    } else if (pathname === '/contact') {
      items.push({ label: 'Contact Information' })
    } else if (pathname === '/companydetails') {
      items.push({ label: 'Company Details' })
    }
    
    return items
  }
  
  const breadcrumbs = getBreadcrumbs()
  
  // Не показываем breadcrumbs на главной странице
  if (!pathname || pathname === '/' || breadcrumbs.length <= 1) {
    return null
  }
  
  return (
    <nav className="py-4 md:py-6 border-b border-border/30" aria-label="Breadcrumb">
      <div className="container mx-auto px-6 lg:px-8">
        <ol className="flex items-center gap-2 text-xs md:text-sm font-light">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="text-muted mx-2">/</span>
              )}
              {item.href && index < breadcrumbs.length - 1 ? (
                <Link
                  href={item.href}
                  className="text-muted hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
