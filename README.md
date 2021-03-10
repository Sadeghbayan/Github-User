## Github user fetching

A simple Vue.js application for fetching GitHub user data.

- [Solution for the demo](#solution-for-the-demo)
  - [Bonus](#bonus)
  - [Additional info](#additional-info)
  - [General guidelines](#general-guidelines)
- [Build Setup](#build-setup)
- [Decisions made](#decisions-made)
- [Wrap-up](#wrap-up)

## Instructions for the demo

- I decided to build the project with Vue and Typescript.
- I used Vue CLI to set up the project and built on the structure provided by it
- The workflow should contain 3 steps:
  1. list of top three repositories from predefined user.
  2. Simple form that collects user data - fullname - email - github user - terms (all fields are required).
  3. Listing user avatar + some informations and list of user repos which can be limited by number
  4. Showing a user repository after selecting it
- Each page should have "back" and "next" button.
- Next button should be disabled if input on the current step is invalid.
- Form should handle errors and basic validations.
- Available views: - / - Home: root view with top three repositoris - /:user_name/:repo_name - display single repository for user - /request-form - search form to query for github user -/github-user view with user information and list of repositories - /404
- I decided to create simple store(no Vuex) to handle the state of the application because this will make it really easy to navigate through the application without losing the data.
- Does not allow direct access of pages from browsers without required information (handled in router file)
- I created a hook for Api calls and reused it for other hooks to collect needed data.
- I used native `fetch()` to consume the Github API.
- There is utils folder in root directory which contains some JS functions around reusable and available through all the application.
- `Source Sans Pro` font is using in the project.
- In order to use the `mixins`, and `variables` available on the Vue files I imported them in vue.config.js
- I used `BEM` naming convention and fontawsome icons.

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
