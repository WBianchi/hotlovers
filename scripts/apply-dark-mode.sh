#!/bin/bash

echo "🌙 Aplicando Dark Mode em todos os componentes..."

# Diretórios para aplicar
DIRS="src/components/admin src/app/admin"

# Cores de fundo
echo "📦 Aplicando bg-white..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/ bg-white / bg-white dark:bg-gray-800 /g' {} +
find $DIRS -name "*.tsx" -type f -exec sed -i 's/"bg-white "/"bg-white dark:bg-gray-800 "/g' {} +
find $DIRS -name "*.tsx" -type f -exec sed -i "s/'bg-white '/'bg-white dark:bg-gray-800 '/g" {} +

echo "📦 Aplicando bg-gray-50..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/ bg-gray-50 / bg-gray-50 dark:bg-gray-900 /g' {} +
find $DIRS -name "*.tsx" -type f -exec sed -i 's/"bg-gray-50 "/"bg-gray-50 dark:bg-gray-900 "/g' {} +

echo "📦 Aplicando bg-gray-100..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/ bg-gray-100 / bg-gray-100 dark:bg-gray-700 /g' {} +
find $DIRS -name "*.tsx" -type f -exec sed -i 's/"bg-gray-100 "/"bg-gray-100 dark:bg-gray-700 "/g' {} +

echo "📦 Aplicando bg-gray-200..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/ bg-gray-200 / bg-gray-200 dark:bg-gray-600 /g' {} +

# Textos
echo "✍️ Aplicando text-gray-800..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/ text-gray-800 / text-gray-800 dark:text-gray-100 /g' {} +
find $DIRS -name "*.tsx" -type f -exec sed -i 's/"text-gray-800 "/"text-gray-800 dark:text-gray-100 "/g' {} +
find $DIRS -name "*.tsx" -type f -exec sed -i "s/'text-gray-800 '/'text-gray-800 dark:text-gray-100 '/g" {} +

echo "✍️ Aplicando text-gray-700..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/ text-gray-700 / text-gray-700 dark:text-gray-300 /g' {} +
find $DIRS -name "*.tsx" -type f -exec sed -i 's/"text-gray-700 "/"text-gray-700 dark:text-gray-300 "/g' {} +
find $DIRS -name "*.tsx" -type f -exec sed -i "s/'text-gray-700 '/'text-gray-700 dark:text-gray-300 '/g" {} +

echo "✍️ Aplicando text-gray-600..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/ text-gray-600 / text-gray-600 dark:text-gray-400 /g' {} +
find $DIRS -name "*.tsx" -type f -exec sed -i 's/"text-gray-600 "/"text-gray-600 dark:text-gray-400 "/g' {} +

echo "✍️ Aplicando text-gray-500..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/ text-gray-500 / text-gray-500 dark:text-gray-400 /g' {} +
find $DIRS -name "*.tsx" -type f -exec sed -i 's/"text-gray-500 "/"text-gray-500 dark:text-gray-400 "/g' {} +

echo "✍️ Aplicando text-gray-400..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/ text-gray-400 / text-gray-400 dark:text-gray-500 /g' {} +

# Bordas
echo "🔲 Aplicando border-gray-200..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/ border-gray-200 / border-gray-200 dark:border-gray-700 /g' {} +
find $DIRS -name "*.tsx" -type f -exec sed -i 's/"border-gray-200 "/"border-gray-200 dark:border-gray-700 "/g' {} +
find $DIRS -name "*.tsx" -type f -exec sed -i "s/'border-gray-200 '/'border-gray-200 dark:border-gray-700 '/g" {} +

echo "🔲 Aplicando border-gray-200/50..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/border-gray-200\/50/border-gray-200\/50 dark:border-gray-700\/50/g' {} +

echo "🔲 Aplicando border-gray-100..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/ border-gray-100 / border-gray-100 dark:border-gray-700 /g' {} +
find $DIRS -name "*.tsx" -type f -exec sed -i 's/"border-gray-100 "/"border-gray-100 dark:border-gray-700 "/g' {} +

# Hovers
echo "🎨 Aplicando hover:bg-gray-50..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/hover:bg-gray-50/hover:bg-gray-50 dark:hover:bg-gray-800/g' {} +

echo "🎨 Aplicando hover:bg-gray-100..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/hover:bg-gray-100/hover:bg-gray-100 dark:hover:bg-gray-700/g' {} +

echo "🎨 Aplicando hover:bg-gray-200..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/hover:bg-gray-200/hover:bg-gray-200 dark:hover:bg-gray-600/g' {} +

# Casos específicos
echo "🎯 Aplicando casos específicos..."
find $DIRS -name "*.tsx" -type f -exec sed -i 's/border-2 border-white/border-2 border-white dark:border-gray-800/g' {} +

echo "✅ Dark Mode aplicado com sucesso em todos os componentes!"
echo "🎨 Componentes atualizados em: $DIRS"
