#!/usr/bin/env bash

docker-compose \
-p werkze \
--env-file .env \
-f ./docker/staging/docker-compose.yml \
"$@"
