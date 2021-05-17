**Working Directory**
git add *full file name*->
    **Index/Staging**
        git commit -m "message goes here" ->
            **Head**
                git push
                    **GitHub**

git remote add origin ssh_url
* this tells git that we have a remote head called origin to ssh_url* 

**git pull**
copies everything from the remote repo to your computer

***Branches***
    We can branch off of master so that the pushed changes
won't be pushed to the MASTER which won't interfere with
other teams issuing "git pull"

git branch *feature_a* // saves to specific branch
git checkout *feature_a* // to switch to a specific branch

If we want to create and move to a new branch we:
git checkout -b *feature_x*


If we want to merge to the master:
git merge *feature_a*
    if we have conflicts, we will have to debug it


Example 1:
We find a repo we want to clone!
we copy the SSH clone Link

On a local folder, we right click and open **Git Bash**
We then type
**git clone** *ssh_link*

now we right click and open with VScode


**git diff**
will tell us the difference since our last commit and our Modified files

**git add .**
This will add all of our untracked files

**git commit -m  messageHere**

**git push**
This will push our local repo to GitHub our remote repo

***BRANCHES***
git checkout -b newBranchName

DO BE AWARE that, we must also create the branch on our *remote repo* using:
git push --set-upstream origin nameOfBranch 
    so that we can push and pull

**Merging to MASTER**
git checkout master

**double Check our current branch**
git status

**MERGE this will merge branchName to MASTER**
git merge  branchName


**merge CONFLICT can happen when a branch is ahead of MASTER by certain amount of commits**

accept current vs incoming changes
save file
git add .
git commit
git push

process
first create
pull
add
commit
push

git diff
remember to do branch per feature.


 