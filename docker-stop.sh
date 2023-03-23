#!/usr/bin/env sh

# stop and remove devixid-container
docker stop devixid-container
docker rm devixid-container

# remove devixid-image
docker rmi devixid-image