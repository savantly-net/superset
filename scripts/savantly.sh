#!/bin/bash

set -e

REPO_NAME=savantly/superset-ci

IMAGE_LATEST=${REPO_NAME}:latest

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR/..

docker buildx build --platform=linux/amd64 --push -t $IMAGE_LATEST .