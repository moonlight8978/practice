FROM ruby:2.7.0-buster

RUN mkdir /app
WORKDIR /app

RUN apt-get update -qq && apt-get install -y nodejs

RUN gem install bundler
RUN gem install rails -v 6.0.2.1

COPY Gemfile* ./
RUN bundle install -j3

EXPOSE 3000

CMD ["rails", "s", "-b", "0.0.0.0"]
