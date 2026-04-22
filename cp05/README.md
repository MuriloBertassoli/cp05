# Checkpoint 05 - Sabores do Front 🍳

Este projeto é uma aplicação web desenvolvida para a disciplina de **Responsive Web Development** da **FIAP**. A aplicação consiste num livro de receitas digital que consome dados dinamicamente de um ficheiro JSON, permitindo a navegação entre categorias e a visualização detalhada de cada prato.

## 🎯 Objetivo do Projeto
Desenvolver uma aplicação robusta utilizando **React**, **TypeScript** e **Tailwind CSS**, focando-se na manipulação de estados, hooks (useState, useEffect, useParams), roteamento dinâmico e validação de formulários.

## 🚀 Tecnologias Utilizadas
* **Vite.js**: Ferramenta de build e ambiente de desenvolvimento.
* **React**: Biblioteca para construção da interface.
* **TypeScript**: Tipagem estática para maior segurança do código.
* **Tailwind CSS**: Estilização baseada em utilitários e responsividade.
* **React Router Dom**: Gestão de rotas e navegação.
* **React Hook Form**: Manipulação e validação de formulários.

## 📂 Estrutura de Pastas
A arquitetura do projeto segue um modelo modular para facilitar a manutenção:
```text
/
├── public/data/        # Ficheiro receitas.json (60 receitas)
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas principais (Home, Detalhe, Formulário)
│   ├── styles/         # Configurações globais de CSS (Tailwind)
│   ├── App.tsx         # Layout principal e Outlet
│   └── main.tsx        # Configuração de rotas e renderização
└── README.md           # Documentação do projeto

👥 Equipa de Desenvolvimento
Murilo Bertassoli Massini - RA: 567383

Giovanni Sacristan - RA: 567548

Gabriel Deotti - RA: 567258

Caike Roberto de Souza Hollo - RM: 568104