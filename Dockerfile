FROM node:20.11.0-alpine3.18

RUN apk update && \
    apk add git

RUN npm -g install serve

WORKDIR /app
COPY package*.json ./
RUN npm i --legacy-peer-deps
COPY . .
RUN npm run build
CMD ["serve", "-s", "build"]
