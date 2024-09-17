# Dockerfile para login-vue (Vue.js)
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8081
CMD ["nginx", "-g", "daemon off;"]
