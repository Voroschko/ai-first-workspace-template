# PowerShell скрипт для генерации Hero изображения
# Использование: .\generate-hero-image.ps1

$prompt = "Современный офис с профессионалами за ноутбуками. Светлый интерьер, много естественного света, растения. Минималистичный стиль, профессиональная атмосфера. Цветовая схема: фиолетовый, синий, градиенты."

Write-Host "🎨 Генерация изображения для Hero секции..." -ForegroundColor Cyan
Write-Host "Промпт: $prompt" -ForegroundColor Gray
Write-Host ""

# Проверяем наличие .env.local
if (Test-Path "Website\.env.local") {
    Write-Host "✅ Файл .env.local найден" -ForegroundColor Green
} else {
    Write-Host "⚠️  Файл .env.local не найден. Создайте его с OPENAI_API_KEY" -ForegroundColor Yellow
}

# Проверяем, запущен ли dev сервер
Write-Host ""
Write-Host "📝 Инструкция:" -ForegroundColor Cyan
Write-Host "1. Убедитесь, что dev сервер запущен: cd Website && npm run dev" -ForegroundColor White
Write-Host "2. Выполните запрос через curl или Postman:" -ForegroundColor White
Write-Host ""
Write-Host "curl -X POST http://localhost:3000/api/generate-image \" -ForegroundColor Yellow
Write-Host "  -H `"Content-Type: application/json`" \" -ForegroundColor Yellow
Write-Host "  -d '{`"prompt`":`"$prompt`",`"size`":`"1792x1024`",`"style`":`"vivid`"}'" -ForegroundColor Yellow
Write-Host ""

# Альтернатива через PowerShell
Write-Host "Или используйте PowerShell:" -ForegroundColor Cyan
Write-Host ""
Write-Host '$body = @{`n  prompt = "$prompt"`n  size = "1792x1024"`n  style = "vivid"`n} | ConvertTo-Json' -ForegroundColor Yellow
Write-Host ''
Write-Host 'Invoke-RestMethod -Uri "http://localhost:3000/api/generate-image" \`' -ForegroundColor Yellow
Write-Host '  -Method POST \`' -ForegroundColor Yellow
Write-Host '  -ContentType "application/json" \`' -ForegroundColor Yellow
Write-Host '  -Body $body' -ForegroundColor Yellow
Write-Host ""

Write-Host "💡 Совет: Используйте чат Cursor напрямую для более простой генерации!" -ForegroundColor Green
Write-Host "   Просто напишите: 'Сгенерируй изображение: [ваш промпт]'" -ForegroundColor Gray
