FROM ruby:2.6.2

WORKDIR /usr/src/app

RUN gem install rails

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client vim imagemagick libidn11-dev

COPY Gemfile* ./
RUN bundle install

EXPOSE 3000