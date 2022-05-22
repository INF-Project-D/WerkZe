#!/usr/bin/env bash

docker-compose \
-p werkze \
--env-file .env \
-f ./docker/backend/docker-compose.yml \
-f ./docker/frontend/docker-compose.yml \
"$@"
