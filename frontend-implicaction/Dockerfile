
FROM node:16-alpine3.12 as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod
FROM nginx:1.21.3-alpine
## the default expose: 80
COPY --from=build /app/dist/frontend-implicaction /usr/share/nginx/html
