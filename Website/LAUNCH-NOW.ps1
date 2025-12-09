# Скрипт для быстрого запуска Gofer проекта
# Запустите этот скрипт в PowerShell: .\LAUNCH-NOW.ps1

Write-Host "🚀 Запуск проекта Gofer..." -ForegroundColor Cyan

# Проверка Node.js
Write-Host "`n📋 Проверка Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js установлен: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js не найден!" -ForegroundColor Red
    Write-Host "`n📥 Установите Node.js:" -ForegroundColor Yellow
    Write-Host "1. Перейдите на https://nodejs.org/" -ForegroundColor White
    Write-Host "2. Скачайте LTS версию" -ForegroundColor White
    Write-Host "3. Установите, убедившись что выбрана опция 'Add to PATH'" -ForegroundColor White
    Write-Host "4. Закройте и заново откройте PowerShell" -ForegroundColor White
    Write-Host "5. Запустите этот скрипт снова`n" -ForegroundColor White
    exit 1
}

# Проверка npm
Write-Host "`n📋 Проверка npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✅ npm установлен: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm не найден!" -ForegroundColor Red
    exit 1
}

# Переход в папку проекта
$projectPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectPath

# Проверка зависимостей
Write-Host "`n📋 Проверка зависимостей..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "✅ Зависимости установлены" -ForegroundColor Green
} else {
    Write-Host "📦 Установка зависимостей..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Ошибка при установке зависимостей!" -ForegroundColor Red
        exit 1
    }
}

# Проверка порта 3000
Write-Host "`n📋 Проверка порта 3000..." -ForegroundColor Yellow
$portInUse = netstat -ano | findstr ":3000"
if ($portInUse) {
    Write-Host "⚠️  Порт 3000 занят. Попытка использовать порт 3001..." -ForegroundColor Yellow
    $port = 3001
} else {
    $port = 3000
}

# Запуск сервера
Write-Host "`n🚀 Запуск сервера разработки..." -ForegroundColor Cyan
Write-Host "Откройте в браузере: http://localhost:$port`n" -ForegroundColor Green

if ($port -eq 3001) {
    npm run dev -- -p 3001
} else {
    npm run dev
}













