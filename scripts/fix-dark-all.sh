#!/bin/bash

echo "🌙 APLICANDO DARK MODE EM TODAS AS PÁGINAS DO ADMIN..."

# Lista de diretórios
DIRS=(
  "src/components/admin/dashboard"
  "src/components/admin/assinaturas"
  "src/components/admin/modelos"
  "src/components/admin/assinantes"
  "src/components/admin/afiliados"
  "src/components/admin/analytics"
  "src/components/admin/comissoes"
  "src/components/admin/pagamentos"
  "src/components/admin/chat"
  "src/components/admin/integracoes"
  "src/components/admin/relatorios"
  "src/components/admin/configuracoes"
)

for DIR in "${DIRS[@]}"; do
  if [ -d "$DIR" ]; then
    echo "📂 Processando: $DIR"
    
    # Aplicar em todos os arquivos .tsx do diretório
    find "$DIR" -name "*.tsx" -type f -exec sed -i \
      -e 's/className="bg-white /className="bg-white dark:bg-gray-800 /g' \
      -e 's/className="bg-gray-50 /className="bg-gray-50 dark:bg-gray-900 /g' \
      -e 's/className="bg-gray-100 /className="bg-gray-100 dark:bg-gray-700 /g' \
      -e 's/className="text-gray-800 /className="text-gray-800 dark:text-gray-100 /g' \
      -e 's/className="text-gray-700 /className="text-gray-700 dark:text-gray-300 /g' \
      -e 's/className="text-gray-600 /className="text-gray-600 dark:text-gray-400 /g' \
      -e 's/className="text-gray-500 /className="text-gray-500 dark:text-gray-400 /g' \
      -e 's/className="border-gray-200 /className="border-gray-200 dark:border-gray-700 /g' \
      -e 's/border-gray-200\/50/border-gray-200\/50 dark:border-gray-700\/50/g' \
      -e 's/ bg-white rounded/ bg-white dark:bg-gray-800 rounded/g' \
      -e 's/ bg-gray-50 rounded/ bg-gray-50 dark:bg-gray-900 rounded/g' \
      -e 's/ bg-gray-100 rounded/ bg-gray-100 dark:bg-gray-700 rounded/g' \
      -e 's/ text-gray-800"/ text-gray-800 dark:text-gray-100"/g' \
      -e 's/ text-gray-700"/ text-gray-700 dark:text-gray-300"/g' \
      -e 's/ text-gray-600"/ text-gray-600 dark:text-gray-400"/g' \
      -e 's/ text-gray-500"/ text-gray-500 dark:text-gray-400"/g' \
      -e 's/ border-gray-200"/ border-gray-200 dark:border-gray-700"/g' \
      -e 's/ border-gray-100"/ border-gray-100 dark:border-gray-700"/g' \
      -e 's/hover:bg-gray-50/hover:bg-gray-50 dark:hover:bg-gray-800/g' \
      -e 's/hover:bg-gray-100/hover:bg-gray-100 dark:hover:bg-gray-700/g' \
      {} +
  fi
done

echo ""
echo "✅ DARK MODE APLICADO EM TODAS AS PÁGINAS!"
echo "🎨 Total de diretórios processados: ${#DIRS[@]}"
