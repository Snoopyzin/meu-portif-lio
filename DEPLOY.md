# 🚀 Como Colocar seu Portfólio no Ar (GitHub Pages)

## Passo a Passo Completo

### 1️⃣ Preparar os Arquivos

Certifique-se de que você tem todos esses arquivos na pasta:
```
portifólio/
├── index.html
├── style.css
├── script.js
├── i18n.js
├── README.md
├── IDIOMAS.md
├── TEMPLATES_EMAIL.md
├── LINKS.md
└── images/
    ├── perfil.jpeg
    └── Captura de tela 2026-02-19 131920.png
```

---

### 2️⃣ Criar Repositório no GitHub

1. Acesse: https://github.com/Snoopyzin
2. Clique no botão verde **"New"** (Novo repositório)
3. Configure:
   - **Repository name**: `portfolio` (ou qualquer nome que preferir)
   - **Description**: "Meu portfólio pessoal - Desenvolvedor Fullstack"
   - **Public** ✅ (marque como público)
   - **NÃO marque** "Add a README file"
4. Clique em **"Create repository"**

---

### 3️⃣ Fazer Upload dos Arquivos

#### Opção A: Pelo Site (Mais Fácil)

1. Na página do repositório recém-criado, clique em **"uploading an existing file"**
2. Arraste TODOS os arquivos da pasta `portifólio` para a janela
3. Role para baixo e em "Commit changes":
   - Escreva: "Primeiro commit - Portfólio completo"
4. Clique em **"Commit changes"**

#### Opção B: Pelo Git (Se você usa Git)

Abra o terminal/PowerShell na pasta do portfólio e execute:

```bash
git init
git add .
git commit -m "Primeiro commit - Portfólio completo"
git branch -M main
git remote add origin https://github.com/Snoopyzin/portfolio.git
git push -u origin main
```

---

### 4️⃣ Ativar GitHub Pages

1. No repositório, clique em **"Settings"** (Configurações)
2. No menu lateral esquerdo, clique em **"Pages"**
3. Em **"Source"**, selecione:
   - Branch: **main**
   - Folder: **/ (root)**
4. Clique em **"Save"**
5. Aguarde 2-3 minutos

---

### 5️⃣ Acessar seu Site

Seu portfólio estará disponível em:
```
https://snoopyzin.github.io/portfolio/
```

**Pronto! Seu portfólio está no ar! 🎉**

---

## 🔄 Como Atualizar o Portfólio

Sempre que você fizer mudanças nos arquivos:

### Pelo Site:
1. Vá até o arquivo no GitHub
2. Clique no ícone de lápis (editar)
3. Faça as alterações
4. Role para baixo e clique em "Commit changes"
5. Em 1-2 minutos, o site será atualizado automaticamente

### Pelo Upload:
1. Vá no repositório
2. Clique em "Add file" > "Upload files"
3. Arraste os arquivos atualizados
4. Commit changes

---

## 📧 Adicionar Domínio Personalizado (Opcional)

Se você quiser um domínio tipo `gabrielalexandre.com.br`:

1. Compre um domínio (Registro.br, Hostinger, etc)
2. No GitHub Pages Settings:
   - Em "Custom domain", digite seu domínio
   - Clique em "Save"
3. Configure o DNS do domínio apontando para:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

---

## 📱 Compartilhar seu Portfólio

Depois de publicar, use este link em:
- ✅ LinkedIn (na seção "Sobre" e "Destaques")
- ✅ Currículo
- ✅ Emails para empresas
- ✅ Aplicações de emprego
- ✅ Bio do Instagram/Twitter

### Exemplo de mensagem:
```
Olá! Sou desenvolvedor fullstack e gostaria de compartilhar meu portfólio:
🌐 https://snoopyzin.github.io/portfolio/

Alguns destaques:
• Portfólio multilíngue (PT-BR, ES-ES, EN-US)
• Projetos reais ao vivo
• Design moderno e responsivo

Obrigado!
Gabriel Alexandre
```

---

## 🛠️ Troubleshooting

### ❌ Site não aparece?
- Aguarde 5-10 minutos após ativar Pages
- Verifique se o repositório está público
- Certifique-se de que o arquivo se chama `index.html` (minúsculas)

### ❌ Imagens não aparecem?
- Verifique se a pasta `images` foi enviada
- Confirme os nomes dos arquivos (com acentos e espaços)
- Caminhos devem estar corretos no HTML: `images/perfil.jpeg`

### ❌ Estilos não funcionam?
- Confirme que `style.css` está na mesma pasta que `index.html`
- Verifique se o link no HTML está correto: `<link rel="stylesheet" href="style.css">`

### ❌ Idiomas não trocam?
- Certifique-se de que `i18n.js` foi enviado
- Verifique se está incluído no HTML: `<script src="i18n.js"></script>`

---

## 📊 Google Analytics (Opcional)

Para acompanhar visitas ao seu site:

1. Crie uma conta no Google Analytics
2. Gere um código de tracking
3. Adicione antes do `</head>` no `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=SEU-ID-AQUI"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'SEU-ID-AQUI');
</script>
```

---

## 🎯 Próximos Passos

1. ✅ Coloque o link no seu LinkedIn
2. ✅ Atualize seu currículo com o link
3. ✅ Compartilhe nas redes sociais
4. ✅ Adicione no README do seu perfil do GitHub
5. ✅ Use em candidaturas de emprego

### Adicionar no README do seu perfil GitHub:

1. Crie um repositório com o mesmo nome do seu usuário: `Snoopyzin`
2. Adicione um `README.md` com:

```markdown
# Olá! 👋 Eu sou Gabriel Alexandre

## 💻 Desenvolvedor Fullstack

Apaixonado por criar soluções digitais modernas e eficientes.

### 🚀 Tecnologias
- HTML, CSS, JavaScript
- React
- Git & GitHub

### 🌐 Meu Portfólio
Confira meus projetos: [gabrielalexandre.dev](https://snoopyzin.github.io/portfolio/)

### 📫 Contato
- LinkedIn: [Gabriel de Melo](https://www.linkedin.com/in/gabriel-de-melo-a630021ab/)
- Email: [seu-email@gmail.com]
```

---

**Parabéns! Seu portfólio profissional está no ar! 🎉**

Agora é só divulgar e aguardar as oportunidades chegarem! 🚀
