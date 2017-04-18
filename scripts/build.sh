#!/bin/bash

cp -f package.json ./docker/package.json
docker-compose build
