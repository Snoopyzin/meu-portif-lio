# 📤 Guia de Deploy Manual no GitHub

## ✅ Projeto Atualizado - 12/03/2026

Seu portfólio está pronto para ser publicado no GitHub!

---

## 🚀 Opção 1: Upload Manual via Interface Web

### Passo 1: Criar Repositório
1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: `portfolio` (ou `seu-usuario.github.io`)
3. Deixe como **Public**
4. **NÃO** marque "Add a README file"
5. Clique em **"Create repository"**

### Passo 2: Upload dos Arquivos
1. Na página do repositório criado, clique em **"uploading an existing file"**
2. Arraste **TODOS** os arquivos da pasta para a área de upload:
   - ✅ index.html
   - ✅ style.css
   - ✅ script.js
   - ✅ i18n.js
   - ✅ README.md
   - ✅ .gitignore
   - ✅ Todos os arquivos .md (CHANGELOG, DEPLOY, etc.)
   - ✅ Pasta `images/` completa
3. Escreva uma mensagem de commit: `🎉 Portfólio inicial - Design moderno multilíngue`
4. Clique em **"Commit changes"**

### Passo 3: Ativar GitHub Pages
1. No repositório, vá em **Settings** (⚙️)
2. Menu lateral → **Pages**
3. Em **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
4. Clique em **Save**
5. ⏱️ Aguarde 2-3 minutos

### Passo 4: Acessar Seu Portfólio
```
https://seu-usuario.github.io/portfolio/
```

---

## 🔧 Opção 2: Via Git (Linha de Comando)

Se preferir usar Git local, execute no terminal/PowerShell:

```powershell
# Navegar até a pasta do projeto
cd "C:\Users\Volmaster T.I\Desktop\projetos vscode\projetos pessoais\portifólio"

# Adicionar remote (substitua SEU-USUARIO)
git remote set-url origin https://github.com/SEU-USUARIO/portfolio.git

# Fazer push
git push -u origin main
```

---

## 📋 Checklist Final

Antes de publicar, certifique-se de:

- [ ] **Imagens pessoais** atualizadas em `images/`
- [ ] **Links sociais** corretos (LinkedIn, GitHub)
- [ ] **Link do currículo** atualizado (Google Drive)
- [ ] **Projetos** refletem seus trabalhos reais
- [ ] **Informações de contato** corretas

---

## 🔄 Atualizações Futuras

Para atualizar o portfólio depois de publicado:

### Via Web:
1. Vá no arquivo que deseja editar
2. Clique no ícone de lápis ✏️
3. Faça as alterações
4. Commit changes

### Via Git:
```bash
git add .
git commit -m "Descrição da alteração"
git push
```

---

## 🎨 Personalizações Recomendadas

1. **Substitua as imagens** em `/images/`:
   - `new avatar.png` - Seu avatar
   - `sem fundo.png` - Sua foto no hero
   - Screenshots dos projetos

2. **Atualize os links** em `index.html`:
   - LinkedIn (linha ~46)
   - GitHub (linha ~50)
   - Google Drive do currículo (linha ~30)

3. **Adicione seus projetos** na seção de projetos

4. **Personalize as cores** em `style.css` (variáveis CSS no início)

---

## 🌟 Recursos do Portfólio

✅ **Sistema Multilíngue**: PT-BR, ES-ES, EN-US  
✅ **Design Responsivo**: Mobile, Tablet, Desktop  
✅ **Animações Suaves**: 60fps, performance otimizada  
✅ **SEO Otimizado**: Meta tags configuradas  
✅ **Formulário de Contato**: Integração com email  

---

## 💡 Dicas

- **Domínio Personalizado**: Pode adicionar um domínio próprio nas Settings → Pages
- **Analytics**: Adicione Google Analytics para acompanhar visitantes
- **Performance**: Otimize imagens antes de fazer upload (use TinyPNG)
- **Backups**: Mantenha uma cópia local sempre atualizada

---

## 📞 Problemas Comuns

### Página não carrega
- Aguarde 2-3 minutos após ativar GitHub Pages
- Verifique se o branch está correto (main)
- Limpe o cache do navegador (Ctrl + F5)

### Imagens não aparecem
- Verifique se a pasta `images/` foi enviada
- Confirme que os caminhos no HTML estão corretos
- Letras maiúsculas/minúsculas importam!

### Idiomas não funcionam
- Verifique se o arquivo `i18n.js` foi enviado
- Abra o console do navegador (F12) para ver erros

---

**🎉 Boa sorte com seu portfólio!**

*Atualizado em: 12/03/2026*
