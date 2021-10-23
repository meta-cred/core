# MetaCred Monorepo

Packages and apps for MetaCred using yarn v2 workspaces

Stack:

- TypeScript
- [Hasura](https://hasura.io)
- Postgres
- NextJS
- [ChakraUI](https://chakra-ui.com/)
- ESLint
- Prettier
- lint-staged + husky (lint + typecheck on push, format code on commit, etc)
- [tsup](https://tsup.egoist.sh/) (wrapper around esbuild)

### Running locally

1. Install packages: `yarn`
2. Run Creditor app: `yarn creditor dev`
