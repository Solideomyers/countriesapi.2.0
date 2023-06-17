
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'
git push -f git@github.com:solideomyers/countriesapi.2.0.git main:gh-pages