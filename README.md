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
