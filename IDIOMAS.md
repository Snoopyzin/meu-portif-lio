# 🌍 Sistema Multilingue do Portfólio

## Idiomas Disponíveis

O portfólio agora suporta 3 idiomas:

- 🇧🇷 **Português (Brasil)** - `pt-BR`
- �🇸 **Español** - `es-ES`
- 🇺🇸 **English (USA)** - `en-US`

## Como Funciona

### Seletor de Idiomas
No topo da página, ao lado dos links de navegação, você encontrará bandeiras representando cada idioma. Clique na bandeira para trocar o idioma instantaneamente.

### Detecção Automática
O sistema detecta automaticamente o idioma preferido do seu navegador na primeira visita:
- Navegadores configurados em espanhol → `es-ES`
- Navegadores configurados em inglês → `en-US`
- Outros navegadores em português → `pt-BR` (padrão)

### Persistência
Sua escolha de idioma é salva automaticamente no navegador (localStorage), então na próxima visita o site já abrirá no idioma escolhido.

## Diferenças entre Idiomas

### Português do Brasil (pt-BR)
- Tom mais casual e amigável
- "Ei, Eu sou" no hero
- "Projetos" na navegação
- Vocabulário: aplicativo, usuário, site

### Español (es-ES)
- Tom profesional
- "¡Hola, Soy" no hero
- "Proyectos" na navegação
- Vocabulário: aplicación, usuario, sitio web

### English (en-US)
- Professional and friendly tone
- "Hey, I'm" in hero
- American English spelling
- Technical terms in English

## Estrutura Técnica

### Arquivos
- **i18n.js** - Sistema de internacionalização com todas as traduções
- **index.html** - Elementos marcados com atributos `data-i18n`
- **script.js** - Integração com o sistema de idiomas

### Como Adicionar Novos Textos

1. Adicione uma nova chave em `i18n.js` para cada idioma:
```javascript
'pt-BR': {
    'minha.chave': 'Meu texto em português do Brasil'
},
'es-ES': {
    'minha.chave': 'Mi texto en español'
},
'en-US': {
    'minha.chave': 'My text in English'
}
```

2. No HTML, adicione o atributo `data-i18n`:
```html
<p data-i18n="minha.chave">Texto padrão</p>
```

### Como Adicionar Novos Idiomas

1. Abra o arquivo `i18n.js`
2. Adicione um novo objeto com todas as traduções:
```javascript
'fr-FR': {
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    // ... todas as outras chaves
}
```

3. Adicione um botão no HTML:
```html
<button class="lang-btn" data-lang="fr-FR" title="Français">
    🇫🇷
</button>
```

## Enviando para Empresas

### Para Portugal 🇵🇹
O site está totalmente adaptado para português de Portugal com vocabulário adequado:
- "Projecto" em vez de "Projeto"
- "Utilizador" em vez de "Usuário"
- Tom profissional mantendo acessibilidade

### Para EUA 🇺🇸
Versão completa em inglês americano:
- Tradução profissional de todo conteúdo
- Terminologia técnica internacional
- FAQ adaptada para contexto internacional

## Dicas para Recrutadores

- O idioma é trocado instantaneamente, sem recarregar a página
- Todas as seções são traduzidas: hero, sobre, projetos, FAQ, contato
- Formulário de contato também adapta placeholders e labels
- Sistema otimizado para SEO em múltiplos idiomas

## Suporte

Caso encontre algum texto não traduzido ou queira adicionar um novo idioma, basta:
1. Editar o arquivo `i18n.js`
2. Adicionar as traduções necessárias
3. O sistema aplicará automaticamente

**Desenvolvido por Gabriel Alexandre** 🚀
