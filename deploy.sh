#!/usr/bin/env sh

set -e

npm run build

cd dist

echo 'andis.club' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:mellwax/punoletstvo.git master:gh-pages

cd -