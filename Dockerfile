FROM node:latest as node
RUN mkdir app
WORKDIR /app
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/CITIES-APP /usr/share/nginx/html