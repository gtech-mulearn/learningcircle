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

- `feat`: (adds valuable new features or improvements that directly benefit and engage users.)

         eg:- "feat(column): Added new "Date Created" column to the table for better tracking."
  
- `fix`: ( resolve user-related issues, improving the software's reliability and providing a smoother user experience.)

         eg:- "fix(case): Fixed case sensitivity issue in search functionality for accurate results."
  
- `docs`: (making changes or updates to the documentation for better clarity and understanding.)

        eg:- "docs(readme): Updated README file with installation instructions and usage examples."
  
- `style`: ( focus on improving code appearance, such as formatting and fixing missing semicolons, without affecting functionality.)

        eg:- "style(format): Corrected indentation and added missing semicolons for consistent code style."
  
- `refactor`: (modifying the production code, such as renaming variables, to improve its structure and maintainability.)

        eg:- "refactor(variables): Renamed variables for improved code clarity and maintainability."
  
- `test`: (adding tests that were missing and improving existing tests, without changing the production code.)

        eg:- "test(login): Added tests for user login functionality and refactored existing login tests."
  
- `chore`: (updating build tasks and other non-production code aspects, without changing the actual software.)

        eg:- "chore(grunt): Updated Grunt tasks for better task automation and build process efficiency."


## Contributing

Contributions are always welcome!

See [contributing.md](/contributing.md) for ways to get started.

## Maintainer

- If you are a maintainer of the project, you will be the person responsible for reviewing the pull request and merging them to respective branches.

### Pull Request Flow

- The pull request from the developers can only be received on the **dev** branch.

- After reviewing the request you can merge them to the dev-server/production depending upon the type of request

## Quality Tester

- If you are a Quality Tester you can verify the dev-server for testing the upcoming features and the production for features which are already in release.
