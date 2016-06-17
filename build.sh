#!/usr/bin/env bash

docker build --rm -t snabar/dashboard_component .
docker run -d -p 8082 8082 --name snabar-dashboard-component snabar/dashboard_component

if [ $? != 0 ]
then
    docker stop snabar-dashboard-component
    docker rm snabar-dashboard-component
docker run -d -p 8082 8082 --name snabar-dashboard-component snabar/dashboard_component
fi
