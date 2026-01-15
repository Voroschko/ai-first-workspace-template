# Настройка шрифта Harp Display

## Проблема
Шрифт Harp Display не применяется, потому что файлы шрифта отсутствуют в папке `public/fonts/`.

## Решение

### Вариант 1: Добавить файлы шрифта (если у вас есть лицензия)

1. Если у вас есть лицензия на Harp Display, поместите файлы в `Website/public/fonts/`:
   - `HarpDisplay-Light.woff2`
   - `HarpDisplay-Regular.woff2`
   - `HarpDisplay-Medium.woff2`
   - `HarpDisplay-SemiBold.woff2`
   - `HarpDisplay-Bold.woff2`

2. Перезапустите dev сервер:
   ```bash
   npm run dev
   ```

### Вариант 2: Использовать похожий бесплатный шрифт

Если у вас нет лицензии, можно использовать похожий бесплатный шрифт из Google Fonts:

1. Откройте `Website/app/layout.tsx`
2. Добавьте в секцию `<head>`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
   ```

3. Обновите `Website/app/globals.css`:
   ```css
   html {
     font-family: 'Playfair Display', -apple-system, BlinkMacSystemFont, sans-serif;
   }
   ```

4. Обновите `Website/tailwind.config.ts`:
   ```typescript
   fontFamily: {
     sans: ['Playfair Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
   },
   ```

### Вариант 3: Использовать системный шрифт (временно)

Пока файлы не добавлены, сайт будет использовать системный шрифт (fallback). Это нормально для разработки.

## Проверка

После добавления файлов или настройки альтернативного шрифта:
1. Откройте сайт в браузере
2. Откройте DevTools (F12) → Network
3. Проверьте, что шрифты загружаются (статус 200)
4. В DevTools → Elements → Computed проверьте, какой шрифт применяется
