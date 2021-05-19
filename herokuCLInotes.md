$ heroku login
Create a new Git repository
Initialize a git repository in a new or existing directory

$ cd my-project/
$ git init
$ heroku git:remote -a mybrary-arnzero
Deploy your application
Commit your code to the repository and deploy it to Heroku using Git.

$ git add .
$ git commit -am "make it better"
$ git push heroku master NOTE: check if it is main or not

actually pull --rebase
         git push

         worked with no errors to main

         remember you can do *git branch* to see your branches

How to add ENV vars to HEROKU

app -> settings -> add the variable

if connecting to mongodb

add the user on mongodb ATLAS grab the connection string with your name and pw
and add it to heroku "connect to application" option in atlas