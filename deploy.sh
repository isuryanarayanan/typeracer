#!/usr/bin/env sh

set -e

npm run build

cd dist


git init
git add -A
git commit --author="devdoodan <devdoodan@gmail.com>" -m "deploy"
git push -f git@github-devdoodan:isuryanarayanan/typeracer.git master:gh-pages

cd -
