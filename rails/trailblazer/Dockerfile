FROM ruby:latest

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN gem install rails

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY Gemfile* ./
RUN bundle

EXPOSE 3000
