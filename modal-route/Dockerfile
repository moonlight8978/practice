FROM node:latest as dev

ARG APP_PATH
ENV APP_PATH $APP_PATH

RUN mkdir $APP_PATH
WORKDIR $APP_PATH

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

EXPOSE 3000
