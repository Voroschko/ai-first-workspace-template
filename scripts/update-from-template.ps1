# Скрипт для обновления проекта из оригинального шаблона
# Использование: .\scripts\update-from-template.ps1

param(
    [string]$UpstreamUrl = "",
    [switch]$AutoMerge = $false,
    [switch]$DryRun = $false
)

$ErrorActionPreference = "Stop"

# Цвета для вывода
function Write-Info {
    param([string]$Message)
    Write-Host "ℹ️  $Message" -ForegroundColor Cyan
}

function Write-Success {
    param([string]$Message)
    Write-Host "✅ $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "⚠️  $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "❌ $Message" -ForegroundColor Red
}

# Проверка наличия Git
try {
    $gitVersion = git --version
    Write-Success "Git найден: $gitVersion"
} catch {
    Write-Error "Git не установлен. Установите Git с https://git-scm.com/download/win"
    exit 1
}

# Проверка, что мы в Git репозитории
if (-not (Test-Path ".git")) {
    Write-Error "Это не Git репозиторий. Сначала выполните 'git init'"
    exit 1
}

# Чтение конфигурации upstream
$configFile = ".git-upstream-config"
if (Test-Path $configFile) {
    $config = Get-Content $configFile | ConvertFrom-Json
    if ($config.upstreamUrl) {
        $UpstreamUrl = $config.upstreamUrl
        Write-Info "Используется URL из конфигурации: $UpstreamUrl"
    }
}

# Если URL не указан, запросить у пользователя
if ([string]::IsNullOrWhiteSpace($UpstreamUrl)) {
    Write-Warning "URL оригинального репозитория шаблона не указан"
    Write-Info "Пример: https://github.com/username/ai-first-workspace-template.git"
    $UpstreamUrl = Read-Host "Введите URL оригинального репозитория шаблона"
    
    if ([string]::IsNullOrWhiteSpace($UpstreamUrl)) {
        Write-Error "URL не может быть пустым"
        exit 1
    }
}

# Проверка наличия upstream remote
$remotes = git remote -v
$hasUpstream = $remotes -match "upstream"

if (-not $hasUpstream) {
    Write-Info "Добавление upstream remote..."
    if ($DryRun) {
        Write-Info "[DRY RUN] git remote add upstream $UpstreamUrl"
    } else {
        git remote add upstream $UpstreamUrl
        Write-Success "Upstream remote добавлен"
        
        # Сохранение в конфиг
        $config = @{
            upstreamUrl = $UpstreamUrl
            lastUpdated = (Get-Date).ToString("yyyy-MM-dd HH:mm:ss")
        }
        $config | ConvertTo-Json | Set-Content $configFile
    }
} else {
    Write-Info "Upstream remote уже настроен"
    if (-not $DryRun) {
        # Обновление URL если изменился
        git remote set-url upstream $UpstreamUrl
    }
}

# Сохранение текущих изменений
Write-Info "Проверка незакоммиченных изменений..."
$status = git status --porcelain
if ($status) {
    Write-Warning "Обнаружены незакоммиченные изменения:"
    git status --short
    
    $response = Read-Host "Сохранить изменения в stash? (y/n)"
    if ($response -eq "y" -or $response -eq "Y") {
        if ($DryRun) {
            Write-Info "[DRY RUN] git stash push -m 'Auto-stash before update from template'"
        } else {
            git stash push -m "Auto-stash before update from template $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
            Write-Success "Изменения сохранены в stash"
        }
        $stashed = $true
    } else {
        Write-Error "Обновление отменено. Закоммитьте или отмените изменения перед обновлением."
        exit 1
    }
} else {
    $stashed = $false
}

# Получение обновлений из upstream
Write-Info "Получение обновлений из upstream..."
if ($DryRun) {
    Write-Info "[DRY RUN] git fetch upstream"
} else {
    git fetch upstream
    Write-Success "Обновления получены"
}

# Проверка текущей ветки
$currentBranch = git branch --show-current
if ([string]::IsNullOrWhiteSpace($currentBranch)) {
    Write-Warning "Не на ветке. Переключение на main..."
    if (-not $DryRun) {
        git checkout -b main 2>$null
        if ($LASTEXITCODE -ne 0) {
            git checkout main
        }
    }
    $currentBranch = "main"
}

Write-Info "Текущая ветка: $currentBranch"

# Слияние изменений
Write-Info "Слияние изменений из upstream/main..."
if ($DryRun) {
    Write-Info "[DRY RUN] git merge upstream/main --no-edit"
} else {
    try {
        if ($AutoMerge) {
            git merge upstream/main --no-edit
        } else {
            git merge upstream/main --no-edit --no-ff
        }
        Write-Success "Изменения успешно объединены"
    } catch {
        Write-Warning "Обнаружены конфликты при слиянии"
        Write-Info "Разрешите конфликты вручную и выполните:"
        Write-Info "  git add ."
        Write-Info "  git commit"
        exit 1
    }
}

# Восстановление stash если был
if ($stashed) {
    Write-Info "Восстановление сохраненных изменений..."
    $response = Read-Host "Восстановить сохраненные изменения из stash? (y/n)"
    if ($response -eq "y" -or $response -eq "Y") {
        if ($DryRun) {
            Write-Info "[DRY RUN] git stash pop"
        } else {
            git stash pop
            Write-Success "Изменения восстановлены"
        }
    } else {
        Write-Info "Изменения остались в stash. Восстановите их позже командой: git stash pop"
    }
}

# Показ статистики
Write-Info "Статистика обновления:"
if (-not $DryRun) {
    git log --oneline --graph --decorate -10
}

Write-Success "Обновление завершено!"
Write-Info "Проверьте изменения перед push: git diff"
Write-Info "Для загрузки на GitHub: git push"












