# 💼 Portfólio Gabriel Alexandre

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

## 🚀 Sobre o Projeto

Portfólio profissional moderno e responsivo desenvolvido para showcasear projetos e habilidades como **Desenvolvedor Fullstack** e **Especialista em Helpdesk**. O site apresenta uma interface elegante com tema dark, animações suaves e sistema de internacionalização completo.

**🌐 [Ver Portfólio Online](https://snoopyzin.github.io/portfolio/)**

---

## ✨ Características

- 🎨 **Design Moderno**: Interface dark com gradientes cyan e purple, shapes orgânicos animados
- 🌍 **Multilíngue**: Suporte para 3 idiomas (PT-BR, ES-ES, EN-US) com detecção automática
- 📱 **Responsivo**: Layout otimizado para desktop, tablet e mobile
- ⚡ **Performance**: Código otimizado, animações em 60fps
- 🎭 **Animações Avançadas**: Organic shapes, floating particles, text glow, hover effects
- 📧 **Formulário de Contato**: Integração direta com cliente de email
- 🎯 **SEO Otimizado**: Meta tags, estrutura semântica HTML5
- ♿ **Acessível**: Seguindo boas práticas de acessibilidade web

---

## 🛠️ Tecnologias Utilizadas

<div style="display: flex; gap: 10px;">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" width="50" height="50"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" width="50" height="50"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="50" height="50"/>
</div>

### Principais Recursos Técnicos:

- **HTML5**: Estrutura semântica com tags modernas
- **CSS3**: 
  - Variáveis CSS (Custom Properties)
  - Flexbox & Grid Layout
  - Animações e Transições avançadas
  - Gradientes complexos e efeitos de glow
  - Radial dot pattern com animação drift
- **JavaScript Vanilla**:
  - Sistema de internacionalização (i18n)
  - Intersection Observer API para lazy animations
  - Smooth scroll com offset
  - FAQ accordion dinâmico
  - Floating particles generator
  - 3D tilt effect com mousemove
- **Google Fonts**: Inter (300-900 weights)

---

## 📂 Estrutura do Projeto

```
portifólio/
│
├── index.html              # Estrutura principal do site
├── style.css              # Estilos completos (1272 linhas)
├── script.js              # Funcionalidades JavaScript
├── i18n.js                # Sistema de internacionalização
├── README.md              # Documentação do projeto
│
└── images/                # Recursos visuais
    ├── new-avatar.ico     # Favicon
    ├── new avatar.png     # Avatar principal
    ├── sem fundo.png      # Foto circular hero
    ├── landing page.png   # Screenshot projeto 1
    ├── agenda.png         # Screenshot projeto 2
    ├── project store.png  # Screenshot projeto 3
    ├── IA PROJECT.png     # Screenshot projeto 4
    ├── VOLMASTER 01.png   # Logo empresa
    └── VOLMASTER 02.png   # Logo empresa
```

---

## 🎨 Paleta de Cores

```css
--primary: #00D9FF         /* Cyan principal */
--secondary: #00FFC6       /* Aqua secundário */
--purple: #8a2be2          /* Purple accent */
--bg-dark: #0a0e27         /* Background escuro */
--bg-darker: #0b0b0b       /* Background mais escuro */
--text-light: #e0e0e0      /* Texto claro */
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Editor de código (VSCode recomendado)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/Snoopyzin/portfolio.git
```

2. **Navegue até o diretório**
```bash
cd portfolio
```

3. **Abra o arquivo index.html**
   - Clique duas vezes no arquivo, ou
   - Utilize uma extensão como Live Server no VSCode

**Pronto!** O site estará rodando localmente em seu navegador.

---

## 📱 Seções do Site

### 🏠 Hero
- Avatar animado com efeito 3D hover
- Foto circular flutuante no canto superior direito
- Organic shapes com animação morph + pulse
- Assinatura SVG com stroke animation

### 👨‍💻 Sobre
- Carrossel infinito com logos das empresas
- Bio completa sobre desenvolvimento fullstack e helpdesk
- Badges de tecnologias utilizadas

### 💼 Projetos
- Grid responsivo com 4 projetos
- Cards clicáveis com links diretos
- Animações de entrada com Intersection Observer
- Screenshots de alta qualidade

### ❓ FAQ
- Accordion dinâmico
- 4 perguntas sobre serviços, tecnologias, suporte e contato
- Transições suaves de abertura/fechamento

### 📧 Contato
- Formulário simplificado (mensagem + email)
- Integração mailto para envio direto
- Avatar flutuante
- Validação de campos

---

## 🌍 Sistema de Internacionalização

O site detecta automaticamente o idioma do navegador e oferece 3 opções:

- 🇧🇷 **PT-BR**: Português Brasil (Tom casual)
- �🇸 **ES-ES**: Español (Tom profesional)
- 🇺🇸 **EN-US**: English (Tom profissional)

Todas as strings são armazenadas em `i18n.js` e podem ser facilmente expandidas para novos idiomas.

---

## 🎭 Animações Implementadas

1. **Organic Shapes**: Morph (20s/25s) + Pulse (8s/10s)
2. **Avatar Float**: TranslateY 0→-15px (8s)
3. **Photo Float**: TranslateY 0→-20px + Rotate 0→3deg (6s)
4. **Signature Stroke**: Drawing animation 0→100% (3s)
5. **Text Glow**: Pulsing cyan/purple glow (3s)
6. **Floating Particles**: 20 particles com vertical float
7. **Dots Background**: Radial pattern com drift animation
8. **Company Logos**: Scroll infinito + gradient fill on intersection
9. **Project Cards**: Opacity + translateY on scroll
10. **Form Float**: TranslateY subtle animation (6s)

---

## 📊 Compatibilidade de Navegadores

| Navegador | Versão Mínima | Status |
|-----------|---------------|--------|
| Chrome    | 90+           | ✅ Suportado |
| Firefox   | 88+           | ✅ Suportado |
| Safari    | 14+           | ✅ Suportado |
| Edge      | 90+           | ✅ Suportado |
| Opera     | 76+           | ✅ Suportado |

---

## 📈 Performance

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Tamanho Total**: ~3MB (incluindo imagens otimizadas)

---

## 🔮 Próximas Features

- [ ] Dark/Light mode toggle
- [ ] Blog integrado
- [ ] Sistema de comentários
- [ ] Analytics dashboard
- [ ] Loading animation personalizada
- [ ] Easter eggs interativos

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Gabriel Alexandre**

- 🌐 Website: [gabrielalexandre.dev](https://snoopyzin.github.io/portfolio/)
- 💼 LinkedIn: [gabriel-rêgo-a630021ab](https://www.linkedin.com/in/gabriel-r%C3%AAgo-a630021ab/)
- 🐱 GitHub: [@Snoopyzin](https://github.com/Snoopyzin)
- 📧 Email: gabrielregomelo@gmail.com

---

## 🙏 Agradecimentos

- [Google Fonts](https://fonts.google.com/) pela fonte Inter
- [DevIcons](https://devicon.dev/) pelos ícones de tecnologias
- [Shields.io](https://shields.io/) pelos badges do README
- Comunidade open-source por toda inspiração

---

<div align="center">

### ⭐ Se você gostou deste projeto, considere dar uma estrela!

**Desenvolvido com 💙 por Gabriel Alexandre**

</div>
