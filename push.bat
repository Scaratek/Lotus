@echo off

git add *
git commit -m "Updated Server"
git branch -M main
git remote add origin https://github.com/scaratek/lotus.git
git push -u origin main

pause