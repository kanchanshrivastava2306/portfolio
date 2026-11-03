# Kanchan Shrivastava — Portfolio

A responsive React portfolio built with Vite. It uses hash-based pages, so it can be hosted as a static site without server-side routing configuration.

## Run locally

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Create a production build

```bash
npm run build
npm run preview
```

Vite writes the ready-to-host static site to `dist/`. Deploy the contents of that folder to any static hosting provider. For Git-based deployment, use `npm run build` as the build command and `dist` as the output directory. The site uses hash URLs (for example `/#/projects`) so refreshing an inner page works on static hosts.

## Personalize the content

Update the name, biography, skills, project cards, links, and contact details in `src/App.jsx`. Replace `src/assets/kanchan.jpg.jpeg` to change the profile photo. Update the page title and search description in `index.html`.

The contact form opens a prefilled email draft addressed to the public email in `src/App.jsx`. Visitors need a mail application configured in their browser or device to send the message.
