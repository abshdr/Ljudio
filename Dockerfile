FROM node:lts-alpine

RUN npm install -g http-server

COPY package*.json ./

RUN npm install

EXPOSE 8080
CMD [ "http-server", "dist" ]