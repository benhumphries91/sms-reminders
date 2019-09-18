#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Linting..
npm run lint
echo Building. this may take a minute...
npm run build

# navigate into the build output directory
cd dist

echo Deploying..

git init
git add -A
git commit -m "Deployment $(date +"%d-%m-%Y %T")"

git push -f git@github.com:benhumphries91/sms-reminders.git master:gh-pages

cd -