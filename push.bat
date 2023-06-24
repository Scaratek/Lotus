@echo off

git add *
git commit -m "Updated Server"
git branch -M main
git push -u origin main

pause