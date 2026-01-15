# Установка шрифта Harp Display

## Способ 1: Локальные файлы (рекомендуется)

1. Поместите файлы шрифта в эту папку (`Website/public/fonts/`):
   - `HarpDisplay-Light.woff2` (font-weight: 300)
   - `HarpDisplay-Regular.woff2` (font-weight: 400)
   - `HarpDisplay-Medium.woff2` (font-weight: 500)
   - `HarpDisplay-SemiBold.woff2` (font-weight: 600)
   - `HarpDisplay-Bold.woff2` (font-weight: 700)

2. Также можно добавить `.woff` версии для лучшей совместимости со старыми браузерами.

3. После добавления файлов перезапустите dev сервер:
   ```bash
   npm run dev
   ```

## Способ 2: Подключение через CDN

Если у вас есть доступ к CDN с шрифтом Harp Display:

1. Откройте `Website/app/layout.tsx`
2. Добавьте в секцию `<head>`:
   ```html
   <link href="https://your-cdn.com/harp-display.css" rel="stylesheet" />
   ```

3. Или откройте `Website/app/globals.css` и раскомментируйте строку:
   ```css
   @import url('https://your-cdn.com/harp-display.css');
   ```

## Способ 3: Использование Google Fonts или другого сервиса

Если Harp Display доступен через Google Fonts или другой сервис:

1. Откройте `Website/app/layout.tsx`
2. Добавьте в секцию `<head>`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
   <link href="https://fonts.googleapis.com/css2?family=Harp+Display:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
   ```

3. Убедитесь, что в `globals.css` и `tailwind.config.ts` указан правильный font-family.

## Проверка установки

После установки шрифта:
1. Откройте сайт в браузере
2. Откройте DevTools (F12)
3. Перейдите на вкладку Network
4. Отфильтруйте по "font" или "woff"
5. Убедитесь, что файлы шрифта загружаются без ошибок (статус 200)

Если файлы не найдены (404), проверьте:
- Правильность путей к файлам
- Наличие файлов в папке `public/fonts/`
- Правильность имен файлов (регистр важен!)
