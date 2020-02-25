FROM ruby:2.7.0-alpine3.11

WORKDIR /app

RUN apk add --no-cache --update build-base \
  linux-headers \
  git \
  sqlite-dev \
  nodejs \
  tzdata

RUN gem install rails -v 6.0.2.1
COPY Gemfile* ./
RUN bundle install --jobs=3 --retry=3

EXPOSE 3000
