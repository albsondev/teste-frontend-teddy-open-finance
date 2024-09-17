# Etapa 1: Construir a aplicação Next.js
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build  # Rodar o build de produção para Next.js

# Etapa 2: Rodar o servidor Next.js na porta 3001
FROM node:18-alpine AS app
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3001
ENV PORT 3001  # Definindo a variável de ambiente para rodar na porta 3001
CMD ["npm", "run", "start"]
