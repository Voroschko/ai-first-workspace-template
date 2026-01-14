#!/usr/bin/env python3
"""
Скрипт для обработки экспорта из Notion (ExportBlock)
Извлекает контент и организует его в структуру проекта Gofer
"""

import zipfile
import os
import shutil
from pathlib import Path
import json
import re
from datetime import datetime

def process_notion_export(zip_path, output_dir):
    """Обрабатывает экспорт из Notion и организует файлы"""
    
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)
    
    print(f"📦 Обрабатываю экспорт Notion: {zip_path}")
    print(f"📁 Выходная папка: {output_path}")
    
    # Пути для организации файлов
    info_dir = output_path / "info"
    content_dir = output_path / "content"
    design_dir = output_path / "design"
    references_dir = output_path / "references"
    
    for dir_path in [info_dir, content_dir, design_dir, references_dir]:
        dir_path.mkdir(parents=True, exist_ok=True)
    
    try:
        with zipfile.ZipFile(zip_path, 'r') as zip_ref:
            # Получаем список всех файлов
            file_list = zip_ref.namelist()
            print(f"\n📋 Найдено файлов: {len(file_list)}")
            
            # Распаковываем во временную папку
            temp_dir = output_path / "_temp_extracted"
            if temp_dir.exists():
                shutil.rmtree(temp_dir)
            temp_dir.mkdir(parents=True, exist_ok=True)
            
            zip_ref.extractall(temp_dir)
            print(f"✅ Файлы распакованы во временную папку")
            
            # Анализируем структуру
            markdown_files = []
            image_files = []
            other_files = []
            
            for root, dirs, files in os.walk(temp_dir):
                for file in files:
                    file_path = Path(root) / file
                    rel_path = file_path.relative_to(temp_dir)
                    ext = file_path.suffix.lower()
                    
                    # Классифицируем файлы
                    if ext in ['.md', '.markdown']:
                        markdown_files.append((file_path, rel_path))
                    elif ext in ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp']:
                        image_files.append((file_path, rel_path))
                    else:
                        other_files.append((file_path, rel_path))
            
            print(f"\n📊 Анализ файлов:")
            print(f"  📄 Markdown файлы: {len(markdown_files)}")
            print(f"  🖼️  Изображения: {len(image_files)}")
            print(f"  📎 Другие файлы: {len(other_files)}")
            
            # Обрабатываем markdown файлы
            print(f"\n📄 Обрабатываю Markdown файлы...")
            all_content = []
            
            for md_file, rel_path in sorted(markdown_files):
                try:
                    with open(md_file, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Определяем, куда переместить файл
                    file_name = md_file.name
                    if 'readme' in file_name.lower() or file_name.lower() == 'index.md':
                        # Основной контент
                        target_file = info_dir / "notion-export.md"
                        # Объединяем все содержимое
                        all_content.append(f"\n\n# {file_name}\n\n{content}")
                    else:
                        # Сохраняем отдельно
                        target_file = content_dir / file_name
                        all_content.append(f"\n\n---\n\n# {file_name}\n\n{content}")
                    
                    # Копируем файл
                    shutil.copy2(md_file, target_file)
                    print(f"  ✓ {file_name} → {target_file.relative_to(output_path)}")
                    
                except Exception as e:
                    print(f"  ✗ Ошибка при обработке {md_file.name}: {e}")
            
            # Объединяем весь контент в один файл
            if all_content:
                combined_content = f"""# Экспорт из Notion - Go-Offer

**Источник:** Экспорт блоков из Notion  
**Дата обработки:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
**Файл экспорта:** ExportBlock-e616eda8-72ec-4dae-97da-80c3f6750d08-Part-1.zip

---

{''.join(all_content)}

---

*Контент извлечен из Notion экспорта*
"""
                
                combined_file = info_dir / "notion-export-combined.md"
                with open(combined_file, 'w', encoding='utf-8') as f:
                    f.write(combined_content)
                print(f"\n✅ Объединенный контент сохранен в: {combined_file.relative_to(output_path)}")
            
            # Обрабатываем изображения
            print(f"\n🖼️  Обрабатываю изображения...")
            images_dest = design_dir / "notion-export-images"
            images_dest.mkdir(parents=True, exist_ok=True)
            
            for img_file, rel_path in image_files:
                try:
                    # Сохраняем оригинальную структуру папок
                    target_file = images_dest / rel_path
                    target_file.parent.mkdir(parents=True, exist_ok=True)
                    shutil.copy2(img_file, target_file)
                    print(f"  ✓ {rel_path}")
                except Exception as e:
                    print(f"  ✗ Ошибка при копировании {img_file.name}: {e}")
            
            # Обрабатываем другие файлы
            if other_files:
                print(f"\n📎 Обрабатываю другие файлы...")
                other_dest = content_dir / "notion-export-other"
                other_dest.mkdir(parents=True, exist_ok=True)
                
                for other_file, rel_path in other_files:
                    try:
                        target_file = other_dest / rel_path
                        target_file.parent.mkdir(parents=True, exist_ok=True)
                        shutil.copy2(other_file, target_file)
                    except Exception as e:
                        print(f"  ✗ Ошибка при копировании {other_file.name}: {e}")
            
            # Сохраняем список файлов
            files_list_path = info_dir / "_export-files-list.txt"
            with open(files_list_path, 'w', encoding='utf-8') as f:
                f.write("Список всех файлов из экспорта Notion:\n")
                f.write("=" * 60 + "\n\n")
                f.write(f"Всего файлов: {len(file_list)}\n\n")
                f.write("Markdown файлы:\n")
                for md_file, rel_path in markdown_files:
                    f.write(f"  - {rel_path}\n")
                f.write(f"\nИзображения ({len(image_files)}):\n")
                for img_file, rel_path in image_files[:50]:  # Первые 50
                    f.write(f"  - {rel_path}\n")
                if len(image_files) > 50:
                    f.write(f"  ... и еще {len(image_files) - 50} изображений\n")
            
            print(f"\n💾 Список файлов сохранен: {files_list_path.relative_to(output_path)}")
            
            # Удаляем временную папку
            shutil.rmtree(temp_dir)
            print(f"\n🗑️  Временная папка удалена")
            
            print(f"\n✅ Обработка завершена успешно!")
            print(f"\n📂 Результаты сохранены в:")
            print(f"  - {info_dir.relative_to(output_path)}/")
            print(f"  - {content_dir.relative_to(output_path)}/")
            print(f"  - {design_dir.relative_to(output_path)}/")
            
            return True
            
    except FileNotFoundError:
        print(f"❌ Ошибка: Файл не найден: {zip_path}")
        return False
    except zipfile.BadZipFile:
        print(f"❌ Ошибка: Неверный формат ZIP файла")
        return False
    except Exception as e:
        print(f"❌ Ошибка при обработке: {e}")
        import traceback
        traceback.print_exc()
        return False

def main():
    # Путь к экспорту Notion
    zip_path = Path(__file__).parent.parent.parent / "ExportBlock-e616eda8-72ec-4dae-97da-80c3f6750d08-Part-1.zip"
    
    # Альтернативные пути
    if not zip_path.exists():
        zip_path = Path("C:") / "Users" / "xante" / "Desktop" / "ExportBlock-e616eda8-72ec-4dae-97da-80c3f6750d08-Part-1.zip"
    
    if not zip_path.exists():
        print("❌ ZIP файл экспорта не найден!")
        print("Искал по пути:", zip_path)
        return
    
    # Выходная папка
    output_dir = Path(__file__).parent
    
    process_notion_export(zip_path, output_dir)

if __name__ == "__main__":
    main()


























