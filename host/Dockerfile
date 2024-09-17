# Usar a imagem base do Nginx
FROM nginx:alpine

# Copiar os arquivos do diretório host/ local para o diretório /usr/share/nginx/html no container
COPY . /usr/share/nginx/html

# Expor a porta 80 (porta padrão do Nginx dentro do container)
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
