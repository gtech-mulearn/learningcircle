# GTech µLearn

#### An informal mechanism for bringing together learners who are interested in the same topic from across different fields and disciplines. A fantastic way to spend a small amount of time learning about new things with a group of people with same interests!

<br/>

# µLearn Website

This repository contains the the source code files for the µLearn Learning Circle(Interest Group). Kindly read through the following to get a hold on the naming and contributions standards

The central repository holds three main branches with two branches having infinte lifetime(dev-server & production)

- dev (Open To Contributors)
- dev-server (hosted)
- production (hosted)

dev branch is open for collaboration and serves as the development environment where contributors can work on new features and bug fixes before they are merged into other branches.

dev-server is the main branch where the source code of HEAD always reflects a state with the latest delivered development changes for the next release

origin/production is the main branch where the source code of HEAD always reflects a production-ready state.


## Git commit types

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

## Contributing

Contributions are always welcome!

See [contributing.md](/contributing.md) for ways to get started.

## Maintainer

- If you are a maintainer of the project, you will be the person responsible for reviewing the pull request and merging them to respective branches.

### Pull Request Flow

- The pull request from the developers can only be received on the **dev**(feature, bugfix) and the **staging**(hotfix) branch.

- After reviewing the request you can merge them to the dev-server/production depending upon the type of request

## Quality Tester

- If you are a Quality Tester you can verify the dev-server for testing the upcoming features and the production for features which are already in release.
