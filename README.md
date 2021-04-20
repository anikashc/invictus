<div align="center">
  <br/>
  <p><strong>Invictus</strong>

[![MIT License](https://img.shields.io/badge/license-MIT-green)]()
[![React](https://img.shields.io/badge/react-application-green?logo=react)]()

</div>

---

## Table of contents

- [About Project](#about-project)
- [Getting Started](#getting-started)
- [Contributing](#contributing)

## About Project

## **Invictus** <br>

-
- **How is it built?** <br>
  Frameworks and tools:
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)

## Getting Started

To get started simply:

1. Git Clone this repository: <br>
   `git clone https://github.com/anikashc/invictus.git`
2. Navigate to the root folder of repository and run: <br>
   `npm install`
3. Navigate to the client folder of repository and run: <br>
   `npm install`
4. To run both client and server : <br>
   `npm run dev`
5. To run only client: <br>
   `npm run client`
6. To run only server : <br>
   `npm run server`

## Contributing

So, first add the original repo as a remote upstream in your local forked one:<br>

   `git remote add upstream https://github.com/anikashc/invictus.git`

Now, you can easily syncronize your forked (origin) repository with the upstream one by doing<br>

   `git checkout master` # Make sure you always run the following commands from the master branch
   `git fetch --all`
   `git pull --rebase upstream master`
   `git push origin master`


To get started:

1. Make a new branch on your local repository for every feature you work on<br>
   `git checkout -b <Your name-Feature>`
2. Whatever changes you want to do, always add then commit to your branch. Make sure your commit message is clear <br>
   `git add .` <br>
   `git commit -m "<your commit message>"`
3. Pull the changes from master (there may have been merged changes while you were working). It is also a good practice to pull before starting to work. You may get some merge conflicts. Try to see if your code is replacing the existing code and if you are not able to merge conflicts then contact one of the heads.
   `git pull origin master`
4. New packages may have been installed. Run this in both root and client folder:<br>
   `npm install`
5. After that push to your branch (you won't be able to push to master):<br>
   `git push -u origin <branch name>`
