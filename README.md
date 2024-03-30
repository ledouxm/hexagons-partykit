pnpm monorepo containing
- packages/backend, a simple node app using vite-node and tsup
- packages/frontend, the output of pnpm create vite@latest

Both packages extends /tsconfig.json

You can execute scripts in a specific package using `pnpm backend|frontend script_name`
