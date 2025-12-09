# Go Offer Website - Style Guide

## Единый стиль для всех страниц проекта

Этот документ описывает единый стиль, который должен применяться ко всем страницам сайта.

## Структура страницы

### Базовая структура

Каждая страница должна иметь следующую структуру:

```tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimatedStars from '@/components/AnimatedStars'

export default function PageName() {
  return (
    <main className="relative">
      <AnimatedStars />
      <div className="relative z-10">
        <Header />
        
        {/* Контент страницы */}
        
        <Footer />
      </div>
    </main>
  )
}
```

## Стилевые характеристики

### Фон
- **Темный градиентный фон** с анимированным переходом цветов
- **Анимированные частицы** (AnimatedStars) на фоне
- **Цветные радиальные градиенты** в секциях для глубины

### Заголовки

**Формат:**
```tsx
<h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight animate-fade-in">
  <span className="text-foreground">Основной текст </span>
  <span className="gradient-text">Выделенный текст</span>
</h1>
```

**Характеристики:**
- `font-light` - легкий шрифт
- `text-5xl md:text-6xl` - адаптивные размеры
- `gradient-text` - градиентный текст для ключевых слов
- Анимация `animate-fade-in`

### Секции

**Базовый формат секции:**
```tsx
<section className="py-32 border-t border-border relative overflow-hidden">
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
  </div>
  
  <div className="container mx-auto px-6 lg:px-8 relative z-10">
    {/* Контент */}
  </div>
</section>
```

**Характеристики:**
- `py-32` - вертикальные отступы
- `border-t border-border` - верхняя граница
- Декоративные цветные градиенты на фоне
- Контейнер с правильным z-index

### Цвета

- **Фон**: Темный градиент (#0f0f1a и оттенки)
- **Текст**: Светлый (#f5f5f5)
- **Accent**: Светлый фиолетовый (#c084fc)
- **Градиент текста**: От #e9d5ff до #9333ea
- **Границы**: Полупрозрачный белый (rgba(255, 255, 255, 0.1))

### Анимации

- `animate-fade-in` - появление элементов
- `animate-float` - плавающие градиенты
- `gradient-text` - анимированный градиент текста

### Частицы

- **Количество**: 90 частиц
- **Цвет**: Белый (rgba(255, 255, 255, ...))
- **Размер**: 0.8-2.0px
- **Непрозрачность**: 0.5-0.9

## Правила применения

1. **Всегда используйте** `<main className="relative">` как обертку
2. **Всегда добавляйте** `<AnimatedStars />` для фона
3. **Всегда используйте** Header и Footer
4. **Убирайте** `bg-background` из секций (они прозрачные)
5. **Используйте** единые заголовки с `gradient-text`
6. **Добавляйте** декоративные градиенты в секциях

## Примеры

### Hero секция
```tsx
<section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
  </div>
  <div className="container mx-auto px-6 lg:px-8 relative z-10">
    {/* Контент */}
  </div>
</section>
```

### Обычная секция
```tsx
<section className="py-32 border-t border-border relative">
  <div className="absolute inset-0 opacity-30">
    {/* Декоративные градиенты */}
  </div>
  <div className="container mx-auto px-6 lg:px-8 relative z-10">
    {/* Контент */}
  </div>
</section>
```













