#!/usr/bin/env bash

docker-compose \
-p werkze \
--env-file .env \
-f ./docker/database/docker-compose.yml \
"$@"
