# 📚 **Livros Vai na Web**

## 🖥️ **Descrição Geral**
O projeto **Livros Vai na Web** é um site desenvolvido com o objetivo de reforçar os conhecimentos adquiridos no módulo 2 do curso de FullStack no Vai na Web. Utilizando **React**, **SCSS** e **React Router Dom**, a interface segue um design fornecido no Figma, simulando um site para doação de livros.

---

## 🎯 **Objetivo**
Embora o foco seja a recriação da interface, o projeto simula um site funcional para:
- Incentivar a **doação de livros**;
- Permitir que usuários visualizem os livros já doados.

---

## ⚙️ **Funcionalidades**
### 1. Página Inicial
- Exibe informações sobre a importância de doar livros.
- Apresenta **cards de motivos** para incentivar a doação.

### 2. Página de Doação
- Contém um **formulário visual** para preenchimento de informações sobre o livro a ser doado.
  - **Nota**: O formulário não é funcional (apenas design).

### 3. Página de Livros Doados
- Lista os livros doados utilizando dados renderizados de forma dinâmica a partir de um arquivo estático.

---

## 🗂️ **Estrutura do Projeto**
O projeto segue uma estrutura modular e organizada para facilitar a manutenção e escalabilidade:

```plaintext
src/
├── assets/
│   ├── icons/            # Ícones usados nos cards e seções do site.
│   ├── images/           # Imagens estáticas, como banners e placeholders.
│
├── components/
│   ├── CardLivro/        # Componente responsável por exibir os livros doados.
│   ├── CardMotivosDoar/  # Componente que exibe os motivos para doar (cards da página inicial).
│   ├── Footer/           # Componente rodapé reutilizado em todas as páginas.
│   ├── Header/           # Componente cabeçalho reutilizado em todas as páginas.
│
├── data/
│   ├── livros.js         # Array estático com as informações dos livros doados.
│
├── pages/
│   ├── FormDoacao/
│   │   ├── FormDoacao.jsx # Página de doação com formulário
│   │   ├── styles/        # Estilos específicos da página de formulário.
│   │
│   ├── Home/
│   │   ├── Home.jsx       # Página inicial do site
│   │   ├── styles/        # Estilos específicos da página inicial.
│   │
│   ├── LivrosDoados/
│   │   ├── LivrosDoados.jsx # Página que lista os livros já doados.
│   │   ├── styles/          # Estilos específicos da página de livros doados.
│
├── styles/
│   ├── global.scss       # Estilos globais aplicados em toda a aplicação.
│
├── App.jsx               # Configuração principal das rotas do site.
├── main.jsx              # Arquivo de entrada para renderizar o React.

```

## 🔗 Links Importantes
- [Figma - Protótipo do Design](https://www.figma.com/design/MDGn9uI2Ny5Y8sOJWnmfRp/Proposta-Empower?node-id=0-1&node-type=canvas&t=5ZOGhZLQsGD8Muj1-0)
- [Deploy - Site ao vivo](https://livros-vnw-chi.vercel.app/)

