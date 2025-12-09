#!/usr/bin/env python3
"""
Скрипт для распаковки и анализа содержимого ZIP файла Go-Offer
"""

import zipfile
import os
from pathlib import Path
import json

def extract_and_analyze_zip(zip_path, extract_to):
    """Распаковывает ZIP файл и анализирует содержимое"""
    
    extract_path = Path(extract_to)
    extract_path.mkdir(parents=True, exist_ok=True)
    
    print(f"📦 Распаковываю: {zip_path}")
    print(f"📁 В папку: {extract_path}")
    
    try:
        with zipfile.ZipFile(zip_path, 'r') as zip_ref:
            # Получаем список всех файлов
            file_list = zip_ref.namelist()
            print(f"\n📋 Найдено файлов: {len(file_list)}")
            
            # Распаковываем все файлы
            zip_ref.extractall(extract_path)
            print(f"✅ Файлы распакованы")
            
            # Анализируем структуру
            print("\n📊 Структура архива:")
            print("-" * 50)
            
            # Группируем по типам файлов
            file_types = {}
            for file in file_list:
                ext = Path(file).suffix.lower()
                if ext:
                    file_types[ext] = file_types.get(ext, 0) + 1
            
            print("\n📄 Типы файлов:")
            for ext, count in sorted(file_types.items(), key=lambda x: -x[1]):
                print(f"  {ext or '(без расширения)'}: {count} файл(ов)")
            
            # Показываем основные папки
            folders = set()
            for file in file_list:
                parts = file.split('/')
                if len(parts) > 1:
                    folders.add(parts[0])
            
            if folders:
                print(f"\n📁 Основные папки ({len(folders)}):")
                for folder in sorted(folders):
                    print(f"  - {folder}")
            
            # Показываем первые 20 файлов
            print(f"\n📄 Первые файлы:")
            for file in file_list[:20]:
                size = os.path.getsize(extract_path / file) if (extract_path / file).exists() else 0
                size_kb = size / 1024
                print(f"  - {file} ({size_kb:.1f} KB)")
            
            if len(file_list) > 20:
                print(f"  ... и еще {len(file_list) - 20} файл(ов)")
            
            # Сохраняем список файлов
            files_list_path = extract_path / "_files_list.txt"
            with open(files_list_path, 'w', encoding='utf-8') as f:
                f.write("Список всех файлов в архиве:\n")
                f.write("=" * 50 + "\n\n")
                for file in file_list:
                    f.write(f"{file}\n")
            
            print(f"\n💾 Список всех файлов сохранен в: {files_list_path}")
            
            return True
            
    except FileNotFoundError:
        print(f"❌ Ошибка: Файл не найден: {zip_path}")
        return False
    except zipfile.BadZipFile:
        print(f"❌ Ошибка: Неверный формат ZIP файла")
        return False
    except Exception as e:
        print(f"❌ Ошибка при распаковке: {e}")
        return False

def main():
    # Путь к ZIP файлу
    zip_path = Path(__file__).parent.parent.parent / "КП" / "Go Offer NEW (1).zip"
    
    # Путь для распаковки
    extract_to = Path(__file__).parent / "extracted"
    
    # Альтернативные пути
    alternative_paths = [
        zip_path,
        Path("..") / "КП" / "Go Offer NEW (1).zip",
        Path("C:") / "Users" / "xante" / "Desktop" / "КП" / "Go Offer NEW (1).zip",
    ]
    
    zip_file = None
    for path in alternative_paths:
        if path.exists():
            zip_file = path
            break
    
    if not zip_file:
        print("❌ ZIP файл не найден по указанным путям:")
        for path in alternative_paths:
            print(f"   - {path}")
        print("\n💡 Укажите правильный путь к файлу 'Go Offer NEW (1).zip'")
        return
    
    extract_and_analyze_zip(zip_file, extract_to)

if __name__ == "__main__":
    main()



















