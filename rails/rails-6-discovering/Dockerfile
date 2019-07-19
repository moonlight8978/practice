FROM ruby:2.6.3-alpine3.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add -u build-base nodejs yarn tzdata postgresql-dev

RUN gem install rails -v 6.0.0.rc1

COPY Gemfile* ./
RUN bundle -j 4 --retry=3

EXPOSE 3000
