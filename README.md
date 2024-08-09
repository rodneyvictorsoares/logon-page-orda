# 📋 Projeto Logon Page

![Angular](https://img.shields.io/badge/Angular-17.3.8-red?style=for-the-badge&logo=angular)
![Node.js](https://img.shields.io/badge/Node.js-16.x-green?style=for-the-badge&logo=node.js)
![Docker](https://img.shields.io/badge/Docker-20.x-blue?style=for-the-badge&logo=docker)
![Nginx](https://img.shields.io/badge/Nginx-1.21.x-brightgreen?style=for-the-badge&logo=nginx)
![TypeScript](https://img.shields.io/badge/TypeScript-4.4.x-blue?style=for-the-badge&logo=typescript)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## 📝 Sobre o Projeto

Este projeto consiste em uma página de logon desenvolvida com **Angular**. O objetivo é fornecer uma interface amigável e segura para autenticação de usuários. Foi usado como base para o tema da página o grupo de jogadores de RPG ORDA. A aplicação está contida dentro de um contêiner **Docker** para facilitar o desenvolvimento, teste e deployment.

## 🚀 Tecnologias Utilizadas

- **Angular**: Framework web para construção de interfaces de usuário reativas.
- **TypeScript**: Linguagem de programação que é um superconjunto de JavaScript.
- **Node.js**: Ambiente de execução para JavaScript.
- **Nginx**: Servidor web usado para servir a aplicação em produção.
- **Docker**: Plataforma para automação de implantação de aplicativos em contêineres.

## 📂 Estrutura do Projeto

```bash
├── src/                   # Código-fonte da aplicação
│   ├── app/               # Componentes e módulos do Angular
│   ├── assets/            # Arquivos estáticos (imagens, ícones, etc.)
│   └── styles.css         # Estilos globais da aplicação
├── angular.json           # Configurações do Angular CLI
├── package.json           # Dependências e scripts do npm
├── tsconfig.json          # Configurações do TypeScript
├── Dockerfile             # Configuração para o contêiner Docker
└── README.md              # Documentação do projeto
```

## 🛠️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

Além disso, é bom ter um editor para trabalhar com o código, como [VSCode](https://code.visualstudio.com/).

## 🚀 Rodando o Projeto

### Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
ng serve
```

4. **Acesse a aplicação:**
   - Abra o navegador e acesse `http://localhost:4200`.

### Usando Docker

1. **Construir a imagem Docker:**

```bash
docker build -t nome-da-sua-aplicacao .
```

2. **Executar o contêiner Docker:**

```bash
docker run -d -p 4200:4200 --name nome-do-container nome-da-sua-aplicacao
```

3. **Acesse a aplicação:**
   - Abra o navegador e acesse `http://localhost:4200`.

## 🤝 Contribuições

1. **Fork** este repositório.
2. Crie uma **branch** para sua feature (`git checkout -b feature/nova-feature`).
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. **Push** para a branch (`git push origin feature/nova-feature`).
5. Abra um **Pull Request**.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Autor**: [Rodney Victor](https://github.com/rodneyvictorsoares)
