.PHONY: prepare install up

prepare:
	cp -rT docker/development .

install:
	docker-compose build
	docker-compose run --rm node-server yarn

up:
	docker-compose up -d
