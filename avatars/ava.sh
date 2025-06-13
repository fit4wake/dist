#!/bin/bash

# Создать папку для хранения
mkdir -p avatars

# Массив URL-ов
urls=(
  "https://mighty.tools/mockmind-api/content/human/80.jpg"
  "https://mighty.tools/mockmind-api/content/human/125.jpg"
  "https://mighty.tools/mockmind-api/content/human/92.jpg"
  "https://mighty.tools/mockmind-api/content/human/108.jpg"
  "https://mighty.tools/mockmind-api/content/human/91.jpg"
  "https://mighty.tools/mockmind-api/content/human/128.jpg"
  "https://mighty.tools/mockmind-api/content/human/112.jpg"
  "https://mighty.tools/mockmind-api/content/human/124.jpg"
  "https://mighty.tools/mockmind-api/content/human/122.jpg"
  "https://mighty.tools/mockmind-api/content/human/129.jpg"
  "https://mighty.tools/mockmind-api/content/human/98.jpg"
  "https://mighty.tools/mockmind-api/content/human/87.jpg"
  "https://mighty.tools/mockmind-api/content/human/57.jpg"
  "https://mighty.tools/mockmind-api/content/human/127.jpg"
  "https://mighty.tools/mockmind-api/content/human/80.jpg"
  "https://mighty.tools/mockmind-api/content/human/118.jpg"
  "https://mighty.tools/mockmind-api/content/human/5.jpg"
  "https://mighty.tools/mockmind-api/content/human/96.jpg"
  "https://mighty.tools/mockmind-api/content/human/107.jpg"
  "https://mighty.tools/mockmind-api/content/human/80.jpg"
  "https://mighty.tools/mockmind-api/content/human/113.jpg"
  "https://mighty.tools/mockmind-api/content/human/113.jpg"
  "https://mighty.tools/mockmind-api/content/human/104.jpg"
)

# Скачивание
for url in "${urls[@]}"; do
  # Извлекаем номер из URL
  filename=$(basename "$url")
  echo "📥 Скачиваю: $url -> avatars/$filename"
  curl -s -o "avatars/$filename" "$url" || echo "❌ Ошибка при скачивании $url"
done

echo "✅ Готово! Скачано ${#urls[@]} изображений в папку avatars/"
