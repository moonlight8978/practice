FROM ruby:2.7.2-buster

WORKDIR /app

RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash - && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update -qq && \
  apt-get install -y nodejs yarn default-mysql-client imagemagick vim

RUN gem install bundler
RUN gem install rails -v 6.1.0

COPY Gemfile* ./
RUN bundle config set --local without 'staging production'
RUN bundle install --jobs=3 --retry=3

COPY yarn.lock package.json ./
RUN yarn install

COPY . .

EXPOSE 3000
