#!/usr/bin/env sh

sh ./docker-stop.sh

if getopts "d" args;
  then
    # run docker in detach mode
    sh ./docker-deploy.sh -d
  else
    # run docker in normal mode
    sh ./docker-deploy.sh
fi