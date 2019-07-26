FROM node:12.6.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add -u --no-cache yarn

RUN yarn global add create-react-app

EXPOSE 3000
