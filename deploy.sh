#!/bin/sh

echo "TRAVIS_BUILD_ID: ${TRAVIS_BUILD_ID}"
echo "TRAVIS_BUILD_NUMBER: ${TRAVIS_BUILD_NUMBER}"
echo "TRAVIS_JOB_ID: ${TRAVIS_JOB_ID}"
echo "TRAVIS_JOB_NUMBER: ${TRAVIS_JOB_NUMBER}"
echo "TRAVIS_BRANCH: ${TRAVIS_BRANCH}"

# TODO REENABLE
# # make sure key is permissive, but not too permissive
# chmod 600 deploy_static.pem
# # clean out any existing staging folder but make sure it exists
# ssh -i deploy_static.pem formidable@192.241.218.94 "rm -rf static/builder-staging && mkdir -p static/builder-staging"
# # copy the build to the staging arena; if this fails, site is still OK
# scp -i deploy_static.pem -rp ./build/* formidable@192.241.218.94:/home/formidable/static/builder-staging
# # rename the staging arena to the actual builder site
# ssh -i deploy_static.pem formidable@192.241.218.94 "rm -rf static/builder && mv static/builder-staging/ static/builder"
