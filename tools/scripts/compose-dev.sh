#!/usr/bin/env bash

docker-compose \
-p werkze \
--env-file .env \
-f ./docker/database/docker-compose.yml \
-f ./docker/backend/docker-compose.yml \
-f ./docker/frontend/docker-compose.yml \
"$@"
