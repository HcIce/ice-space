call npm run docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct blog"

git push -f https://github.com/HcIce/ice-space.git master:gh-pages