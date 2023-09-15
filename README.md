

# Next.js 13 + Tailwind CSS + Shadcn + v0 Starter

This project is a starter template for a static website utilizing various modern web development technologies. The main motivation behind this project is to learn and gain hands-on experience with these technologies.

## Technologies Used

- [Next.js 13](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn Components](https://ui.shadcn.com/)
- [v0 AI Components by Vercel](https://v0.dev/) (Alpha)
- [Bun](https://bun.dev/) as the npm installer and builder
- [Vercel](https://vercel.com/) as the deployer

## Installation

To install the dependencies, run:

```bash
bun install
```

## Development

To start the development server, run:

```bash
bun run dev
```

## Install shadcn / v0 AI components

```bash
bunx shadcn-ui@latest add table
bunx v0 add GkNjwEC
```

## Authentication

Actually this project has a mock authentication system. You can login with any username and password in `app/api/data/users.json` file.

## TODO
- [ ] Add a real authentication system with a database or a third-party service
- [ ] Manage sessions with cookies
- [ ] Add a full example of a CRUD app