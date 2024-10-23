# Welcome to Remix

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```shellscript
bun run dev
```

## Deployment

First, build your app for production:

```sh
bun run build
```

Then run the app in production mode:

```sh
bun start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `bun run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

## Database

This project uses Postgres as the database in a Docker container. See the [database setup instructions](docs/01-database-setup.md) for more information.

Create a `.env` file in the root directory of the project with the following content:

```sh
NODE_ENV=development
DATABASE_URL=postgresql://postgres:password@localhost:5432/remix-master?sslmode=disable
```

The database can be started with the following command:

```sh
bun run db:setup
```

This will start a Postgres container and create a database named `remix-master`.
