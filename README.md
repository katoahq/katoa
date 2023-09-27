# Katoa

Katoa is a community fork of Cidada, a tool created by Fig which was sunset in
late 2023 following acquisition by AWS. This fork and the underlying software
are both very young, bugs and transitional issues are to be expected.

> **Katoa**: Write CI/CD pipelines in TypeScript, test them locally

## Quickstart

Test a pipeline on your local device in < 2 minutes

```bash
# Install Katoa
npm install -g @katoahq/katoa

# Set up Katoa in a project
cd path/to/my/project
katoa init

# Test your pipeline locally
katoa run <my-pipeline>
```

## Example

```typescript
import { Job, Pipeline } from "https://deno.land/x/katoa/mod.ts";

const job = new Job({
  name: "My First Job",
  image: "ubuntu:22.04",
  steps: [
    {
      name: "Run bash",
      run: "echo hello from bash!",
    },
    {
      name: "Run deno/typescript",
      run: () => {
        console.log("Hello from deno typescript");
      },
    },
  ],
});

export default new Pipeline([job]);
```

## Terminology

- **Pipeline**: Pipelines are TypeScript files like `build.ts`, `deploy.ts`, or
  `run_tests.ts`. They are checked into your repository and run when triggered
  by an event in your repository, or when triggered manually, or at a defined
  schedule. A pipeline takes one parameter: an array of jobs.
- **Jobs**: A job is a lightweight container that executes code. It takes one
  parameter: an array of steps.
- **Steps**: A step is either a shell script or Deno/TypeScript script that
  executes in its parent job’s container

## 3rd party modules (PROBABLY NOT WORKING)

Check out [katoahq/modules](https://github.com/katoahq/modules)

## Support

👉 **Docs**: [docs](katoahq.github.io/docs/)

👉 **Typescript API**: [deno.land/x/katoa](https://deno.land/x/katoa/mod.ts)

👉 **Discord**: [Discord](https://discord.gg/7qNBeGmB5A)
