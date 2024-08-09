# Etapa 1: Construir a aplicação Angular
FROM node:18-alpine as build

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar todo o código fonte para o diretório de trabalho
COPY . .

# Construir a aplicação Angular para produção
RUN npm run build --prod

# Etapa 2: Servir a aplicação usando o servidor NGINX
FROM nginx:alpine

# Copiar os arquivos construídos para o diretório padrão do NGINX
COPY --from=build /app/dist/logon-page /usr/share/nginx/html

# Expor a porta 80 para acessar a aplicação
EXPOSE 4200

# Comando para iniciar o NGINX
CMD ["nginx", "-g", "daemon off;"]
