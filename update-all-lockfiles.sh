#!/bin/bash

# Lista de librerías
LIBRARIES=(
    "calcula-rfc"
    "calculadora-isr" 
    "calculadora-nomina-mx"
    "mx-bancos"
    "mx-codigos-postales"
    "mx-feriados"
    "mx-nombres"
    "validador-fiscal-mx"
)

echo "🔧 ACTUALIZANDO PACKAGE-LOCK.JSON EN TODOS LOS REPOS..."
echo "======================================================="

update_library() {
    local lib_name=$1
    echo ""
    echo "📦 Actualizando: $lib_name"
    echo "--------------------------------"
    
    cd "$lib_name" || return 1
    
    # Eliminar package-lock.json y node_modules
    echo "  🗑️  Eliminando package-lock.json y node_modules..."
    rm -rf package-lock.json node_modules dist
    
    # Actualizar workflow para usar npm install en lugar de npm ci
    echo "  🔧 Actualizando workflow de GitHub Actions..."
    if [ -f .github/workflows/ci-cd.yml ]; then
        sed -i '' 's/npm ci/npm install/g' .github/workflows/ci-cd.yml
        sed -i '' 's/node-version: \[16, 18, 20\]/node-version: [18, 20]/' .github/workflows/ci-cd.yml
    fi
    
    # Instalar dependencias para generar nuevo package-lock.json
    echo "  📦 Instalando dependencias..."
    npm install --no-audit --no-fund
    
    # Hacer commit y push
    echo "  📝 Haciendo commit..."
    git add .
    if ! git diff --cached --quiet; then
        git commit -m "fix: update package-lock.json and CI workflow

- Regenerate package-lock.json with correct ESLint v8.57.0 dependencies
- Update CI workflow to use npm install instead of npm ci
- Remove Node.js 16 from CI matrix for better compatibility"
        
        echo "  🚀 Pushing cambios..."
        git push origin main
    else
        echo "  ℹ️  No hay cambios nuevos"
    fi
    
    echo "  ✅ $lib_name actualizado"
    cd ..
}

# Procesar todas las librerías
for lib in "${LIBRARIES[@]}"; do
    if [ -d "$lib" ]; then
        update_library "$lib"
    else
        echo "⚠️  Directorio $lib no encontrado, saltando..."
    fi
done

echo ""
echo "🎉 TODOS LOS PACKAGE-LOCK.JSON ACTUALIZADOS!"
echo "============================================="
echo ""
echo "🔍 VERIFICA LOS PIPELINES:"
for lib in "${LIBRARIES[@]}"; do
    echo "- https://github.com/GerardoLucero/$lib/actions"
done
