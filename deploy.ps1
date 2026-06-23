# 🚀 Script de Deploy - Portfólio GitHub Pages (Windows)
# Execute este arquivo no PowerShell

Write-Host "🎨 Iniciando deploy do portfólio..." -ForegroundColor Cyan

# 1. Inicializar Git (se ainda não foi inicializado)
if (-not (Test-Path .git)) {
    Write-Host "📦 Inicializando repositório Git..." -ForegroundColor Yellow
    git init
}

# 2. Adicionar todos os arquivos
Write-Host "➕ Adicionando arquivos..." -ForegroundColor Yellow
git add .

# 3. Fazer commit
Write-Host "💾 Criando commit..." -ForegroundColor Yellow
git commit -m "🎉 Deploy inicial - Portfólio profissional multilíngue (PT-BR, ES-ES, EN-US)"

# 4. Configurar branch main
Write-Host "🌿 Configurando branch main..." -ForegroundColor Yellow
git branch -M main

# 5. Adicionar repositório remoto (SUBSTITUA pelo seu)
Write-Host "🔗 Configurando repositório remoto..." -ForegroundColor Yellow
Write-Host "⚠️  IMPORTANTE: Edite este arquivo e substitua SEU-USUARIO pelo seu nome de usuário do GitHub!" -ForegroundColor Red
# git remote add origin https://github.com/SEU-USUARIO/portfolio.git

# 6. Push para GitHub
Write-Host "🚀 Enviando para GitHub..." -ForegroundColor Yellow
# git push -u origin main

Write-Host ""
Write-Host "✅ Deploy concluído!" -ForegroundColor Green
Write-Host "🌐 Acesse: https://SEU-USUARIO.github.io/portfolio/" -ForegroundColor Cyan
Write-Host ""
Write-Host "📝 Próximos passos:" -ForegroundColor Yellow
Write-Host "1. Edite este arquivo e descomente as linhas com 'git remote' e 'git push'"
Write-Host "2. Substitua 'SEU-USUARIO' pelo seu nome de usuário do GitHub"
Write-Host "3. Execute o script novamente: .\deploy.ps1"
Write-Host "4. Ative GitHub Pages nas configurações do repositório"
