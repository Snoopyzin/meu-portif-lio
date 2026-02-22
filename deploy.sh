#!/bin/bash

# 🚀 Script de Deploy - Portfólio GitHub Pages
# Execute este arquivo para fazer o deploy automático

echo "🎨 Iniciando deploy do portfólio..."

# 1. Inicializar Git (se ainda não foi inicializado)
if [ ! -d .git ]; then
    echo "📦 Inicializando repositório Git..."
    git init
fi

# 2. Adicionar todos os arquivos
echo "➕ Adicionando arquivos..."
git add .

# 3. Fazer commit
echo "💾 Criando commit..."
git commit -m "🎉 Deploy inicial - Portfólio profissional multilíngue (PT-BR, ES-ES, EN-US)"

# 4. Configurar branch main
echo "🌿 Configurando branch main..."
git branch -M main

# 5. Adicionar repositório remoto (SUBSTITUA pelo seu)
echo "🔗 Configurando repositório remoto..."
echo "⚠️  IMPORTANTE: Edite este arquivo e substitua SEU-USUARIO pelo seu nome de usuário do GitHub!"
# git remote add origin https://github.com/SEU-USUARIO/portfolio.git

# 6. Push para GitHub
echo "🚀 Enviando para GitHub..."
# git push -u origin main

echo "✅ Deploy concluído!"
echo "🌐 Acesse: https://SEU-USUARIO.github.io/portfolio/"
echo ""
echo "📝 Próximos passos:"
echo "1. Edite este arquivo e descomente as linhas com 'git remote' e 'git push'"
echo "2. Substitua 'SEU-USUARIO' pelo seu nome de usuário do GitHub"
echo "3. Execute o script novamente"
echo "4. Ative GitHub Pages nas configurações do repositório"
