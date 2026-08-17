# Zählerfreunde Documentation

The documentation site is built with [Fumadocs](https://fumadocs.dev) and
Next.js. It contains user guides, integration instructions, and an API
reference generated from the OpenAPI specification.

## Development

Use Node.js 22 or newer, then run:

```bash
npm ci
npm run dev
```

The documentation is available at <http://localhost:3000>.

## Content

- Edit hand-written documentation in `content/docs`.
- Add navigation labels and ordering in the nearest `meta.json` file.
- Put public images and other assets in `public`.
- Update `public/api/openapi.yaml`, then run `npm run generate:api` to rebuild
  the API reference in `content/docs/rpcapi`.

## Checks and production build

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run build` regenerates the API reference and creates a static site in
`out`, ready for the existing S3/CloudFront deployment.
