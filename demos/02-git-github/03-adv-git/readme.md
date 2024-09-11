# Advanced Github

## Pull Requests

[GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)

## Branching Types

[Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/)

[GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)

### GitHub Flow

![gitflow](_images/github-flow.jpg)

## Git Flow

[Git Flow Introduction & Cheat sheet](https://danielkummer.github.io/)

GitFlow is a branching model for Git, created by Vincent Driessen. It has attracted a lot of attention because it is very well suited to collaboration and scaling the development team.

![git-flow](_images/git-flow.png)

> Note: Require GIT 2.24.0+ - Check with `git --version`


Initialize repo for gitflow:

```
git flow init
```

Start a new feature:

```
git flow feature start MYFEATURE
```

Finish feature:

```
git flow feature finish MYFEATURE
```

Publish a feature:

```
git flow feature publish  MYFEATURE
```

Start a release:

```
git flow release start RELEASE
```

Finish a release:

```
git flow release finish  RELEASE
```

## Forking Workflow - Getting Updates for Class Demos

![forking-wf](_images/forking-workflow.jpg)

Original Repo could be: `https://github.com/ARambazamba/AZ-204` where `ARambazamba` is the `original-owner-github-username` and `AZ-204` is the `reponame`

### Listing the current Remotes

List the current configured remote repository for your fork.

```
git remote -v
> origin  https://github.com/your-github-username/reponame.git (fetch)
> origin  https://github.com/your-github-username/reponame.git (push)
```

Specify a new remote upstream repository that will be synced with the fork.

### Adding the Repo of the original owner as Upstream

```
git remote add upstream https://github.com/original-owner-github-username/reponame.git
```

Verify the new upstream repository you've specified for your fork.

```
git remote -v
> origin    https://github.com/your-github-username/reponame.git (fetch)
> origin    https://github.com/your-github-username/reponame.git (push)
> upstream  https://github.com/original-owner-github-username/reponame.git (fetch)
> upstream  https://github.com/original-owner-github-username/reponame.git (push)
```

### Getting Updates

Fetch from Upstream:

```
 git fetch upstream
 git merge upstream/main
 git push origin main
```
