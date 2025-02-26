# Nodejs + Nestjs + Express

This boilerplate is designed to create applications with **NestJS**, a framework for building server-side applications using TypeScript. It uses **Express** by default as the HTTP engine, but can be easily swapped out for **Fastify** or others.

## Requirements

- [Node.js](https://nodejs.org/) v14 or higher.
- [npm](https://www.npmjs.com/) (Node.js package manager).

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/andradaalucas/nodejs-nestjs-express.git
   cd nodejs-nestjs-express
   ```

1. **Instala las dependencias:**

   ```bash
   npm install
   ```

## Available Scripts

Start the server in production

Run the following command to start the server after the project has been compiled:

```bash
npm run start
```

Compile the project

If you want to compile the TypeScript project to JavaScript, use the following command:

```bash
npm run build
```

Development mode (with continuous compilation)

If you want to run the application in development mode and enable automatic compilation when changes are made to the files, use:

```bash
npm run dev
```

This command will run the TypeScript compiler in “watch” mode to observe changes in the files and automatically recompile.