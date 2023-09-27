#!/usr/bin/env -S deno run -A

import { extname, join } from "https://deno.land/std@0.182.0/path/mod.ts";

for (const examples of Deno.readDirSync(".")) {
  if (!examples.isDirectory) continue;
  const katoaDir = join(examples.name, ".katoa");

  for (const pipeline of Deno.readDirSync(katoaDir)) {
    if (extname(pipeline.name) !== ".ts") continue;

    const path = join(katoaDir, pipeline.name);
    console.log(path);

    const child = new Deno.Command("cargo", {
      args: [
        "run",
        "-p",
        "katoa-cli",
        "--",
        "run",
        "--katoa-dockerfile",
        "../docker/bin.Dockerfile",
        path,
      ],
    }).spawn();

    const status = await child.status;
    if (!status.success) {
      console.error(`Failed to run ${path}`);
      Deno.exit(1);
    }
  }
}
