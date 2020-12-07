FROM ruby:2.6.3-alpine3.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add -u --no-cache build-base sqlite-dev nodejs tzdata yarn yaml-dev zlib-dev

RUN gem install rails -v 6.0.0.rc1
COPY Gemfile* ./
RUN bundle -j `expr $(cat /proc/cpuinfo | grep -c "cpu cores") - 1` --retry 3

EXPOSE 3000
