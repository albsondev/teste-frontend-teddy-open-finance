# Use uma imagem base com Node.js instalado
FROM node:16-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de package.json e package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar todos os arquivos do projeto para o container
COPY . .

# Rodar o build do projeto (compilar)
RUN npm run build

# Expor a porta onde o servidor vai rodar
EXPOSE 9000

# Comando para rodar o servidor de desenvolvimento
CMD ["npm", "run", "serve"]
