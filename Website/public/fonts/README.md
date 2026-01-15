# Harp Display Font Files

Поместите файлы шрифта Harp Display в эту папку.

## Необходимые файлы:

- `HarpDisplay-Light.woff2` (font-weight: 300)
- `HarpDisplay-Regular.woff2` (font-weight: 400)
- `HarpDisplay-Medium.woff2` (font-weight: 500)
- `HarpDisplay-SemiBold.woff2` (font-weight: 600)
- `HarpDisplay-Bold.woff2` (font-weight: 700)

Также можно добавить `.woff` версии для лучшей совместимости.

## Альтернативный способ подключения:

Если у вас есть доступ к CDN или другому сервису шрифтов, вы можете:

1. Обновить `@font-face` в `app/globals.css` для использования вашего CDN
2. Или добавить `<link>` в `app/layout.tsx` для подключения через внешний сервис

## Пример подключения через CDN (если доступен):

```html
<link href="https://your-cdn.com/harp-display.css" rel="stylesheet" />
```
