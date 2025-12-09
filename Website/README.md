# Go Offer - Лендинг

Современный адаптивный лендинг для Go Offer, построенный на Next.js, TypeScript и Tailwind CSS.

**Референс:** https://ru.sfer.ai/ - стилистика сайта основана на этом референсе.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
Website/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # Reusable React components
├── public/             # Static assets (images, icons, etc.)
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── next.config.js      # Next.js configuration
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

1. Update `app/layout.tsx` to customize metadata (title, description)
2. Modify `app/page.tsx` to create your home page
3. Add components in `components/` directory
4. Update `tailwind.config.ts` for custom theme colors and styles
5. Add images and assets to `public/` directory

## 📐 Единый стиль проекта

**⚠️ ВАЖНО:** При создании или изменении страниц всегда следуйте единому стилю!

- **STYLE-GUIDE.md** - Полное руководство по стилю
- **HOW-TO-ADD-PAGE.md** - Шаблоны для новых страниц
- **README-STYLE.md** - Краткое напоминание о стиле

**Основные принципы:**
- Темный градиентный фон
- Анимированные белые частицы
- Градиентные заголовки
- Прозрачные секции с декоративными градиентами

## ✅ Что уже сделано

- [x] Создана структура лендинга
- [x] Компоненты Header, Hero, Services, Footer
- [x] Адаптивная верстка
- [x] Базовая стилистика на основе референса

## 📚 Следующие шаги

- [ ] Детальный анализ стилистики референса ru.sfer.ai
- [ ] Уточнить цветовую палитру
- [ ] Добавить реальный контент из gofer-project/content/
- [ ] Добавить секцию "О нас"
- [ ] Добавить форму обратной связи
- [ ] Настроить SEO и метатеги
- [ ] Добавить аналитику

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

