Test
http://127.0.0.1:5173/

git remote add origin <REMOTE_URL>
git branch --set-upstream-to=origin/<branch> main

git init
git add README.md
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/patcoston/walksim.git
git branch --set-upstream-to=origin/main main
git push --all --force



