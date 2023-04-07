# Next.js Fullstack Template

This is a template repository that includes my personal full-stack web development tech stack used for building side projects quickly. It consists of Next.js, Prisma for interacting with a database, Next Auth for authentication, Zod for server request validation, Formik for handling forms in react, and Yup for client request validation and Material UI for a quick and easy component library.

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/rileygrotenhuis/next-fullstack-template.git
   ```

2. Install dependencies

   ```bash
   cd next-fullstack-template
   npm install
   ```

3. Copy the `.env.example` file as `.env.local` and `.env` then update the given variables

   ```bash
   cp .env.example .env.local
   cp .env.example .env
   ```

4. Run migrations

   ```bas
   npm run prisma:migrate
   ```

5. Start the development server

   ```
   npm run dev
   ```

6. Your application will now begin running at http://localhost:3000

## Usage

### API Routing and Controllers

Instead of using conditionals to run the different API request methods in the handler method of an API routing file, this template maps a method created in a corresponding controller method to each of the different API request methods. Here is an example of that binding:

```js
const routeMapping = {
   'GET': exampleController.list
   'POST': exampleController.create,
   'PUT': routingUtil.restrictRequestMethod,
   'DELETE': routingUtil.restrictRequestMethod
};
```

You may notice the `routingUtil.restrictRequestMethod` binding, that is a utility function that simply restricts that API request method so it cannot be called by anyone.

> See an example of a controller at `src/server/controllers/exampleController.js`

> See an example of this API route to controller method binding at `src/pages/api/example/index.js`

### Validating API Requests

To validate the incoming payload for a given API request, this template uses Zod to validate the request body and parse out the necessary parameters.

> See an example of validating an API request at `src/client/validators/exampleValidator.js`

### Working with a Database

This template uses Prisma and Prisma Client to interact with a database of your choosing.

If you make modifications to the `prisma/schema.prisma` file and need to migrate these changes, run the following:

```bash
npm run prisma:migrate
```

### Interacting with a Database

For each Prisma model you have in your Prisma Schema file, this template recomends that you create a model file for it in the `src/server/models` directory. This file is where you'll keep all of your database operations that you need to perform on that given Prisma Model.

> See an example of one of these model files at `src/server/models/exampleModel.js`

### Handling API Requests

For each API call that you need to make from your application, this template recomends that you create an API handler file for it in the `src/client/handlers` directory. This file is where you'll keep all of your utility functions that make calls to the API.

> See an example of one of these handler files at `src/client/handlers/exampleHandler.js`

### Validating Form Submissions

For form creation and form validation, this template uses the Formik and Yup libraries.

> See an example of building a form using Formik at `src/client/components/CreateExampleForm.js`

For each form that you build using Formik, this template reccomends that you create a validators file for it in the `src/client/validators` directory. This file is where you'll keep all of your Yup validation schemas for form submissions.

> See an example of one of these validator files at `src/client/validators/exampleValidator.js`

### Working with Material UI

This uses Material UI for a quick and easy component library to use for your projects. If you wish to make changes to the general theme that Material UI is using, you can edit the config at `/src/config/theme.js`.

### Linting and Prettier

We use ESLint and Prettier for linting and code formatting. Here is a list of commands that you may find helpful:

```bash
npm run lint             # runs ESLint linter
npm run lint:prettier    # runs Prettier linter
npm run lint:fix         # auto formats code
```

## Contributing

All contributions, big or small, are welcome and I appreciate any effort to improve this repository!

View our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

[MIT License](LICENSE.txt)
