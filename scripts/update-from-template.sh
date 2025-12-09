#!/bin/bash
# Скрипт для обновления проекта из оригинального шаблона (Linux/Mac)
# Использование: bash scripts/update-from-template.sh

set -e

UPSTREAM_URL=""
AUTO_MERGE=false
DRY_RUN=false

# Парсинг аргументов
while [[ $# -gt 0 ]]; do
    case $1 in
        --url)
            UPSTREAM_URL="$2"
            shift 2
            ;;
        --auto-merge)
            AUTO_MERGE=true
            shift
            ;;
        --dry-run)
            DRY_RUN=true
            shift
            ;;
        *)
            echo "Неизвестный параметр: $1"
            exit 1
            ;;
    esac
done

# Функции для вывода
info() {
    echo "ℹ️  $1"
}

success() {
    echo "✅ $1"
}

warning() {
    echo "⚠️  $1"
}

error() {
    echo "❌ $1" >&2
}

# Проверка Git
if ! command -v git &> /dev/null; then
    error "Git не установлен"
    exit 1
fi

# Проверка Git репозитория
if [ ! -d ".git" ]; then
    error "Это не Git репозиторий. Сначала выполните 'git init'"
    exit 1
fi

# Чтение конфигурации
CONFIG_FILE=".git-upstream-config"
if [ -f "$CONFIG_FILE" ]; then
    if command -v jq &> /dev/null; then
        UPSTREAM_URL=$(jq -r '.upstreamUrl' "$CONFIG_FILE" 2>/dev/null || echo "")
    fi
    if [ -n "$UPSTREAM_URL" ]; then
        info "Используется URL из конфигурации: $UPSTREAM_URL"
    fi
fi

# Запрос URL если не указан
if [ -z "$UPSTREAM_URL" ]; then
    warning "URL оригинального репозитория шаблона не указан"
    read -p "Введите URL оригинального репозитория шаблона: " UPSTREAM_URL
    if [ -z "$UPSTREAM_URL" ]; then
        error "URL не может быть пустым"
        exit 1
    fi
fi

# Проверка upstream remote
if ! git remote | grep -q "^upstream$"; then
    info "Добавление upstream remote..."
    if [ "$DRY_RUN" = false ]; then
        git remote add upstream "$UPSTREAM_URL"
        success "Upstream remote добавлен"
        
        # Сохранение конфига
        if command -v jq &> /dev/null; then
            echo "{\"upstreamUrl\": \"$UPSTREAM_URL\", \"lastUpdated\": \"$(date '+%Y-%m-%d %H:%M:%S')\"}" | jq . > "$CONFIG_FILE"
        fi
    else
        info "[DRY RUN] git remote add upstream $UPSTREAM_URL"
    fi
else
    info "Upstream remote уже настроен"
    if [ "$DRY_RUN" = false ]; then
        git remote set-url upstream "$UPSTREAM_URL"
    fi
fi

# Проверка изменений
info "Проверка незакоммиченных изменений..."
if [ -n "$(git status --porcelain)" ]; then
    warning "Обнаружены незакоммиченные изменения:"
    git status --short
    
    read -p "Сохранить изменения в stash? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        if [ "$DRY_RUN" = false ]; then
            git stash push -m "Auto-stash before update from template $(date '+%Y-%m-%d %H:%M:%S')"
            success "Изменения сохранены в stash"
        else
            info "[DRY RUN] git stash push"
        fi
        STASHED=true
    else
        error "Обновление отменено. Закоммитьте или отмените изменения перед обновлением."
        exit 1
    fi
else
    STASHED=false
fi

# Получение обновлений
info "Получение обновлений из upstream..."
if [ "$DRY_RUN" = false ]; then
    git fetch upstream
    success "Обновления получены"
else
    info "[DRY RUN] git fetch upstream"
fi

# Проверка текущей ветки
CURRENT_BRANCH=$(git branch --show-current)
if [ -z "$CURRENT_BRANCH" ]; then
    warning "Не на ветке. Переключение на main..."
    if [ "$DRY_RUN" = false ]; then
        git checkout -b main 2>/dev/null || git checkout main
    fi
    CURRENT_BRANCH="main"
fi

info "Текущая ветка: $CURRENT_BRANCH"

# Слияние
info "Слияние изменений из upstream/main..."
if [ "$DRY_RUN" = false ]; then
    if [ "$AUTO_MERGE" = true ]; then
        git merge upstream/main --no-edit || {
            warning "Обнаружены конфликты при слиянии"
            info "Разрешите конфликты вручную и выполните:"
            info "  git add ."
            info "  git commit"
            exit 1
        }
    else
        git merge upstream/main --no-edit --no-ff || {
            warning "Обнаружены конфликты при слиянии"
            info "Разрешите конфликты вручную и выполните:"
            info "  git add ."
            info "  git commit"
            exit 1
        }
    fi
    success "Изменения успешно объединены"
else
    info "[DRY RUN] git merge upstream/main"
fi

# Восстановление stash
if [ "$STASHED" = true ]; then
    info "Восстановление сохраненных изменений..."
    read -p "Восстановить сохраненные изменения из stash? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        if [ "$DRY_RUN" = false ]; then
            git stash pop
            success "Изменения восстановлены"
        else
            info "[DRY RUN] git stash pop"
        fi
    else
        info "Изменения остались в stash. Восстановите их позже: git stash pop"
    fi
fi

# Статистика
info "Статистика обновления:"
if [ "$DRY_RUN" = false ]; then
    git log --oneline --graph --decorate -10
fi

success "Обновление завершено!"
info "Проверьте изменения перед push: git diff"
info "Для загрузки на GitHub: git push"












