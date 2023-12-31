import { Job, Pipeline } from "https://deno.land/x/katoa/mod.ts";
const muslJob = new Job({
  name: "Build musl",
  image: "rust:latest",
  steps: [
    "apt-get update && apt-get install -y musl-tools protobuf-compiler",
    "rustup target add x86_64-unknown-linux-musl",
    "cargo build -p katoa-cli --target x86_64-unknown-linux-musl",
  ],
});

const gnuJob = new Job({
  name: "Build gnu",
  image: "rust:latest",
  steps: [
    "apt-get update && apt-get install -y protobuf-compiler",
    "cargo build -p katoa-cli",
  ],
});

export default new Pipeline([muslJob, gnuJob]);
