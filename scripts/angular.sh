#!/bin/bash

docker-compose run --rm --no-deps --user=$(id -u) angular $*
