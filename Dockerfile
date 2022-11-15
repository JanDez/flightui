FROM node:16-alpine3.14

WORKDIR /var/www
COPY package*.json ./
COPY . .
ENV NODE_ENV production 


CMD [ "npm", "start" ]