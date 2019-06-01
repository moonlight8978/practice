FROM ruby:2.6.3

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update -qq && \
  apt-get install -y nodejs postgresql-client && \
  apt-get install --no-install-recommends yarn

RUN gem install rails

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY Gemfile* ./
RUN bundle

EXPOSE 3000
