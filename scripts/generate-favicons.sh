#!/bin/bash

# Script para gerar favicons a partir do SVG
# Requer ImageMagick instalado: sudo apt install imagemagick

cd "$(dirname "$0")/.."

echo "🎨 Gerando favicons..."

# Verificar se ImageMagick está instalado
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick não está instalado!"
    echo "Instale com: sudo apt install imagemagick"
    exit 1
fi

# Gerar favicon.ico (16x16, 32x32, 48x48)
echo "📦 Gerando favicon.ico..."
convert public/favicon.svg -resize 16x16 /tmp/favicon-16.png
convert public/favicon.svg -resize 32x32 /tmp/favicon-32.png
convert public/favicon.svg -resize 48x48 /tmp/favicon-48.png
convert /tmp/favicon-16.png /tmp/favicon-32.png /tmp/favicon-48.png public/favicon.ico

# Gerar apple-touch-icon.png (180x180)
echo "🍎 Gerando apple-touch-icon.png..."
convert public/favicon.svg -resize 180x180 public/apple-touch-icon.png

# Limpar arquivos temporários
rm /tmp/favicon-*.png

echo "✅ Favicons gerados com sucesso!"
echo "   - public/favicon.svg"
echo "   - public/favicon.ico"
echo "   - public/apple-touch-icon.png"
