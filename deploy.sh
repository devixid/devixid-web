#!/usr/bin/env sh

# build docker image
docker build -t devixid-image .

if getopts "d" args;
  then
    # run docker in detach mode
    docker run -d -p 8080:3000 devixid-image
  else
    # run docker in normal mode
    docker run -p 8080:3000 devixid-image
fi