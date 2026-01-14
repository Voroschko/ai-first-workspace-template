# Как добавить новую страницу в едином стиле

## Быстрый старт

При создании новой страницы следуйте этой структуре:

### 1. Создайте файл страницы

`Website/app/[route]/page.tsx`

### 2. Используйте базовый шаблон

```tsx
'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedStars from '@/components/AnimatedStars'

export default function YourPageName() {
  return (
    <main className="relative">
      <AnimatedStars />
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight animate-fade-in">
                <span className="text-foreground">Ваш заголовок </span>
                <span className="gradient-text">с акцентом</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto font-light animate-fade-in animation-delay-200">
                Описание страницы
              </p>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-32 border-t border-border relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            {/* Ваш контент здесь */}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
```

## Обязательные элементы

✅ **Всегда включайте:**
- `<main className="relative">`
- `<AnimatedStars />`
- `<Header />`
- `<Footer />`
- Темный градиентный фон (уже в globals.css)
- Декоративные градиенты в секциях

❌ **Никогда не используйте:**
- `bg-background` в секциях (они должны быть прозрачными)
- Белые фоны
- `font-bold` для заголовков (используйте `font-light`)
- Фиксированные цвета вместо CSS переменных

## Заголовки

**Правильно:**
```tsx
<h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight animate-fade-in">
  <span className="text-foreground">Текст </span>
  <span className="gradient-text">Акцент</span>
</h1>
```

**Неправильно:**
```tsx
<h1 className="text-4xl font-bold">Заголовок</h1>
```

## Секции

**Базовый шаблон секции:**
```tsx
<section className="py-32 border-t border-border relative overflow-hidden">
  <div className="absolute inset-0 opacity-30">
    {/* Декоративные градиенты */}
  </div>
  <div className="container mx-auto px-6 lg:px-8 relative z-10">
    {/* Контент */}
  </div>
</section>
```

## Примеры существующих страниц

- **Главная**: `Website/app/page.tsx`
- **Услуги**: `Website/app/services/page.tsx`
- **Тест**: `Website/app/test/page.tsx`

Все они следуют единому стилю.




















