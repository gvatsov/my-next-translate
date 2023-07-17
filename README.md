https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/
https://www.npmjs.com/package/@cloudflare/next-on-pages

DEPLOY
normal
`yarn dev`

cf dev
1 cmd: `npx @cloudflare/next-on-pages --watch`
2 cmd: `npx wrangler pages dev .vercel/output/static --compatibility-flag=nodejs_compat`

REQUIRED VERSIONS
not working with next@13.4.10 -> try other, next@13.4.1 is fine
use `npm i -g wrangler@3.2.0` (v2 not working for `npx wrangler pages dev .vercel/output/static --compatibility-flag=nodejs_compat`)

CF ENV
add env: `YARN_ENABLE_IMMUTABLE_INSTALLS` -> `false`

CF DEPLOY:

- `Error: Failed to publish your Function. Got error: Your Functions script is over the 1 MiB size limit (workers.api.error.script_too_large)`
  https://github.com/cloudflare/next-on-pages/issues/47
