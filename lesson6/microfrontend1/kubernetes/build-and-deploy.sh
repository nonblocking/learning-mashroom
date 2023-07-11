#!/bin/bash

DIRECTORY=$(cd `dirname $0` && pwd)
MICROFRONTEND_DIRECTORY=$(dirname "$DIRECTORY")

export VERSION=$(node -p -e "require('${MICROFRONTEND_DIRECTORY}/package.json').version")

# Build image and push to the k3d registry
docker build -t k3d-mashroomregistry.localhost:12345/microfrontend-lesson6:latest -t k3d-mashroomregistry.localhost:12345/microfrontend-lesson6:$VERSION $MICROFRONTEND_DIRECTORY
docker push k3d-mashroomregistry.localhost:12345/microfrontend-lesson6:latest
docker push k3d-mashroomregistry.localhost:12345/microfrontend-lesson6:$VERSION

# Apply resources
envsub $DIRECTORY/resources_template.yaml $DIRECTORY/resources.yaml
kubectl apply -f $DIRECTORY/resources.yaml
