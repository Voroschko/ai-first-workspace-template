#!/usr/bin/env python3
"""
Скрипт для извлечения контента из Notion страницы Go-Offer
и сохранения в структуру gofer-project
"""

import requests
import json
import os
import sys
from datetime import datetime
from pathlib import Path

# Добавляем путь к скриптам для импорта
sys.path.insert(0, str(Path(__file__).parent.parent / 'scripts' / 'notion-integration'))

try:
    from notion_fetch import NotionAPI, extract_page_id_from_url
except ImportError:
    # Если импорт не работает, определяем классы здесь
    class NotionAPI:
        def __init__(self, token=None):
            self.token = token or os.getenv('NOTION_TOKEN')
            self.base_url = "https://api.notion.com/v1"
            self.headers = {
                "Authorization": f"Bearer {self.token}",
                "Notion-Version": "2022-06-28",
                "Content-Type": "application/json"
            }
        
        def get_page_content(self, page_id):
            """Fetch page content from Notion"""
            try:
                url = f"{self.base_url}/pages/{page_id}"
                response = requests.get(url, headers=self.headers)
                response.raise_for_status()
                return response.json()
            except requests.exceptions.RequestException as e:
                print(f"Ошибка при получении страницы: {e}")
                return None
        
        def get_page_blocks(self, page_id):
            """Fetch all blocks from a Notion page"""
            all_blocks = []
            cursor = None
            
            while True:
                try:
                    url = f"{self.base_url}/blocks/{page_id}/children"
                    params = {"page_size": 100}
                    if cursor:
                        params["start_cursor"] = cursor
                    
                    response = requests.get(url, headers=self.headers, params=params)
                    response.raise_for_status()
                    data = response.json()
                    
                    all_blocks.extend(data.get('results', []))
                    
                    if not data.get('has_more'):
                        break
                    cursor = data.get('next_cursor')
                except requests.exceptions.RequestException as e:
                    print(f"Ошибка при получении блоков: {e}")
                    break
            
            return {'results': all_blocks}
        
        def extract_text_from_blocks(self, blocks_data):
            """Extract text content from Notion blocks"""
            if not blocks_data or 'results' not in blocks_data:
                return ""
            
            text_content = []
            
            for block in blocks_data['results']:
                block_type = block.get('type', '')
                
                if block_type == 'paragraph':
                    rich_text = block.get('paragraph', {}).get('rich_text', [])
                    text = ''.join([t.get('plain_text', '') for t in rich_text])
                    if text:
                        text_content.append(text)
                
                elif block_type == 'heading_1':
                    rich_text = block.get('heading_1', {}).get('rich_text', [])
                    text = ''.join([t.get('plain_text', '') for t in rich_text])
                    if text:
                        text_content.append(f"# {text}")
                
                elif block_type == 'heading_2':
                    rich_text = block.get('heading_2', {}).get('rich_text', [])
                    text = ''.join([t.get('plain_text', '') for t in rich_text])
                    if text:
                        text_content.append(f"## {text}")
                
                elif block_type == 'heading_3':
                    rich_text = block.get('heading_3', {}).get('rich_text', [])
                    text = ''.join([t.get('plain_text', '') for t in rich_text])
                    if text:
                        text_content.append(f"### {text}")
                
                elif block_type == 'bulleted_list_item':
                    rich_text = block.get('bulleted_list_item', {}).get('rich_text', [])
                    text = ''.join([t.get('plain_text', '') for t in rich_text])
                    if text:
                        text_content.append(f"- {text}")
                
                elif block_type == 'numbered_list_item':
                    rich_text = block.get('numbered_list_item', {}).get('rich_text', [])
                    text = ''.join([t.get('plain_text', '') for t in rich_text])
                    if text:
                        text_content.append(f"1. {text}")
                
                elif block_type == 'quote':
                    rich_text = block.get('quote', {}).get('rich_text', [])
                    text = ''.join([t.get('plain_text', '') for t in rich_text])
                    if text:
                        text_content.append(f"> {text}")
                
                elif block_type == 'code':
                    rich_text = block.get('code', {}).get('rich_text', [])
                    language = block.get('code', {}).get('language', '')
                    code_text = ''.join([t.get('plain_text', '') for t in rich_text])
                    if code_text:
                        text_content.append(f"```{language}\n{code_text}\n```")
                
                # Обработка дочерних страниц
                elif block_type == 'child_page':
                    page_title = block.get('child_page', {}).get('title', 'Untitled')
                    child_page_id = block.get('id')
                    text_content.append(f"\n## {page_title}\n")
                    # Рекурсивно получаем контент дочерней страницы
                    child_blocks = self.get_page_blocks(child_page_id)
                    child_content = self.extract_text_from_blocks(child_blocks)
                    if child_content:
                        text_content.append(child_content)
            
            return '\n'.join(text_content)

def extract_page_id_from_url(url):
    """Extract page ID from Notion URL"""
    import re
    
    # Удаляем параметры запроса
    url = url.split('?')[0]
    
    # Извлекаем последнюю часть URL
    parts = url.split('/')
    last_part = parts[-1]
    
    # Ищем UUID в формате: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    uuid_pattern = r'([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})'
    match = re.search(uuid_pattern, last_part, re.IGNORECASE)
    
    if match:
        # Форматируем в правильный UUID формат
        page_id = f"{match.group(1)}-{match.group(2)}-{match.group(3)}-{match.group(4)}-{match.group(5)}"
        return page_id
    else:
        # Если UUID не найден, пытаемся извлечь из последней части
        # В формате Title-{id} или просто {id}
        if '-' in last_part:
            # Берем последнюю часть после дефиса
            potential_id = last_part.split('-')[-1]
            # Проверяем, похоже ли это на UUID (32 символа hex)
            if len(potential_id) == 32 and all(c in '0123456789abcdef' for c in potential_id.lower()):
                # Форматируем в UUID
                return f"{potential_id[:8]}-{potential_id[8:12]}-{potential_id[12:16]}-{potential_id[16:20]}-{potential_id[20:]}"
        
        return last_part

def main():
    notion_url = "https://www.notion.so/Go-Offer-101329f89df2800992fdc5964bcaa5a7"
    
    # Проверяем наличие токена
    token = os.getenv('NOTION_TOKEN')
    if not token:
        print("⚠️  ВНИМАНИЕ: NOTION_TOKEN не установлен!")
        print("\nДля получения данных из Notion необходимо:")
        print("1. Перейдите на https://www.notion.so/my-integrations")
        print("2. Создайте новую интеграцию")
        print("3. Скопируйте Internal Integration Token")
        print("4. Поделитесь доступом к странице Go-Offer с этой интеграцией")
        print("5. Установите токен: set NOTION_TOKEN=your_token (Windows) или export NOTION_TOKEN=your_token (Linux/Mac)")
        print("\nИли вы можете предоставить содержимое страницы другим способом.")
        return
    
    print(f"📥 Извлекаю контент из: {notion_url}")
    
    # Извлекаем page ID
    page_id = extract_page_id_from_url(notion_url)
    print(f"📄 Page ID: {page_id}")
    
    # Инициализируем Notion API
    notion = NotionAPI(token)
    
    # Получаем данные страницы
    print("⏳ Получаю содержимое страницы...")
    page_data = notion.get_page_content(page_id)
    
    if not page_data:
        print("❌ Не удалось получить данные страницы")
        print("Проверьте:")
        print("1. Правильность NOTION_TOKEN")
        print("2. Что интеграция имеет доступ к странице Go-Offer")
        return
    
    # Получаем блоки страницы
    print("⏳ Получаю блоки страницы...")
    blocks_data = notion.get_page_blocks(page_id)
    
    if not blocks_data:
        print("❌ Не удалось получить блоки страницы")
        return
    
    # Извлекаем текст
    print("⏳ Извлекаю текстовый контент...")
    content = notion.extract_text_from_blocks(blocks_data)
    
    # Получаем заголовок страницы
    page_title = "Go-Offer"
    if 'properties' in page_data:
        for prop_name, prop_value in page_data['properties'].items():
            if prop_value.get('type') == 'title' and prop_value.get('title'):
                page_title = ''.join([t.get('plain_text', '') for t in prop_value['title']])
                break
    
    # Создаем markdown контент
    project_root = Path(__file__).parent
    output_file = project_root / "info" / "notion-content.md"
    
    markdown_content = f"""# {page_title}

**Источник:** {notion_url}  
**Извлечено:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

---

{content}

---

*Контент извлечен из Notion с помощью fetch-notion-content.py*
"""
    
    # Сохраняем в файл
    output_file.parent.mkdir(parents=True, exist_ok=True)
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(markdown_content)
    
    print(f"✅ Контент сохранен в: {output_file}")
    print(f"📊 Заголовок: {page_title}")
    print(f"📏 Длина контента: {len(content)} символов")

if __name__ == "__main__":
    main()

