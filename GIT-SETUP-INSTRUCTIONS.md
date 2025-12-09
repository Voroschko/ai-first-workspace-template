# Инструкция по настройке Git и загрузке проекта на GitHub

## Шаг 1: Установка Git

Если Git не установлен на вашем компьютере:

1. **Скачайте Git для Windows:**
   - Перейдите на https://git-scm.com/download/win
   - Скачайте установщик (автоматически определит вашу систему)
   - Или используйте прямой линк: https://github.com/git-for-windows/git/releases/latest

2. **Установите Git:**
   - Запустите установщик
   - Используйте настройки по умолчанию (можно оставить все галочки как есть)
   - После установки перезапустите PowerShell или Cursor

3. **Проверьте установку:**
   ```powershell
   git --version
   ```

## Шаг 2: Настройка Git (первый раз)

Если вы используете Git впервые, настройте ваше имя и email:

```powershell
git config --global user.name "Ваше Имя"
git config --global user.email "ваш.email@example.com"
```

**Важно:** Используйте email, который привязан к вашему GitHub аккаунту (если планируете использовать GitHub).

## Шаг 3: Создание репозитория на GitHub

1. **Войдите в GitHub:**
   - Перейдите на https://github.com
   - Войдите в свой аккаунт (или создайте новый)

2. **Создайте новый репозиторий:**
   - Нажмите кнопку "+" в правом верхнем углу
   - Выберите "New repository"
   - Введите название репозитория (например: `ai-first-workspace`)
   - Выберите Public или Private
   - **НЕ** добавляйте README, .gitignore или лицензию (мы уже создадим их)
   - Нажмите "Create repository"

3. **Скопируйте URL репозитория:**
   - GitHub покажет вам URL вида: `https://github.com/ваш-username/название-репозитория.git`
   - Или SSH URL: `git@github.com:ваш-username/название-репозитория.git`
   - Сохраните этот URL

## Шаг 4: Инициализация Git в проекте

Откройте PowerShell в папке проекта и выполните команды:

```powershell
# Перейдите в папку проекта (если еще не там)
cd "C:\Users\xante\Desktop\ai-first-workspace-template-main"

# Инициализируйте Git репозиторий
git init

# Добавьте все файлы
git add .

# Создайте первый коммит
git commit -m "Initial commit: AI First Workspace Template"
```

## Шаг 5: Подключение к удаленному репозиторию

```powershell
# Добавьте удаленный репозиторий (замените URL на ваш)
git remote add origin https://github.com/ваш-username/название-репозитория.git

# Проверьте, что все настроено правильно
git remote -v
```

## Шаг 6: Загрузка проекта на GitHub

```powershell
# Переименуйте ветку в main (если нужно)
git branch -M main

# Загрузите проект на GitHub
git push -u origin main
```

**Примечание:** При первом push GitHub может попросить авторизацию. Используйте:
- Personal Access Token (рекомендуется) - создайте в Settings → Developer settings → Personal access tokens
- Или GitHub Desktop для упрощенной работы

## Альтернатива: Использование GitHub Desktop

Если командная строка кажется сложной, используйте GitHub Desktop:

1. Скачайте: https://desktop.github.com/
2. Войдите в свой GitHub аккаунт
3. File → Add Local Repository → выберите папку проекта
4. Нажмите "Publish repository" для загрузки на GitHub

## Что дальше?

После успешной загрузки:
- Ваш проект будет доступен на GitHub
- Вы сможете делать изменения и загружать их через `git push`
- Другие смогут клонировать ваш репозиторий

## Полезные команды Git

```powershell
# Проверить статус изменений
git status

# Добавить изменения
git add .
git add имя-файла

# Создать коммит
git commit -m "Описание изменений"

# Загрузить изменения на GitHub
git push

# Скачать изменения с GitHub
git pull

# Посмотреть историю коммитов
git log
```

## Решение проблем

**Проблема:** "fatal: not a git repository"
- **Решение:** Убедитесь, что вы в правильной папке и выполнили `git init`

**Проблема:** "Permission denied" при push
- **Решение:** Проверьте авторизацию в GitHub, используйте Personal Access Token

**Проблема:** "Large files" ошибка
- **Решение:** Убедитесь, что `.gitignore` правильно настроен (не коммитьте node_modules, .env файлы и т.д.)












