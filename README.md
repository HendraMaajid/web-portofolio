# Hendra Latieful Maajid — Portfolio

Personal portfolio built with Next.js 16, React 19, and Tailwind CSS 4. Includes Indonesian and English content, persistent light/dark preferences, a responsive project gallery, a contact form, and Vercel Web Analytics.

## Local development

Use Node.js 20.9 or later.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For a production build:

```bash
npm run build
npm start
```

The ESLint CLI is available with `npm run lint`; Next.js 16 no longer provides `next lint`.

## Updating content

- `src/data/portfolio.js`: profile, bilingual copy, education, experience, skills, and projects. Career information follows `public/hendralm-resume.pdf`; older personal projects are retained from the original portfolio.
- `public/hendralm-resume.pdf`: downloadable CV.
- `src/app/globals.css`: responsive design and light/dark color tokens.
- `src/app/components/Icon.jsx`: SVG icons inherit text color through `currentColor`.
- `src/app/fonts/`: locally hosted Outfit and Ovo fonts, including their SIL Open Font Licenses. Builds do not fetch Google Fonts.

The contact form retains the existing Web3Forms integration and handles failed requests and timeouts. Delivery still depends on the existing Web3Forms account and its configuration.

## Vercel Analytics

`@vercel/analytics/next` is mounted once in `src/app/layout.js`. Enable **Web Analytics** for the project in the Vercel dashboard, then deploy this source to Vercel. Visit the deployed site to begin collecting page views. Local development does not send production analytics.

See the [Vercel Web Analytics quickstart](https://vercel.com/docs/analytics/quickstart?framework=nextjs).
