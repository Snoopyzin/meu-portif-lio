# 🚀 Guia Rápido - Deploy no GitHub Pages

## Passos para Publicar seu Portfólio

### 1. Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com)
2. Clique em **"New repository"** (+ no canto superior direito)
3. Preencha:
   - **Repository name**: `portfolio` ou `seu-nome.github.io`
   - **Description**: "Meu portfólio profissional"
   - Deixe como **Public**
   - **NÃO** marque "Add a README file"
4. Clique em **"Create repository"**

### 2. Inicializar Git Local

Abra o terminal/PowerShell na pasta do portfólio e execute:

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "🎉 Portfólio inicial - design moderno com sistema multilíngue"

# Adicionar repositório remoto (substitua SEU-USUARIO pelo seu nome de usuário)
git remote add origin https://github.com/SEU-USUARIO/portfolio.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

### 3. Ativar GitHub Pages

1. No repositório do GitHub, vá em **Settings**
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione:
   - Branch: **main**
   - Folder: **/ (root)**
4. Clique em **Save**
5. Aguarde 1-2 minutos

### 4. Acessar seu Portfólio

Seu portfólio estará disponível em:
```
https://SEU-USUARIO.github.io/portfolio/
```

Ou se você nomeou o repositório como `seu-usuario.github.io`:
```
https://seu-usuario.github.io/
```

---

## 📝 Comandos Git Úteis

### Fazer Alterações Futuras

```bash
# Ver arquivos modificados
git status

# Adicionar alterações
git add .

# Fazer commit com mensagem
git commit -m "✨ Descrição da mudança"

# Enviar para o GitHub
git push
```

### Desfazer Alterações

```bash
# Desfazer mudanças em um arquivo
git checkout -- nome-do-arquivo.ext

# Desfazer último commit (mantém as alterações)
git reset --soft HEAD~1
```

---

## 🎨 Personalizações Recomendadas

Antes de publicar, considere personalizar:

1. **Foto do Perfil**: Substitua as imagens em `images/`
2. **Projetos**: Atualize os cards de projeto em `index.html`
3. **Currículo**: Atualize o link do Google Drive no botão "Currículo"
4. **Contato**: Adicione seus links sociais reais
5. **Meta Tags**: Atualize em `index.html` para SEO

---

## ✅ Checklist Final

- [ ] Todas as imagens estão otimizadas
- [ ] Links do LinkedIn e GitHub estão corretos
- [ ] Link do currículo está atualizado
- [ ] Projetos reais foram adicionados
- [ ] Informações pessoais foram atualizadas
- [ ] Testado em mobile, tablet e desktop
- [ ] Testado nos 3 idiomas (PT-BR, ES-ES, EN-US)
- [ ] Formulário de contato funciona corretamente

---

## 🔧 Troubleshooting

### Site não carrega após deploy
- Aguarde 2-5 minutos após ativar GitHub Pages
- Verifique se a branch está correta (main)
- Limpe o cache do navegador (Ctrl + Shift + R)

### Imagens não aparecem
- Verifique se os caminhos estão relativos (sem `/` no início)
- Certifique-se que as imagens foram incluídas no commit

### CSS/JS não funciona
- Confirme que os arquivos estão na raiz do repositório
- Verifique o console do navegador (F12) para erros

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique a [documentação do GitHub Pages](https://pages.github.com/)
2. Consulte as [issues do repositório](https://github.com/seu-usuario/portfolio/issues)

---

**Parabéns! Seu portfólio está online! 🎉**
