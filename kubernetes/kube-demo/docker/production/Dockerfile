FROM node:12.6.0-alpine

ENV APP_ROOT=/usr/src/app \
  NODE_ENV=production

RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

CMD ["node", "index.js"]

EXPOSE 8080
