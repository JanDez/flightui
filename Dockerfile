FROM node:16-alpine3.14

WORKDIR /var/www
COPY . .
RUN npm install
RUN npm run build 

ENV NODE_ENV production 

EXPOSE 3000 

CMD [ "npx", "serve", "build" ]