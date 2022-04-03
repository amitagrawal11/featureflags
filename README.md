<h1 align="center">FEATURE FLAG MANAGEMENT TOOL</h1>

<div align="center">Auto formatted with Prettier, tested with Cypress 🎗</div>

<h3 align="center">
  <a href="#">Visit the live app</a> |
  <a href="#">View client</a> |
  <a href="#">View API</a>
</h3>

## Features

- Proven, scalable, and easy to understand project structure
- Written in modern React, only functional components with hooks
- A variety of custom light-weight UI components such as datepicker, modal, various form elements etc
- Simple local React state management, without redux, mobx, or similar
- Custom webpack setup, without create-react-app or similar
- Client written in Babel powered JavaScript
- API written in TypeScript and using TypeORM

## Setting up development environment 🛠

- Install [MySQL](https://dev.mysql.com/) if you don't have it already and create a database named `xflags`.
- `git clone https://github.com/softareo/xflags.git`
- Create an empty `.env` file in `/server`, copy `/server/.env.example` contents into it, and fill in your database username and password.
- `npm run install-dependencies`
- `cd server && npm start`
- `cd client && npm start` in another terminal tab
- App should now be running on `http://localhost:8080/`

## Running cypress end-to-end tests 🚥 (TBD)

- Set up development environment
- Create a database named `xflags_test` and start the api with `cd server && npm run start:test`
- `cd client && npm run test:cypress`

## What's missing?

There are features missing from this showcase product which should exist in a real product:

### Migrations 🗄

We're currently using TypeORM's `synchronize` feature which auto creates the database schema on every application launch. It's fine to do this in a showcase product or during early development while the product is not used by anyone, but before going live with a real product, we should [introduce migrations](https://github.com/typeorm/typeorm/blob/master/docs/migrations.md).

### Proper authentication system 🔐

We currently auto create an auth token and seed a project with issues and users for anyone who visits the API without valid credentials. In a real product we'd want to implement a proper [email and password authentication system](https://www.google.com/search?q=email+and+password+authentication+node+js&oq=email+and+password+authentication+node+js).

### Accessibility ♿

Not all components have properly defined [aria attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), visual focus indicators etc. Most early stage companies tend to ignore this aspect of their product but in many cases they shouldn't, especially once their userbase starts growing.

### Unit/Integration tests 🧪

Both Client and API are currently tested through [end-to-end Cypress tests](https://github.com/softareo/xflags_clone/tree/master/client/cypress/integration). That's good enough for a relatively simple application such as this, even if it was a real product. However, as the app grows in complexity, it might be wise to start writing additional unit/integration tests.

## Contributing

I will not be accepting PR's on this repository. Feel free to fork and maintain your own version.

## License

[MIT](https://opensource.org/licenses/MIT)

<hr>

<h3>
  <a href="https://xflags.softwareo.com/">Visit the live app</a> |
  <a href="https://github.com/softareo/xflags_clone/tree/master/client">View client</a> |
  <a href="https://github.com/softareo/xflags_clone/tree/master/server">View API</a>
</h3>